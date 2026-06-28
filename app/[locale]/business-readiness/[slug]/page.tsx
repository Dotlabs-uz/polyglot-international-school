import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { BusinessReadinessPageContent } from "@/components/pages/BusinessReadinessPageContent";
import { routing } from "@/i18n/routing";

const SLUGS = ["friday-talk", "practical-skills", "culture"] as const;
type Slug = (typeof SLUGS)[number];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, slug }))
  );
}

export default async function BusinessReadinessPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!SLUGS.includes(slug as Slug)) {
    notFound();
  }

  return (
    <div className="min-h-svh flex flex-col pt-20 pb-14">
      <BusinessReadinessPageContent slug={slug as Slug} />
    </div>
  );
}
