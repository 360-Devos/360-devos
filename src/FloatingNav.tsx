import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

type IconKey = "home" | "social" | "book" | "calendar" | "profile";

export type NavItem = {
  label: string;
  to: string;
  icon: IconKey;
};

const iconStroke = "#2f2f2f";

const Icon = ({ name, active }: { name: IconKey; active: boolean }) => {
  const stroke = active ? "#ffffe3" : iconStroke;
  const common = {
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };

  switch (name) {
    case "home":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <path d="M4.5 10.5 12 4l7.5 6.5" {...common} />
          <path d="M6 10.5V19h4.5v-4h3V19H18v-8.5" {...common} />
        </svg>
      );
    case "social":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <circle cx="8" cy="9" r="3" {...common} />
          <circle cx="16" cy="9" r="3" {...common} />
          <path d="M5 19c0-2 1.5-3.5 3.5-3.5h2" {...common} />
          <path d="M14.5 15.5H16c2 0 3.5 1.5 3.5 3.5" {...common} />
        </svg>
      );
    case "book":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <path d="M7 5h10v14H7a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z" {...common} />
          <path d="M7 16h10" {...common} />
        </svg>
      );
    case "calendar":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="5" width="16" height="15" rx="3" {...common} />
          <path d="M8 3.5V7" {...common} />
          <path d="M16 3.5V7" {...common} />
          <path d="M4 10h16" {...common} />
        </svg>
      );
    case "profile":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="9" r="3.5" {...common} />
          <path d="M6 20c0-3 2.5-5 6-5s6 2 6 5" {...common} />
        </svg>
      );
    default:
      return null;
  }
};

const FloatingNav = ({ navItems }: { navItems: NavItem[] }) => {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0); // 0 = fully visible, 1 = fully hidden
  const lastY = useRef(0);
  const rafPending = useRef(false);
  const progressRef = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const clamp = (value: number) => Math.min(1, Math.max(0, value));

    const handleScroll = () => {
      const currentY = globalThis.scrollY;
      const delta = currentY - lastY.current;
      lastY.current = currentY;

      if (currentY < 12) {
        progressRef.current = 0;
        setProgress(0);
        return;
      }

      if (rafPending.current) return;
      rafPending.current = true;

      requestAnimationFrame(() => {
        const next = clamp(progressRef.current + delta / 220);
        progressRef.current = next;
        setProgress(next);
        rafPending.current = false;
      });
    };

    globalThis.addEventListener("scroll", handleScroll, { passive: true });
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = navItems.findIndex((item) =>
    item.to === "/" ? pathname === "/" : pathname.startsWith(item.to)
  );
  const activeIndexSafe = activeIndex >= 0 ? activeIndex : 0;

  const measureIndicator = (index: number) => {
    if (!containerRef.current) return;
    const target = itemRefs.current[index];
    if (!target) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    setIndicator({
      left: rect.left - containerRect.left,
      width: rect.width,
    });
  };

  useLayoutEffect(() => {
    measureIndicator(activeIndexSafe);
  }, [activeIndexSafe, pathname]);

  useEffect(() => {
    const handleResize = () => measureIndicator(activeIndexSafe);
    globalThis.addEventListener("resize", handleResize);
    return () => globalThis.removeEventListener("resize", handleResize);
  }, [activeIndexSafe]);

  const translateY = 16 + progress * 110; // px; hides faster when scrolling quickly
  const opacity = Math.max(0, 1 - progress * 1.2);

  return (
    <nav
      className="fixed inset-x-0 bottom-9 z-20 px-5 sm:hidden transition-transform duration-150 ease-out"
      style={{ transform: `translateY(${translateY}px)`, opacity }}
    >
      <div
        ref={containerRef}
        className="ink-card relative mx-auto grid max-w-xl items-stretch gap-1.5 overflow-hidden rounded-full bg-white/85 p-2.5 shadow-lg backdrop-blur-lg"
        style={{
          gridTemplateColumns: `repeat(${navItems.length}, minmax(0, 1fr))`,
        }}
      >
        <div
          className="pointer-events-none absolute left-0 top-1 bottom-1 rounded-[999px] bg-[#2f2f2f] shadow-md transition-all duration-200 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
        {navItems.map((item, idx) => {
          const highlighted = idx === activeIndexSafe;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              className={`relative z-10 flex h-full flex-col items-center justify-center gap-1 rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${
                highlighted ? "text-[#ffffe3]" : "text-[#2f2f2f]"
              }`}
            >
              <Icon name={item.icon} active={highlighted} />
              <span
                className={highlighted ? "text-[#ffffe3]" : "text-[#2f2f2f]"}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default FloatingNav;
