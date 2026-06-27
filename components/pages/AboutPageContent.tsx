"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function AboutPageContent() {
  const t = useTranslations("aboutPage");

  const standards = [
    {
      label: t("s1Label"),
      title: t("s1Title"),
      body: t("s1Body"),
      details: [t("s1d1"), t("s1d2"), t("s1d3"), t("s1d4")],
      accent: "#C4911E",
    },
    {
      label: t("s2Label"),
      title: t("s2Title"),
      body: t("s2Body"),
      details: [t("s2d1"), t("s2d2"), t("s2d3"), t("s2d4")],
      accent: "#142444",
    },
    {
      label: t("s3Label"),
      title: t("s3Title"),
      body: t("s3Body"),
      details: [t("s3d1"), t("s3d2"), t("s3d3"), t("s3d4")],
      accent: "#C4911E",
    },
  ];

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
          <h1 className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[32px] md:text-[44px] lg:text-[56px] max-w-4xl mb-8">
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
              src="/facade-1.jpg"
              alt="Polyglot International School — здание школы"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      {/* Standards */}
      <section className="bg-[#f8f7f4]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <div className="flex flex-col gap-0">
            {standards.map((s, i) => (
              <Reveal key={i} delay={i * 0.1} direction="up">
                <div className="group border-t border-[#e5e5e5] py-10 md:py-14">
                  <div className="flex flex-col lg:flex-row lg:gap-24 gap-8">
                    {/* Left column */}
                    <div className="lg:w-72 shrink-0">
                      <span
                        className="inline-block text-[11px] font-semibold uppercase tracking-widest mb-3"
                        style={{ color: s.accent }}
                      >
                        {s.label}
                      </span>
                      <h2 className="font-serif font-semibold text-[#1a1a1a] text-[24px] md:text-[30px] leading-[1.2]">
                        {s.title}
                      </h2>
                    </div>
                    {/* Right column */}
                    <div className="flex-1">
                      <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.8] mb-8">
                        {s.body}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                        {s.details.map((d, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-[14px] text-[#333] leading-snug"
                          >
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: s.accent }}
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                      {i === 2 && (
                        <div className="relative w-full aspect-16/8 overflow-hidden">
                          <Image
                            src="/lab-stem-2.jpg"
                            alt="STEM-лаборатория Polyglot International School"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 70vw"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-[#e5e5e5]" />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
        <Reveal>
          <div className="border-l-4 border-[#C4911E] pl-7">
            <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#C4911E] mb-4">
              {t("closingLabel")}
            </span>
            <p className="font-serif text-[#1a1a1a] text-[20px] md:text-[26px] leading-[1.5] max-w-3xl">
              {t("closing")}
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
