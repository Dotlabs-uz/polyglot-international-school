"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "@/components/layout/MenuContext";

const easeOut   = [0.22, 1, 0.36, 1] as const;
const crossFade = [0.25, 1, 0.5, 1] as const;
const textEase  = [0.16, 1, 0.3, 1] as const;

const SLIDE_INTERVAL = 7500;

export function HeroSection() {
  const t = useTranslations("hero");
  const [active, setActive] = useState(0);
  const { setOpen } = useMenu();

  const slides = [
    { image: "/facade-1.jpg", heading: t("heading"), subtext: t("subtext") },
    { image: "/atrium-hall.jpg", heading: t("heading2"), subtext: t("subtext2") },
    { image: "/campus-gate.jpg", heading: t("heading3"), subtext: t("subtext3") },
  ] as const;

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative w-full bg-white p-2.5 sm:p-4 md:p-5 overflow-hidden select-none" aria-label="Главный экран">
      {/* Decorative inset frame */}
      <div className="absolute inset-x-4 top-4 bottom-4 border border-black/5 pointer-events-none z-10" />

      <div className="w-full h-[95vh] sm:h-[88vh] md:h-[95vh] overflow-hidden relative flex flex-col justify-between">

        {/* Cross-fading background slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.1, ease: crossFade }}
              className="absolute inset-0"
            >
              <Image
                src={slides[active].image}
                alt="Polyglot International School"
                fill
                className="object-cover object-center"
                priority={active === 0}
                sizes="100vw"
                quality={90}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/20 to-black/55" />
        </div>

        {/* Center editorial block */}
        <div className="relative z-20 my-auto text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.7, ease: textEase }}
              className="flex flex-col items-center"
            >
              <h1 className="font-serif font-semibold text-white leading-[1.1] max-w-6xl text-[32px] sm:text-[46px] md:text-[58px] lg:text-[66px] xl:text-[72px] 2xl:text-[78px]">
                {slides[active].heading}
              </h1>

              <p className="mt-7 text-white/80 text-base md:text-[17px] leading-[1.7] max-w-170">
                {slides[active].subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.0, ease: easeOut }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/admissions"
              className="inline-block text-[11px] font-medium tracking-widest uppercase text-white border border-white hover:bg-white hover:text-[#1a1a1a] px-9 py-3.5 transition duration-300 w-full sm:w-auto text-center"
            >
              {t("cta1")}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-block text-[11px] font-medium tracking-widest uppercase text-white border border-white/35 hover:border-white bg-white/5 backdrop-blur-md hover:bg-white/15 px-9 py-3.5 transition duration-300 w-full sm:w-auto text-center"
            >
              {t("cta2")}
            </button>
          </motion.div>
        </div>

        {/* Bottom status row */}
        <div className="relative z-20 w-full px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center gap-3" role="group" aria-label="Навигация по слайдам">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Показать слайд ${i + 1}`}
              aria-current={active === i ? "true" : undefined}
              className="group relative py-2 px-1"
            >
              <span className="block w-8 h-0.5 bg-white/35 overflow-hidden">
                <motion.span
                  className="block h-full bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: active === i ? 1 : 0 }}
                  transition={{ duration: active === i ? SLIDE_INTERVAL / 1000 : 0.3, ease: "linear" }}
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
