"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { RiArrowLeftLine } from "react-icons/ri";

type BusinessReadinessSlug = "friday-talk" | "practical-skills" | "culture";

export function BusinessReadinessPageContent({ slug }: { slug: BusinessReadinessSlug }) {
  const t = useTranslations(`businessReadinessPage.${slug}`);
  const tBack = useTranslations("businessReadinessPage");

  const points = t.raw("points") as Array<{ title: string; body: string }>;

  return (
    <div className="flex-1 bg-white">
      <section className="max-w-360 mx-auto px-7.5 pt-10 pb-8">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#1a1a1a] text-[13px] transition-colors"
          >
            <RiArrowLeftLine size={15} />
            {tBack("backLabel")}
          </Link>
        </Reveal>
      </section>

      <section className="max-w-360 mx-auto px-7.5 pb-14 md:pb-20">
        <Reveal>
          <span className="inline-block text-accent text-[11px] font-semibold uppercase tracking-widest mb-5">
            {t("label")}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[28px] md:text-[42px] lg:text-[52px] max-w-3xl mb-8">
            {t("heading")}
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="text-[#555] text-[16px] md:text-[18px] leading-[1.8] max-w-2xl mb-12">
            {t("intro")}
          </p>
        </Reveal>
        <Reveal delay={0.2} direction="up">
          <div className="relative w-full aspect-16/8 overflow-hidden">
            <Image
              src={t("image")}
              alt={t("heading")}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-[#f8f7f4]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <RevealGroup className="grid sm:grid-cols-2 gap-6" stagger={0.1}>
            {points.map((point, i) => (
              <RevealItem key={i}>
                <div className="bg-white p-7 h-full">
                  <span className="font-serif font-bold text-accent text-[28px] leading-none block mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-[#1a1a1a] text-[16px] mb-3">{point.title}</h3>
                  <p className="text-[#666] text-[14px] leading-[1.7]">{point.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
