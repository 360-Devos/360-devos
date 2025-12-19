const Social = () => {
  const updates = [
    {
      title: "Small Group",
      detail: "Thursday 7:30 PM at the loft · bring your Bible + journal.",
      tone: "warm",
    },
    {
      title: "Serve Team",
      detail: "Coffee + setup crew meets 8:00 AM Sunday. Two more seats open.",
      tone: "cool",
    },
    {
      title: "Share Board",
      detail: "14 reflections posted · highlight: “Remain and bear fruit”.",
      tone: "warm",
    },
  ];

  const threads = [
    {
      author: "Lila",
      summary: "Takeaway from John 15 — pruning hurts but produces life.",
      time: "2h ago",
    },
    {
      author: "Marcus",
      summary: "Prayer for finals week · peace and focus.",
      time: "4h ago",
    },
    {
      author: "Ana",
      summary: "Serving idea: share meal prep recipes for Sunday teams.",
      time: "1d ago",
    },
  ];

  const highlights = [
    { label: "Groups", value: "3 active", detail: "co-ed · guys · girls" },
    { label: "Announcements", value: "6", detail: "events + serving" },
    { label: "Shared reflections", value: "42", detail: "this month" },
  ];

  return (
    <div className="space-y-5 sm:space-y-6">
      <section className="ink-card rounded-3xl border border-[#cbcbcb] bg-linear-to-r from-[#fffff3] via-white to-[#e6ecf5] p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6d8196]">
              Community Board
            </p>
            <h2 className="text-2xl font-semibold text-[#2f2f2f]">
              Updates, care, and celebration.
            </h2>
            <p className="text-sm text-[#4a4a4a]">
              Keep your group aligned with weekly rhythms, serving plans, and
              shared prayer.
            </p>
          </div>
          <button
            className="rounded-full border border-[#cbcbcb] bg-white/80 px-4 py-2 text-sm font-semibold text-[#2f2f2f] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            type="button"
          >
            Post an update
          </button>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-3">
          {updates.map((item) => (
            <article
              key={item.title}
              className="ink-card flex flex-col gap-1 rounded-2xl border border-[#cbcbcb] bg-white/80 p-4 shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.12em] text-[#6d8196]">
                {item.title}
              </p>
              <p className="text-lg font-semibold text-[#2f2f2f]">
                {item.detail}
              </p>
              <span className="w-fit rounded-full bg-[#e6ecf5] px-3 py-1 text-xs font-semibold text-[#2f2f2f]">
                {item.tone === "warm" ? "Gather" : "Serve"}
              </span>
            </article>
          ))}
        </div>

        <aside className="ink-card space-y-3 rounded-2xl border border-[#cbcbcb] bg-white/80 p-4 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6d8196]">
            Highlights
          </p>
          <div className="space-y-3">
            {highlights.map((item) => (
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
          </div>
        </aside>
      </section>

      <section className="ink-card rounded-3xl border border-[#cbcbcb] bg-white/80 p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#6d8196]">
              Recent Threads
            </p>
            <h3 className="text-xl font-semibold text-[#2f2f2f]">
              Shared reflections + prayer
            </h3>
          </div>
          <button
            className="rounded-full border border-[#cbcbcb] bg-[#e6ecf5] px-4 py-2 text-sm font-semibold text-[#2f2f2f] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            type="button"
          >
            Open feed
          </button>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {threads.map((thread) => (
            <article
              key={thread.summary}
              className="rounded-2xl border border-[#cbcbcb] bg-white/80 p-3 shadow-sm"
            >
              <div className="flex items-center justify-between text-xs text-[#6d8196]">
                <span>{thread.author}</span>
                <span>{thread.time}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-[#2f2f2f]">
                {thread.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Social;
