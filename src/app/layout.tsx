import type { Metadata, Viewport } from "next";
import { Montserrat, Rubik } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const SITE_URL = "https://elitegroundlawnandlandscaping.com";

const montserrat = Montserrat({
  variable: "--font-montserrat-var",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f26222",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Elite Grounds Lawn & Landscaping | Little Rock, AR",
    template: "%s | Elite Grounds Lawn & Landscaping",
  },
  description:
    "Little Rock's trusted lawn & landscape experts. Lawn mowing, mulch installation, landscaping rocks, tree services, and 15-yard dumpster rental. Family-owned, 20 years of experience.",
  applicationName: "Elite Grounds Lawn & Landscaping",
  generator: "Next.js",
  keywords: [
    "lawn care Little Rock",
    "landscaping Little Rock AR",
    "lawn mowing Little Rock",
    "mulch installation Arkansas",
    "tree services Little Rock",
    "landscaping rocks",
    "dumpster rental Little Rock",
    "sod installation",
    "yard clean up Little Rock",
  ],
  authors: [{ name: "Elite Grounds Lawn & Landscaping" }],
  creator: "Elite Grounds Lawn & Landscaping",
  publisher: "Elite Grounds Lawn & Landscaping",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Elite Grounds Lawn & Landscaping",
    title: "Elite Grounds Lawn & Landscaping | Little Rock, AR",
    description:
      "From overgrown to outstanding — Elite Grounds transforms yards across Little Rock and surrounding areas with expert lawn care, mulch, rocks, tree services and more.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Grounds Lawn & Landscaping | Little Rock, AR",
    description:
      "Little Rock's trusted lawn & landscape experts. Family-owned. Free quotes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Elite Grounds Lawn & Landscaping",
  url: SITE_URL,
  telephone: "+1-501-503-8577",
  email: "elitegroundslawn@gmail.com",
  image: `${SITE_URL}/icon.png`,
  logo: `${SITE_URL}/icon.png`,
  description:
    "Family-owned lawn care and landscaping company serving Little Rock, AR and surrounding areas. Lawn mowing, mulch installation, landscaping rocks, tree services, and dumpster rental.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Little Rock",
    addressRegion: "AR",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Little Rock, AR" },
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 34.7465,
        longitude: -92.2896,
      },
      geoRadius: 40234,
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "70",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lawn & Landscape Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Mowing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mulch Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscaping Rocks" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "15-Yard Dumpster Rental" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${rubik.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <NavBar />
        <div className="overflow-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
