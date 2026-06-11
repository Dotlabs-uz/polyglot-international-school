"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

export function Header() {
  const t = useTranslations("header");
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute top-7.5 left-0 right-0 z-50" role="banner">
        <div className="max-w-360 mx-auto px-7.5">
          <div className="flex items-center justify-between h-18 lg:h-21">

            <button
              className="flex items-center gap-2.5 text-white group shrink-0"
              onClick={() => setOpen(true)}
              aria-label="Открыть меню"
              aria-expanded={open}
              aria-controls="main-navigation"
            >
              <RiMenuLine size={18} className="group-hover:opacity-70 transition-opacity" aria-hidden="true" />
              <span className="text-[11px] font-medium tracking-widest uppercase hidden sm:inline">
                {t("menu")}
              </span>
            </button>

            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2"
              aria-label="Polyglot International School — главная страница"
            >
              <Image
                src="/logo_header.png"
                alt="Polyglot International School — премиальная частная школа в Самарканде"
                width={54}
                height={54}
                className="object-contain"
                priority
              />
            </Link>

            <div className="flex items-center gap-5 shrink-0">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </header>

      <nav
        id="main-navigation"
        className={cn(
          "fixed inset-0 z-100 transition-all duration-300",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
        aria-label="Основная навигация"
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/55 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <div
          className={cn(
            "absolute top-0 left-0 h-full w-80 bg-primary flex flex-col transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "-translate-x-full"
          )}
          role="dialog"
          aria-modal={open}
          aria-label="Меню навигации"
        >
          <div className="flex items-center justify-between px-7.5 py-7 border-b border-white/10">
            <span className="text-white text-[11px] font-medium tracking-widest uppercase">
              {t("menu")}
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Закрыть меню"
            >
              <RiCloseLine size={22} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex-1 px-7.5 py-8" aria-label="Меню разделов">
            <ul className="flex flex-col gap-0.5" role="list">
              {(
                ["about", "education", "campus", "life", "admissions", "contacts"] as const
              ).map((key) => (
                <li key={key}>
                  <Link
                    href={`/${key === "about" ? "about" : key}`}
                    className="block text-white/75 hover:text-white font-serif text-[26px] py-3 transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-7.5 pb-10">
            <Link
              href="/admissions/apply"
              className="block w-full text-center text-[11px] font-semibold tracking-widest uppercase text-white bg-accent hover:bg-accent-hover py-4 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {t("apply")}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
