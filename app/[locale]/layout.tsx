import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MenuProvider } from "@/components/layout/MenuContext";
import { routing } from "@/i18n/routing";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const SITE_URL = "https://www.pischool.uz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Polyglot International School — Частная школа в Самарканде",
    template: "%s | Polyglot International School",
  },
  description:
    "Polyglot International School — премиальная частная школа в Самарканде, Узбекистан. Международные сертификаты IELTS, SAT, HSK без репетиторов. Кампус 12 000 м², сейсмостойкое здание, лаборатории, VR-класс, питание по меню нутрициологов. Набор на 2026–2027 учебный год.",
  keywords: [
    "частная школа Самарканд",
    "Polyglot International School",
    "международная школа Узбекистан",
    "IELTS подготовка Самарканд",
    "SAT подготовка Узбекистан",
    "HSK китайский язык",
    "частная школа Самарканд цены",
    "премиальная школа Самарканд",
    "cambridge school uzbekistan",
    "international school samarkand",
    "premium school samarkand",
    "private school uzbekistan",
  ],
  authors: [{ name: "Polyglot International School" }],
  creator: "Polyglot International School",
  publisher: "Polyglot International School",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US", "uz_UZ"],
    url: SITE_URL,
    siteName: "Polyglot International School",
    title: "Polyglot International School — Частная школа в Самарканде",
    description:
      "Премиальная частная школа в Самарканде. Международные сертификаты без репетиторов. Кампус 12 000 м². Набор на 2026–2027 учебный год.",
    images: [
      {
        url: "/logo_header.png",
        width: 1200,
        height: 630,
        alt: "Polyglot International School — кампус в Самарканде",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polyglot International School — Частная школа в Самарканде",
    description:
      "Премиальная частная школа в Самарканде. Международные сертификаты без репетиторов.",
    images: ["/logo_header.png"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "ru": `${SITE_URL}/ru`,
      "en": `${SITE_URL}/en`,
      "uz": `${SITE_URL}/uz`,
      "x-default": SITE_URL,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#142444",
    "msapplication-TileColor": "#142444",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Polyglot International School",
  alternateName: "Polyglot School",
  description:
    "Премиальная частная школа в Самарканде, Узбекистан. Международные сертификаты IELTS, SAT, HSK.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo_header.png`,
  image: `${SITE_URL}/hero.png`,
  telephone: "+998904703000",
  email: "info@polyglot.uz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Ворсин, 1",
    addressLocality: "Самарканд",
    addressCountry: "UZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "39.6542",
    longitude: "66.9597",
  },
  sameAs: [],
  priceRange: "$$",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Шохрух Кудратов",
  },
  educationalProgram: [
    {
      "@type": "EducationalOccupationalProgram",
      name: "IELTS Preparation",
      description: "Прямая подготовка к IELTS с целевым баллом 7.0+",
    },
    {
      "@type": "EducationalOccupationalProgram",
      name: "SAT Preparation",
      description: "Прямая подготовка к SAT с целевым баллом 1400+",
    },
    {
      "@type": "EducationalOccupationalProgram",
      name: "HSK Chinese Language",
      description: "Подготовка к HSK экзаменам по китайскому языку",
    },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Лаборатории", value: true },
    { "@type": "LocationFeatureSpecification", name: "VR-класс", value: true },
    { "@type": "LocationFeatureSpecification", name: "Стадион", value: true },
    { "@type": "LocationFeatureSpecification", name: "Спортзал", value: true },
    { "@type": "LocationFeatureSpecification", name: "Видеонаблюдение 24/7", value: true },
    { "@type": "LocationFeatureSpecification", name: "IQAir мониторинг воздуха", value: true },
    { "@type": "LocationFeatureSpecification", name: "Индивидуальный трансфер", value: true },
  ],
  areaServed: {
    "@type": "City",
    name: "Самарканд",
    containedInPlace: {
      "@type": "Country",
      name: "Узбекистан",
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased">
        <NextIntlClientProvider messages={messages}>
          <MenuProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </MenuProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
