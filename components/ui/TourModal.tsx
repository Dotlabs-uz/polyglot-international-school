"use client";

import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMaskInput } from "react-imask";
import {
  RiCloseLine,
  RiTelegramLine,
  RiCheckLine,
  RiCalendarLine,
  RiUserLine,
  RiPhoneLine,
} from "react-icons/ri";

const ease = [0.16, 1, 0.3, 1] as const;

const BENEFITS = [
  "Индивидуальная экскурсия по школе",
  "Первыми увидите классы, лаборатории и спортивные пространства",
  "Личное знакомство с иностранными преподавателями",
  "Бесплатное диагностическое тестирование для ребёнка",
  "Бесплатная беседа с психологом",
  "Специальное предложение при поступлении",
  "Бесплатный трансфер до школы и обратно",
];

type Props = { open: boolean; onClose: () => void };

export function TourModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      "📋 Заявка на экскурсию — Polyglot International School",
      "",
      `👤 Имя: ${name}`,
      `📱 Телефон: ${phone}`,
      day ? `📅 Удобный день: ${day}` : "",
      "",
      "Отправлено с сайта polyglot.uz",
    ].filter((l, i, arr) => !(l === "" && arr[i - 1] === ""));

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://t.me/share/url?url=polyglot.uz&text=${text}`, "_blank");
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="bd"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-400 bg-black/60 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
            aria-hidden="true"
          />

          <div
            className="fixed inset-0 z-401 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Записаться на экскурсию"
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.38, ease }}
              className="relative bg-white w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold top bar */}
              <div className="h-1 bg-[#C4911E]" />

              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Закрыть"
                className="absolute top-4 right-4 z-10 p-2 text-[#1a1a1a]/30 hover:text-[#1a1a1a] transition-colors"
              >
                <RiCloseLine size={22} />
              </button>

              <div className="grid md:grid-cols-2">

                {/* Left — benefits */}
                <div className="bg-[#142444] p-7 sm:p-9 flex flex-col">
                  <div className="flex items-center gap-2 mb-5">
                    <RiCalendarLine size={13} className="text-[#C4911E]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C4911E]">
                      Экскурсия в школу
                    </span>
                  </div>

                  <h2 className="font-serif font-semibold text-white text-[18px] sm:text-[20px] leading-[1.3] mb-8">
                    Прямо сейчас запишитесь на экскурсию в школу
                  </h2>

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 mb-5">
                    Что получает родитель:
                  </p>

                  <ul className="flex flex-col gap-3.5 flex-1">
                    {BENEFITS.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="shrink-0 mt-0.5 w-4.5 h-4.5 rounded-full bg-[#C4911E]/20 flex items-center justify-center">
                          <RiCheckLine size={10} className="text-[#C4911E]" />
                        </span>
                        <span className="text-white/75 text-[13px] leading-[1.6]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — form */}
                <form onSubmit={handleSubmit} className="p-7 sm:p-9 flex flex-col gap-5">
                  <h3 className="font-serif font-semibold text-[#1a1a1a] text-[18px] leading-[1.3] mb-1">
                    Ваши данные
                  </h3>

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#888]">
                      Имя и фамилия <span className="text-[#C4911E]">*</span>
                    </label>
                    <div className="relative">
                      <RiUserLine
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#bbb]"
                        aria-hidden="true"
                      />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Иванов Иван"
                        className="w-full pl-9 pr-4 py-3 border border-[#e0e0e0] focus:border-[#C4911E] focus:outline-none text-[14px] text-[#1a1a1a] placeholder:text-[#bbb] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#888]">
                      Номер телефона <span className="text-[#C4911E]">*</span>
                    </label>
                    <div className="relative">
                      <RiPhoneLine
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#bbb]"
                        aria-hidden="true"
                      />
                      <IMaskInput
                        mask="+998 (00) 000-00-00"
                        value={phone}
                        onAccept={(v: string) => setPhone(v)}
                        placeholder="+998 (90) 000-00-00"
                        required
                        className="w-full pl-9 pr-4 py-3 border border-[#e0e0e0] focus:border-[#C4911E] focus:outline-none text-[14px] text-[#1a1a1a] placeholder:text-[#bbb] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Day (optional) */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#888]">
                      Удобный день <span className="text-[#bbb] font-normal normal-case tracking-normal">— необязательно</span>
                    </label>
                    <div className="relative">
                      <RiCalendarLine
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#bbb]"
                        aria-hidden="true"
                      />
                      <input
                        type="date"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full pl-9 pr-4 py-3 border border-[#e0e0e0] focus:border-[#C4911E] focus:outline-none text-[14px] text-[#1a1a1a] transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-auto flex items-center justify-center gap-2.5 w-full bg-[#142444] hover:bg-[#1c3060] text-white font-semibold text-[12px] uppercase tracking-widest py-4 transition-colors duration-200"
                  >
                    <RiTelegramLine size={18} />
                    Оставить заявку в Telegram
                  </button>
                </form>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
