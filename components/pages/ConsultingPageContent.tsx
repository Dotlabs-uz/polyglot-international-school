"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { RiGlobalLine } from "react-icons/ri";

export function ConsultingPageContent() {
  const t = useTranslations("consultingPage");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  const steps = [
    { num: t("step1Num"), title: t("step1Title"), body: t("step1Body") },
    { num: t("step2Num"), title: t("step2Title"), body: t("step2Body") },
    { num: t("step3Num"), title: t("step3Title"), body: t("step3Body") },
    { num: t("step4Num"), title: t("step4Title"), body: t("step4Body") },
    { num: t("step5Num"), title: t("step5Title"), body: t("step5Body") },
  ];

  const regions = [t("r1"), t("r2"), t("r3"), t("r4"), t("r5"), t("r6")];

  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <section className="max-w-360 mx-auto px-7.5 pt-10 pb-14 md:pt-14 md:pb-20">
        <Reveal>
          <span className="inline-block text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest mb-5">
            {t("label")}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[28px] md:text-[42px] lg:text-[54px] max-w-4xl mb-8">
            {t("heading")}
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="text-[#555] text-[16px] md:text-[18px] leading-[1.8] max-w-2xl mb-12">
            {t("intro")}
          </p>
        </Reveal>
        <Reveal delay={0.2} direction="up">
          <div className="relative w-full aspect-16/8 overflow-hidden">
            <Image
              src="/facade-4.jpg"
              alt={t("heading")}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="bg-[#C4911E]">
        <RevealGroup
          className="max-w-360 mx-auto px-7.5 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          stagger={0.1}
        >
          {stats.map((s, i) => (
            <RevealItem key={i}>
              <p className="font-serif font-bold text-white text-[40px] md:text-[52px] leading-none mb-3">
                {s.value}
              </p>
              <p className="text-white/80 text-[13px] leading-snug">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Process */}
      <section className="bg-[#f8f7f4]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <Reveal>
            <span className="inline-block text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest mb-5">
              {t("processLabel")}
            </span>
            <h2 className="font-serif font-semibold text-[#1a1a1a] text-[26px] md:text-[36px] leading-[1.2] mb-14">
              {t("processHeading")}
            </h2>
          </Reveal>

          <div className="relative flex flex-col gap-0">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.08} direction="left">
                <div className="flex gap-8 md:gap-14 py-8 border-t border-[#e0e0e0]">
                  <span className="font-serif font-bold text-[#C4911E] text-[40px] md:text-[52px] leading-none w-16 shrink-0">
                    {step.num}
                  </span>
                  <div className="flex-1 pt-2">
                    <h3 className="font-semibold text-[#1a1a1a] text-[18px] md:text-[20px] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#666] text-[14px] md:text-[15px] leading-[1.8]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-[#e0e0e0]" />
          </div>
        </div>
      </section>

      {/* Partners / Destinations */}
      <section className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
        <Reveal>
          <div className="flex items-center gap-4 mb-5">
            <RiGlobalLine size={28} className="text-[#C4911E]" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C4911E]">
              {t("partnersLabel")}
            </span>
          </div>
          <h2 className="font-serif font-semibold text-[#1a1a1a] text-[26px] md:text-[36px] leading-[1.2] mb-12">
            {t("partnersHeading")}
          </h2>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" stagger={0.08}>
          {regions.map((r, i) => (
            <RevealItem key={i}>
              <div className="border border-[#e8e8e8] p-6 hover:border-[#C4911E] transition-colors">
                <p className="text-[#333] text-[14px] md:text-[15px] leading-snug">{r}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </div>
  );
}
