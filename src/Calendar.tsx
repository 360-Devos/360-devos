const Calendar = () => {
  const schedule = [
    {
      day: "Tue",
      date: "Jan 14",
      title: "Small Group",
      detail: "Loft · 7:30 PM · Meal + devo",
      badge: "Social",
    },
    {
      day: "Thu",
      date: "Jan 16",
      title: "Serve Team",
      detail: "Coffee + setup planning · 6:30 PM",
      badge: "Serve",
    },
    {
      day: "Sun",
      date: "Jan 19",
      title: "Gathering",
      detail: "9:00 AM + 11:00 AM · worship + teaching",
      badge: "Gather",
    },
  ];

  const focus = [
    {
      label: "Scripture focus",
      value: "John 15",
      detail: "Abiding and fruitfulness",
    },
    {
      label: "Prayer theme",
      value: "Rest + Renewal",
      detail: "Lift up students during finals",
    },
    {
      label: "Habits",
      value: "12-day streak",
      detail: "Aim for 21 · gentle reminders on",
    },
  ];

  return (
    <div className="space-y-5 sm:space-y-6">
      <section className="ink-card rounded-3xl border border-[#cbcbcb] bg-linear-to-r from-[#fffff3] via-white to-[#e6ecf5] p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6d8196]">
              Rhythm Calendar
            </p>
            <h2 className="text-2xl font-semibold text-[#2f2f2f]">
              Stay ahead of gatherings and devotionals.
            </h2>
            <p className="text-sm text-[#4a4a4a]">
              One place for small groups, serving, and the weekly scripture
              focus.
            </p>
          </div>
          <button
            className="rounded-full border border-[#cbcbcb] bg-white/80 px-4 py-2 text-sm font-semibold text-[#2f2f2f] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            type="button"
          >
            Add to calendar
          </button>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          {schedule.map((item) => (
            <article
              key={item.title}
              className="ink-card grid grid-cols-[auto,1fr] items-center gap-3 rounded-2xl border border-[#cbcbcb] bg-white/80 p-4 shadow-sm"
            >
              <div className="flex flex-col items-center justify-center rounded-2xl border border-[#cbcbcb] bg-[#e6ecf5] px-3 py-2 text-sm font-semibold text-[#2f2f2f]">
                <span className="text-xs uppercase tracking-[0.2em] text-[#6d8196]">
                  {item.day}
                </span>
                <span>{item.date}</span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-[#2f2f2f]">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-[#2f2f2f] px-3 py-1 text-xs font-semibold text-[#ffffe3]">
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-[#4a4a4a]">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="ink-card space-y-3 rounded-2xl border border-[#cbcbcb] bg-white/80 p-4 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6d8196]">
            Weekly Focus
          </p>
          {focus.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[#cbcbcb] bg-white/70 p-3"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-[#6d8196]">
                {item.label}
              </p>
              <p className="text-lg font-semibold text-[#2f2f2f]">
                {item.value}
              </p>
              <p className="text-sm text-[#4a4a4a]">{item.detail}</p>
            </div>
          ))}
        </aside>
      </section>
    </div>
  );
};

export default Calendar;
