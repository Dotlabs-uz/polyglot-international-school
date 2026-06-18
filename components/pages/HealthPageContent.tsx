"use client";

import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { RiWindyLine, RiRestaurantLine, RiCarLine } from "react-icons/ri";

export function HealthPageContent() {
  const t = useTranslations("healthPage");

  const sections = [
    {
      label: t("airLabel"),
      title: t("airTitle"),
      body: t("airBody"),
      facts: [t("airFact1"), t("airFact2"), t("airFact3"), t("airFact4")],
      Icon: RiWindyLine,
      accent: "#2D9CDB",
    },
    {
      label: t("foodLabel"),
      title: t("foodTitle"),
      body: t("foodBody"),
      facts: [t("foodFact1"), t("foodFact2"), t("foodFact3"), t("foodFact4")],
      Icon: RiRestaurantLine,
      accent: "#27AE60",
    },
    {
      label: t("transferLabel"),
      title: t("transferTitle"),
      body: t("transferBody"),
      facts: [t("transferFact1"), t("transferFact2"), t("transferFact3"), t("transferFact4")],
      Icon: RiCarLine,
      accent: "#FC9A19",
    },
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

      {/* Three pillars */}
      {sections.map((sec, i) => (
        <section
          key={i}
          className={i % 2 === 0 ? "bg-[#f8f7f4]" : "bg-white"}
        >
          <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
            <div className="flex flex-col lg:flex-row lg:gap-24 gap-10">
              {/* Left */}
              <Reveal className="lg:w-80 shrink-0" direction="left">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 mb-6"
                  style={{ backgroundColor: `${sec.accent}18` }}
                >
                  <sec.Icon size={32} style={{ color: sec.accent }} />
                </div>
                <span
                  className="block text-[11px] font-semibold uppercase tracking-widest mb-3"
                  style={{ color: sec.accent }}
                >
                  {sec.label}
                </span>
                <h2 className="font-serif font-semibold text-[#1a1a1a] text-[24px] md:text-[32px] leading-[1.2]">
                  {sec.title}
                </h2>
              </Reveal>
              {/* Right */}
              <Reveal className="flex-1" delay={0.1}>
                <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.8] mb-8">
                  {sec.body}
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {sec.facts.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 bg-white p-5 border border-[#e8e8e8]"
                    >
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: sec.accent }}
                      />
                      <span className="text-[#333] text-[14px] leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
