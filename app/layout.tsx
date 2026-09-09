import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { IMAGES, SITE } from "@/lib/constants";
import FloatingButtons from "@/components/FloatingButtons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Modern Dental Clinic in Mathikere, Bengaluru`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "dentist in Mathikere",
    "dentist near HMT Layout",
    "dental clinic Bengaluru",
    "teeth whitening Bengaluru",
    "dental implants Bengaluru",
    "smile makeover",
    "kids dentist Bengaluru",
    "Aura Dental Studio",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} | Modern Dentistry with Compassionate Care`,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: IMAGES.hero.src,
        width: 1200,
        height: 630,
        alt: `${SITE.name} clinic`,
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Modern Dentistry with Compassionate Care`,
    description: SITE.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: SITE.name,
  image: new URL(IMAGES.hero.src, SITE.url).toString(),
  "@id": SITE.url,
  url: SITE.url,
  telephone: SITE.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "#905, 1st Floor, 6th Cross, 1st Stage, 1st Phase, Gokul, HMT Layout, Mathikere",
    addressLocality: "Bengaluru",
    addressRegion: "KA",
    postalCode: "560038",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "16:00",
      closes: "20:00",
    },
  ],
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
