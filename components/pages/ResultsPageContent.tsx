"use client";

import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ResultsPageContent() {
  const t = useTranslations("resultsPage");

  const exams = [
    {
      label: t("ieltsLabel"),
      score: t("ieltsScore"),
      title: t("ieltsTitle"),
      body: t("ieltsBody"),
      items: [t("ielts1"), t("ielts2"), t("ielts3"), t("ielts4")],
      color: "#2D9CDB",
    },
    {
      label: t("satLabel"),
      score: t("satScore"),
      title: t("satTitle"),
      body: t("satBody"),
      items: [t("sat1"), t("sat2"), t("sat3"), t("sat4")],
      color: "#FC9A19",
    },
    {
      label: t("hskLabel"),
      score: t("hskScore"),
      title: t("hskTitle"),
      body: t("hskBody"),
      items: [t("hsk1"), t("hsk2"), t("hsk3"), t("hsk4")],
      color: "#E74C3C",
    },
  ];

  const methods = [t("method1"), t("method2"), t("method3"), t("method4")];

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

      {/* Exam cards */}
      <section className="bg-[#f8f7f4]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <div className="flex flex-col gap-12 md:gap-16">
            {exams.map((ex, i) => (
              <Reveal key={i} delay={i * 0.08} direction="up">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 bg-white p-8 md:p-12">
                  {/* Score badge */}
                  <div className="lg:w-56 shrink-0 flex flex-col items-start">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-widest mb-3"
                      style={{ color: ex.color }}
                    >
                      {ex.label}
                    </span>
                    <div
                      className="font-serif font-bold text-[64px] md:text-[80px] leading-none"
                      style={{ color: ex.color }}
                    >
                      {ex.score}
                    </div>
                    <div className="text-[#888] text-[13px] mt-3 max-w-48">{ex.title}</div>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.8] mb-8">
                      {ex.body}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {ex.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: ex.color }}
                          />
                          <span className="text-[#333] text-[14px] leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
        <Reveal>
          <span className="inline-block text-[#FC9A19] text-[11px] font-semibold uppercase tracking-widest mb-5">
            {t("methodLabel")}
          </span>
          <h2 className="font-serif font-semibold text-[#1a1a1a] text-[26px] md:text-[36px] leading-[1.2] mb-12 max-w-2xl">
            {t("methodHeading")}
          </h2>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 gap-5" stagger={0.1}>
          {methods.map((m, i) => (
            <RevealItem key={i}>
              <div className="flex items-start gap-5 bg-[#f8f7f4] p-6">
                <span className="font-serif font-bold text-[#FC9A19] text-[28px] leading-none shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[#333] text-[15px] leading-[1.7]">{m}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </div>
  );
}
