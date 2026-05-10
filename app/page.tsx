import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Compass,
  Eye,
  FileCheck2,
  FileText,
  Globe,
  Lock,
  Mail,
  Map,
  Phone,
  Plane,
  Quote,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why UniNexa", href: "#why-uninexa" },
  { label: "For Students", href: "#for-students" },
  { label: "For Universities", href: "#for-universities" },
  { label: "FAQ", href: "#faq" },
];

const universities = [
  "University of South Florida",
  "Arizona State University",
  "Drexel University",
  "Clark University",
];

const whyCards = [
  {
    title: "Verified academic records",
    description:
      "UniNexa uses secure verification processes to improve confidence in submitted KCSE records and academic documents.",
    icon: ShieldCheck,
    color: "text-emerald-300",
    bg: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "One profile, multiple applications",
    description:
      "Create your profile once and reuse it across multiple university applications without repeating the same information.",
    icon: User,
    color: "text-violet-300",
    bg: "from-violet-500/20 to-indigo-500/20",
  },
  {
    title: "Structured for global admissions",
    description:
      "Your records are organized into formats that international admissions teams can understand and review more efficiently.",
    icon: Globe,
    color: "text-sky-300",
    bg: "from-sky-500/20 to-cyan-500/20",
  },
  {
    title: "Full application visibility",
    description:
      "Track progress, documents, and next steps in one place with a clearer and more transparent admissions journey.",
    icon: Eye,
    color: "text-amber-300",
    bg: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Built for Kenyan students",
    description:
      "Designed around KCSE, local student realities, and the complexity of applying abroad from Kenya.",
    icon: BadgeCheck,
    color: "text-fuchsia-300",
    bg: "from-fuchsia-500/20 to-pink-500/20",
  },
  {
    title: "Student-first experience",
    description:
      "A more transparent alternative to manual agency processes, with stronger visibility and better organization.",
    icon: FileCheck2,
    color: "text-indigo-300",
    bg: "from-indigo-500/20 to-violet-500/20",
  },
];

const planningCards = [
  {
    title: "Choose the right university",
    description:
      "Explore universities that match your academic background, budget, destination preferences, and long-term goals.",
    cta: "Explore universities",
    icon: Compass,
  },
  {
    title: "Understand costs and funding",
    description:
      "Get clearer guidance on tuition, living expenses, scholarships, and financial planning before you apply.",
    cta: "Explore funding",
    icon: Calculator,
  },
  {
    title: "Build your application roadmap",
    description:
      "Stay organized with deadlines, required documents, submission milestones, and next steps throughout the process.",
    cta: "View roadmap",
    icon: Map,
  },
];

const trustStats = [
  { value: "Kenya-first", label: "designed for local applicants" },
  { value: "Structured", label: "global-ready application format" },
  { value: "Verified", label: "academic record confidence layer" },
  { value: "Transparent", label: "clearer student journey" },
];

const testimonials = [
  {
    name: "Future applicant perspective",
    role: "Student preparing to study abroad",
    quote:
      "What makes UniNexa compelling is clarity. Instead of guessing what comes next, students can follow one structured process from profile to application.",
  },
  {
    name: "Parent trust perspective",
    role: "Parent-focused value",
    quote:
      "A platform like this creates confidence because documents, requirements, and progress are organized in one place rather than scattered across emails and agents.",
  },
  {
    name: "Admissions value perspective",
    role: "University-facing value",
    quote:
      "UniNexa stands out by making Kenyan applications more structured, more consistent, and easier for international teams to understand.",
  },
];

const faqs = [
  {
    q: "Is UniNexa a study abroad agency?",
    a: "No. UniNexa is a digital admissions platform designed to make the application journey more structured, transparent, and easier to manage for students and universities.",
  },
  {
    q: "Does UniNexa guarantee university admission?",
    a: "No platform can guarantee admission. UniNexa helps students prepare stronger, better-organized applications and move through the process with more clarity.",
  },
  {
    q: "Who is UniNexa built for?",
    a: "UniNexa is built for Kenyan students applying to international universities, starting with undergraduate pathways and expanding over time.",
  },
  {
    q: "How does UniNexa help universities?",
    a: "UniNexa helps universities receive more structured applications with clearer academic data and stronger document consistency from Kenyan applicants.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_26%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(to_bottom,#050816,#070b1f,#050816)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="UniNexa logo"
              width={42}
              height={42}
              className="rounded-xl object-cover"
            />
            <div>
              <p className="text-xl font-bold tracking-tight sm:text-2xl">UniNexa</p>
              <p className="text-[11px] text-white/50 sm:text-xs">
                Global admissions, simplified
              </p>
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

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white">
              Sign In
            </button>
            <button className="rounded-full bg-linear-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:scale-[1.02]">
              Get Started
            </button>
          </div>

          <details className="md:hidden">
            <summary className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 list-none">
              <ChevronDown className="h-5 w-5" strokeWidth={1.8} />
            </summary>
            <div className="absolute left-4 right-4 top-[72px] rounded-2xl border border-white/10 bg-[#0a1024]/95 p-4 shadow-2xl backdrop-blur">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 flex flex-col gap-3">
                  <button className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80">
                    Sign In
                  </button>
                  <button className="rounded-full bg-linear-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </details>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-20 sm:opacity-25"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#050816]/75" />
          <div className="absolute inset-0 bg-linear-to-r from-[#050816] via-[#050816]/80 to-[#050816]/60" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 md:gap-12 md:pt-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pb-20 lg:pt-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-white/5 px-3 py-2 text-xs text-violet-200 sm:px-4 sm:text-sm">
              <Sparkles className="h-4 w-4" strokeWidth={1.8} />
              <span>Built for Kenyan students. Designed for global admissions.</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
              Your global future starts with{" "}
              <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                UniNexa
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
              A premium digital admissions platform helping Kenyan students build one
              structured profile, standardize their academic records, and apply to
              international universities with more clarity and confidence.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <a
  href="https://uninexa-webapp-o2tj.vercel.app"
  className="w-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-center text-sm font-semibold shadow-xl shadow-violet-900/40 transition hover:scale-[1.02] sm:w-auto sm:px-7 sm:py-4 sm:text-base"
>
  Start Your Application
</a>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
              <MiniCard
                icon={<User className="h-5 w-5" strokeWidth={1.8} />}
                iconColor="text-violet-300"
                title="One Profile"
                text="Apply to multiple universities"
              />
              <MiniCard
                icon={<ShieldCheck className="h-5 w-5" strokeWidth={1.8} />}
                iconColor="text-emerald-300"
                title="Verified Records"
                text="Trust-focused academic review"
              />
              <MiniCard
                icon={<Plane className="h-5 w-5" strokeWidth={1.8} />}
                iconColor="text-cyan-300"
                title="Global Pathways"
                text="Start with the US and expand"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-6 h-28 w-28 rounded-full bg-violet-600/20 blur-3xl sm:h-40 sm:w-40" />
            <div className="absolute -right-6 bottom-6 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl sm:h-44 sm:w-44" />

            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:rounded-[32px] sm:p-4">
              <div className="rounded-[20px] border border-white/10 bg-[#0a1024] p-4 sm:rounded-[28px] sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs text-violet-300 sm:text-sm">Student Dashboard Preview</p>
                    <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                      Application Command Center
                    </h3>
                  </div>
                  <div className="w-fit rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200 sm:px-4 sm:py-2 sm:text-sm">
                    Live Progress
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                    <p className="text-xs text-white/50 sm:text-sm">Profile Completion</p>
                    <div className="mt-3 flex items-end justify-between gap-3">
                      <p className="text-3xl font-black text-violet-300 sm:text-4xl">65%</p>
                      <p className="text-xs text-emerald-300 sm:text-sm">Verification enabled</p>
                    </div>
                    <div className="mt-4 h-3 rounded-full bg-white/10">
                      <div className="h-3 w-[65%] rounded-full bg-linear-to-r from-violet-500 to-indigo-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                    <p className="text-xs text-white/50 sm:text-sm">Next Step</p>
                    <p className="mt-3 text-base font-semibold sm:text-lg">Upload KCSE Results</p>
                    <p className="mt-2 text-xs text-white/60 sm:text-sm">
                      Add your result slip and certificate to continue your application.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                    <p className="text-xs text-white/50 sm:text-sm">Saved Universities</p>
                    <div className="mt-3 space-y-3">
                      {universities.map((school) => (
                        <div
                          key={school}
                          className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-black/20 px-4 py-3"
                        >
                          <span className="text-xs text-white/85 sm:text-sm">{school}</span>
                          <span className="shrink-0 text-[10px] text-violet-300 sm:text-xs">
                            Saved
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                    <p className="text-xs text-white/50 sm:text-sm">Recent Activity</p>
                    <div className="mt-3 space-y-3 text-xs sm:text-sm">
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

            <div className="absolute -bottom-4 left-2 hidden rounded-2xl border border-white/10 bg-[#0a1024]/90 p-4 shadow-xl backdrop-blur md:block">
              <p className="text-sm text-white/50">Structured Documents</p>
              <p className="mt-1 font-semibold">KCSE • Transcript • Passport • ID</p>
            </div>

            <div className="absolute -right-3 top-6 hidden rounded-2xl border border-white/10 bg-[#0a1024]/90 p-4 shadow-xl backdrop-blur md:block">
              <p className="text-sm text-white/50">Destination</p>
              <p className="mt-1 font-semibold text-violet-300">United States</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
        <div className="grid gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-2 sm:gap-4 sm:p-6 xl:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.value} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-2xl font-black text-violet-300">{stat.value}</p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl sm:rounded-[32px] sm:p-8 md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300 sm:text-sm sm:tracking-[0.3em]">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Your journey in{" "}
              <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                3 simple steps
              </span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
              UniNexa simplifies international applications into a guided, structured,
              and repeatable process.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
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

      <section id="why-uninexa" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300 sm:text-sm sm:tracking-[0.3em]">
            Why UniNexa
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            A smarter, more transparent way to apply abroad
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
            Built for Kenyan students and designed to create stronger, more trusted
            international applications.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
                <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-[#0a1024]/80 p-6 shadow-2xl backdrop-blur sm:rounded-[32px] sm:p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300 sm:text-sm sm:tracking-[0.3em]">
              UniNexa vs traditional agencies
            </p>
            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              More transparency. More control.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              UniNexa gives students a more structured and visible application journey
              compared with traditional agency-led processes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-violet-300">UniNexa</p>
                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  <li>• One structured profile</li>
                  <li>• Better visibility</li>
                  <li>• Organized document flow</li>
                  <li>• More student control</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white/80">Traditional agents</p>
                <ul className="mt-4 space-y-3 text-sm text-white/60">
                  <li>• Repetitive manual steps</li>
                  <li>• Less status visibility</li>
                  <li>• Inconsistent handling</li>
                  <li>• Less transparent workflow</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id="for-universities"
            className="rounded-[24px] border border-white/10 bg-[#0a1024]/80 p-6 shadow-2xl backdrop-blur sm:rounded-[32px] sm:p-8 md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300 sm:text-sm sm:tracking-[0.3em]">
              For universities
            </p>
            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              Structured applications from a high-potential market
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
              UniNexa helps institutions receive cleaner, more complete, and easier-to-review
              applications from Kenyan students.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-white/75 sm:text-base">
              <li className="flex items-start gap-3">
                <Building2 className="mt-1 h-5 w-5 shrink-0 text-indigo-300" strokeWidth={1.8} />
                <span>Access a growing pool of qualified Kenyan applicants</span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck2 className="mt-1 h-5 w-5 shrink-0 text-indigo-300" strokeWidth={1.8} />
                <span>Receive more standardized and better organized applications</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-indigo-300" strokeWidth={1.8} />
                <span>Improve confidence in academic data quality and document consistency</span>
              </li>
            </ul>

            <button className="mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:border-white/30 sm:text-base">
              Partner With UniNexa
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="rounded-[24px] border border-white/10 bg-linear-to-r from-sky-900/90 to-cyan-700/80 p-6 shadow-2xl sm:rounded-[32px] sm:p-8 md:p-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
              Plan your global future
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/85 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              Everything you need to prepare for international university applications —
              from finding the right-fit universities and understanding funding to
              organizing documents and planning your next steps.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
            {planningCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-3xl border border-white/15 bg-white/95 p-6 text-slate-900 shadow-xl sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-sky-700">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold uppercase tracking-wide sm:text-xl">
                    {card.title}
                  </h3>
                  <div className="mt-4 h-1 w-12 rounded-full bg-slate-900/80" />
                  <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base">
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

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-6 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-violet-300">
                <Quote className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <p className="mt-6 text-sm leading-7 text-white/75 sm:text-base">
                {item.quote}
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-white/50">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="for-students" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="rounded-[24px] border border-emerald-300/40 bg-[#f8f6ec] p-6 text-slate-900 shadow-2xl sm:rounded-[32px] sm:p-8 md:p-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-6xl">
                Your complete international application guide
              </h2>
              <div className="mt-8 h-1 w-14 rounded-full bg-slate-900" />
              <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8 md:text-lg">
                Applying abroad can feel complex. UniNexa gives you a clearer, guided
                path so you can prepare stronger applications with confidence.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                <button className="w-full rounded-full bg-slate-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto sm:px-8 sm:text-base">
                  <a href="/undergraduate-guide" className="block">
                    Undergraduate guide
                  </a>
                </button>
                <button className="w-full rounded-full bg-slate-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto sm:px-8 sm:text-base">
                  <a href="/transfer-guide" className="block">
                    Transfer guide
                  </a>
                </button>
              </div>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-300 bg-emerald-50 text-emerald-700 sm:h-20 sm:w-20">
              <BookOpen className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="rounded-[24px] border border-white/10 bg-[#0a1024]/80 p-6 shadow-2xl backdrop-blur sm:rounded-[32px] sm:p-8 md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300 sm:text-sm sm:tracking-[0.3em]">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Questions students and parents will ask
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <summary className="cursor-pointer list-none font-semibold">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-linear-to-r from-violet-700/30 via-indigo-700/20 to-fuchsia-700/30 p-6 shadow-2xl backdrop-blur sm:rounded-[36px] sm:p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-200 sm:text-sm sm:tracking-[0.3em]">
                Ready to begin?
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
                Build your international application journey with a premium Kenyan-first platform
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base md:text-lg">
                UniNexa helps you organize records, discover universities, and move
                through the application process with clarity and confidence.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition hover:scale-[1.02] sm:text-base">
                Create Your UniNexa Profile
              </button>
              <button className="rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:text-base">
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-6 border-t border-white/10 bg-black/20 sm:mt-8">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-2 xl:grid-cols-5">
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

            <div className="mt-6 space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" strokeWidth={1.8} />
                <span>hello@uninexa.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" strokeWidth={1.8} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
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
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-white/45 sm:px-6 md:flex-row md:text-left">
            <p>© 2026 UniNexa. All rights reserved.</p>
            <p>Made with ambition in Kenya 🇰🇪</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function MiniCard({
  icon,
  iconColor,
  title,
  text,
}: {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ${iconColor}`}>
        {icon}
      </div>
      <p className="mt-3 font-semibold">{title}</p>
      <p className="mt-1 text-sm text-white/60">{text}</p>
    </div>
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
      <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">{text}</p>
    </div>
  );
}