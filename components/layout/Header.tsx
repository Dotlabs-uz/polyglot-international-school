"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine, RiArrowRightUpLine, RiMapPinLine, RiPhoneLine, RiMailLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { useMenu } from "@/components/layout/MenuContext";

const menuEase = [0.16, 1, 0.3, 1] as const;

const NAV_KEYS = ["home", "about", "education", "campus", "life", "admissions", "contacts"] as const;

export function Header() {
  const t = useTranslations("header");
  const tFooter = useTranslations("footer");
  const { open, setOpen } = useMenu();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <header
        role="banner"
        className={cn(
          "left-0 right-0 z-50 transition-colors duration-300",
          isHome
            ? "absolute top-7.5"
            : "fixed top-0 bg-white/95 backdrop-blur-sm border-b border-[#ebebeb]"
        )}
      >
        <div className="max-w-360 mx-auto px-7.5">
          <div className="flex items-center justify-between h-18 lg:h-21">

            <button
              className={cn(
                "flex items-center gap-2.5 group shrink-0",
                isHome ? "text-white" : "text-[#1a1a1a]"
              )}
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
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
              aria-label="Polyglot International School — главная страница"
            >
              <Image
                src="/logo_header_full.png"
                alt="Polyglot International School — премиальная частная школа в Самарканде"
                width={233}
                height={50}
                className="object-contain h-10 lg:h-12 w-auto"
                priority
              />
            </Link>

            <div className="flex items-center gap-4 shrink-0">
              <LocaleSwitcher />
              <a
                href="tel:+998904703000"
                aria-label="Позвонить в школу"
                className={cn(
                  "hidden sm:flex items-center gap-2.5 px-4 py-2 border transition-all duration-300 group",
                  isHome
                    ? "border-white/40 text-white hover:bg-white hover:text-[#1a1a1a]"
                    : "border-[#C4911E] text-[#C4911E] hover:bg-[#C4911E] hover:text-white"
                )}
              >
                <RiPhoneLine size={15} className="shrink-0" aria-hidden="true" />
                <span className="text-[11px] font-semibold tracking-widest uppercase hidden md:inline">
                  +998 90 470 30 00
                </span>
              </a>
              <a
                href="tel:+998904703000"
                aria-label="Позвонить в школу"
                className={cn(
                  "sm:hidden flex items-center justify-center w-9 h-9 border transition-all duration-300",
                  isHome
                    ? "border-white/40 text-white hover:bg-white hover:text-[#1a1a1a]"
                    : "border-[#C4911E] text-[#C4911E] hover:bg-[#C4911E] hover:text-white"
                )}
              >
                <RiPhoneLine size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen elite menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: menuEase }}
            className="fixed inset-0 z-100 bg-surface text-[#1a1a1a] flex flex-col justify-between p-6 sm:p-10 md:p-16 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Основная навигация"
            id="main-navigation"
          >
            <div className="absolute inset-4 border border-black/10 pointer-events-none" />

            {/* Top row */}
            <div className="flex items-center justify-between z-10 w-full">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center"
                aria-label="Polyglot International School — главная страница"
              >
                <Image
                  src="/logo_header_full.png"
                  alt="Polyglot International School"
                  width={186}
                  height={40}
                  className="object-contain h-8 sm:h-9 w-auto"
                />
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2.5 px-5 py-2 border border-black/20 hover:border-black/50 text-[10px] font-bold uppercase tracking-[0.15em] transition-all"
                aria-label="Закрыть меню"
              >
                <span className="text-[#1a1a1a]/80 group-hover:text-[#1a1a1a]">{t("close")}</span>
                <RiCloseLine size={15} className="transform group-hover:rotate-90 transition-transform duration-300" aria-hidden="true" />
              </button>
            </div>

            {/* Big editorial links */}
            <div className="my-auto max-w-xl mx-auto w-full space-y-4 text-center sm:text-left pt-10">
              <span className="text-[9.5px] font-bold tracking-[0.25em] text-accent block uppercase">
                — {t("menuTag")} —
              </span>
              <nav className="flex flex-col space-y-1 sm:space-y-2" aria-label="Меню разделов">
                {NAV_KEYS.map((key) => (
                  <Link
                    key={key}
                    href={key === "home" ? "/" : `/${key}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-2 border-b border-black/10 hover:border-black/25 transition-colors w-full text-left"
                  >
                    <span className="text-[25px] sm:text-4xl font-serif text-[#1a1a1a]/80 group-hover:text-accent transition-transform duration-300 group-hover:translate-x-2">
                      {t(`nav.${key}`)}
                    </span>
                    <RiArrowRightUpLine
                      size={18}
                      className="text-black/30 group-hover:text-accent transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Footer info row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-black/10 text-[10.5px] tracking-wider text-[#1a1a1a]/60 z-10 text-left">
              <div className="space-y-1.5 flex items-start gap-2.5">
                <RiMapPinLine size={14} className="text-accent shrink-0 mt-0.5" />
                <p>{tFooter("address")}</p>
              </div>
              <div className="space-y-1.5">
                <a href="mailto:info@polyglot.uz" className="flex items-center gap-2.5 hover:text-accent transition-colors">
                  <RiMailLine size={14} className="text-accent shrink-0" />
                  info@polyglot.uz
                </a>
                <a href="tel:+998904703000" className="flex items-center gap-2.5 hover:text-accent transition-colors">
                  <RiPhoneLine size={14} className="text-accent shrink-0" />
                  +998 90 470 30 00
                </a>
              </div>
              <div className="space-y-1.5">
                <Link
                  href="/apply"
                  onClick={() => setOpen(false)}
                  className="inline-block text-[11px] font-semibold tracking-widest uppercase text-white bg-accent hover:bg-accent-hover px-6 py-3 transition-colors duration-200"
                >
                  {t("apply")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
