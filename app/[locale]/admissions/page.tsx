import { setRequestLocale } from "next-intl/server";
import { AdmissionsPageContent } from "@/components/pages/AdmissionsPageContent";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function AdmissionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <AdmissionsPageContent />
      </div>
      <SlideNav current={13} />
    </>
  );
}
