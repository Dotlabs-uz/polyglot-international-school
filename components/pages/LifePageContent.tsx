"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { RiMicLine, RiFlightTakeoffLine, RiTrophyLine } from "react-icons/ri";

export function LifePageContent() {
  const t = useTranslations("lifePage");

  const ftItems = [t("ft1"), t("ft2"), t("ft3"), t("ft4")];

  const destinations = [
    { name: t("dest1Name"), desc: t("dest1Desc") },
    { name: t("dest2Name"), desc: t("dest2Desc") },
    { name: t("dest3Name"), desc: t("dest3Desc") },
  ];

  const competitions = [t("comp1"), t("comp2"), t("comp3"), t("comp4")];

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
              src="/atrium-hall.jpg"
              alt="Жизнь школы Polyglot International School"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      {/* Friday Talk */}
      <section className="bg-[#142444]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <Reveal className="lg:w-96 shrink-0" direction="left">
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src="/grand-lobby.jpg"
                  alt={t("ftHeading")}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
              </div>
            </Reveal>
            <div className="flex-1">
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <RiMicLine size={28} className="text-[#C4911E]" />
                  <span className="text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest">
                    {t("ftLabel")}
                  </span>
                </div>
                <h2 className="font-serif font-semibold text-white text-[26px] md:text-[38px] leading-[1.2] mb-6 max-w-2xl">
                  {t("ftHeading")}
                </h2>
                <p className="text-[#aaa] text-[15px] md:text-[16px] leading-[1.8] mb-12 max-w-2xl">
                  {t("ftBody")}
                </p>
              </Reveal>
              <RevealGroup className="grid sm:grid-cols-2 gap-4" stagger={0.1}>
                {ftItems.map((item, i) => (
                  <RevealItem key={i}>
                    <div className="flex items-start gap-4 bg-white/5 p-6">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C4911E] shrink-0" />
                      <p className="text-white/80 text-[14px] leading-snug">{item}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <RiFlightTakeoffLine size={28} className="text-[#C4911E]" />
            <span className="text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest">
              {t("intLabel")}
            </span>
          </div>
          <h2 className="font-serif font-semibold text-[#1a1a1a] text-[26px] md:text-[38px] leading-[1.2] mb-6 max-w-2xl">
            {t("intHeading")}
          </h2>
          <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.8] mb-12 max-w-2xl">
            {t("intBody")}
          </p>
        </Reveal>
        <RevealGroup className="grid md:grid-cols-3 gap-6" stagger={0.1}>
          {destinations.map((dest, i) => (
            <RevealItem key={i}>
              <div className="bg-[#f8f7f4] p-8 h-full border-t-4 border-[#C4911E]">
                <h3 className="font-serif font-semibold text-[#1a1a1a] text-[20px] mb-4">
                  {dest.name}
                </h3>
                <p className="text-[#666] text-[14px] leading-[1.75]">{dest.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Competitions */}
      <section className="bg-[#f8f7f4]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <RiTrophyLine size={28} className="text-[#C4911E]" />
              <span className="text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest">
                {t("compLabel")}
              </span>
            </div>
            <h2 className="font-serif font-semibold text-[#1a1a1a] text-[26px] md:text-[36px] leading-[1.2] mb-12">
              {t("compHeading")}
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <RevealGroup className="grid sm:grid-cols-2 gap-5" stagger={0.1}>
              {competitions.map((comp, i) => (
                <RevealItem key={i}>
                  <div className="flex items-start gap-4 bg-white p-6">
                    <span className="font-serif font-bold text-[#C4911E] text-[28px] leading-none shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[#333] text-[15px] leading-[1.7] pt-1">{comp}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
            <Reveal direction="right">
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src="/hall-6-p1.jpg"
                  alt={t("compHeading")}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
