const bookingSteps = [
  {
    step: "1",
    title: "Choose your party style",
    description: "Princess, hero, mascot, or a package with rentals.",
  },
  {
    step: "2",
    title: "Pick your ideal package",
    description: "Start simple now and expand the experience later.",
  },
  {
    step: "3",
    title: "Send your date and notes",
    description: "We can confirm details, availability, and travel next.",
  },
  {
    step: "4",
    title: "Get a polished reply",
    description: "Warm, clear communication should feel part of the service.",
  },
];

const prepNotes = [
  "Booking page design already planned as a split trust-plus-form layout",
  "Character, package, and category data are typed for future route expansion",
  "CTA copy is written to feel premium without sounding stiff or generic",
];

export function FinalCta() {
  return (
    <div className="glass-panel grid gap-8 rounded-[2.4rem] p-6 sm:p-8 xl:grid-cols-[1.1fr_.9fr]">
      <div>
        <span className="eyebrow sparkle-dot">Ready to book beautifully</span>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold text-midnight sm:text-5xl">
          The next step should feel warm, clear, and exciting.
        </h2>
        <p className="section-copy mt-5 max-w-2xl text-base sm:text-lg">
          This homepage is already positioned to hand families into a dedicated
          booking experience next. For now, the CTA gives them clarity and keeps
          the premium brand feeling consistent all the way down the page.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {bookingSteps.map((item) => (
            <div key={item.step} className="soft-panel rounded-[1.6rem] p-5">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-copy-soft">
                Step {item.step}
              </span>
              <h3 className="mt-2 text-2xl font-semibold text-midnight">
                {item.title}
              </h3>
              <p className="section-copy mt-3 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,243,249,0.96))] p-6 shadow-magical">
        <span className="eyebrow border-0 px-0 py-0 shadow-none">
          Booking page preview
        </span>
        <h3 className="mt-4 text-3xl font-semibold text-midnight">
          Split layout, soft reassurance, zero chaos.
        </h3>
        <p className="section-copy mt-4 text-sm">
          When we build `/book`, the left side can hold response time, service
          notes, and trust details while the right side becomes a beautiful,
          production-ready inquiry form.
        </p>

        <ul className="mt-6 space-y-4">
          {prepNotes.map((note) => (
            <li key={note} className="flex items-start gap-3 text-sm text-copy-soft">
              <span className="mt-1 text-rose" aria-hidden>
                {"\u25CF"}
              </span>
              <span>{note}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#top" className="button-primary">
            Start with the homepage
          </a>
          <a href="#packages" className="button-secondary">
            Compare packages
          </a>
        </div>
      </div>
    </div>
  );
}
