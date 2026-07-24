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
              <div className="relative">
                {/* Main photo */}
                <div className="relative w-full aspect-3/4 overflow-hidden">
                  <Image
                    src="/founder.jpg"
                    alt={t("photoAlt")}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                  {/* Overlay name tag */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#142444]/90 backdrop-blur-sm px-6 py-5">
                    <p className="text-white font-serif font-semibold text-[20px] leading-tight">
                      {t("founderName")}
                    </p>
                    <p className="text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest mt-1">
                      {t("founderRole")}
                    </p>
                  </div>
                </div>

                {/* Second photo — accent */}
                <div className="absolute -right-4 md:-right-8 -bottom-6 md:-bottom-8 w-2/5 aspect-3/4 overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/founder2.jpg"
                    alt={t("photo2Alt")}
                    fill
                    className="object-cover object-center"
                    sizes="200px"
                  />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <TourModal open={tourOpen} onClose={() => setTourOpen(false)} />
    </>
  );
}
