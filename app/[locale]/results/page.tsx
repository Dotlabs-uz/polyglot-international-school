import { setRequestLocale } from "next-intl/server";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
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
        <CertificatesSection />
      </div>
      <SlideNav current={9} />
    </>
  );
}
