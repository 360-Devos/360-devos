const Home = () => {
  const rhythm = [
    {
      label: "Streak",
      value: "12 days",
      note: "Keep the ink flowing daily.",
    },
    {
      label: "Next Devo",
      value: "John 15:1-11",
      note: "Abide and remain — start in 5 minutes.",
    },
    {
      label: "Prayer Queue",
      value: "3 requests",
      note: "Lift up Lila, team retreat, clarity for finals.",
    },
  ];

  const social = [
    { title: "Small Group", detail: "Thursday 7:30 PM · Irving Park" },
    { title: "Serve Team", detail: "Setup crew needs two more hands." },
    { title: "Share Board", detail: "“He restores my soul” · 14 reflections" },
  ];

  const prompts = [
    "Where did you feel God close today?",
    "Name a tension you’re carrying — surrender it.",
    "One person to encourage before the day ends.",
  ];

  return (
    <div className="space-y-5 sm:space-y-6">
      <section className="ink-card flex flex-col gap-4 rounded-3xl border border-[#cbcbcb] bg-linear-to-br from-[#fffff3] via-white to-[#e6ecf5] p-5 shadow-sm sm:flex-row sm:items-center sm:gap-6 sm:p-6">
        <div className="flex-1 space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6d8196]">
            Daily Center
          </p>
          <h2 className="text-3xl font-semibold text-[#2f2f2f]">
            Pause, breathe, and log today’s devo.
          </h2>
          <p className="text-sm text-[#4a4a4a]">
            Keep your streak, share takeaways with community, and stay aligned
            with the weekly rhythm.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-full border border-[#2f2f2f] bg-[#2f2f2f] px-4 py-2 text-sm font-semibold text-[#ffffe3] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Start Devotional
            </button>
            <button
              type="button"
              className="rounded-full border border-[#cbcbcb] bg-white/80 px-4 py-2 text-sm font-semibold text-[#2f2f2f] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Share Takeaway
            </button>
          </div>
        </div>

        <div className="grid flex-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#cbcbcb] bg-white/80 p-3 text-sm shadow-sm">
            <p className="text-[#6d8196]">Streak</p>
            <p className="text-3xl font-semibold text-[#2f2f2f]">12</p>
            <p className="text-xs text-[#4a4a4a]">
              days steady · keep it going
            </p>
          </div>
          <div className="rounded-2xl border border-[#cbcbcb] bg-white/80 p-3 text-sm shadow-sm">
            <p className="text-[#6d8196]">This week</p>
            <p className="text-lg font-semibold text-[#2f2f2f]">
              Abide in the Vine
            </p>
            <p className="text-xs text-[#4a4a4a]">Focus on John 15:1-11</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {rhythm.map((item) => (
          <article
            key={item.label}
            className="ink-card rounded-2xl border border-[#cbcbcb] bg-white/80 p-4 shadow-sm"
          >
            <p className="text-sm uppercase tracking-[0.12em] text-[#6d8196]">
              {item.label}
            </p>
            <p className="mt-1 text-2xl font-semibold text-[#2f2f2f]">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-[#4a4a4a]">{item.note}</p>
          </article>
        ))}
      </section>

      <section className="ink-card grid gap-4 rounded-3xl border border-[#cbcbcb] bg-white/80 p-5 shadow-sm lg:grid-cols-2">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6d8196]">
                Community Pulse
              </p>
              <h3 className="text-xl font-semibold text-[#2f2f2f]">
                What’s happening this week
              </h3>
            </div>
            <span className="rounded-full bg-[#e6ecf5] px-3 py-1 text-xs font-semibold text-[#2f2f2f]">
              Live
            </span>
          </div>
          <div className="space-y-3">
            {social.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#cbcbcb] bg-white/60 p-3 shadow-sm"
              >
                <p className="text-sm font-semibold text-[#2f2f2f]">
                  {item.title}
                </p>
                <p className="text-sm text-[#4a4a4a]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-[#cbcbcb] bg-[#2f2f2f] p-4 text-[#ffffe3] shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-[#e6ecf5]">
            Reflection Prompts
          </p>
          <h3 className="text-xl font-semibold">Journal in ink-wash calm</h3>
          <ul className="space-y-2">
            {prompts.map((prompt) => (
              <li
                key={prompt}
                className="rounded-xl bg-white/10 px-3 py-2 text-sm text-[#f7f7e6]"
              >
                {prompt}
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#e6ecf5]">
            Write in your style — save, share with your group, or keep private.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
