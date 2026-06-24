"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ChallengesPageContent() {
  const t = useTranslations("challengesPage");

  const problems = [
    { label: t("p1Label"), title: t("p1Title"), body: t("p1Body") },
    { label: t("p2Label"), title: t("p2Title"), body: t("p2Body") },
    { label: t("p3Label"), title: t("p3Title"), body: t("p3Body") },
  ];

  const solutions = [t("sol1"), t("sol2"), t("sol3"), t("sol4")];

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
          <h1 className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[28px] md:text-[40px] lg:text-[52px] max-w-4xl mb-8">
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
              src="/geography-classroom.jpg"
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
      <section className="bg-[#1a1a1a]">
        <RevealGroup
          className="max-w-360 mx-auto px-7.5 py-14 md:py-20 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16"
          stagger={0.12}
        >
          <RevealItem>
            <p className="font-serif font-semibold text-[#FC9A19] text-[52px] md:text-[64px] leading-none mb-3">
              {t("stat1Value")}
            </p>
            <p className="text-[#aaa] text-[14px] leading-snug max-w-56">{t("stat1Label")}</p>
          </RevealItem>
          <RevealItem>
            <p className="font-serif font-semibold text-[#FC9A19] text-[52px] md:text-[64px] leading-none mb-3">
              {t("stat2Value")}
            </p>
            <p className="text-[#aaa] text-[14px] leading-snug max-w-56">{t("stat2Label")}</p>
          </RevealItem>
          <RevealItem>
            <p className="font-serif font-semibold text-[#FC9A19] text-[52px] md:text-[64px] leading-none mb-3">
              {t("stat3Value")}
            </p>
            <p className="text-[#aaa] text-[14px] leading-snug max-w-56">{t("stat3Label")}</p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* Problems */}
      <section className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {problems.map((p, i) => (
            <Reveal key={i} delay={i * 0.1} direction="up">
              <div className="border border-[#e8e8e8] p-8 h-full">
                <span className="inline-block text-[#FC9A19] text-[11px] font-semibold uppercase tracking-widest mb-5">
                  {p.label}
                </span>
                <h3 className="font-serif font-semibold text-[#1a1a1a] text-[20px] md:text-[22px] leading-[1.25] mb-5">
                  {p.title}
                </h3>
                <p className="text-[#666] text-[14px] md:text-[15px] leading-[1.75]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[#f8f7f4]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <Reveal>
            <span className="inline-block text-[#FC9A19] text-[11px] font-semibold uppercase tracking-widest mb-5">
              {t("solLabel")}
            </span>
            <h2 className="font-serif font-semibold text-[#1a1a1a] text-[26px] md:text-[36px] leading-[1.2] mb-10">
              {t("solHeading")}
            </h2>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 gap-5" stagger={0.1}>
            {solutions.map((sol, i) => (
              <RevealItem key={i}>
                <div className="flex items-start gap-4 bg-white p-6">
                  <span className="font-serif font-bold text-[#FC9A19] text-[28px] leading-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[#333] text-[15px] leading-[1.7] pt-1">{sol}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
