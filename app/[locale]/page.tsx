import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { SchoolChoiceSection } from "@/components/sections/SchoolChoiceSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CampusSection } from "@/components/sections/CampusSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { EnrollmentSection } from "@/components/sections/EnrollmentSection";

const SITE_URL = "https://polyglot.uz";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const metadataByLocale: Record<string, Metadata> = {
    ru: {
      title: "Polyglot International School — Частная школа в Самарканде",
      description:
        "Премиальная частная школа в Самарканде, Узбекистан. Международные сертификаты IELTS (7.0+), SAT (1400+), HSK без репетиторов. Кампус 12 000 м² с лабораториями, VR-классом и стадионом. Набор на 2026–2027 учебный год.",
      openGraph: {
        title: "Polyglot International School — Частная школа в Самарканде",
        description:
          "Премиальная частная школа в Самарканде. Международные сертификаты без репетиторов. Кампус 12 000 м².",
        locale: "ru_RU",
        url: `${SITE_URL}/ru`,
      },
      alternates: {
        canonical: `${SITE_URL}/ru`,
        languages: {
          "ru": `${SITE_URL}/ru`,
          "en": `${SITE_URL}/en`,
          "uz": `${SITE_URL}/uz`,
          "x-default": SITE_URL,
        },
      },
    },
    en: {
      title: "Polyglot International School — Private School in Samarkand",
      description:
        "Premium private school in Samarkand, Uzbekistan. International certificates IELTS (7.0+), SAT (1400+), HSK without tutors. 12,000 m² campus with labs, VR-classroom and stadium. Enrolment for 2026–2027.",
      openGraph: {
        title: "Polyglot International School — Private School in Samarkand",
        description:
          "Premium private school in Samarkand. International certificates without tutors. 12,000 m² campus.",
        locale: "en_US",
        url: `${SITE_URL}/en`,
      },
      alternates: {
        canonical: `${SITE_URL}/en`,
        languages: {
          "ru": `${SITE_URL}/ru`,
          "en": `${SITE_URL}/en`,
          "uz": `${SITE_URL}/uz`,
          "x-default": SITE_URL,
        },
      },
    },
    uz: {
      title: "Polyglot International School — Samarqanddagi xususiy maktab",
      description:
        "Samarqanddagi premium xususiy maktab. IELTS (7.0+), SAT (1400+), HSK xalqaro sertifikatlari repetitorsiz. 12 000 m² kampus, laboratoriyalar, VR-sinf va stadion. 2026–2027 o'quv yiliga qabul.",
      openGraph: {
        title: "Polyglot International School — Samarqanddagi xususiy maktab",
        description:
          "Samarqanddagi premium xususiy maktab. Xalqaro sertifikatlar repetitorsiz. 12 000 m² kampus.",
        locale: "uz_UZ",
        url: `${SITE_URL}/uz`,
      },
      alternates: {
        canonical: `${SITE_URL}/uz`,
        languages: {
          "ru": `${SITE_URL}/ru`,
          "en": `${SITE_URL}/en`,
          "uz": `${SITE_URL}/uz`,
          "x-default": SITE_URL,
        },
      },
    },
  };

  return metadataByLocale[locale] ?? metadataByLocale.ru;
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Блок 1: Завязка и позиционирование */}
      <HeroSection />
      <CertificatesSection />
      <SchoolChoiceSection />
      <FeaturesSection />
      <CampusSection />
      <FounderSection />
      <EnrollmentSection />
    </>
  );
}
