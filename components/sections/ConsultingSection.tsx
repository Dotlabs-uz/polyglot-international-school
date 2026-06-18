import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ConsultingSection() {
  const t = useTranslations("consulting");

  const steps = [
    { num: "01", title: t("step1Title"), body: t("step1Body") },
    { num: "02", title: t("step2Title"), body: t("step2Body") },
    { num: "03", title: t("step3Title"), body: t("step3Body") },
  ] as const;

  return (
    <section
      className="bg-[#0B1B36] py-16 md:py-20 lg:py-28"
      aria-labelledby="consulting-heading"
    >
      <div className="max-w-360 mx-auto px-7.5">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-14 md:mb-18">
          <Reveal direction="right" className="lg:w-120 shrink-0">
            <h2
              id="consulting-heading"
              className="font-serif font-semibold text-white leading-[1.1] text-[32px] md:text-[40px] lg:text-[46px] mb-6"
            >
              {t("heading")}
            </h2>
            <p className="text-white/55 text-[15px] md:text-[16px] leading-[1.75]">
              {t("body")}
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="flex flex-row lg:flex-col gap-10 lg:gap-8 items-start justify-start lg:justify-center">
            {(["stat1", "stat2"] as const).map((key) => (
              <div key={key} className="flex flex-col gap-1">
                <span className="font-serif font-semibold text-white text-[40px] md:text-[52px] leading-none">
                  {t(`${key}Value`)}
                </span>
                <span className="text-white/45 text-[13px] md:text-[14px]">
                  {t(`${key}Label`)}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        <RevealGroup stagger={0.15} amount={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {steps.map(({ num, title, body }) => (
              <RevealItem key={num}>
                <div className="bg-[#0B1B36] p-8 md:p-10">
                  <span className="block font-serif font-semibold text-[40px] text-white/10 leading-none mb-6 select-none">
                    {num}
                  </span>
                  <h3 className="font-semibold text-white text-[16px] md:text-[17px] mb-3">
                    {title}
                  </h3>
                  <p className="text-white/50 text-[14px] leading-[1.75]">
                    {body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>

      </div>
    </section>
  );
}
