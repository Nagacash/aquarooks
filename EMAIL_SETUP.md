# Email Setup for Contact Form

The contact form is configured to send emails to **office@aqua-rooks.com**.

## Current Setup

**IMPORTANT**: Resend's free tier only allows sending test emails to your verified email address (the one you signed up with). 

- **Current recipient**: `sonic13.ch@googlemail.com` (verified email)
- **Target recipient**: `office@aqua-rooks.com` (requires domain verification)

## Setup Instructions

### Option 1: Resend (Recommended)

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your environment variables:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_VERIFIED_EMAIL=sonic13.ch@googlemail.com  # Optional: override verified email
```

4. **For Production - Domain Verification**:
   - Go to [resend.com/domains](https://resend.com/domains)
   - Add and verify your domain `aqua-rooks.com`
   - Add DNS records (SPF, DKIM, DMARC) as instructed
   - Once verified, update the API route to use:
     - `from: "contact@aqua-rooks.com"` or `"noreply@aqua-rooks.com"`
     - `to: "office@aqua-rooks.com"`

5. The form will automatically use Resend to send emails

### Option 2: SendGrid

1. Sign up for [SendGrid](https://sendgrid.com)
2. Get your API key
3. Add to environment variables:

```env
SENDGRID_API_KEY=your_api_key_here
FROM_EMAIL=contact@aqua-rooks.com
```

4. Update the API route to use SendGrid instead of Resend

### Option 3: Nodemailer with SMTP

1. Install nodemailer:
```bash
npm install nodemailer
```

2. Configure SMTP settings in environment variables:
```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password
FROM_EMAIL=contact@aqua-rooks.com
```

3. Update the API route to use Nodemailer

## Current Configuration

- **Recipient Email**: office@aqua-rooks.com
- **Form Fields**: First Name, Last Name, Email, Phone, Message
- **Reply-To**: Set to the user's email address

## Testing

In development mode, the API will log email details to the console. Configure an email service for production use.

