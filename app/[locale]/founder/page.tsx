import { setRequestLocale } from "next-intl/server";
import { FounderPageContent } from "@/components/pages/FounderPageContent";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function FounderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <FounderPageContent />
      </div>
      <SlideNav current={12} />
    </>
  );
}
