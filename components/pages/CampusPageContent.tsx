"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import {
  RiBuildingLine,
  RiShieldLine,
  RiFlaskLine,
  RiHeadphoneLine,
  RiFootballLine,
  RiMicLine,
} from "react-icons/ri";

const spaceIcons = [
  RiFlaskLine,
  RiHeadphoneLine,
  RiMicLine,
  RiMicLine,
  RiFootballLine,
  RiBuildingLine,
];

export function CampusPageContent() {
  const t = useTranslations("campusPage");

  const stats = [
    { value: t("stat1Value"), unit: t("stat1Unit"), label: t("stat1Label") },
    { value: t("stat2Value"), unit: t("stat2Unit"), label: t("stat2Label") },
    { value: t("stat3Value"), unit: t("stat3Unit"), label: t("stat3Label") },
    { value: t("stat4Value"), unit: t("stat4Unit"), label: t("stat4Label") },
  ];

  const security = [
    t("sec1"), t("sec2"), t("sec3"), t("sec4"), t("sec5"), t("sec6"),
  ];

  const spaces = [
    { name: t("space1Name"), desc: t("space1Desc") },
    { name: t("space2Name"), desc: t("space2Desc") },
    { name: t("space3Name"), desc: t("space3Desc") },
    { name: t("space4Name"), desc: t("space4Desc") },
    { name: t("space5Name"), desc: t("space5Desc") },
    { name: t("space6Name"), desc: t("space6Desc") },
  ];

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
          <h1 className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[32px] md:text-[46px] lg:text-[58px] max-w-3xl mb-4">
            {t("heading")}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-[#FC9A19] font-semibold text-[16px] md:text-[18px] mb-8">
            {t("subheading")}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="text-[#555] text-[16px] leading-[1.8] max-w-2xl">{t("body")}</p>
        </Reveal>
      </section>

      {/* Stats bar */}
      <section className="bg-[#FC9A19]">
        <RevealGroup
          className="max-w-360 mx-auto px-7.5 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-8"
          stagger={0.1}
        >
          {stats.map((s, i) => (
            <RevealItem key={i}>
              <p className="font-serif font-bold text-white text-[44px] md:text-[52px] leading-none">
                {s.value}
                <span className="text-[22px] font-semibold ml-1">{s.unit}</span>
              </p>
              <p className="text-white/80 text-[13px] mt-2 leading-snug">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Campus image */}
      <Reveal direction="up" className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
        <div className="relative w-full aspect-16/7 overflow-hidden">
          <Image
            src="/campus.png"
            alt="Polyglot campus"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </Reveal>

      {/* Security */}
      <section className="bg-[#1a1a1a]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <RiShieldLine size={32} className="text-[#FC9A19]" />
              <span className="inline-block text-[#FC9A19] text-[11px] font-semibold uppercase tracking-widest">
                {t("secLabel")}
              </span>
            </div>
            <h2 className="font-serif font-semibold text-white text-[28px] md:text-[38px] leading-[1.2] mb-12 max-w-2xl">
              {t("secHeading")}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-[#aaa] text-[15px] leading-[1.8] mb-10 max-w-2xl">{t("secBody")}</p>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" stagger={0.08}>
            {security.map((item, i) => (
              <RevealItem key={i}>
                <div className="flex items-start gap-3 bg-white/5 p-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FC9A19] mt-2 shrink-0" />
                  <p className="text-white/80 text-[14px] leading-snug">{item}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Spaces */}
      <section className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
        <Reveal>
          <span className="inline-block text-[#FC9A19] text-[11px] font-semibold uppercase tracking-widest mb-5">
            {t("spacesLabel")}
          </span>
          <h2 className="font-serif font-semibold text-[#1a1a1a] text-[28px] md:text-[38px] leading-[1.2] mb-12">
            {t("spacesHeading")}
          </h2>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-6" stagger={0.09}>
          {spaces.map((sp, i) => {
            const Icon = spaceIcons[i] ?? RiBuildingLine;
            return (
              <RevealItem key={i}>
                <div className="border border-[#e8e8e8] p-7 h-full hover:border-[#FC9A19] transition-colors">
                  <Icon size={32} className="text-[#FC9A19] mb-5" />
                  <h3 className="font-semibold text-[#1a1a1a] text-[16px] mb-3">{sp.name}</h3>
                  <p className="text-[#777] text-[14px] leading-[1.7]">{sp.desc}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </section>
    </div>
  );
}
