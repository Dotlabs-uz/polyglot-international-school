import { setRequestLocale } from "next-intl/server";
import { ConsultingSection } from "@/components/sections/ConsultingSection";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function ConsultingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <ConsultingSection />
      </div>
      <SlideNav current={10} />
    </>
  );
}
