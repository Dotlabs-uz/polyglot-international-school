import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID   = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  if (!BOT_TOKEN || !CHAT_ID) {
    return NextResponse.json({ error: "Bot not configured" }, { status: 503 });
  }

  const { name, phone, day } = await req.json().catch(() => ({}));

  if (!name || !phone) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const now = new Date().toLocaleString("ru-RU", {
    timeZone: "Asia/Samarkand",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const text = [
    "📋 *Новая заявка на экскурсию*",
    "🏫 Polyglot International School",
    "",
    `👤 *Имя:* ${name}`,
    `📱 *Телефон:* ${phone}`,
    day ? `📅 *Удобный день:* ${day}` : null,
    "",
    `⏰ ${now} (Самарканд)`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const res = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
    }
  );

  if (!res.ok) {
    const err = await res.json();
    return NextResponse.json({ error: err }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
