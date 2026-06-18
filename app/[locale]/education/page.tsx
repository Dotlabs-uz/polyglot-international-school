import { setRequestLocale } from "next-intl/server";
import { DayStructureSection } from "@/components/sections/DayStructureSection";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function EducationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <DayStructureSection />
      </div>
      <SlideNav current={7} />
    </>
  );
}
