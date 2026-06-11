import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface" role="contentinfo">
      <div className="max-w-360 mx-auto px-7.5 pt-16 md:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_160px_220px_200px] gap-10 lg:gap-12">

          <div>
            <Link href="/" aria-label="Polyglot International School — главная страница">
              <Image
                src="/logo_footer.png"
                alt="Polyglot International School — логотип"
                width={130}
                height={72}
                className="object-contain mb-4"
              />
            </Link>
            <p className="text-[#666] text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          <nav aria-label="Разделы школы">
            <h2 className="text-[11px] font-semibold tracking-widest uppercase mb-5 text-accent">
              {t("schoolCol")}
            </h2>
            <ul className="flex flex-col gap-3" role="list">
              {(["link1", "link2", "link3"] as const).map((k) => (
                <li key={k}>
                  <Link
                    href="#"
                    className="text-[#444] hover:text-[#1a1a1a] text-sm transition-colors duration-200"
                  >
                    {t(k)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-semibold tracking-widest uppercase mb-5 text-accent">
              {t("contactsCol")}
            </h2>
            <address className="flex flex-col gap-3 text-sm text-[#444] not-italic">
              <p>{t("address")}</p>
              <a
                href="tel:+998000000000"
                className="hover:text-[#1a1a1a] transition-colors"
              >
                +998 (00) 000-00-00
              </a>
              <a
                href="mailto:info@polyglot.uz"
                className="hover:text-[#1a1a1a] transition-colors"
              >
                info@polyglot.uz
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold tracking-widest uppercase mb-5 text-accent">
              {t("admissionsCol")}
            </h2>
            <p className="text-[#444] text-sm leading-snug mb-6">
              {t("enrollmentNote")}
            </p>
            <Link
              href="/admissions/apply"
              className="inline-block text-[11px] font-semibold tracking-widest uppercase text-white bg-accent hover:bg-accent-hover px-6 py-3 transition-colors duration-200"
            >
              {t("applyBtn")}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ddd8cc]">
        <div className="max-w-360 mx-auto px-7.5 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[#aaa] text-xs">
            {t("copyright", { year })}
          </p>
          <p className="text-[#aaa] text-xs tracking-widest uppercase">
            {t("brand", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
