export const SLIDES = [
  { num: 1,  href: "/"           },
  { num: 2,  href: "/about"      },
  { num: 3,  href: "/challenges" },
  { num: 4,  href: "/campus"     },
  { num: 5,  href: "/health"     },
  { num: 6,  href: "/school-app" },
  { num: 7,  href: "/education"  },
  { num: 8,  href: "/grades"     },
  { num: 9,  href: "/results"    },
  { num: 10, href: "/consulting" },
  { num: 11, href: "/life"       },
  { num: 12, href: "/founder"    },
  { num: 13, href: "/admissions" },
  { num: 14, href: "/contacts"   },
] as const;

export const TOTAL_SLIDES = SLIDES.length;

export function getPrevNext(current: number) {
  const prev = SLIDES.find((s) => s.num === current - 1) ?? null;
  const next = SLIDES.find((s) => s.num === current + 1) ?? null;
  return { prev, next };
}
