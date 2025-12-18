import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home.tsx";

function Layout() {
  return (
    <div className="min-h-screen pb-16">
      <main className="p-4">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 h-16 border-t bg-background pb-[env(safe-area-inset-bottom)]]">
        <div className="mx-auto grid h-full max-w-md grid-cols-3">
          <Tab to="/" label="Home" />
          <Tab to="/search" label="Search" />
          <Tab to="/settings" label="Settings" />
        </div>
      </nav>
    </div>
  );
}

function Tab({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `grid place-items-center text-sm font-medium ${
          isActive ? "opacity-100" : "opacity-60"
        }`}
    >
      {label}
    </NavLink>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <>Search</> },
      { path: "/settings", element: <>Settings</> },
      { path: "/deal/:id", element: <>Deal detail</> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
