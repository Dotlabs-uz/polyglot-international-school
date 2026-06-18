"use client";

import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { RiPhoneLine, RiMailLine, RiMapPinLine, RiTimeLine } from "react-icons/ri";
import { Link } from "@/i18n/navigation";

export function ContactsPageContent() {
  const t = useTranslations("contactsPage");

  const hours = [t("hours1"), t("hours2"), t("hours3")];

  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <section className="max-w-360 mx-auto px-7.5 pt-10 pb-14 md:pt-14 md:pb-20">
        <Reveal>
          <span className="inline-block text-[#FC9A19] text-[11px] font-semibold uppercase tracking-widest mb-5">
            {t("label")}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[28px] md:text-[42px] lg:text-[54px] max-w-4xl mb-8">
            {t("heading")}
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="text-[#555] text-[16px] md:text-[18px] leading-[1.8] max-w-2xl">
            {t("intro")}
          </p>
        </Reveal>
      </section>

      {/* Contact cards + visit CTA */}
      <section className="bg-[#f8f7f4]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left: visit */}
            <Reveal direction="left">
              <div className="bg-[#1a1a1a] p-10 h-full flex flex-col">
                <span className="inline-block text-[#FC9A19] text-[11px] font-semibold uppercase tracking-widest mb-5">
                  {t("visitLabel")}
                </span>
                <p className="text-[#aaa] text-[15px] leading-[1.8] flex-1 mb-10">
                  {t("visitBody")}
                </p>
                <a
                  href={`tel:${t("phone").replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center bg-[#FC9A19] text-white font-semibold text-[13px] uppercase tracking-widest px-10 py-4 hover:bg-[#e8890a] transition-colors w-full text-center"
                >
                  {t("cta")}
                </a>
              </div>
            </Reveal>

            {/* Right: contact details */}
            <Reveal direction="right" delay={0.1}>
              <div className="flex flex-col gap-6">
                {/* Phone */}
                <div className="bg-white p-7 flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#FC9A19]/10 shrink-0">
                    <RiPhoneLine size={22} className="text-[#FC9A19]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-widest text-[#888] mb-1">
                      {t("phoneLabel")}
                    </p>
                    <a
                      href={`tel:${t("phone").replace(/\s/g, "")}`}
                      className="text-[#1a1a1a] font-semibold text-[18px] hover:text-[#FC9A19] transition-colors"
                    >
                      {t("phone")}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-7 flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#FC9A19]/10 shrink-0">
                    <RiMailLine size={22} className="text-[#FC9A19]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-widest text-[#888] mb-1">
                      {t("emailLabel")}
                    </p>
                    <a
                      href={`mailto:${t("email")}`}
                      className="text-[#1a1a1a] font-semibold text-[16px] hover:text-[#FC9A19] transition-colors"
                    >
                      {t("email")}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white p-7 flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#FC9A19]/10 shrink-0">
                    <RiMapPinLine size={22} className="text-[#FC9A19]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-widest text-[#888] mb-1">
                      {t("addressLabel")}
                    </p>
                    <p className="text-[#1a1a1a] font-medium text-[15px]">{t("address")}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hours */}
          <Reveal>
            <div className="bg-white p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <RiTimeLine size={22} className="text-[#FC9A19]" />
                <span className="text-[12px] font-semibold uppercase tracking-widest text-[#888]">
                  {t("hoursLabel")}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                {hours.map((h, i) => (
                  <div key={i} className="flex-1 border-l-2 border-[#e0e0e0] pl-5">
                    <p className="text-[#333] text-[15px]">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map link */}
      <section className="max-w-360 mx-auto px-7.5 py-12">
        <Reveal>
          <a
            href={t("mapUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#FC9A19] font-semibold text-[14px] uppercase tracking-widest hover:underline"
          >
            <RiMapPinLine size={18} />
            {t("mapLabel")}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
