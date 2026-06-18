import { setRequestLocale } from "next-intl/server";
import { ResultsPageContent } from "@/components/pages/ResultsPageContent";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <ResultsPageContent />
      </div>
      <SlideNav current={9} />
    </>
  );
}
