"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useState, useRef, useEffect } from "react";
import { RiGlobalLine, RiArrowDownSLine, RiCheckLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "ru", short: "RU", label: "Русский" },
  { code: "en", short: "EN", label: "English" },
  { code: "uz", short: "UZ", label: "O'zbek" },
] as const;

type LocaleCode = (typeof LOCALES)[number]["code"];

export function LocaleSwitcher() {
  const current = useLocale() as LocaleCode;
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onOutside(e: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("touchstart", onOutside);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("touchstart", onOutside);
    };
  }, [open]);

  const currentLocale = LOCALES.find((l) => l.code === current)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Выбрать язык"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-1.5 py-1.5 px-2 transition-colors duration-200",
          isHome
            ? "text-white hover:text-white/70"
            : "text-[#1a1a1a] hover:text-[#C4911E]"
        )}
      >
        <RiGlobalLine size={16} aria-hidden="true" />
        <span className="hidden sm:inline text-[11px] font-semibold tracking-widest uppercase">
          {currentLocale.short}
        </span>
        <RiArrowDownSLine
          size={14}
          aria-hidden="true"
          className={cn("hidden sm:inline transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 z-400 min-w-35 bg-white border border-[#e8e8e8] shadow-xl py-1">
          {LOCALES.map(({ code, short, label }) => (
            <button
              key={code}
              onClick={() => {
                if (code !== current) router.replace(pathname, { locale: code });
                setOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                code === current
                  ? "bg-[#f8f7f4] text-[#C4911E]"
                  : "text-[#333] hover:bg-[#f8f7f4] hover:text-[#1a1a1a]"
              )}
            >
              <span className="text-[10px] font-bold tracking-widest w-5 shrink-0">
                {short}
              </span>
              <span className="text-[13px]">{label}</span>
              {code === current && (
                <RiCheckLine size={14} className="ml-auto text-[#C4911E]" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
