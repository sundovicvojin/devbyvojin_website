import {
  ArrowRight,
  Building2,
  Check,
  CircleDot,
  Clock3,
  Compass,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

const navItems = ['Problem', 'Services', 'Proof', 'Process', 'Contact'];

const problems = [
  'Website looks acceptable, but it does not move premium leads toward a serious conversation.',
  'Apartment availability, floor plans, PDFs and sales updates live in too many disconnected places.',
  'Your team depends on slow manual updates right when buyers expect accurate digital information.',
  'After launch, nobody owns improvements, maintenance and business-critical changes.',
];

const services = [
  {
    title: 'Premium Website',
    eyebrow: 'Positioning + conversion',
    description:
      'A focused business website that explains the offer, builds trust and turns qualified visitors into project conversations.',
    points: ['Strategy-led structure', 'Premium responsive interface', 'Launch-ready content blocks'],
  },
  {
    title: 'Real Estate Sales App',
    eyebrow: 'For developers and sales teams',
    description:
      'A tailored digital sales layer for projects: units, availability, plans, building details, lead capture and sales workflows.',
    points: ['Project inventory experience', 'Buyer-facing presentation', 'Admin-ready growth path'],
  },
  {
    title: 'Care / Maintenance',
    eyebrow: 'Monthly continuity',
    description:
      'Ongoing ownership after launch so the digital product stays fast, updated and aligned with business priorities.',
    points: ['Content and offer updates', 'Performance monitoring', 'Priority improvement cycles'],
  },
];

const selectedWork = [
  {
    name: 'Zoned Panonka',
    type: 'Real estate sales platform',
    result: 'A clearer digital buying journey for a construction project.',
  },
  {
    name: 'Business Web Systems',
    type: 'Premium websites',
    result: 'Sharper positioning, stronger contact flow and polished brand presence.',
  },
  {
    name: 'Operational Tools',
    type: 'Internal apps',
    result: 'Cleaner workflows for teams that outgrow spreadsheets and scattered files.',
  },
];

const process = [
  ['01', 'Diagnose', 'Clarify the business goal, audience, offer, sales flow and current bottlenecks.'],
  ['02', 'Structure', 'Turn the strategy into a simple path: message, proof, conversion points and product scope.'],
  ['03', 'Build', 'Design and develop the experience with a premium interface and practical content system.'],
  ['04', 'Improve', 'Launch, measure, maintain and keep the product useful as the business changes.'],
];

const faqs = [
  {
    question: 'Is this only for real estate companies?',
    answer:
      'No. Real estate and construction are the main focus, but the same approach fits serious B2B companies that need a stronger digital sales tool.',
  },
  {
    question: 'Can existing content and branding be reused?',
    answer:
      'Yes. Good existing assets are kept. Weak parts are rewritten, reorganized or replaced so the site sells the result more clearly.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'The Care plan keeps the website or app maintained, improved and aligned with new campaigns, listings, offers and business priorities.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--ink)]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/45 bg-[rgba(247,247,242,0.72)] backdrop-blur-2xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="devbyvojin home">
            <span className="grid size-10 place-items-center rounded-2xl border border-black/10 bg-white/70 shadow-sm">
              <span className="size-3 rounded-full bg-[var(--signal)] shadow-[0_0_26px_rgba(60,141,116,0.7)]" />
            </span>
            <span className="text-sm font-semibold tracking-[0.12em] text-[var(--ink)] uppercase">
              devbyvojin
            </span>
          </a>
          <nav className="hidden items-center gap-1 rounded-full border border-black/8 bg-white/55 p-1 text-sm text-[var(--muted-ink)] shadow-sm lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-4 py-2 transition hover:bg-white hover:text-[var(--ink)]">
                {item}
              </a>
            ))}
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2.5 text-sm font-medium text-white shadow-[0_12px_34px_rgba(25,31,38,0.16)] transition hover:-translate-y-0.5 hover:bg-black">
            Start a project <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      <section id="top" className="relative pt-32 sm:pt-36">
        <div className="hero-glow" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-end gap-14 px-5 pb-18 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-24">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-2 text-sm text-[var(--muted-ink)] shadow-sm backdrop-blur-xl">
              <MapPin className="size-4 text-[var(--signal)]" />
              Novi Sad, Serbia / Premium B2B digital products
            </div>
            <h1 className="max-w-4xl text-balance text-[clamp(3.4rem,8vw,8.8rem)] font-semibold leading-[0.88] tracking-normal">
              Digital sales systems for serious companies.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--muted-ink)] sm:text-2xl sm:leading-9">
              devbyvojin builds premium websites and real estate sales applications that make complex offers easier to understand, trust and buy.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--signal)] px-6 py-4 text-base font-semibold text-white shadow-[0_20px_50px_rgba(60,141,116,0.28)] transition hover:-translate-y-0.5">
                Start a project <ArrowRight className="size-5" />
              </a>
              <a href="#proof" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 py-4 text-base font-semibold text-[var(--ink)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white">
                View Zoned proof
              </a>
            </div>
          </div>

          <div className="glass-panel relative min-h-[560px] overflow-hidden rounded-[2rem] p-5 sm:p-7">
            <div className="absolute inset-x-8 top-7 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/56">
              <span>Sales interface</span>
              <span>Project proof</span>
            </div>
            <div className="mt-12 rounded-[1.45rem] border border-white/14 bg-[#10161d]/92 p-4 text-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-white/50">Zoned Panonka</p>
                  <h2 className="mt-1 text-2xl font-semibold">Unit sales overview</h2>
                </div>
                <span className="rounded-full bg-[rgba(60,141,116,0.16)] px-3 py-1 text-sm text-[#9ce0c2]">
                  live concept
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {['Apartments', 'Availability', 'Lead flow'].map((label, index) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                    <p className="text-sm text-white/45">{label}</p>
                    <p className="mt-3 text-3xl font-semibold">{index === 0 ? '86' : index === 1 ? '24' : '1:1'}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-4">
                <div className="aspect-[1.65] rounded-2xl border border-dashed border-white/18 bg-[radial-gradient(circle_at_30%_18%,rgba(60,141,116,0.44),transparent_32%),linear-gradient(135deg,#202a32,#0d1117)] p-5">
                  <div className="grid h-full grid-cols-[1fr_0.78fr] gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="mb-3 h-3 w-28 rounded-full bg-white/28" />
                      <div className="grid h-[78%] grid-cols-4 items-end gap-2">
                        {[68, 46, 82, 58].map((height) => (
                          <span key={height} className="rounded-t-lg bg-[#9ce0c2]/75" style={{ height: `${height}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[0, 1, 2].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.065] p-4">
                          <div className="h-2.5 w-20 rounded-full bg-white/25" />
                          <div className="mt-4 h-8 rounded-xl bg-white/10" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/45">Placeholder visual wrapper. Replace later with real Zoned Panonka screenshots.</p>
              </div>
            </div>
            <div className="absolute bottom-7 left-7 right-7 grid gap-3 sm:grid-cols-3">
              {['Clear offer', 'Buyer confidence', 'Faster updates'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/16 bg-white/10 p-4 text-sm font-medium text-white backdrop-blur-xl">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="section-pad border-y border-black/8 bg-white/38">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="section-kicker">The problem</p>
            <h2 className="section-title">Most digital presence is too passive for high-value sales.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem) => (
              <div key={problem} className="rounded-[1.5rem] border border-black/8 bg-white/62 p-6 shadow-sm backdrop-blur-xl">
                <CircleDot className="mb-8 size-5 text-[var(--signal)]" />
                <p className="text-lg leading-7 text-[var(--ink)]">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="section-kicker">The solution</p>
            <h2 className="section-title">A website should work like a sales asset, not a brochure.</h2>
            <p className="section-copy">
              The work starts with positioning and buyer logic, then becomes a polished digital experience that explains, proves and converts.
            </p>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              ['Problem', 'Name what buyers are confused about before they ever contact you.'],
              ['Solution', 'Present the digital product, offer or project in a way that feels easy to trust.'],
              ['Proof', 'Use real work, process and business clarity to reduce perceived risk.'],
            ].map(([title, text]) => (
              <div key={title} className="liquid-card p-7">
                <Sparkles className="mb-10 size-6 text-[var(--signal)]" />
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted-ink)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-pad bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker text-[#9ce0c2]">Offer</p>
              <h2 className="section-title text-white">Three ways to build a stronger digital business layer.</h2>
            </div>
            <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full border border-white/16 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-[var(--ink)]">
              Discuss fit <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-[1.7rem] border border-white/12 bg-white/[0.065] p-7 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9ce0c2]">{service.eyebrow}</p>
                <h3 className="mt-5 text-3xl font-semibold">{service.title}</h3>
                <p className="mt-5 min-h-28 leading-7 text-white/68">{service.description}</p>
                <div className="mt-8 space-y-3">
                  {service.points.map((point) => (
                    <p key={point} className="flex items-center gap-3 text-white/82">
                      <Check className="size-4 text-[#9ce0c2]" /> {point}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div className="sticky top-28 h-fit">
            <p className="section-kicker">Main proof</p>
            <h2 className="section-title">Zoned Panonka shows the direction.</h2>
            <p className="section-copy">
              A real estate sales experience built around clarity: project presentation, unit information, availability logic and a path toward qualified inquiry.
            </p>
          </div>
          <div className="space-y-4">
            <div className="liquid-card overflow-hidden p-0">
              <div className="grid min-h-[470px] gap-0 lg:grid-cols-[1fr_0.72fr]">
                <div className="bg-[linear-gradient(135deg,#eef3ed,#dce9e1)] p-8">
                  <div className="flex h-full flex-col justify-between rounded-[1.4rem] border border-black/8 bg-white/58 p-6 shadow-sm backdrop-blur-xl">
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted-ink)]">Case study visual</p>
                      <h3 className="mt-4 text-4xl font-semibold">Zoned Panonka</h3>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {['Project showcase', 'Unit catalogue', 'Availability view', 'Lead intent'].map((item) => (
                        <span key={item} className="rounded-2xl border border-black/8 bg-white/70 p-4 text-sm font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-[var(--muted-ink)]">Replace this wrapper with actual screenshots when final project imagery is ready.</p>
                  </div>
                </div>
                <div className="bg-white/62 p-8">
                  <p className="section-kicker">Why it matters</p>
                  <div className="mt-8 space-y-7">
                    {[
                      ['Before', 'Information was harder to present as one confident buying journey.'],
                      ['After', 'The project can be shown through a cleaner digital sales experience.'],
                      ['Business value', 'Better clarity for buyers and a stronger foundation for sales conversations.'],
                    ].map(([label, text]) => (
                      <div key={label}>
                        <h4 className="text-xl font-semibold">{label}</h4>
                        <p className="mt-2 leading-7 text-[var(--muted-ink)]">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [Building2, 'Built for real estate logic'],
                [TrendingUp, 'Designed around sales confidence'],
                [Compass, 'Clear path for buyers'],
              ].map(([Icon, text]) => (
                <div key={text as string} className="rounded-[1.4rem] border border-black/8 bg-white/55 p-5 backdrop-blur-xl">
                  <Icon className="mb-7 size-5 text-[var(--signal)]" />
                  <p className="font-semibold">{text as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-black/8 bg-white/42">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title">Focused work for companies that need more than a pretty homepage.</h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {selectedWork.map((work) => (
              <article key={work.name} className="liquid-card p-7">
                <p className="text-sm text-[var(--muted-ink)]">{work.type}</p>
                <h3 className="mt-5 text-3xl font-semibold">{work.name}</h3>
                <p className="mt-8 leading-7 text-[var(--muted-ink)]">{work.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="section-kicker">Process</p>
              <h2 className="section-title">A calm path from business problem to launched product.</h2>
            </div>
            <div className="space-y-3">
              {process.map(([step, title, text]) => (
                <div key={step} className="grid gap-5 rounded-[1.4rem] border border-black/8 bg-white/58 p-5 backdrop-blur-xl sm:grid-cols-[90px_1fr]">
                  <span className="text-4xl font-semibold text-[var(--signal)]">{step}</span>
                  <div>
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-7 text-[var(--muted-ink)]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#eef2eb]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[1fr_0.88fr] lg:px-10">
          <div className="liquid-card p-8 sm:p-10">
            <Clock3 className="mb-10 size-7 text-[var(--signal)]" />
            <p className="section-kicker">Care / MRR</p>
            <h2 className="section-title">The launch is not the finish line.</h2>
            <p className="section-copy">
              Premium digital products need ownership after launch. Care gives you a monthly partner for updates, improvements, performance, content changes and business-critical fixes.
            </p>
          </div>
          <div className="rounded-[1.7rem] bg-[var(--ink)] p-8 text-white shadow-2xl">
            <ShieldCheck className="mb-10 size-7 text-[#9ce0c2]" />
            <h3 className="text-3xl font-semibold">Best for teams that cannot afford a stale website.</h3>
            <div className="mt-8 space-y-4 text-white/72">
              {['Monthly improvements', 'Priority response', 'Analytics-informed changes', 'Security and stability checks'].map((item) => (
                <p key={item} className="flex items-center gap-3">
                  <Check className="size-4 text-[#9ce0c2]" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="rounded-[1.8rem] border border-black/8 bg-[var(--ink)] p-8 text-white">
            <p className="section-kicker text-[#9ce0c2]">Founder</p>
            <h2 className="mt-6 text-5xl font-semibold leading-none">Vojin Sundovic</h2>
            <p className="mt-6 leading-8 text-white/70">
              devbyvojin is a Novi Sad based digital studio focused on premium websites, real estate sales applications and long-term digital product care.
            </p>
          </div>
          <div className="liquid-card p-8 sm:p-10">
            <h3 className="text-3xl font-semibold">Small studio, senior ownership, direct communication.</h3>
            <p className="mt-6 leading-8 text-[var(--muted-ink)]">
              The value is not in naming tools. The value is in understanding the business problem, designing the right digital path and shipping a polished product that supports sales.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Strategy first', 'Premium execution', 'Long-term care'].map((item) => (
                <span key={item} className="rounded-2xl border border-black/8 bg-white/68 px-4 py-3 text-sm font-semibold">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-black/8 bg-white/40">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
          <p className="section-kicker">FAQ</p>
          <div className="mt-7 divide-y divide-black/10 rounded-[1.6rem] border border-black/8 bg-white/62 backdrop-blur-xl">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6 open:bg-white/48 first:rounded-t-[1.6rem] last:rounded-b-[1.6rem]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold">
                  {faq.question}
                  <span className="text-[var(--signal)] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-[var(--muted-ink)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--ink)] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
            <div className="contact-sheen" aria-hidden="true" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="section-kicker text-[#9ce0c2]">Start a project</p>
                <h2 className="mt-6 max-w-3xl text-[clamp(3rem,6vw,6.8rem)] font-semibold leading-[0.92] tracking-normal">
                  Build the digital layer your business actually needs.
                </h2>
              </div>
              <div className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-6 backdrop-blur-xl">
                <p className="text-lg leading-8 text-white/72">
                  Send a short message with your company, project type and what needs to improve. Best fit: premium websites, real estate sales apps and monthly care.
                </p>
                <a href="mailto:hello@devbyvojin.com?subject=Project%20inquiry%20-%20devbyvojin" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-[var(--ink)] transition hover:-translate-y-0.5">
                  <Mail className="size-5" /> hello@devbyvojin.com
                </a>
                <p className="mt-5 text-sm text-white/46">Replace email if another contact address should be used.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 pb-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-black/10 pt-8 text-sm text-[var(--muted-ink)] sm:flex-row">
          <p>devbyvojin / Novi Sad, Serbia</p>
          <p>Premium websites, real estate sales apps and care.</p>
        </div>
      </footer>
    </main>
  );
}
