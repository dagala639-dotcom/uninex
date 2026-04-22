import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  CircleDollarSign,
  FileCheck2,
  FileText,
  Globe,
  GraduationCap,
  HeartHandshake,
  Landmark,
  MapPinned,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

const destinations = [
  {
    name: "United States",
    text: "Often requires a broad application profile, personal essays, recommendation letters, and careful financial planning.",
  },
  {
    name: "Canada",
    text: "Usually places strong weight on academic records, supporting documents, affordability, and long-term study planning.",
  },
  {
    name: "United Kingdom",
    text: "Tends to be more course-focused, with strong emphasis on academic fit, subject interest, and clear progression.",
  },
  {
    name: "Australia",
    text: "Often combines academic review, financial readiness, and a practical understanding of course and destination choices.",
  },
];

const essentials = [
  "KCSE results or result slip",
  "School transcripts and academic records",
  "Passport or national identification",
  "Parent, guardian, or sponsor details",
  "Activities, leadership, and responsibilities",
  "Academic awards and recognitions",
  "Preferred courses and destination interests",
];

const supportPeople = [
  {
    title: "Teachers and school referees",
    text: "People who can speak to your academic ability, discipline, and classroom performance.",
    icon: GraduationCap,
  },
  {
    title: "Parents, guardians, or sponsors",
    text: "People who may support your planning, finances, and application decisions.",
    icon: HeartHandshake,
  },
  {
    title: "School administrators",
    text: "People who help confirm official school documents, transcripts, and academic records.",
    icon: Landmark,
  },
];

const fundingItems = [
  "Scholarships and merit awards",
  "Need-based financial aid",
  "Application fee waivers",
  "Family or sponsor contribution planning",
  "Education loans where appropriate",
  "Budget planning before submission",
];

const uninexaHelp = [
  {
    title: "Build one structured student profile",
    text: "Create a complete profile once and use it as the foundation for multiple applications.",
    icon: UserRound,
  },
  {
    title: "Prepare academic records for international review",
    text: "Organize KCSE and related academic information into a clearer format for global admissions teams.",
    icon: ShieldCheck,
  },
  {
    title: "Track what matters",
    text: "Stay on top of documents, requirements, deadlines, and next steps throughout your journey.",
    icon: FileCheck2,
  },
  {
    title: "Explore universities with intention",
    text: "Focus on universities that align with your academic profile, destination goals, and budget realities.",
    icon: MapPinned,
  },
];

export default function UndergraduateGuidePage() {
  return (
    <main className="min-h-screen bg-[#f8f8fb] text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),linear-gradient(to_bottom,#050816,#0b1022)]" />

      <section className="border-b border-white/10 bg-[#050816] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 text-sm text-violet-200">
              <Sparkles className="h-4 w-4" strokeWidth={1.8} />
              <span>Kenya-first guide for global undergraduate applications</span>
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Your UniNexa Undergraduate Application Guide
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              A practical, step-by-step guide for Kenyan students preparing to apply to
              universities in the United States, Canada, the United Kingdom, and Australia.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:text-base"
              >
                Start Your UniNexa Profile
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:text-base"
              >
                Explore Universities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-6 md:grid-cols-3">
          <QuickCard
            icon={<FileText className="h-6 w-6" strokeWidth={1.8} />}
            title="Prepare early"
            text="Get your academic, personal, and sponsor details ready before you begin applications."
          />
          <QuickCard
            icon={<Globe className="h-6 w-6" strokeWidth={1.8} />}
            title="Understand destinations"
            text="Different countries ask for different combinations of essays, tests, and documents."
          />
          <QuickCard
            icon={<CircleDollarSign className="h-6 w-6" strokeWidth={1.8} />}
            title="Plan affordability"
            text="Think about scholarships, aid, loans, and family contribution from the start."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <GuideSection
          kicker="01"
          title="Start with the essentials"
          description="Before you apply, prepare the core information and documents most universities will expect to see."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {essentials.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-500" />
                  <p className="text-sm leading-7 text-slate-700 sm:text-base">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </GuideSection>

        <GuideSection
          kicker="02"
          title="Create your UniNexa profile"
          description="Your UniNexa profile becomes the foundation of your application journey, helping you keep your information organized and reusable."
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <InfoMini
                title="One profile"
                text="Enter your details once and build from a single source of truth."
                icon={<UserRound className="h-5 w-5" strokeWidth={1.8} />}
              />
              <InfoMini
                title="Better organization"
                text="Keep your records, preferences, and next steps in one structured place."
                icon={<BookOpen className="h-5 w-5" strokeWidth={1.8} />}
              />
              <InfoMini
                title="Smoother planning"
                text="Move into university search, document prep, and funding with more clarity."
                icon={<BadgeCheck className="h-5 w-5" strokeWidth={1.8} />}
              />
            </div>
          </div>
        </GuideSection>

        <GuideSection
          kicker="03"
          title="Prepare your academic records for international review"
          description="As a Kenyan student, one of the most important steps is ensuring your academic records are complete, accurate, and ready for global admissions review."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">What to prepare</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                <li>• KCSE results and official school records</li>
                <li>• Transcripts and academic summaries</li>
                <li>• School details and graduation timeline</li>
                <li>• Any supporting academic certifications</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Why this matters</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                Universities abroad often review students from many education systems.
                Preparing your academic information well improves clarity, reduces avoidable
                confusion, and supports stronger evaluation.
              </p>
            </div>
          </div>
        </GuideSection>

        <GuideSection
          kicker="04"
          title="Know what each destination expects"
          description="Each destination has its own application style, document expectations, and funding realities. Understanding these differences early helps you plan better."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {destinations.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </GuideSection>

        <GuideSection
          kicker="05"
          title="Build a balanced university list"
          description="Do not choose universities randomly. Build a thoughtful list that reflects ambition, fit, affordability, and realistic outcomes."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <TierCard
              title="Ambitious choices"
              text="Universities that are highly competitive but worth reaching for if your academic profile is strong."
            />
            <TierCard
              title="Strong-fit choices"
              text="Universities that align well with your profile, intended course, and realistic admission chances."
            />
            <TierCard
              title="Safer options"
              text="Universities that provide a more practical fallback while still supporting your long-term goals."
            />
          </div>
        </GuideSection>

        <GuideSection
          kicker="06"
          title="Plan the people who support your application"
          description="Your application may depend on people who help confirm your records, speak to your strengths, or support your financial planning."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {supportPeople.map((person) => {
              const Icon = person.icon;
              return (
                <div
                  key={person.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{person.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                    {person.text}
                  </p>
                </div>
              );
            })}
          </div>
        </GuideSection>

        <GuideSection
          kicker="07"
          title="Understand funding and affordability early"
          description="Many students focus only on admission. Strong planning also means understanding what you can realistically afford and what funding options may support you."
        >
          <div className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <CircleDollarSign className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold">Funding areas to think about</h3>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {fundingItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#0b1022] p-6 text-white shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <Briefcase className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-xl font-bold">Important reminder</h3>
              <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
                The best university list is not only about prestige. It should also reflect
                affordability, potential scholarship access, and a realistic funding plan.
              </p>
            </div>
          </div>
        </GuideSection>

        <GuideSection
          kicker="08"
          title="How UniNexa supports your journey"
          description="UniNexa is designed to help Kenyan students prepare stronger, more organized international applications from the start."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {uninexaHelp.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </GuideSection>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="overflow-hidden rounded-[32px] bg-[#050816] px-6 py-10 text-white shadow-2xl sm:px-8 sm:py-12 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Ready to begin?
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Start your undergraduate journey with more structure and confidence
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            UniNexa helps Kenyan students prepare smarter, organize their records, and move
            through international applications with better clarity.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:text-base"
            >
              Create your profile
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:text-base"
            >
              Back to homepage
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function GuideSection({
  kicker,
  title,
  description,
  children,
}: {
  kicker: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12 sm:mb-16">
      <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-10">
        <div className="lg:pt-2">
          <p className="text-5xl font-black text-violet-600/85 sm:text-6xl">{kicker}</p>
        </div>

        <div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {description}
          </p>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function QuickCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{text}</p>
    </div>
  );
}

function InfoMini({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm">
        {icon}
      </div>
      <h3 className="mt-4 font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function TierCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{text}</p>
    </div>
  );
}