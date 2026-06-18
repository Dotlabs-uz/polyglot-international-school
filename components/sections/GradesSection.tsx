"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type GradeKey = "primary" | "middle" | "senior";

export function GradesSection() {
  const t = useTranslations("grades");
  const [active, setActive] = useState<GradeKey>("primary");

  const tabs: Array<{ key: GradeKey; label: string }> = [
    { key: "primary", label: t("tab1") },
    { key: "middle", label: t("tab2") },
    { key: "senior", label: t("tab3") },
  ];

  const content: Record<GradeKey, { heading: string; body: string; skills: string[] }> = {
    primary: {
      heading: t("primaryHeading"),
      body: t("primaryBody"),
      skills: [t("primarySkill1"), t("primarySkill2"), t("primarySkill3"), t("primarySkill4")],
    },
    middle: {
      heading: t("middleHeading"),
      body: t("middleBody"),
      skills: [t("middleSkill1"), t("middleSkill2"), t("middleSkill3"), t("middleSkill4")],
    },
    senior: {
      heading: t("seniorHeading"),
      body: t("seniorBody"),
      skills: [t("seniorSkill1"), t("seniorSkill2"), t("seniorSkill3"), t("seniorSkill4")],
    },
  };

  const current = content[active];

  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="grades-heading"
    >
      <div className="max-w-360 mx-auto px-7.5">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-10 md:mb-14"
        >
          <h2
            id="grades-heading"
            className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[32px] md:text-[40px] lg:text-[46px] mb-4 max-w-2xl"
          >
            {t("heading")}
          </h2>
          <p className="text-[#666] text-[15px] md:text-[16px] leading-[1.7] max-w-xl">
            {t("subtext")}
          </p>
        </motion.div>

        <div className="flex gap-0 border-b border-[#ebebeb] mb-10 md:mb-14 overflow-x-auto">
          {tabs.map(({ key, label }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                aria-pressed={isActive}
                className="relative shrink-0 px-6 md:px-8 py-4 text-[13px] font-medium tracking-wide transition-colors duration-200"
                style={{ color: isActive ? "#1a1a1a" : "#888" }}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="grade-tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FC9A19]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start"
          >
            <div>
              <h3 className="font-serif font-semibold text-[#1a1a1a] leading-[1.12] text-[24px] md:text-[30px] lg:text-[34px] mb-6">
                {current.heading}
              </h3>
              <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.75]">
                {current.body}
              </p>
            </div>

            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#999] mb-6">
                {t("skillsLabel")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                    className="flex items-center gap-3 border border-[#ebebeb] px-5 py-3.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FC9A19] shrink-0" />
                    <span className="text-[#333] text-[14px]">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
