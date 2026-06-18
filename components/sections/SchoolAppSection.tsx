"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  RiMapPin2Line,
  RiBarChartLine,
  RiRestaurantLine,
  RiMessage2Line,
} from "react-icons/ri";
import type { IconType } from "react-icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SchoolAppSection() {
  const t = useTranslations("schoolApp");

  const features: Array<{ Icon: IconType; title: string; body: string }> = [
    { Icon: RiMapPin2Line, title: t("feature1Title"), body: t("feature1Body") },
    { Icon: RiBarChartLine, title: t("feature2Title"), body: t("feature2Body") },
    { Icon: RiRestaurantLine, title: t("feature3Title"), body: t("feature3Body") },
    { Icon: RiMessage2Line, title: t("feature4Title"), body: t("feature4Body") },
  ];

  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="app-heading"
    >
      <div className="max-w-360 mx-auto px-7.5">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:w-96 shrink-0"
          >
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#FC9A19] mb-4">
              SCHOOL APP
            </p>
            <h2
              id="app-heading"
              className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[32px] md:text-[38px] lg:text-[42px] mb-6"
            >
              {t("heading")}
            </h2>
            <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.75]">
              {t("body")}
            </p>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#ebebeb]">
            {features.map(({ Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: EASE }}
                className="bg-white p-7 md:p-8 flex flex-col gap-4"
              >
                <Icon size={28} className="text-[#FC9A19]" aria-hidden="true" />
                <h3 className="font-semibold text-[#1a1a1a] text-[15px] md:text-[16px]">
                  {title}
                </h3>
                <p className="text-[#666] text-[13px] md:text-[14px] leading-[1.75]">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
