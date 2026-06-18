import { setRequestLocale } from "next-intl/server";
import { LifePageContent } from "@/components/pages/LifePageContent";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function LifePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <LifePageContent />
      </div>
      <SlideNav current={11} />
    </>
  );
}
