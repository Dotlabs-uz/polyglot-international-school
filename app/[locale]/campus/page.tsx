import { setRequestLocale } from "next-intl/server";
import { CampusSection } from "@/components/sections/CampusSection";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function CampusPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <CampusSection />
      </div>
      <SlideNav current={4} />
    </>
  );
}
