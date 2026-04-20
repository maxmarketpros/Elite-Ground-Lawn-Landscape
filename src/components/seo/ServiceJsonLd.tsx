interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  serviceType?: string;
}

const SITE_URL = "https://elitegroundlawnandlandscaping.com";

export default function ServiceJsonLd({
  name,
  description,
  url,
  image,
  serviceType,
}: ServiceJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    image: image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : undefined,
    serviceType: serviceType ?? name,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: "Little Rock, AR" },
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
