"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { RiFlaskLine, RiHeadphoneLine, RiRobot2Line, RiVideoLine } from "react-icons/ri";

const techImages = ["/chemistry-lab.jpg", "/geography-classroom.jpg", "/lab-stem-2.jpg", "/lab-stem-4.jpg"];

export function EducationPageContent() {
  const t = useTranslations("educationPage");

  const schedule = [
    { time: t("t1"), event: t("e1") },
    { time: t("t2"), event: t("e2"), highlight: true },
    { time: t("t3"), event: t("e3"), highlight: true },
    { time: t("t4"), event: t("e4") },
    { time: t("t5"), event: t("e5") },
    { time: t("t6"), event: t("e6") },
    { time: t("t7"), event: t("e7") },
  ];

  const tech = [
    { Icon: RiFlaskLine, name: t("tech1Name"), desc: t("tech1Desc") },
    { Icon: RiHeadphoneLine, name: t("tech2Name"), desc: t("tech2Desc") },
    { Icon: RiRobot2Line, name: t("tech3Name"), desc: t("tech3Desc") },
    { Icon: RiVideoLine, name: t("tech4Name"), desc: t("tech4Desc") },
  ];

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

      {/* Schedule */}
      <section className="bg-[#f8f7f4]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <Reveal>
            <span className="inline-block text-[#FC9A19] text-[11px] font-semibold uppercase tracking-widest mb-8">
              {t("scheduleLabel")}
            </span>
          </Reveal>
          <div className="flex flex-col gap-0">
            {schedule.map((row, i) => (
              <Reveal key={i} delay={i * 0.06} direction="left">
                <div
                  className={`flex items-center gap-6 md:gap-12 py-5 border-b border-[#e5e5e5] ${
                    row.highlight ? "bg-[#FC9A19]/6 -mx-7.5 px-7.5" : ""
                  }`}
                >
                  <span className="font-mono text-[#FC9A19] text-[15px] font-bold w-14 shrink-0">
                    {row.time}
                  </span>
                  <div className="w-px h-5 bg-[#e0e0e0] shrink-0" />
                  <span
                    className={`text-[15px] md:text-[16px] leading-snug ${
                      row.highlight ? "text-[#1a1a1a] font-medium" : "text-[#555]"
                    }`}
                  >
                    {row.event}
                  </span>
                  {row.highlight && (
                    <span className="ml-auto hidden sm:inline-block text-[11px] font-semibold uppercase tracking-wide text-[#FC9A19] bg-[#FC9A19]/15 px-3 py-1">
                      Ключевой блок
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Morning / Afternoon description */}
      <section className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <Reveal direction="left">
            <div className="border-l-4 border-[#FC9A19] pl-7">
              <h3 className="font-serif font-semibold text-[#1a1a1a] text-[22px] md:text-[28px] leading-[1.2] mb-5">
                {t("morningLabel")}
              </h3>
              <p className="text-[#555] text-[15px] leading-[1.8]">{t("morningBody")}</p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div className="border-l-4 border-[#1a1a1a] pl-7">
              <h3 className="font-serif font-semibold text-[#1a1a1a] text-[22px] md:text-[28px] leading-[1.2] mb-5">
                {t("afternoonLabel")}
              </h3>
              <p className="text-[#555] text-[15px] leading-[1.8]">{t("afternoonBody")}</p>
            </div>
          </Reveal>
        </div>
        <Reveal direction="up">
          <div className="relative w-full aspect-16/6 overflow-hidden">
            <Image
              src="/branded-corridor.jpg"
              alt="Учебный корпус Polyglot International School"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      {/* Tech base */}
      <section className="bg-[#1a1a1a]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <Reveal>
            <span className="inline-block text-[#FC9A19] text-[11px] font-semibold uppercase tracking-widest mb-5">
              {t("techLabel")}
            </span>
            <h2 className="font-serif font-semibold text-white text-[26px] md:text-[36px] leading-[1.2] mb-4">
              {t("techBody")}
            </h2>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10" stagger={0.1}>
            {tech.map((item, i) => (
              <RevealItem key={i}>
                <div className="bg-white/5 overflow-hidden h-full hover:bg-white/10 transition-colors">
                  <div className="relative w-full aspect-4/3 overflow-hidden">
                    <Image
                      src={techImages[i]}
                      alt={item.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-7">
                    <item.Icon size={26} className="text-[#FC9A19] mb-4" />
                    <h4 className="font-semibold text-white text-[15px] mb-3">{item.name}</h4>
                    <p className="text-[#888] text-[13px] leading-[1.7]">{item.desc}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
