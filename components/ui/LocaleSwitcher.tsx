"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "uz", label: "UZ" },
] as const;

type LocaleCode = (typeof LOCALES)[number]["code"];

export function LocaleSwitcher() {
  const current = useLocale() as LocaleCode;
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = (locale: LocaleCode) => {
    if (locale === current) return;
    router.replace(pathname, { locale });
  };

  return (
    <div
      className="flex items-center"
      role="group"
      aria-label="Language selector"
    >
      {LOCALES.map(({ code, label }, i) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          aria-label={`Switch to ${label}`}
          aria-pressed={current === code}
          className={cn(
            "text-[10px] font-medium tracking-widest uppercase px-2 py-0.5 transition-colors duration-200",
            current === code ? "text-white" : "text-white/40 hover:text-white/70",
            i < LOCALES.length - 1 && "border-r border-white/20"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
