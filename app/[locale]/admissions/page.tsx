import { setRequestLocale } from "next-intl/server";
import { EnrollmentSection } from "@/components/sections/EnrollmentSection";
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
        <EnrollmentSection />
      </div>
      <SlideNav current={13} />
    </>
  );
}
