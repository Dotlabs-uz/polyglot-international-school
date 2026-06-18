"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ChallengesSection() {
  const t = useTranslations("challenges");

  const problems = [
    { title: t("problem1Title"), body: t("problem1Body") },
    { title: t("problem2Title"), body: t("problem2Body") },
  ] as const;

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0B1B36" }}
      aria-labelledby="challenges-heading"
    >
      <div className="max-w-360 mx-auto px-7.5 py-16 md:py-20 lg:py-28">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#FC9A19] mb-6"
        >
          {t("label")}
        </motion.p>

        <motion.h2
          id="challenges-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-serif font-semibold text-white leading-[1.1] text-[32px] md:text-[42px] lg:text-[50px] max-w-3xl mb-14 md:mb-18"
        >
          {t("heading")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 mb-14 md:mb-18">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: EASE }}
              className="bg-[#0B1B36] p-8 md:p-10"
            >
              <span className="block text-[40px] md:text-[48px] font-serif font-semibold text-white/10 leading-none mb-6 select-none">
                0{i + 1}
              </span>
              <h3 className="font-semibold text-white text-[18px] md:text-[20px] mb-3">
                {p.title}
              </h3>
              <p className="text-white/55 text-[14px] md:text-[15px] leading-[1.75]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="border-l-2 border-[#FC9A19] pl-6 md:pl-8"
        >
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#FC9A19] mb-3">
            {t("solutionLabel")}
          </p>
          <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] max-w-3xl font-light">
            {t("solutionBody")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
