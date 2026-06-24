"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function GradesPageContent() {
  const t = useTranslations("gradesPage");
  const [tab, setTab] = useState(0);

  const tabs = [
    {
      label: t("tab1"),
      stageLabel: t("pLabel"),
      heading: t("pHeading"),
      body: t("pBody"),
      philosophy: t("pPhilosophy"),
      skillsLabel: t("pSkillsLabel"),
      skills: [t("pS1"), t("pS2"), t("pS3"), t("pS4"), t("pS5"), t("pS6")],
      outcomeLabel: t("pOutcomeLabel"),
      outcome: t("pOutcome"),
      color: "#27AE60",
    },
    {
      label: t("tab2"),
      stageLabel: t("mLabel"),
      heading: t("mHeading"),
      body: t("mBody"),
      philosophy: t("mPhilosophy"),
      skillsLabel: t("mSkillsLabel"),
      skills: [t("mS1"), t("mS2"), t("mS3"), t("mS4"), t("mS5"), t("mS6")],
      outcomeLabel: t("mOutcomeLabel"),
      outcome: t("mOutcome"),
      color: "#2D9CDB",
    },
    {
      label: t("tab3"),
      stageLabel: t("sLabel"),
      heading: t("sHeading"),
      body: t("sBody"),
      philosophy: t("sPhilosophy"),
      skillsLabel: t("sSkillsLabel"),
      skills: [t("sS1"), t("sS2"), t("sS3"), t("sS4"), t("sS5"), t("sS6")],
      outcomeLabel: t("sOutcomeLabel"),
      outcome: t("sOutcome"),
      color: "#FC9A19",
    },
  ];

  const active = tabs[tab];

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
          <p className="text-[#555] text-[16px] md:text-[18px] leading-[1.8] max-w-2xl mb-12">
            {t("intro")}
          </p>
        </Reveal>
        <Reveal delay={0.2} direction="up">
          <div className="relative w-full aspect-16/8 overflow-hidden">
            <Image
              src="/lab-stem-3.jpg"
              alt={t("heading")}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="bg-[#f8f7f4]">
        <div className="max-w-360 mx-auto px-7.5 py-10">
          {/* Stage tabs */}
          <div className="flex gap-0 border-b border-[#e0e0e0]">
            {tabs.map((tb, i) => (
              <button
                key={i}
                onClick={() => setTab(i)}
                className="relative flex-1 py-5 text-[14px] md:text-[16px] font-semibold transition-colors"
                style={{ color: tab === i ? active.color : "#999" }}
              >
                {tb.label}
                {tab === i && (
                  <motion.span
                    layoutId="grade-tab-line"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: active.color }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="py-12 md:py-16"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* Left */}
                <div className="lg:w-80 shrink-0">
                  <span
                    className="inline-block text-[11px] font-semibold uppercase tracking-widest mb-4"
                    style={{ color: active.color }}
                  >
                    {active.stageLabel}
                  </span>
                  <h2 className="font-serif font-semibold text-[#1a1a1a] text-[22px] md:text-[28px] leading-[1.25] mb-6">
                    {active.heading}
                  </h2>
                  <p className="text-[#555] text-[14px] leading-[1.8] mb-6">{active.body}</p>
                  <div
                    className="border-l-4 pl-5 py-1"
                    style={{ borderColor: active.color }}
                  >
                    <p className="text-[#777] text-[13px] italic leading-[1.7]">
                      {active.philosophy}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex-1 flex flex-col gap-8">
                  <div>
                    <h3 className="text-[13px] font-semibold uppercase tracking-widest text-[#888] mb-5">
                      {active.skillsLabel}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {active.skills.map((sk, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-3 bg-white px-5 py-4 border border-[#e8e8e8]"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: active.color }}
                          />
                          <span className="text-[#333] text-[14px] leading-snug">{sk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="bg-white p-7 border-l-4"
                    style={{ borderColor: active.color }}
                  >
                    <h4 className="text-[12px] font-semibold uppercase tracking-widest text-[#888] mb-3">
                      {active.outcomeLabel}
                    </h4>
                    <p className="text-[#333] text-[15px] leading-[1.75]">{active.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
