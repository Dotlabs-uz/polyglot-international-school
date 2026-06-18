import { setRequestLocale } from "next-intl/server";
import { HealthPageContent } from "@/components/pages/HealthPageContent";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function HealthPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <HealthPageContent />
      </div>
      <SlideNav current={5} />
    </>
  );
}
