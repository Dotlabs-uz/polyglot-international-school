import { setRequestLocale } from "next-intl/server";
import { ChallengesPageContent } from "@/components/pages/ChallengesPageContent";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function ChallengesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <ChallengesPageContent />
      </div>
      <SlideNav current={3} />
    </>
  );
}
