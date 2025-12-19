import type { FormEvent } from "react";

const Devos = () => {
  const plan = [
    { title: "Today", passage: "John 15:1-11", focus: "Abiding + fruit" },
    {
      title: "Tomorrow",
      passage: "Psalm 23",
      focus: "Resting in the Shepherd",
    },
    { title: "Friday", passage: "Mark 4:35-41", focus: "Peace in the storm" },
  ];

  const stats = [
    { label: "Streak", value: "12 days", detail: "Keep 21-day rhythm." },
    { label: "This week", value: "3 devos", detail: "2 journaled · 1 voice." },
    {
      label: "Reminders",
      value: "6:30 AM",
      detail: "Quiet start + midday check.",
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      <section className="ink-card rounded-3xl border border-[#cbcbcb] bg-linear-to-br from-[#fffff3] via-white to-[#e6ecf5] p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6d8196]">
              Devotional Flow
            </p>
            <h2 className="text-2xl font-semibold text-[#2f2f2f]">
              Stay anchored, one passage at a time.
            </h2>
            <p className="text-sm text-[#4a4a4a]">
              Log SOAP notes, track streaks, and mark prayers answered.
            </p>
          </div>
          <button
            className="rounded-full border border-[#cbcbcb] bg-[#2f2f2f] px-4 py-2 text-sm font-semibold text-[#ffffe3] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            type="button"
          >
            Start timer
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
            <p className="text-sm text-[#4a4a4a]">{item.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="ink-card space-y-3 rounded-3xl border border-[#cbcbcb] bg-white/85 p-5 shadow-sm"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#6d8196]">
              Quick Log
            </p>
            <h3 className="text-xl font-semibold text-[#2f2f2f]">
              Capture today’s devo
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-sm text-[#2f2f2f]">
              Passage
              <input
                type="text"
                name="passage"
                placeholder="John 15:1-11"
                className="rounded-xl border border-[#cbcbcb] bg-white/80 px-3 py-2 text-sm text-[#2f2f2f] outline-none transition focus:border-[#6d8196] focus:ring-2 focus:ring-[#6d8196]/30"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-[#2f2f2f]">
              How are you feeling?
              <select
                name="feeling"
                className="rounded-xl border border-[#cbcbcb] bg-white/80 px-3 py-2 text-sm text-[#2f2f2f] outline-none transition focus:border-[#6d8196] focus:ring-2 focus:ring-[#6d8196]/30"
              >
                <option>Calm</option>
                <option>Expectant</option>
                <option>Stretched</option>
                <option>Grateful</option>
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-1 text-sm text-[#2f2f2f]">
            SOAP / takeaway
            <textarea
              name="notes"
              rows={4}
              placeholder="Scripture, observation, application, prayer…"
              className="rounded-xl border border-[#cbcbcb] bg-white/80 px-3 py-2 text-sm text-[#2f2f2f] outline-none transition focus:border-[#6d8196] focus:ring-2 focus:ring-[#6d8196]/30"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              className="rounded-full border border-[#2f2f2f] bg-[#2f2f2f] px-4 py-2 text-sm font-semibold text-[#ffffe3] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Save privately
            </button>
            <button
              type="button"
              className="rounded-full border border-[#cbcbcb] bg-[#e6ecf5] px-4 py-2 text-sm font-semibold text-[#2f2f2f] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Share with group
            </button>
          </div>
        </form>

        <div className="ink-card space-y-4 rounded-3xl border border-[#cbcbcb] bg-white/85 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6d8196]">
                Reading Queue
              </p>
              <h3 className="text-xl font-semibold text-[#2f2f2f]">
                Upcoming passages
              </h3>
            </div>
            <span className="rounded-full bg-[#e6ecf5] px-3 py-1 text-xs font-semibold text-[#2f2f2f]">
              Week plan
            </span>
          </div>

          <div className="space-y-3">
            {plan.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#cbcbcb] bg-white/70 p-3 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs text-[#6d8196]">
                  <span>{item.title}</span>
                  <span>{item.passage}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#2f2f2f]">
                  {item.focus}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Devos;
