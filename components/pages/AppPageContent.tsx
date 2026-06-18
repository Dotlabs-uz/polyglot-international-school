"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import {
  RiMapPinLine,
  RiBarChartLine,
  RiRestaurantLine,
  RiMessage2Line,
  RiBellLine,
} from "react-icons/ri";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AppPageContent() {
  const t = useTranslations("appPage");
  const [active, setActive] = useState(0);

  const features = [
    {
      label: t("f1Label"),
      title: t("f1Title"),
      body: t("f1Body"),
      details: [t("f1detail1"), t("f1detail2"), t("f1detail3")],
      Icon: RiMapPinLine,
    },
    {
      label: t("f2Label"),
      title: t("f2Title"),
      body: t("f2Body"),
      details: [t("f2detail1"), t("f2detail2"), t("f2detail3")],
      Icon: RiBarChartLine,
    },
    {
      label: t("f3Label"),
      title: t("f3Title"),
      body: t("f3Body"),
      details: [t("f3detail1"), t("f3detail2"), t("f3detail3")],
      Icon: RiRestaurantLine,
    },
    {
      label: t("f4Label"),
      title: t("f4Title"),
      body: t("f4Body"),
      details: [t("f4detail1"), t("f4detail2"), t("f4detail3")],
      Icon: RiMessage2Line,
    },
    {
      label: t("f5Label"),
      title: t("f5Title"),
      body: t("f5Body"),
      details: [t("f5detail1"), t("f5detail2"), t("f5detail3")],
      Icon: RiBellLine,
    },
  ];

  return (
    <div className="flex-1 bg-[#1a1a1a]">
      {/* Hero */}
      <section className="max-w-360 mx-auto px-7.5 pt-10 pb-14 md:pt-14 md:pb-20">
        <Reveal>
          <span className="inline-block text-[#FC9A19] text-[11px] font-semibold uppercase tracking-widest mb-5">
            {t("label")}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-serif font-semibold text-white leading-[1.1] text-[32px] md:text-[46px] lg:text-[58px] max-w-3xl mb-4">
            {t("heading")}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-[#FC9A19] font-medium text-[16px] md:text-[18px] mb-8">
            {t("subheading")}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="text-[#aaa] text-[16px] leading-[1.8] max-w-2xl">{t("intro")}</p>
        </Reveal>
      </section>

      {/* Feature tabs */}
      <section className="border-t border-white/10">
        {/* Tab bar */}
        <div className="max-w-360 mx-auto px-7.5 pt-10">
          <div className="flex gap-0 overflow-x-auto">
            {features.map((f, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative flex items-center gap-2.5 px-6 py-4 text-[13px] font-medium whitespace-nowrap transition-colors"
                style={{ color: active === i ? "#FC9A19" : "#888" }}
              >
                <f.Icon size={16} />
                <span>{f.label}</span>
                {active === i && (
                  <motion.span
                    layoutId="app-tab-line"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FC9A19]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="max-w-360 mx-auto px-7.5 py-12 md:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-24"
            >
              <div className="lg:w-96 shrink-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FC9A19]/15 mb-6">
                  {(() => {
                    const Icon = features[active].Icon;
                    return <Icon size={32} className="text-[#FC9A19]" />;
                  })()}
                </div>
                <h2 className="font-serif font-semibold text-white text-[26px] md:text-[34px] leading-[1.2] mb-5">
                  {features[active].title}
                </h2>
                <p className="text-[#aaa] text-[15px] leading-[1.8]">{features[active].body}</p>
              </div>
              <div className="flex-1">
                <ul className="flex flex-col gap-4">
                  {features[active].details.map((d, j) => (
                    <li key={j} className="flex items-start gap-4 border border-white/10 p-5">
                      <span className="font-serif font-bold text-[#FC9A19] text-[22px] leading-none shrink-0 mt-0.5">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <p className="text-white/80 text-[15px] leading-[1.7]">{d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Platform note */}
      <section className="border-t border-white/10">
        <div className="max-w-360 mx-auto px-7.5 py-10">
          <Reveal>
            <p className="text-[#888] text-[14px]">{t("platforms")}</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
