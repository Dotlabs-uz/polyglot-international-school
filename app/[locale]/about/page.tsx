import { setRequestLocale } from "next-intl/server";
import { SchoolChoiceSection } from "@/components/sections/SchoolChoiceSection";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <SchoolChoiceSection />
      </div>
      <SlideNav current={2} />
    </>
  );
}
