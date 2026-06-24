"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { RiDoubleQuotesL, RiMedalLine, RiGroupLine } from "react-icons/ri";

export function FounderPageContent() {
  const t = useTranslations("founderPage");

  const education = [t("edu1"), t("edu2"), t("edu3")];
  const govWork = [t("gov1"), t("gov2")];
  const teamItems = [t("team1"), t("team2"), t("team3"), t("team4"), t("team5")];

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

      {/* Founder bio */}
      <section className="bg-[#f8f7f4]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Identity */}
            <Reveal className="lg:w-80 shrink-0" direction="left">
              <div className="relative w-full aspect-4/3 overflow-hidden mb-6">
                <Image
                  src="/reception-hall.jpg"
                  alt={t("founderName")}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FC9A19]/15 mb-6">
                <RiMedalLine size={32} className="text-[#FC9A19]" />
              </div>
              <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#FC9A19] mb-3">
                {t("founderLabel")}
              </span>
              <h2 className="font-serif font-semibold text-[#1a1a1a] text-[26px] md:text-[32px] leading-[1.2] mb-2">
                {t("founderName")}
              </h2>
              <p className="text-[#777] text-[14px] leading-snug">{t("founderTitle")}</p>
            </Reveal>

            {/* Details */}
            <Reveal className="flex-1" delay={0.1}>
              <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.8] mb-10">
                {t("founderBody")}
              </p>
              <h3 className="text-[12px] font-semibold uppercase tracking-widest text-[#888] mb-5">
                Образование
              </h3>
              <ul className="flex flex-col gap-3 mb-10">
                {education.map((edu, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FC9A19] shrink-0" />
                    <span className="text-[#333] text-[15px] leading-snug">{edu}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {govWork.map((g, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shrink-0" />
                    <span className="text-[#555] text-[14px] leading-snug">{g}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
        <Reveal>
          <div className="relative max-w-3xl">
            <RiDoubleQuotesL size={56} className="text-[#FC9A19]/20 mb-4" />
            <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#FC9A19] mb-6">
              {t("quoteLabel")}
            </span>
            <blockquote className="font-serif text-[#1a1a1a] text-[22px] md:text-[28px] leading-[1.55]">
              {t("quote")}
            </blockquote>
          </div>
        </Reveal>
      </section>

      {/* Team */}
      <section className="bg-[#1a1a1a]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <RiGroupLine size={28} className="text-[#FC9A19]" />
              <span className="text-[#FC9A19] text-[11px] font-semibold uppercase tracking-widest">
                {t("teamLabel")}
              </span>
            </div>
            <h2 className="font-serif font-semibold text-white text-[26px] md:text-[36px] leading-[1.2] mb-6 max-w-2xl">
              {t("teamHeading")}
            </h2>
            <p className="text-[#aaa] text-[15px] leading-[1.8] mb-12 max-w-2xl">
              {t("teamBody")}
            </p>
          </Reveal>
          <Reveal direction="up" className="mb-12">
            <div className="relative w-full aspect-16/6 overflow-hidden">
              <Image
                src="/facade-3.jpg"
                alt={t("teamHeading")}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" stagger={0.08}>
            {teamItems.map((item, i) => (
              <RevealItem key={i}>
                <div className="flex items-start gap-3 bg-white/5 p-5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FC9A19] shrink-0" />
                  <p className="text-white/80 text-[14px] leading-snug">{item}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
