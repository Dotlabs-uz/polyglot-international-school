import { setRequestLocale } from "next-intl/server";
import { ApplyPageContent } from "@/components/pages/ApplyPageContent";

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-svh flex flex-col pt-20">
      <ApplyPageContent />
    </div>
  );
}
