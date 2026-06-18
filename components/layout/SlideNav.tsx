import { Link } from "@/i18n/navigation";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { getPrevNext, TOTAL_SLIDES } from "@/lib/slides";

interface SlideNavProps {
  current: number;
}

export function SlideNav({ current }: SlideNavProps) {
  const { prev, next } = getPrevNext(current);

  return (
    <nav
      aria-label="Навигация по презентации"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-t border-[#e8e8e8]"
    >
      <div className="max-w-360 mx-auto px-7.5 h-13 flex items-center justify-between gap-4">

        <span className="hidden sm:block text-[10px] font-medium tracking-[0.2em] uppercase text-[#bbb] shrink-0">
          Polyglot International School
        </span>

        <div className="flex items-center gap-5 ml-auto">
          {prev ? (
            <Link
              href={prev.href}
              className="flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-[#888] hover:text-[#1a1a1a] transition-colors duration-200"
              aria-label="Предыдущая страница"
            >
              <RiArrowLeftLine size={14} aria-hidden="true" />
              <span className="hidden sm:inline">Назад</span>
            </Link>
          ) : (
            <span className="w-14" />
          )}

          <span className="font-mono text-[13px] text-[#1a1a1a] tabular-nums w-14 text-center">
            {String(current).padStart(2, "0")}&thinsp;/&thinsp;{String(TOTAL_SLIDES).padStart(2, "0")}
          </span>

          {next ? (
            <Link
              href={next.href}
              className="flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-[#888] hover:text-[#1a1a1a] transition-colors duration-200"
              aria-label="Следующая страница"
            >
              <span className="hidden sm:inline">Далее</span>
              <RiArrowRightLine size={14} aria-hidden="true" />
            </Link>
          ) : (
            <span className="w-14" />
          )}
        </div>

      </div>
    </nav>
  );
}
