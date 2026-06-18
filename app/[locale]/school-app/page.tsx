import { setRequestLocale } from "next-intl/server";
import { AppPageContent } from "@/components/pages/AppPageContent";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function SchoolAppPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <AppPageContent />
      </div>
      <SlideNav current={6} />
    </>
  );
}
