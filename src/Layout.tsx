import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import FloatingNav, { NavItem } from "./FloatingNav.tsx";

const navItems: NavItem[] = [
  { label: "Calendar", to: "/calendar", icon: "calendar" },
  { label: "Devos", to: "/devos", icon: "book" },
  { label: "Home", to: "/", icon: "home" },
  { label: "Social", to: "/social", icon: "social" },
  { label: "Profile", to: "/profile", icon: "profile" },
];

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#ffffe3] text-[#2f2f2f]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(109,129,150,0.14),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(75,75,75,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,227,0.6),rgba(203,203,203,0.2))]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-16">
        <header className="flex items-center justify-between gap-3 rounded-2xl border border-[#cbcbcb] bg-white/70 p-4 shadow-sm backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6d8196]">
              Ink Wash Rhythm
            </p>
            <h1 className="text-2xl font-semibold text-[#2f2f2f]">360 Devos</h1>
            <p className="text-sm text-[#4a4a4a]">
              Keep your streak steady and your community close.
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => navigate("/devos")}
              className="rounded-full border border-[#cbcbcb] bg-[#fffff3] px-4 py-2 text-sm font-medium text-[#2f2f2f] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Log Devo
            </button>
            <button
              type="button"
              onClick={() => navigate("/calendar")}
              className="rounded-full border border-transparent bg-[#6d8196] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Upcoming
            </button>
          </div>
        </header>

        <nav className="mt-4 hidden rounded-2xl border border-[#cbcbcb] bg-white/70 p-2 shadow-sm backdrop-blur sm:block">
          <ul className="flex flex-wrap items-center gap-2">
            {navItems.map((item) => {
              const active = item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);

              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-[#2f2f2f] text-[#ffffe3]"
                        : "text-[#2f2f2f] hover:bg-[#e6ecf5]"
                    }`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <main className="mt-6 flex-1 pb-8">
          <Outlet />
        </main>
      </div>

      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Layout;
