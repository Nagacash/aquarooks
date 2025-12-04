"use client";

export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aqua-rooks.com";

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AQUA ROOKS",
  alternateName: "AQUA ROOKS",
    url: baseUrl,
    logo: `${baseUrl}/images/logos/logo1.png`,
    description:
      "Premium natural mineral water from Togo, West Africa. High-quality bottled water company producing mineral water in PET bottles and sachets.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Commune Lac 2",
      addressLocality: "Canton d'Aklakou",
      addressRegion: "Lacs au Togo",
      addressCountry: "TG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+228-90-62-80-29",
      contactType: "Customer Service",
      email: "office@aqua-rooks.com",
      areaServed: "TG",
      availableLanguage: ["de", "en", "fr"],
    },
    foundingDate: "2023",
    founders: [
      {
        "@type": "Person",
        name: "Rodrigue Mahouton Guedou",
      },
      {
        "@type": "Person",
        name: "Oksana Fink",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Togo",
    },
    knowsAbout: ["Mineral Water", "Bottled Water", "Water Production", "Water Quality", "Sustainable Water"],
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#organization`,
    name: "AQUA ROOKS S.A.",
    image: `${baseUrl}/images/logos/logo1.png`,
    description: "Premium mineral water production company in Togo",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Commune Lac 2, Canton d'Aklakou",
      addressLocality: "Lacs au Togo",
      addressCountry: "TG",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "6.1375",
        longitude: "1.2123",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.1375",
      longitude: "1.2123",
    },
    telephone: "+228-90-62-80-29",
    email: "office@aqua-rooks.com",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AQUA ROOKS Mineral Water",
    description:
      "Premium natural mineral water from underground sources in Togo, filtered through sand, clay, and limestone",
    brand: {
      "@type": "Brand",
      name: "AQUA ROOKS",
    },
    category: "Beverages > Water > Mineral Water",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "XOF",
      areaServed: "TG",
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}


