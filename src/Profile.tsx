const Profile = () => {
  const stats = [
    { label: "Streak", value: "12 days" },
    { label: "Reflections", value: "68 saved" },
    { label: "Shared", value: "24 posts" },
  ];

  const preferences = [
    { name: "Daily reminder", detail: "6:30 AM + gentle nudge at noon" },
    { name: "Privacy", detail: "Default to private journal entries" },
    { name: "Share to group", detail: "Prompt to share after saving" },
  ];

  const focus = [
    { title: "Current series", detail: "Abide · John 15", tone: "primary" },
    { title: "Serving lane", detail: "Coffee + hospitality team" },
    { title: "Growth goal", detail: "21-day streak · SOAP weekly share" },
  ];

  return (
    <div className="space-y-5 sm:space-y-6">
      <section className="ink-card rounded-3xl border border-[#cbcbcb] bg-linear-to-br from-[#fffff3] via-white to-[#e6ecf5] p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6d8196]">
              Profile & Rhythm
            </p>
            <h2 className="text-2xl font-semibold text-[#2f2f2f]">
              Steady habits, clear focus.
            </h2>
            <p className="text-sm text-[#4a4a4a]">
              Adjust reminders, privacy, and what you want to grow this season.
            </p>
          </div>
          <button
            className="rounded-full border border-[#cbcbcb] bg-[#2f2f2f] px-4 py-2 text-sm font-semibold text-[#ffffe3] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            type="button"
          >
            Edit profile
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="ink-card rounded-2xl border border-[#cbcbcb] bg-white/80 p-4 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-[#6d8196]">
              {item.label}
            </p>
            <p className="text-xl font-semibold text-[#2f2f2f]">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-3">
          <div className="ink-card space-y-3 rounded-3xl border border-[#cbcbcb] bg-white/85 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6d8196]">
              Preferences
            </p>
            <div className="space-y-3">
              {preferences.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-[#cbcbcb] bg-white/70 p-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#2f2f2f]">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#4a4a4a]">{item.detail}</p>
                  </div>
                  <span className="h-6 w-10 rounded-full border border-[#cbcbcb] bg-[#e6ecf5] shadow-inner" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="ink-card space-y-3 rounded-2xl border border-[#cbcbcb] bg-[#2f2f2f] p-4 text-[#ffffe3] shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-[#e6ecf5]">
            Focus
          </p>
          <div className="space-y-3">
            {focus.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/20 bg-white/10 p-3"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-[#e6ecf5]">
                  {item.title}
                </p>
                <p className="text-lg font-semibold">{item.detail}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Profile;
