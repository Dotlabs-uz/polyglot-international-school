import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import {
  RiFlaskLine,
  RiVidiconLine,
  RiRobot2Line,
  RiMicLine,
} from "react-icons/ri";
import type { IconType } from "react-icons";

export function DayStructureSection() {
  const t = useTranslations("dayStructure");

  const techItems: Array<{ Icon: IconType; label: string }> = [
    { Icon: RiFlaskLine, label: t("tech1") },
    { Icon: RiVidiconLine, label: t("tech2") },
    { Icon: RiRobot2Line, label: t("tech3") },
    { Icon: RiMicLine, label: t("tech4") },
  ];

  return (
    <section
      className="bg-[#F7F6F2] py-16 md:py-20 lg:py-24"
      aria-labelledby="day-heading"
    >
      <div className="max-w-360 mx-auto px-7.5">

        <Reveal className="mb-12 md:mb-16">
          <h2
            id="day-heading"
            className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[32px] md:text-[40px] lg:text-[46px] max-w-2xl mb-5"
          >
            {t("heading")}
          </h2>
          <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.75] max-w-xl">
            {t("body")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-14">
          <Reveal direction="left" delay={0}>
            <div className="bg-white p-8 md:p-10 border-t-2 border-[#1a1a1a]">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#999] mb-4">
                {t("morningLabel")}
              </p>
              <h3 className="font-serif font-semibold text-[#1a1a1a] text-[22px] md:text-[26px] mb-4">
                {t("morningTitle")}
              </h3>
              <p className="text-[#555] text-[14px] md:text-[15px] leading-[1.75]">
                {t("morningBody")}
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="bg-white p-8 md:p-10 border-t-2 border-[#FC9A19]">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#FC9A19] mb-4">
                {t("afternoonLabel")}
              </p>
              <h3 className="font-serif font-semibold text-[#1a1a1a] text-[22px] md:text-[26px] mb-4">
                {t("afternoonTitle")}
              </h3>
              <p className="text-[#555] text-[14px] md:text-[15px] leading-[1.75]">
                {t("afternoonBody")}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#999] mb-6">
            {t("techLabel")}
          </p>
          <RevealGroup stagger={0.1} amount={0.2}>
            <div className="flex flex-wrap gap-3">
              {techItems.map(({ Icon, label }) => (
                <RevealItem key={label}>
                  <div className="inline-flex items-center gap-2.5 border border-[#dcdcdc] bg-white px-5 py-3 text-[13px] text-[#444]">
                    <Icon size={18} className="text-[#FC9A19]" aria-hidden="true" />
                    {label}
                  </div>
                </RevealItem>
              ))}
            </div>
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
