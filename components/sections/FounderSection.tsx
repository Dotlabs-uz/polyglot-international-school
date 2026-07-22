"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { TourModal } from "@/components/ui/TourModal";
import { RiCalendarLine } from "react-icons/ri";

export function FounderSection() {
  const t = useTranslations("founder");
  const [tourOpen, setTourOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setTourOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="bg-white py-16 md:py-20 lg:py-24" aria-labelledby="founder-heading">
        <div className="max-w-360 mx-auto px-7.5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

            <Reveal direction="up" className="text-center">
              <h2
                id="founder-heading"
                className="font-serif font-semibold text-[#1a1a1a] leading-[1.12] text-[34px] md:text-[44px] lg:text-[50px] mb-10 max-w-100 mx-auto"
              >
                {t("heading")}
              </h2>

              <div className="max-w-162.25 mx-auto">
                <p className="text-[#999] text-[13px] md:text-[14px] leading-[1.85] mb-5">
                  Polyglot основан{" "}
                  <strong className="text-[#1a1a1a] font-semibold">
                    {t("founderName")}
                  </strong>{" "}
                  — выпускником{" "}
                  <strong className="text-[#1a1a1a] font-semibold">
                    {t("founderUnis")}
                  </strong>
                  , с управленческим и государственным опытом, ориентированным на образование как стратегический ресурс.
                </p>

                <p className="text-[#999] text-[13px] md:text-[14px] leading-[1.85] mb-10">
                  Команда школы — специалисты с международной практикой (
                  <strong className="text-[#1a1a1a] font-semibold">
                    {t("teamUnis")}
                  </strong>
                  ) и более чем десятилетним опытом в школьном образовании.
                </p>

                <button
                  onClick={() => setTourOpen(true)}
                  className="inline-flex items-center gap-3 bg-[#142444] hover:bg-[#1c3060] text-white text-[11px] font-semibold uppercase tracking-widest px-8 py-4 transition-colors duration-300 group"
                >
                  <RiCalendarLine
                    size={16}
                    className="group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  Записаться на экскурсию
                </button>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src="/founder.jpg"
                  alt={t("photoAlt")}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <TourModal open={tourOpen} onClose={() => setTourOpen(false)} />
    </>
  );
}
