import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export default function RecruitmentPipelinePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%),linear-gradient(to_bottom,#050816,#070b1f,#050816)]" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 text-sm text-violet-200 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              UniNexa Recruitment Infrastructure
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
              A smarter recruitment pipeline for{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                global universities
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              UniNexa helps universities move beyond fragmented recruitment
              workflows by creating a structured pipeline connecting Kenyan
              students to international institutions through a modern digital
              admissions ecosystem.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/universities/partner"
                className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-sm font-semibold shadow-xl shadow-violet-900/40 transition hover:scale-[1.02]"
              >
                Become a Partner
              </a>

              <a
                href="/universities/why-uninexa"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold backdrop-blur transition hover:border-white/30"
              >
                Why UniNexa
              </a>
            </div>
          </div>

          <div className="mt-14 lg:mt-0">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="rounded-[28px] border border-white/10 bg-[#0a1024] p-8">
                <p className="text-sm text-violet-300">
                  Recruitment Visibility
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  From discovery to enrolment
                </h3>

                <div className="mt-8 space-y-5">
                  {[
                    "Student discovery",
                    "University interest tracking",
                    "Structured application preparation",
                    "Document organization",
                    "Application submission pipeline",
                    "Admissions visibility",
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

      {/* CORE SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Recruitment Pipeline
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Designed for modern international recruitment
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/65">
            UniNexa gives universities clearer access to qualified Kenyan
            applicants while improving visibility, organization, and student
            preparedness throughout the admissions journey.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Student Discovery",
              icon: Globe,
              text: "Universities gain visibility into students exploring international opportunities early in the admissions journey.",
            },
            {
              title: "Structured Applications",
              icon: Building2,
              text: "Applications are standardized into globally understandable formats for easier review and faster admissions workflows.",
            },
            {
              title: "Academic Readiness",
              icon: GraduationCap,
              text: "Students complete profiles, upload records, and organize application requirements before submission.",
            },
            {
              title: "Document Organization",
              icon: ShieldCheck,
              text: "Academic records, KCSE data, and supporting documents are organized into consistent application structures.",
            },
            {
              title: "Recruitment Visibility",
              icon: Users,
              text: "Universities can understand application progress and student engagement more clearly than traditional fragmented channels.",
            },
            {
              title: "Scalable Infrastructure",
              icon: Sparkles,
              text: "UniNexa is designed to evolve into a scalable African recruitment and admissions ecosystem.",
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

      {/* PIPELINE FLOW */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-violet-700/20 to-indigo-700/20 p-10 backdrop-blur-xl md:p-14">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              Pipeline Flow
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              From student interest to university enrolment
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              UniNexa creates a more transparent and organized recruitment
              journey that improves student preparedness while helping
              universities receive cleaner and more structured applications.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {[
              "Discovery",
              "Profile Creation",
              "Document Preparation",
              "Application Submission",
              "University Review",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-black/20 p-6"
              >
                <p className="text-sm font-semibold text-violet-300">
                  STEP {index + 1}
                </p>

                <h3 className="mt-4 text-xl font-bold">
                  {step}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/universities/partner"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]"
            >
              Start Partnership Discussion
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}