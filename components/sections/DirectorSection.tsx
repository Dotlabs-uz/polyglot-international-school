"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import {
  RiGlobalLine,
  RiAwardLine,
  RiBookOpenLine,
  RiBuilding4Line,
  RiMedalLine,
} from "react-icons/ri";

const CREDENTIALS = [
  { Icon: RiBookOpenLine, key: "cred1" },
  { Icon: RiBuilding4Line, key: "cred2" },
  { Icon: RiGlobalLine, key: "cred3" },
  { Icon: RiMedalLine, key: "cred4" },
  { Icon: RiAwardLine, key: "cred5" },
] as const;

export function DirectorSection() {
  const t = useTranslations("director");

  return (
    <section className="bg-[#f8f7f4] py-16 md:py-20 lg:py-24" aria-labelledby="director-heading">
      <div className="max-w-360 mx-auto px-7.5">

        {/* Label */}
        <Reveal direction="up">
          <div className="flex items-center gap-3 mb-10 md:mb-14">
            <span className="w-8 h-px bg-[#C4911E]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C4911E]">
              {t("label")}
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">

          {/* Left — photos */}
          <Reveal direction="right">
            <div className="relative">
              {/* Main photo */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/director1.jpg"
                  alt={t("photo1Alt")}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                {/* Overlay tag */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#142444]/90 backdrop-blur-sm px-6 py-5">
                  <p className="text-white font-serif font-semibold text-[20px] leading-tight">
                    Steve Pellerine
                  </p>
                  <p className="text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest mt-1">
                    {t("role")}
                  </p>
                </div>
              </div>

              {/* Second photo — accent */}
              <div className="absolute -right-4 md:-right-8 -bottom-6 md:-bottom-8 w-2/5 aspect-[3/4] overflow-hidden border-4 border-[#f8f7f4] shadow-xl">
                <Image
                  src="/director2.jpg"
                  alt={t("photo2Alt")}
                  fill
                  className="object-cover object-center"
                  sizes="200px"
                />
              </div>
            </div>
          </Reveal>

          {/* Right — content */}
          <Reveal direction="up" delay={0.1} className="lg:pt-2 pb-8">
            <h2
              id="director-heading"
              className="font-serif font-semibold text-[#1a1a1a] leading-[1.12] text-[32px] md:text-[42px] lg:text-[48px] mb-4"
            >
              {t("heading")}
            </h2>

            <p className="text-[#888] text-[13px] md:text-[14px] leading-[1.85] mb-10">
              {t("subtext")}
            </p>

            {/* Credentials */}
            <ul className="flex flex-col gap-5">
              {CREDENTIALS.map(({ Icon, key }, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="shrink-0 mt-0.5 w-9 h-9 bg-[#142444] flex items-center justify-center">
                    <Icon size={16} className="text-[#C4911E]" aria-hidden="true" />
                  </span>
                  <span className="text-[#333] text-[14px] leading-[1.7]">
                    {t(key)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
