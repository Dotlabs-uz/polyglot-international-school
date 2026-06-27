"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";

export function AdmissionsPageContent() {
  const t = useTranslations("admissionsPage");

  const track1 = [t("t1s1"), t("t1s2"), t("t1s3"), t("t1s4")];
  const track2 = [t("t2s1"), t("t2s2"), t("t2s3"), t("t2s4")];
  const docs = [t("doc1"), t("doc2"), t("doc3"), t("doc4"), t("doc5")];
  const timeline = [t("time1"), t("time2"), t("time3"), t("time4")];

  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <section className="max-w-360 mx-auto px-7.5 pt-10 pb-14 md:pt-14 md:pb-20">
        <Reveal>
          <span className="inline-block text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest mb-5">
            {t("label")}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[28px] md:text-[42px] lg:text-[54px] max-w-4xl mb-8">
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
              src="/reception-hall.jpg"
              alt={t("heading")}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      {/* Two admission tracks */}
      <section className="bg-[#f8f7f4]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Track 1 */}
            <Reveal direction="left">
              <div className="bg-white p-8 md:p-10 h-full border-t-4 border-[#C4911E]">
                <span className="inline-block text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest mb-5">
                  {t("t1Label")}
                </span>
                <h2 className="font-serif font-semibold text-[#1a1a1a] text-[22px] md:text-[28px] leading-[1.25] mb-6">
                  {t("t1Heading")}
                </h2>
                <p className="text-[#555] text-[14px] md:text-[15px] leading-[1.8] mb-8">
                  {t("t1Body")}
                </p>
                <ul className="flex flex-col gap-3">
                  {track1.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C4911E] shrink-0" />
                      <span className="text-[#333] text-[14px] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Track 2 */}
            <Reveal direction="right" delay={0.1}>
              <div className="bg-white p-8 md:p-10 h-full border-t-4 border-[#142444]">
                <span className="inline-block text-[#142444] text-[11px] font-semibold uppercase tracking-widest mb-5">
                  {t("t2Label")}
                </span>
                <h2 className="font-serif font-semibold text-[#1a1a1a] text-[22px] md:text-[28px] leading-[1.25] mb-6">
                  {t("t2Heading")}
                </h2>
                <p className="text-[#555] text-[14px] md:text-[15px] leading-[1.8] mb-8">
                  {t("t2Body")}
                </p>
                <ul className="flex flex-col gap-3">
                  {track2.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#142444] shrink-0" />
                      <span className="text-[#333] text-[14px] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Documents + Timeline */}
      <section className="max-w-360 mx-auto px-7.5 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Documents */}
          <Reveal direction="left">
            <span className="inline-block text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest mb-5">
              {t("docsLabel")}
            </span>
            <h2 className="font-serif font-semibold text-[#1a1a1a] text-[22px] md:text-[28px] leading-[1.25] mb-8">
              {t("docsHeading")}
            </h2>
            <ul className="flex flex-col gap-3">
              {docs.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 py-3 border-b border-[#eee]">
                  <span className="font-mono text-[#C4911E] text-[13px] font-semibold shrink-0 w-5">
                    {i + 1}.
                  </span>
                  <span className="text-[#333] text-[14px] leading-snug">{doc}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Timeline */}
          <Reveal direction="right" delay={0.1}>
            <span className="inline-block text-[#C4911E] text-[11px] font-semibold uppercase tracking-widest mb-5">
              {t("timeLabel")}
            </span>
            <h2 className="font-serif font-semibold text-[#1a1a1a] text-[22px] md:text-[28px] leading-[1.25] mb-8">
              {t("timeHeading")}
            </h2>
            <ul className="flex flex-col gap-0">
              {timeline.map((step, i) => (
                <li key={i} className="flex items-start gap-5 py-5 border-b border-[#eee]">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C4911E] text-white text-[13px] font-bold flex items-center justify-center"
                  >
                    {i + 1}
                  </span>
                  <p className="text-[#333] text-[14px] leading-snug pt-1.5">{step}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C4911E]">
        <div className="max-w-360 mx-auto px-7.5 py-14 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <Reveal>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-white/80 mb-3">
              {t("ctaLabel")}
            </span>
            <h2 className="font-serif font-semibold text-white text-[26px] md:text-[36px] leading-[1.2]">
              {t("heading")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center bg-white text-[#1a1a1a] font-semibold text-[13px] uppercase tracking-widest px-10 py-4 hover:bg-[#f0f0f0] transition-colors whitespace-nowrap"
            >
              {t("cta")}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
