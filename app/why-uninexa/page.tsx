import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  Globe,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export default function WhyUniNexaPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%),linear-gradient(to_bottom,#050816,#070b1f,#050816)]" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 text-sm text-violet-200 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Why Universities Choose UniNexa
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
              Modern recruitment infrastructure for{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                African student mobility
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              UniNexa helps universities access a premium pipeline of Kenyan
              applicants through a structured, technology-first admissions
              ecosystem designed for transparency, organization, and scale.
            </p>
          </div>

          <div className="mt-14 lg:mt-0">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="rounded-[28px] border border-white/10 bg-[#0a1024] p-8">
                <p className="text-sm text-violet-300">
                  UniNexa Infrastructure
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  Built differently
                </h3>

                <div className="mt-8 space-y-5">
                  {[
                    "Structured student applications",
                    "Digital-first recruitment workflows",
                    "Kenya-focused admissions infrastructure",
                    "Academic verification layer",
                    "Scalable African expansion strategy",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUE */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            The UniNexa Difference
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Not a traditional student agency
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/65">
            UniNexa is being built as a long-term admissions infrastructure
            platform — helping universities recruit more efficiently from Kenya
            using standardized applications, organized records, and transparent
            student workflows.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Structured Applications",
              icon: Building2,
              text: "Applications are standardized into globally understandable formats that improve admissions review efficiency.",
            },
            {
              title: "Digital Recruitment Infrastructure",
              icon: Globe,
              text: "Universities access a modern digital recruitment ecosystem rather than fragmented manual workflows.",
            },
            {
              title: "Built Around Kenya",
              icon: GraduationCap,
              text: "Designed specifically around KCSE, Kenyan schools, and East African student realities.",
            },
            {
              title: "Academic Verification",
              icon: ShieldCheck,
              text: "UniNexa introduces systems designed to improve confidence in submitted records and student data.",
            },
            {
              title: "Student Transparency",
              icon: Users,
              text: "Students gain clearer visibility into application progress, requirements, and admissions steps.",
            },
            {
              title: "Scalable African Vision",
              icon: BadgeCheck,
              text: "UniNexa is designed to scale into a larger African admissions and mobility ecosystem.",
            },
          ].map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-violet-400/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-4 leading-8 text-white/65">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-violet-700/20 to-indigo-700/20 p-10 backdrop-blur-xl md:p-14">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              Long-Term Vision
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Building the future of African international admissions
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              UniNexa aims to modernize how universities connect with African
              students by creating a trusted, transparent, and scalable digital
              admissions infrastructure that improves access, organization, and
              global opportunity.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              "Premium student experience",
              "Modern admissions workflow",
              "University-ready infrastructure",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 p-6"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  <p className="font-semibold">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}