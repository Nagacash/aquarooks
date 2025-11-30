import { NextRequest, NextResponse } from "next/server";

// Resend API Key - use environment variable or fallback to provided key
const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_8NsY8RnK_Ka8f7Lf1UqY9DFckwvmheNu6";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email configuration
    // NOTE: Resend free tier only allows sending to verified email addresses
    // For production, verify your domain at resend.com/domains and use office@aqua-rooks.com
    // For now, sending to verified email address
    const recipientEmail = process.env.RESEND_VERIFIED_EMAIL || "sonic13.ch@googlemail.com";
    const subject = `New Contact Form Submission from ${firstName} ${lastName}`;
    
    // Format the email body
    const emailBody = `
New contact form submission from AQUA ROOKS website:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
This email was sent from the AQUA ROOKS contact form.
Reply directly to this email to respond to ${email}
    `.trim();

    // Escape HTML to prevent XSS
    const escapeHtml = (text: string) => {
      const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    };

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // HTML version of the email
    const emailBodyHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px; margin-bottom: 20px;">
          New Contact Form Submission - AQUA ROOKS
        </h2>
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 8px 0;"><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #0ea5e9; text-decoration: none;">${safeEmail}</a></p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${safePhone}" style="color: #0ea5e9; text-decoration: none;">${safePhone}</a></p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-left: 4px solid #0ea5e9; border-radius: 5px;">
          <strong style="color: #1e293b;">Message:</strong>
          <p style="white-space: pre-wrap; margin-top: 10px; color: #475569; line-height: 1.6;">${safeMessage}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 5px;">
          <p style="margin: 0; font-size: 12px; color: #92400e;">
            <strong>Note:</strong> This email was forwarded from the AQUA ROOKS contact form.<br>
            The original recipient should be: <strong>office@aqua-rooks.com</strong><br>
            Reply directly to this email to respond to ${safeEmail}
          </p>
        </div>
        <p style="margin-top: 30px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 15px;">
          This email was sent from the AQUA ROOKS contact form.
        </p>
      </div>
    `;

    // Send email using Resend API
    try {
      console.log("Attempting to send email via Resend...");
      console.log("Recipient:", recipientEmail);
      console.log("Subject:", subject);
      
      const emailPayload = {
        from: "onboarding@resend.dev", // Using Resend's default domain for now
        // Once domain is verified, change to: "contact@aqua-rooks.com" or "noreply@aqua-rooks.com"
        to: recipientEmail,
        subject: subject,
        html: emailBodyHTML,
        text: emailBody,
        reply_to: email, // This allows replying directly to the form submitter
      };

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      console.log("Resend API response status:", response.status, response.statusText);

      if (!response.ok) {
        let errorResult;
        try {
          errorResult = await response.json();
        } catch (e) {
          const textResponse = await response.text();
          errorResult = { message: `HTTP ${response.status}: ${textResponse}` };
        }
        
        console.error("Resend API error:", {
          status: response.status,
          statusText: response.statusText,
          error: errorResult,
        });
        
        throw new Error(
          errorResult.message || 
          errorResult.error?.message || 
          `Resend API error: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();
      console.log("Email sent successfully:", result);

      return NextResponse.json(
        { 
          success: true, 
          message: "Your message has been sent successfully!",
        },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error("Error sending email via Resend:", {
        message: emailError.message,
        stack: emailError.stack,
        name: emailError.name,
        cause: emailError.cause,
      });
      
      // Return detailed error in development, generic in production
      const errorMessage = process.env.NODE_ENV === "development" 
        ? `Email sending failed: ${emailError.message}` 
        : "Failed to send message. Please try again later.";
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: process.env.NODE_ENV === "development" ? {
            message: emailError.message,
            stack: emailError.stack,
          } : undefined,
        },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { 
        error: "Failed to send message. Please try again later.",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

