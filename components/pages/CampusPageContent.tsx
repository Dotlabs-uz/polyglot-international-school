"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { RiShieldLine } from "react-icons/ri";

const spaceImages = [
  "/chemistry-lab.jpg",
  "/lab-stem-1.jpg",
  "/lab-stem-3.jpg",
  "/geography-classroom.jpg",
  "/sports-ground.jpg",
  "/grand-lobby.jpg",
];

const gallery = [
  { src: "/atrium-hall.jpg", alt: "Атриум кампуса" },
  { src: "/reception-hall.jpg", alt: "Холл с ресепшеном" },
  { src: "/branded-corridor.jpg", alt: "Коридор кампуса" },
  { src: "/grand-lobby.jpg", alt: "Главный холл" },
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
      {/* Hero with facade image */}
      <section className="relative">
        <div className="relative w-full aspect-16/9 md:aspect-21/9 overflow-hidden">
          <Image
            src="/facade-2.jpg"
            alt="Polyglot International School — фасад здания"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-360 mx-auto w-full px-7.5 pb-10 md:pb-16">
            <Reveal>
              <span className="inline-block text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest mb-5">
                {t("label")}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-serif font-semibold text-white leading-[1.1] text-[28px] md:text-[44px] lg:text-[54px] max-w-3xl mb-3">
                {t("heading")}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-[#C4911E] font-semibold text-[15px] md:text-[18px]">
                {t("subheading")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="max-w-360 mx-auto px-7.5 pt-10 pb-14 md:pt-14 md:pb-20">
        <Reveal>
          <p className="text-[#555] text-[16px] leading-[1.8] max-w-2xl">{t("body")}</p>
        </Reveal>
      </section>

      {/* Stats bar */}
      <section className="bg-[#C4911E]">
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

      {/* Interior gallery */}
      <section className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
        <RevealGroup className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" stagger={0.08}>
          {gallery.map((img, i) => (
            <RevealItem key={i}>
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Security */}
      <section className="bg-[#142444]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <RiShieldLine size={32} className="text-[#C4911E]" />
              <span className="inline-block text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4911E] mt-2 shrink-0" />
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
          <span className="inline-block text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest mb-5">
            {t("spacesLabel")}
          </span>
          <h2 className="font-serif font-semibold text-[#1a1a1a] text-[28px] md:text-[38px] leading-[1.2] mb-12">
            {t("spacesHeading")}
          </h2>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-6" stagger={0.09}>
          {spaces.map((sp, i) => (
            <RevealItem key={i}>
              <div className="group border border-[#e8e8e8] overflow-hidden h-full hover:border-[#C4911E] transition-colors">
                <div className="relative w-full aspect-4/3 overflow-hidden">
                  <Image
                    src={spaceImages[i]}
                    alt={sp.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#1a1a1a] text-[16px] mb-3">{sp.name}</h3>
                  <p className="text-[#777] text-[14px] leading-[1.7]">{sp.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </div>
  );
}
