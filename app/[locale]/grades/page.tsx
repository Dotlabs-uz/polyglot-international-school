import { setRequestLocale } from "next-intl/server";
import { GradesPageContent } from "@/components/pages/GradesPageContent";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function GradesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <GradesPageContent />
      </div>
      <SlideNav current={8} />
    </>
  );
}
