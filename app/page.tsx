'use client';

import { useEffect, useState, type CSSProperties } from 'react';
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

const contactEmail = 'sundovicvojin@gmail.com';

const copy = {
  en: {
    nav: ['Problem', 'Services', 'Proof', 'Process', 'Contact'],
    locale: 'Novi Sad, Serbia / Premium B2B digital products',
    start: 'Start a project',
    proofCta: 'View Zoned proof',
    fit: 'Discuss fit',
    heroTitle: 'Digital sales systems for serious companies.',
    heroText:
      'devbyvojin builds premium websites and real estate sales applications that make complex offers easier to understand, trust and buy.',
    panel: {
      labelLeft: 'Sales interface',
      labelRight: 'Project proof',
      title: 'Unit sales overview',
      badge: 'live JSON data',
      stats: ['Apartments', 'Available', 'Sold'],
      placeholder: 'Placeholder visual wrapper. Replace later with real Zoned Panonka screenshots.',
      chips: ['Clear offer', 'Buyer confidence', 'Faster updates'],
    },
    problemsTitle: 'Most digital presence is too passive for high-value sales.',
    problems: [
      'Website looks acceptable, but it does not move premium leads toward a serious conversation.',
      'Apartment availability, floor plans, PDFs and sales updates live in too many disconnected places.',
      'Your team depends on slow manual updates right when buyers expect accurate digital information.',
      'After launch, nobody owns improvements, maintenance and business-critical changes.',
    ],
    solutionTitle: 'A website should work like a sales asset, not a brochure.',
    solutionText:
      'The work starts with positioning and buyer logic, then becomes a polished digital experience that explains, proves and converts.',
    solutionCards: [
      ['Problem', 'Name what buyers are confused about before they ever contact you.'],
      ['Solution', 'Present the digital product, offer or project in a way that feels easy to trust.'],
      ['Proof', 'Use real work, process and business clarity to reduce perceived risk.'],
    ],
    servicesTitle: 'Three ways to build a stronger digital business layer.',
    services: [
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
    ],
    proofTitle: 'Zoned Panonka shows the direction.',
    proofText:
      'A real estate sales experience built around clarity: project presentation, unit information, availability logic and a path toward qualified inquiry.',
    proofVisual: 'Case study visual',
    proofItems: ['Project showcase', 'Unit catalogue', 'Availability view', 'Lead intent'],
    proofPlaceholder: 'Replace this wrapper with actual screenshots when final project imagery is ready.',
    proofDetails: [
      ['Before', 'Information was harder to present as one confident buying journey.'],
      ['After', 'The project can be shown through a cleaner digital sales experience.'],
      ['Business value', 'Better clarity for buyers and a stronger foundation for sales conversations.'],
    ],
    proofBadges: ['Built for real estate logic', 'Designed around sales confidence', 'Clear path for buyers'],
    workTitle: 'Focused work for companies that need more than a pretty homepage.',
    selectedWork: [
      ['Zoned Panonka', 'Real estate sales platform', 'A clearer digital buying journey for a construction project.'],
      ['Business Web Systems', 'Premium websites', 'Sharper positioning, stronger contact flow and polished brand presence.'],
      ['Operational Tools', 'Internal apps', 'Cleaner workflows for teams that outgrow spreadsheets and scattered files.'],
    ],
    processTitle: 'A calm path from business problem to launched product.',
    process: [
      ['01', 'Diagnose', 'Clarify the business goal, audience, offer, sales flow and current bottlenecks.'],
      ['02', 'Structure', 'Turn the strategy into a simple path: message, proof, conversion points and product scope.'],
      ['03', 'Build', 'Design and develop the experience with a premium interface and practical content system.'],
      ['04', 'Improve', 'Launch, measure, maintain and keep the product useful as the business changes.'],
    ],
    careTitle: 'The launch is not the finish line.',
    careText:
      'Premium digital products need ownership after launch. Care gives you a monthly partner for updates, improvements, performance, content changes and business-critical fixes.',
    careBoxTitle: 'Best for teams that cannot afford a stale website.',
    carePoints: ['Monthly improvements', 'Priority response', 'Analytics-informed changes', 'Security and stability checks'],
    founderTitle: 'Vojin Šundović',
    founderText:
      'devbyvojin is a Novi Sad based digital studio focused on premium websites, real estate sales applications and long-term digital product care.',
    founderBoxTitle: 'Small studio, senior ownership, direct communication.',
    founderBoxText:
      'The value is not in naming tools. The value is in understanding the business problem, designing the right digital path and shipping a polished product that supports sales.',
    founderTags: ['Strategy first', 'Premium execution', 'Long-term care'],
    faqs: [
      ['Is this only for real estate companies?', 'No. Real estate and construction are the main focus, but the same approach fits serious B2B companies that need a stronger digital sales tool.'],
      ['Can existing content and branding be reused?', 'Yes. Good existing assets are kept. Weak parts are rewritten, reorganized or replaced so the site sells the result more clearly.'],
      ['What happens after launch?', 'The Care plan keeps the website or app maintained, improved and aligned with new campaigns, listings, offers and business priorities.'],
    ],
    contactTitle: 'Build the digital layer your business actually needs.',
    contactText:
      'Send a short message with your company, project type and what needs to improve. Best fit: premium websites, real estate sales apps and monthly care.',
    footer: 'Premium websites, real estate sales apps and care.',
    kicker: {
      problem: 'The problem',
      solution: 'The solution',
      offer: 'Offer',
      proof: 'Main proof',
      work: 'Selected work',
      process: 'Process',
      care: 'Care / MRR',
      founder: 'Founder',
      faq: 'FAQ',
      contact: 'Start a project',
      why: 'Why it matters',
    },
  },
  sr: {
    nav: ['Problem', 'Usluge', 'Dokaz', 'Proces', 'Kontakt'],
    locale: 'Novi Sad, Srbija / Premium B2B digitalni proizvodi',
    start: 'Pokreni projekat',
    proofCta: 'Pogledaj Zoned dokaz',
    fit: 'Proveri saradnju',
    heroTitle: 'Digitalni prodajni sistemi za ozbiljne kompanije.',
    heroText:
      'devbyvojin pravi premium sajtove i aplikacije za prodaju nekretnina koje kompleksne ponude čine jasnijim, pouzdanijim i lakšim za kupovinu.',
    panel: {
      labelLeft: 'Prodajni interfejs',
      labelRight: 'Dokaz projekta',
      title: 'Pregled prodaje jedinica',
      badge: 'live JSON podaci',
      stats: ['Stanovi', 'Dostupno', 'Prodato'],
      placeholder: 'Placeholder vizuelni okvir. Kasnije zameniti pravim Zoned Panonka screenshotovima.',
      chips: ['Jasna ponuda', 'Poverenje kupca', 'Brže izmene'],
    },
    problemsTitle: 'Većina digitalnog prisustva je previše pasivna za prodaju velike vrednosti.',
    problems: [
      'Sajt može da izgleda pristojno, ali ne vodi premium klijente ka ozbiljnom razgovoru.',
      'Dostupnost stanova, osnove, PDF-ovi i prodajne izmene često žive na previše nepovezanih mesta.',
      'Tim zavisi od sporih ručnih izmena baš onda kada kupci očekuju tačne informacije odmah.',
      'Posle lansiranja niko stvarno ne vodi računa o poboljšanjima, održavanju i bitnim promenama.',
    ],
    solutionTitle: 'Sajt treba da radi kao prodajni alat, ne kao obična brošura.',
    solutionText:
      'Prvo se rešavaju pozicioniranje i logika kupca, a zatim se to pretvara u premium digitalno iskustvo koje objašnjava, dokazuje i vodi ka upitu.',
    solutionCards: [
      ['Problem', 'Imenuj šta kupcu nije jasno pre nego što te uopšte kontaktira.'],
      ['Rešenje', 'Predstavi projekat, ponudu ili proizvod tako da deluje jasno i pouzdano.'],
      ['Dokaz', 'Smanji rizik kroz realan rad, proces i poslovnu jasnoću.'],
    ],
    servicesTitle: 'Tri načina da izgradiš jači digitalni sloj biznisa.',
    services: [
      {
        title: 'Premium Website',
        eyebrow: 'Pozicioniranje + konverzija',
        description:
          'Fokusiran poslovni sajt koji objašnjava ponudu, gradi poverenje i pretvara prave posetioce u projektne razgovore.',
        points: ['Struktura vođena strategijom', 'Premium responsive interfejs', 'Sekcije spremne za lansiranje'],
      },
      {
        title: 'Real Estate Sales App',
        eyebrow: 'Za investitore i prodajne timove',
        description:
          'Digitalni prodajni sloj za projekte: stanovi, dostupnost, osnove, detalji zgrade, upiti i prodajni tokovi.',
        points: ['Pregled jedinica u projektu', 'Prezentacija za kupce', 'Osnova za dalji admin sistem'],
      },
      {
        title: 'Care / Maintenance',
        eyebrow: 'Mesečni kontinuitet',
        description:
          'Stalno vođenje posle lansiranja da digitalni proizvod ostane brz, ažuran i usklađen sa prioritetima biznisa.',
        points: ['Izmene sadržaja i ponude', 'Praćenje performansi', 'Prioritetni ciklusi unapređenja'],
      },
    ],
    proofTitle: 'Zoned Panonka pokazuje pravac.',
    proofText:
      'Prodajno iskustvo za nekretnine građeno oko jasnoće: prezentacija projekta, informacije o jedinicama, dostupnost i put ka kvalifikovanom upitu.',
    proofVisual: 'Vizuelni prikaz case study-ja',
    proofItems: ['Prezentacija projekta', 'Katalog jedinica', 'Pregled dostupnosti', 'Namena upita'],
    proofPlaceholder: 'Zameniti ovaj okvir pravim screenshotovima kada budu spremni finalni vizuali.',
    proofDetails: [
      ['Pre', 'Informacije je bilo teže predstaviti kao jedno jasno kupovno iskustvo.'],
      ['Posle', 'Projekat može da se predstavi kroz čistije digitalno prodajno iskustvo.'],
      ['Biznis vrednost', 'Više jasnoće za kupce i jača osnova za prodajne razgovore.'],
    ],
    proofBadges: ['Građeno za logiku nekretnina', 'Dizajnirano za poverenje u prodaji', 'Jasan put za kupce'],
    workTitle: 'Fokusiran rad za kompanije kojima treba više od lepe naslovne strane.',
    selectedWork: [
      ['Zoned Panonka', 'Platforma za prodaju nekretnina', 'Jasniji digitalni put kupovine za građevinski projekat.'],
      ['Business Web Systems', 'Premium sajtovi', 'Oštrije pozicioniranje, jači kontakt tok i ozbiljnije prisustvo brenda.'],
      ['Operational Tools', 'Interne aplikacije', 'Čistiji procesi za timove koji prerastu tabele i rasute fajlove.'],
    ],
    processTitle: 'Mirniji put od poslovnog problema do lansiranog proizvoda.',
    process: [
      ['01', 'Dijagnoza', 'Razjašnjavamo cilj, publiku, ponudu, prodajni tok i trenutna uska grla.'],
      ['02', 'Struktura', 'Strategiju pretvaramo u jednostavan put: poruka, dokaz, tačke konverzije i obim proizvoda.'],
      ['03', 'Izrada', 'Dizajniramo i razvijamo iskustvo sa premium interfejsom i praktičnim sistemom sadržaja.'],
      ['04', 'Unapređenje', 'Lansiramo, pratimo, održavamo i usklađujemo proizvod kako se biznis menja.'],
    ],
    careTitle: 'Lansiranje nije kraj posla.',
    careText:
      'Premium digitalni proizvodi traže vlasništvo posle lansiranja. Care daje mesečnog partnera za izmene, unapređenja, performanse, sadržaj i bitne popravke.',
    careBoxTitle: 'Za timove koji ne mogu da priušte zastareo sajt.',
    carePoints: ['Mesečna unapređenja', 'Prioritetan odgovor', 'Izmene vođene analitikom', 'Provere stabilnosti i sigurnosti'],
    founderTitle: 'Vojin Šundović',
    founderText:
      'devbyvojin je digitalni studio iz Novog Sada fokusiran na premium sajtove, aplikacije za prodaju nekretnina i dugoročno održavanje digitalnih proizvoda.',
    founderBoxTitle: 'Mali studio, direktno vlasništvo nad poslom, jasna komunikacija.',
    founderBoxText:
      'Vrednost nije u nabrajanju alata. Vrednost je u razumevanju poslovnog problema, dizajnu pravog digitalnog puta i lansiranju proizvoda koji podržava prodaju.',
    founderTags: ['Strategija prvo', 'Premium izvedba', 'Dugoročna briga'],
    faqs: [
      ['Da li je ovo samo za nekretnine?', 'Ne. Nekretnine i građevina su glavni fokus, ali isti pristup odgovara ozbiljnim B2B kompanijama kojima treba jači digitalni prodajni alat.'],
      ['Da li mogu da se iskoriste postojeći sadržaj i brend?', 'Da. Ono što valja se zadržava. Slabi delovi se prepisuju, reorganizuju ili menjaju da sajt jasnije prodaje rezultat.'],
      ['Šta se dešava posle lansiranja?', 'Care plan drži sajt ili aplikaciju ažurnom, poboljšanom i usklađenom sa novim kampanjama, stanovima, ponudama i prioritetima.'],
    ],
    contactTitle: 'Izgradi digitalni sloj koji tvom biznisu stvarno treba.',
    contactText:
      'Pošalji kratku poruku sa firmom, tipom projekta i onim što treba da se unapredi. Najbolji fit: premium sajtovi, real estate sales aplikacije i mesečni care.',
    footer: 'Premium sajtovi, real estate sales aplikacije i care.',
    kicker: {
      problem: 'Problem',
      solution: 'Rešenje',
      offer: 'Ponuda',
      proof: 'Glavni dokaz',
      work: 'Odabrani radovi',
      process: 'Proces',
      care: 'Care / MRR',
      founder: 'Founder',
      faq: 'FAQ',
      contact: 'Pokreni projekat',
      why: 'Zašto je bitno',
    },
  },
} as const;

type Lang = keyof typeof copy;

const fallbackZonedStats = {
  totalUnits: 210,
  availableUnits: 47,
  soldUnits: 159,
};

type ZonedStats = typeof fallbackZonedStats & {
  reservedUnits?: number;
  updatedAt?: string;
};

const chartHeights = [68, 46, 82, 58];
const proofIcons = [Building2, TrendingUp, Compass];

export default function Home() {
  const [lang, setLang] = useState<Lang>('sr');
  const [zonedStats, setZonedStats] = useState<ZonedStats>(fallbackZonedStats);
  const t = copy[lang];
  const statValues = [
    zonedStats.totalUnits,
    zonedStats.availableUnits,
    zonedStats.soldUnits,
  ].map(String);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/zoned-stats')
      .then((response) => {
        if (!response.ok) throw new Error(`Zoned stats failed: ${response.status}`);
        return response.json() as Promise<ZonedStats>;
      })
      .then((stats) => {
        if (!cancelled) setZonedStats(stats);
      })
      .catch(() => {
        if (!cancelled) setZonedStats(fallbackZonedStats);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--ink)]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/45 bg-[rgba(247,247,242,0.72)] backdrop-blur-2xl">
        <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:px-8 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="devbyvojin home">
            <span className="grid size-10 place-items-center rounded-2xl border border-black/10 bg-white/70 shadow-sm">
              <span className="pulse-dot size-3 rounded-full bg-[var(--signal)] shadow-[0_0_26px_rgba(60,141,116,0.7)]" />
            </span>
            <span className="text-sm font-semibold tracking-[0.12em] text-[var(--ink)] uppercase">devbyvojin</span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-black/8 bg-white/55 p-1 text-sm text-[var(--muted-ink)] shadow-sm lg:flex">
            {t.nav.map((item, index) => {
              const ids = ['problem', 'services', 'proof', 'process', 'contact'];
              return (
                <a key={item} href={`#${ids[index]}`} className="rounded-full px-4 py-2 transition hover:bg-white hover:text-[var(--ink)]">
                  {item}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 rounded-full border border-black/8 bg-white/55 p-1 text-xs font-semibold shadow-sm backdrop-blur-xl">
              {(['sr', 'en'] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={lang === item}
                  onClick={() => setLang(item)}
                  className={`rounded-full px-3 py-2 transition ${lang === item ? 'bg-[var(--ink)] text-white' : 'text-[var(--muted-ink)] hover:bg-white'}`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="#contact" className="hidden items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2.5 text-sm font-medium text-white shadow-[0_12px_34px_rgba(25,31,38,0.16)] transition hover:-translate-y-0.5 hover:bg-black sm:inline-flex">
              {t.start} <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative pt-34 sm:pt-36">
        <div className="hero-glow" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-end gap-14 px-5 pb-18 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-24">
          <div className="reveal-up">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-2 text-sm text-[var(--muted-ink)] shadow-sm backdrop-blur-xl">
              <MapPin className="size-4 text-[var(--signal)]" />
              {t.locale}
            </div>
            <h1 className="max-w-4xl text-balance text-[clamp(3.2rem,7.6vw,8.4rem)] font-semibold leading-[0.9] tracking-normal">
              {t.heroTitle}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--muted-ink)] sm:text-2xl sm:leading-9">{t.heroText}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--signal)] px-6 py-4 text-base font-semibold text-white shadow-[0_20px_50px_rgba(60,141,116,0.28)] transition hover:-translate-y-0.5">
                {t.start} <ArrowRight className="size-5" />
              </a>
              <a href="#proof" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 py-4 text-base font-semibold text-[var(--ink)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white">
                {t.proofCta}
              </a>
            </div>
          </div>

          <div className="glass-panel float-panel relative min-h-[560px] overflow-hidden rounded-[2rem] p-5 sm:p-7">
            <div className="absolute inset-x-8 top-7 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/56">
              <span>{t.panel.labelLeft}</span>
              <span>{t.panel.labelRight}</span>
            </div>
            <div className="mt-12 rounded-[1.45rem] border border-white/14 bg-[#10161d]/92 p-4 text-white shadow-2xl">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-white/50">Zoned Panonka</p>
                  <h2 className="mt-1 text-2xl font-semibold">{t.panel.title}</h2>
                </div>
                <span className="rounded-full bg-[rgba(60,141,116,0.16)] px-3 py-1 text-sm text-[#9ce0c2]">{t.panel.badge}</span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {t.panel.stats.map((label, index) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                    <p className="text-sm text-white/45">{label}</p>
                    <p className="mt-3 text-3xl font-semibold">{statValues[index]}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-4">
                <div className="aspect-[1.65] rounded-2xl border border-dashed border-white/18 bg-[radial-gradient(circle_at_30%_18%,rgba(60,141,116,0.44),transparent_32%),linear-gradient(135deg,#202a32,#0d1117)] p-5">
                  <div className="grid h-full grid-cols-[1fr_0.78fr] gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="mb-3 h-3 w-28 rounded-full bg-white/28" />
                      <div className="grid h-[78%] grid-cols-4 items-end gap-2">
                        {chartHeights.map((height) => (
                          <span key={height} className="animated-bar rounded-t-lg bg-[#9ce0c2]/75" style={{ '--bar-height': `${height}%` } as CSSProperties} />
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
                <p className="mt-3 text-sm text-white/45">{t.panel.placeholder}</p>
              </div>
            </div>
            <div className="absolute bottom-7 left-7 right-7 grid gap-3 sm:grid-cols-3">
              {t.panel.chips.map((item) => (
                <div key={item} className="rounded-2xl border border-white/16 bg-white/10 p-4 text-sm font-medium text-white backdrop-blur-xl">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="section-pad border-y border-black/8 bg-white/38">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div className="reveal-up">
            <p className="section-kicker">{t.kicker.problem}</p>
            <h2 className="section-title">{t.problemsTitle}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.problems.map((problem) => (
              <div key={problem} className="reveal-card rounded-[1.5rem] border border-black/8 bg-white/62 p-6 shadow-sm backdrop-blur-xl">
                <CircleDot className="mb-8 size-5 text-[var(--signal)]" />
                <p className="text-lg leading-7 text-[var(--ink)]">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="reveal-up max-w-3xl">
            <p className="section-kicker">{t.kicker.solution}</p>
            <h2 className="section-title">{t.solutionTitle}</h2>
            <p className="section-copy">{t.solutionText}</p>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {t.solutionCards.map(([title, text]) => (
              <div key={title} className="reveal-card liquid-card p-7">
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
              <p className="section-kicker text-[#9ce0c2]">{t.kicker.offer}</p>
              <h2 className="section-title text-white">{t.servicesTitle}</h2>
            </div>
            <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full border border-white/16 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-[var(--ink)]">
              {t.fit} <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {t.services.map((service) => (
              <article key={service.title} className="reveal-card rounded-[1.7rem] border border-white/12 bg-white/[0.065] p-7 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9ce0c2]">{service.eyebrow}</p>
                <h3 className="mt-5 text-3xl font-semibold">{service.title}</h3>
                <p className="mt-5 min-h-28 leading-7 text-white/68">{service.description}</p>
                <div className="mt-8 space-y-3">
                  {service.points.map((point) => (
                    <p key={point} className="flex items-center gap-3 text-white/82"><Check className="size-4 text-[#9ce0c2]" /> {point}</p>
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
            <p className="section-kicker">{t.kicker.proof}</p>
            <h2 className="section-title">{t.proofTitle}</h2>
            <p className="section-copy">{t.proofText}</p>
          </div>
          <div className="space-y-4">
            <div className="reveal-up liquid-card overflow-hidden p-0">
              <div className="grid min-h-[470px] gap-0 lg:grid-cols-[1fr_0.72fr]">
                <div className="bg-[linear-gradient(135deg,#eef3ed,#dce9e1)] p-8">
                  <div className="flex h-full flex-col justify-between rounded-[1.4rem] border border-black/8 bg-white/58 p-6 shadow-sm backdrop-blur-xl">
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted-ink)]">{t.proofVisual}</p>
                      <h3 className="mt-4 text-4xl font-semibold">Zoned Panonka</h3>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {t.proofItems.map((item) => (
                        <span key={item} className="rounded-2xl border border-black/8 bg-white/70 p-4 text-sm font-medium">{item}</span>
                      ))}
                    </div>
                    <p className="text-sm text-[var(--muted-ink)]">{t.proofPlaceholder}</p>
                  </div>
                </div>
                <div className="bg-white/62 p-8">
                  <p className="section-kicker">{t.kicker.why}</p>
                  <div className="mt-8 space-y-7">
                    {t.proofDetails.map(([label, text]) => (
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
              {t.proofBadges.map((text, index) => {
                const Icon = proofIcons[index];
                return (
                  <div key={text} className="reveal-card rounded-[1.4rem] border border-black/8 bg-white/55 p-5 backdrop-blur-xl">
                    <Icon className="mb-7 size-5 text-[var(--signal)]" />
                    <p className="font-semibold">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-black/8 bg-white/42">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="section-kicker">{t.kicker.work}</p>
            <h2 className="section-title">{t.workTitle}</h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {t.selectedWork.map(([name, type, result]) => (
              <article key={name} className="reveal-card liquid-card p-7">
                <p className="text-sm text-[var(--muted-ink)]">{type}</p>
                <h3 className="mt-5 text-3xl font-semibold">{name}</h3>
                <p className="mt-8 leading-7 text-[var(--muted-ink)]">{result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="section-kicker">{t.kicker.process}</p>
              <h2 className="section-title">{t.processTitle}</h2>
            </div>
            <div className="space-y-3">
              {t.process.map(([step, title, text]) => (
                <div key={step} className="reveal-card grid gap-5 rounded-[1.4rem] border border-black/8 bg-white/58 p-5 backdrop-blur-xl sm:grid-cols-[90px_1fr]">
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
          <div className="reveal-card liquid-card p-8 sm:p-10">
            <Clock3 className="mb-10 size-7 text-[var(--signal)]" />
            <p className="section-kicker">{t.kicker.care}</p>
            <h2 className="section-title">{t.careTitle}</h2>
            <p className="section-copy">{t.careText}</p>
          </div>
          <div className="reveal-card rounded-[1.7rem] bg-[var(--ink)] p-8 text-white shadow-2xl">
            <ShieldCheck className="mb-10 size-7 text-[#9ce0c2]" />
            <h3 className="text-3xl font-semibold">{t.careBoxTitle}</h3>
            <div className="mt-8 space-y-4 text-white/72">
              {t.carePoints.map((item) => (
                <p key={item} className="flex items-center gap-3"><Check className="size-4 text-[#9ce0c2]" /> {item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="reveal-card rounded-[1.8rem] border border-black/8 bg-[var(--ink)] p-8 text-white">
            <p className="section-kicker text-[#9ce0c2]">{t.kicker.founder}</p>
            <h2 className="mt-6 text-5xl font-semibold leading-none">{t.founderTitle}</h2>
            <p className="mt-6 leading-8 text-white/70">{t.founderText}</p>
          </div>
          <div className="reveal-card liquid-card p-8 sm:p-10">
            <h3 className="text-3xl font-semibold">{t.founderBoxTitle}</h3>
            <p className="mt-6 leading-8 text-[var(--muted-ink)]">{t.founderBoxText}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {t.founderTags.map((item) => (
                <span key={item} className="rounded-2xl border border-black/8 bg-white/68 px-4 py-3 text-sm font-semibold">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-black/8 bg-white/40">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
          <p className="section-kicker">{t.kicker.faq}</p>
          <div className="mt-7 divide-y divide-black/10 rounded-[1.6rem] border border-black/8 bg-white/62 backdrop-blur-xl">
            {t.faqs.map(([question, answer]) => (
              <details key={question} className="group p-6 open:bg-white/48 first:rounded-t-[1.6rem] last:rounded-b-[1.6rem]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold">
                  {question}
                  <span className="text-[var(--signal)] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-[var(--muted-ink)]">{answer}</p>
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
                <p className="section-kicker text-[#9ce0c2]">{t.kicker.contact}</p>
                <h2 className="mt-6 max-w-3xl text-[clamp(3rem,6vw,6.8rem)] font-semibold leading-[0.92] tracking-normal">{t.contactTitle}</h2>
              </div>
              <div className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-6 backdrop-blur-xl">
                <p className="text-lg leading-8 text-white/72">{t.contactText}</p>
                <a href={`mailto:${contactEmail}?subject=Project%20inquiry%20-%20devbyvojin`} className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-[var(--ink)] transition hover:-translate-y-0.5">
                  <Mail className="size-5" /> {contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 pb-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-black/10 pt-8 text-sm text-[var(--muted-ink)] sm:flex-row">
          <p>devbyvojin / Novi Sad, Serbia</p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </main>
  );
}
