import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { RiPhoneLine, RiMapPinLine, RiArrowRightLine } from "react-icons/ri";

export function ContactsSection() {
  const t = useTranslations("contacts");

  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="contacts-heading"
    >
      <div className="max-w-360 mx-auto px-7.5">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <Reveal direction="right">
            <h2
              id="contacts-heading"
              className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[32px] md:text-[40px] lg:text-[46px] mb-6"
            >
              {t("heading")}
            </h2>
            <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.75] mb-10 max-w-lg">
              {t("body")}
            </p>

            <Link
              href="/admissions"
              className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-widest uppercase text-white bg-[#1a1a1a] hover:bg-[#333] px-9 py-4 transition-colors duration-300"
            >
              {t("cta")}
              <RiArrowRightLine size={14} aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="flex flex-col gap-8">

              <div className="flex gap-5 items-start">
                <span className="w-11 h-11 rounded-full bg-[#F7F6F2] flex items-center justify-center shrink-0">
                  <RiPhoneLine size={20} className="text-[#FC9A19]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#999] mb-1.5">
                    {t("phoneLabel")}
                  </p>
                  <a
                    href={`tel:${t("phone").replace(/\s/g, "")}`}
                    className="font-serif font-semibold text-[#1a1a1a] text-[22px] md:text-[26px] hover:text-[#FC9A19] transition-colors duration-200"
                  >
                    {t("phone")}
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <span className="w-11 h-11 rounded-full bg-[#F7F6F2] flex items-center justify-center shrink-0">
                  <RiMapPinLine size={20} className="text-[#FC9A19]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#999] mb-1.5">
                    {t("addressLabel")}
                  </p>
                  <p className="font-semibold text-[#1a1a1a] text-[16px] md:text-[18px]">
                    {t("address")}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Samarkand+Vorsin+1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-[13px] text-[#FC9A19] hover:underline"
                  >
                    {t("mapLabel")}
                    <RiArrowRightLine size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
