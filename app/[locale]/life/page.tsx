import { setRequestLocale } from "next-intl/server";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
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
        <FeaturesSection />
      </div>
      <SlideNav current={11} />
    </>
  );
}
