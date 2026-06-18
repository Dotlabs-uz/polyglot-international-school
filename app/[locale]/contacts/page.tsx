import { setRequestLocale } from "next-intl/server";
import { ContactsPageContent } from "@/components/pages/ContactsPageContent";
import { SlideNav } from "@/components/layout/SlideNav";

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-svh flex flex-col pt-20 pb-14">
        <ContactsPageContent />
      </div>
      <SlideNav current={14} />
    </>
  );
}
