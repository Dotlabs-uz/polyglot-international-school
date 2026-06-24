"use client";

import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { AmoCrmForm } from "@/components/forms/AmoCrmForm";
import { RiPhoneLine } from "react-icons/ri";

export function ApplyPageContent() {
  const t = useTranslations("applyPage");
  const locale = useLocale();

  return (
    <div className="flex-1 bg-white">
      <section className="max-w-360 mx-auto px-7.5 pt-10 pb-14 md:pt-14 md:pb-20">
        <Reveal>
          <span className="inline-block text-[#FC9A19] text-[11px] font-semibold uppercase tracking-widest mb-5">
            {t("label")}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[28px] md:text-[42px] lg:text-[52px] max-w-3xl mb-6">
            {t("heading")}
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="text-[#555] text-[16px] md:text-[18px] leading-[1.8] max-w-xl">
            {t("intro")}
          </p>
        </Reveal>
      </section>

      <section className="bg-[#f8f7f4]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <Reveal direction="up">
            <div className="bg-white p-6 md:p-10 max-w-2xl mx-auto">
              <AmoCrmForm formId="1725042" hash="7d50db6eef500612d3f2c7e6bb64b14a" locale={locale} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center justify-center gap-3 mt-10 text-[#555]">
              <RiPhoneLine size={18} className="text-[#FC9A19]" />
              <span className="text-[14px]">{t("phoneLabel")}:</span>
              <a
                href={`tel:${t("phone").replace(/\s/g, "")}`}
                className="text-[#1a1a1a] font-semibold text-[15px] hover:text-[#FC9A19] transition-colors"
              >
                {t("phone")}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
