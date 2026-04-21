import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  Calculator,
  Compass,
  Eye,
  FileCheck2,
  FileText,
  Globe,
  Lock,
  Map,
  Plane,
  ShieldCheck,
  User,
} from "lucide-react";

const navLinks = [
  { label: "Find Universities", href: "#" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why UniNexa", href: "#why-uninexa" },
  { label: "For Students", href: "#for-students" },
  { label: "For Universities", href: "#for-universities" },
];

const universities = [
  "University of South Florida",
  "Arizona State University",
  "Drexel University",
  "Clark University",
];

const planningCards = [
  {
    title: "Choose the right university",
    description:
      "Explore universities that match your academic background, budget, destination preferences, and future goals.",
    cta: "Explore universities",
    icon: Compass,
  },
  {
    title: "Understand costs and funding",
    description:
      "Learn about tuition, living expenses, scholarships, and financial planning so you can prepare with clarity.",
    cta: "Explore funding options",
    icon: Calculator,
  },
  {
    title: "Build your application roadmap",
    description:
      "Stay on track with deadlines, documents, profile completion, and every milestone from planning to submission.",
    cta: "View your roadmap",
    icon: Map,
  },
];

const whyCards = [
  {
    title: "Verified academic records",
    description:
      "Submit KCSE results and academic documents with confidence. UniNexa uses secure verification processes to improve accuracy and build trust with international universities.",
    icon: ShieldCheck,
    color: "text-emerald-300",
    bg: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "One profile, multiple applications",
    description:
      "Create your profile once and use it to apply to multiple universities without repeating the same information every time.",
    icon: User,
    color: "text-violet-300",
    bg: "from-violet-500/20 to-indigo-500/20",
  },
  {
    title: "Structured for global admissions",
    description:
      "Your academic records are organized into formats that international admissions teams can easily understand and evaluate.",
    icon: Globe,
    color: "text-sky-300",
    bg: "from-sky-500/20 to-cyan-500/20",
  },
  {
    title: "Full application visibility",
    description:
      "Track your applications, deadlines, and progress in one place with a clearer and more transparent application journey.",
    icon: Eye,
    color: "text-amber-300",
    bg: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Built for Kenyan students",
    description:
      "UniNexa is designed specifically for students applying abroad from Kenya, with support for KCSE, local requirements, and global pathways.",
    icon: BadgeCheck,
    color: "text-fuchsia-300",
    bg: "from-fuchsia-500/20 to-pink-500/20",
  },
  {
    title: "Transparent and student-first",
    description:
      "Unlike traditional agencies, UniNexa gives you more control and visibility over your application journey with fewer hidden steps.",
    icon: FileCheck2,
    color: "text-indigo-300",
    bg: "from-indigo-500/20 to-violet-500/20",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(79,70,229,0.14),transparent_30%),linear-gradient(to_bottom,#050816,#070b1f,#050816)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="UniNexa logo"
              width={42}
              height={42}
              className="rounded-xl object-cover"
            />
            <div>
              <p className="text-2xl font-bold tracking-tight">UniNexa</p>
              <p className="text-xs text-white/50">Global admissions, simplified</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/75 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white md:block">
              Sign In
            </button>
            <button className="rounded-full bg-linear-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:scale-[1.02]">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-25"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#050816]/70" />
          <div className="absolute inset-0 bg-linear-to-r from-[#050816] via-[#050816]/80 to-[#050816]/60" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-2 lg:items-center lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 text-sm text-violet-200">
              <span>🇰🇪</span>
              <span>Built for Kenyan students. Designed for global admissions.</span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight md:text-6xl xl:text-7xl">
              Your global future starts with{" "}
              <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                UniNexa
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              A premium digital admissions platform helping Kenyan students build one
              structured profile, standardize their academic records, and apply to
              international universities with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-linear-to-r from-violet-600 to-indigo-600 px-7 py-4 text-base font-semibold shadow-xl shadow-violet-900/40 transition hover:scale-[1.02]">
                Start Your Application
              </button>
              <button className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/10">
                Explore Universities
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-violet-300">
                  <User className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <p className="mt-3 font-semibold">One Profile</p>
                <p className="mt-1 text-sm text-white/60">Apply to multiple universities</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-emerald-300">
                  <Lock className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <p className="mt-3 font-semibold">Secure & Trusted</p>
                <p className="mt-1 text-sm text-white/60">Your records stay protected</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-cyan-300">
                  <Plane className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <p className="mt-3 font-semibold">Global Pathways</p>
                <p className="mt-1 text-sm text-white/60">Start with the US and expand</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute -right-8 bottom-8 h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="rounded-[28px] border border-white/10 bg-[#0a1024] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-violet-300">Student Dashboard Preview</p>
                    <h3 className="mt-1 text-2xl font-bold">Application Command Center</h3>
                  </div>
                  <div className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
                    Live Progress
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">Profile Completion</p>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-4xl font-black text-violet-300">65%</p>
                      <p className="text-sm text-emerald-300">Verified records enabled</p>
                    </div>
                    <div className="mt-4 h-3 rounded-full bg-white/10">
                      <div className="h-3 w-[65%] rounded-full bg-linear-to-r from-violet-500 to-indigo-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">Next Step</p>
                    <p className="mt-3 text-lg font-semibold">Upload KCSE Results</p>
                    <p className="mt-2 text-sm text-white/60">
                      Add your result slip and certificate to continue your application.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">Saved Universities</p>
                    <div className="mt-3 space-y-3">
                      {universities.map((school) => (
                        <div
                          key={school}
                          className="flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-4 py-3"
                        >
                          <span className="text-sm text-white/85">{school}</span>
                          <span className="text-xs text-violet-300">Saved</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">Recent Activity</p>
                    <div className="mt-3 space-y-3 text-sm">
                      <div className="rounded-xl border border-white/5 bg-black/20 px-4 py-3 text-white/80">
                        Personal profile updated
                      </div>
                      <div className="rounded-xl border border-white/5 bg-black/20 px-4 py-3 text-white/80">
                        KCSE document submitted for verification
                      </div>
                      <div className="rounded-xl border border-white/5 bg-black/20 px-4 py-3 text-white/80">
                        University shortlist created
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-[#0a1024]/90 p-4 shadow-xl backdrop-blur md:block">
              <p className="text-sm text-white/50">Structured Documents</p>
              <p className="mt-1 font-semibold">KCSE • Transcript • Passport • ID</p>
            </div>

            <div className="absolute -right-4 top-10 hidden rounded-2xl border border-white/10 bg-[#0a1024]/90 p-4 shadow-xl backdrop-blur md:block">
              <p className="text-sm text-white/50">Destination</p>
              <p className="mt-1 font-semibold text-violet-300">United States</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Your journey in{" "}
              <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                3 simple steps
              </span>
            </h2>
            <p className="mt-4 text-white/65">
              UniNexa simplifies international applications into a guided, structured,
              and repeatable process.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              number="01"
              title="Create your profile"
              text="Add your personal details, KCSE results, academic history, and study preferences in one structured profile."
              icon={<User className="h-6 w-6" strokeWidth={1.8} />}
              iconClasses="from-violet-600/20 to-indigo-600/20 text-violet-300"
            />
            <InfoCard
              number="02"
              title="Upload and standardize"
              text="Upload transcripts, certificates, ID, and supporting documents. UniNexa organizes them into a globally readable format."
              icon={<FileText className="h-6 w-6" strokeWidth={1.8} />}
              iconClasses="from-emerald-500/20 to-cyan-500/20 text-emerald-300"
            />
            <InfoCard
              number="03"
              title="Apply with confidence"
              text="Find universities, track your progress, and move through the admissions process with more clarity and structure."
              icon={<Building2 className="h-6 w-6" strokeWidth={1.8} />}
              iconClasses="from-amber-500/20 to-orange-500/20 text-amber-300"
            />
          </div>
        </div>
      </section>

      <section id="why-uninexa" className="mx-auto max-w-7xl px-6 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Why UniNexa
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            A smarter, more transparent way to apply abroad
          </h2>
          <p className="mt-4 text-white/65">
            Built for Kenyan students and designed to create stronger, more trusted
            international applications.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-violet-400/25"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${card.bg} ${card.color}`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 text-xl font-bold">{card.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-[#0a1024]/80 p-8 shadow-2xl backdrop-blur md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              UniNexa vs traditional agencies
            </p>
            <h3 className="mt-4 text-3xl font-bold">More transparency. More control.</h3>
            <p className="mt-4 max-w-xl text-white/65">
              UniNexa gives students a more structured and visible application journey
              compared with traditional agency-led processes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-violet-300">UniNexa</p>
                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  <li>• One structured profile</li>
                  <li>• More application visibility</li>
                  <li>• Organized academic records</li>
                  <li>• Student-first experience</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white/80">Traditional agents</p>
                <ul className="mt-4 space-y-3 text-sm text-white/60">
                  <li>• Repetitive manual steps</li>
                  <li>• Limited status visibility</li>
                  <li>• Inconsistent document handling</li>
                  <li>• Less transparent process flow</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="for-universities" className="rounded-[32px] border border-white/10 bg-[#0a1024]/80 p-8 shadow-2xl backdrop-blur md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
              For universities
            </p>
            <h3 className="mt-4 text-3xl font-bold">
              Structured applications from a high-potential market
            </h3>
            <p className="mt-4 text-white/65">
              UniNexa helps institutions receive cleaner, more complete, and easier-to-review
              applications from Kenyan students.
            </p>

            <ul className="mt-8 space-y-4 text-white/75">
              <li className="flex items-start gap-3">
                <Building2 className="mt-1 h-5 w-5 text-indigo-300" strokeWidth={1.8} />
                <span>Access a growing pool of qualified Kenyan applicants</span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck2 className="mt-1 h-5 w-5 text-indigo-300" strokeWidth={1.8} />
                <span>Receive more standardized and better organized applications</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-indigo-300" strokeWidth={1.8} />
                <span>Improve confidence in document consistency and academic data quality</span>
              </li>
            </ul>

            <button className="mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition hover:border-white/30">
              Partner With UniNexa
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[32px] border border-white/10 bg-linear-to-r from-sky-900/90 to-cyan-700/80 p-8 shadow-2xl md:p-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Plan your global future
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Everything you need to prepare for international university applications —
              from finding the right-fit universities and understanding funding to
              organizing documents and planning your next steps.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {planningCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-3xl border border-white/15 bg-white/95 p-8 text-slate-900 shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-sky-700">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <div className="mt-4 h-1 w-12 rounded-full bg-slate-900/80" />
                  <p className="mt-6 text-base leading-7 text-slate-700">
                    {card.description}
                  </p>
                  <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-sky-700">
                    {card.cta}
                    <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="for-students" className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[32px] border border-emerald-300/40 bg-[#f8f6ec] p-8 text-slate-900 shadow-2xl md:p-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Your complete international application guide
              </h2>
              <div className="mt-8 h-1 w-14 rounded-full bg-slate-900" />
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">
                Applying abroad can feel complex. UniNexa gives you a clearer, guided
                path so you can prepare stronger applications with confidence.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-800">
                  Undergraduate guide
                </button>
                <button className="rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-800">
                  Transfer guide
                </button>
              </div>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-300 bg-emerald-50 text-emerald-700">
              <BookOpen className="h-8 w-8" strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-linear-to-r from-violet-700/30 via-indigo-700/20 to-fuchsia-700/30 p-8 shadow-2xl backdrop-blur md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">
                Ready to begin?
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
                Build your international application journey with a premium Kenyan-first platform
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-white/75">
                UniNexa helps you organize records, discover universities, and move
                through the application process with clarity and confidence.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <button className="rounded-full bg-white px-7 py-4 font-semibold text-slate-900 transition hover:scale-[1.02]">
                Create Your Account
              </button>
              <button className="rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-8 border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="UniNexa logo"
                width={42}
                height={42}
                className="rounded-xl object-cover"
              />
              <div>
                <p className="text-2xl font-bold">UniNexa</p>
                <p className="text-xs text-white/50">Global admissions, simplified</p>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-white/60">
              Connecting Kenyan students to international universities through a more
              structured, guided, and trusted digital admissions experience.
            </p>
          </div>

          <div>
            <p className="font-semibold">For Students</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>How It Works</li>
              <li>Find Universities</li>
              <li>Application Guide</li>
              <li>Document Standards</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">For Universities</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>Partner With Us</li>
              <li>Why UniNexa</li>
              <li>Structured Applications</li>
              <li>Recruitment Pipeline</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-white/45 md:flex-row">
            <p>© 2026 UniNexa. All rights reserved.</p>
            <p>Made with ambition in Kenya 🇰🇪</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function InfoCard({
  number,
  title,
  text,
  icon,
  iconClasses,
}: {
  number: string;
  title: string;
  text: string;
  icon: React.ReactNode;
  iconClasses: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0a1024]/80 p-6 transition hover:-translate-y-1 hover:border-violet-400/30">
      <div className="flex items-center justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${iconClasses}`}
        >
          {icon}
        </div>
        <span className="text-sm font-semibold text-violet-300">{number}</span>
      </div>
      <h3 className="mt-6 text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-white/65">{text}</p>
    </div>
  );
}