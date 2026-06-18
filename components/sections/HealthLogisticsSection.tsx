import { useTranslations } from "next-intl";
import {
  RiWindyLine,
  RiRestaurantLine,
  RiCarLine,
} from "react-icons/ri";
import type { IconType } from "react-icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function HealthLogisticsSection() {
  const t = useTranslations("healthLogistics");

  const items: Array<{ Icon: IconType; title: string; body: string }> = [
    { Icon: RiWindyLine, title: t("airTitle"), body: t("airBody") },
    { Icon: RiRestaurantLine, title: t("nutritionTitle"), body: t("nutritionBody") },
    { Icon: RiCarLine, title: t("transferTitle"), body: t("transferBody") },
  ];

  return (
    <section
      className="bg-[#F7F6F2] py-16 md:py-20 lg:py-24"
      aria-labelledby="health-heading"
    >
      <div className="max-w-360 mx-auto px-7.5">
        <Reveal className="mb-12 md:mb-16">
          <h2
            id="health-heading"
            className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[32px] md:text-[40px] lg:text-[46px] max-w-2xl"
          >
            {t("heading")}
          </h2>
          <p className="mt-5 text-[#555] text-[15px] md:text-[16px] leading-[1.75] max-w-xl">
            {t("body")}
          </p>
        </Reveal>

        <RevealGroup stagger={0.13} amount={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e0dfd8]">
            {items.map(({ Icon, title, body }) => (
              <RevealItem key={title}>
                <div className="bg-[#F7F6F2] p-8 md:p-10 flex flex-col gap-5">
                  <Icon size={36} className="text-[#FC9A19]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#1a1a1a] text-[17px] md:text-[18px]">
                    {title}
                  </h3>
                  <p className="text-[#555] text-[14px] md:text-[15px] leading-[1.75]">
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
