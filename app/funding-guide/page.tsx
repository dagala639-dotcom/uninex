import Link from "next/link";
import {
  Award,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  Globe,
  GraduationCap,
  Landmark,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const fundingRoutes = [
  {
    title: "CSS Profile Institutional Aid",
    tag: "Best for US private universities",
    description:
      "For universities that use CSS Profile to assess financial need and award institutional grants or scholarships.",
    fit: "High-achieving students applying to private US universities with strong financial aid budgets.",
    action: "Check if your selected university requires CSS Profile.",
    icon: PiggyBank,
  },
  {
    title: "University Merit Scholarships",
    tag: "Best for strong grades",
    description:
      "Automatic or competitive scholarships awarded by universities based on KCSE performance, leadership, talent, or academic strength.",
    fit: "Students with strong KCSE grades, leadership, sports, STEM, arts, or community impact.",
    action: "Apply early and prepare a strong academic profile.",
    icon: Award,
  },
  {
    title: "Mastercard Foundation Scholars Program",
    tag: "Transformative leadership",
    description:
      "A major scholarship route for talented, service-oriented African students through selected partner universities.",
    fit: "Students with academic strength, leadership, community service, and financial need.",
    action: "Apply only through official partner university routes.",
    icon: ShieldCheck,
  },
  {
    title: "Stipendium Hungaricum",
    tag: "Hungary government route",
    description:
      "Government scholarship route for Kenyan students, usually advertised through Kenya’s Ministry of Education.",
    fit: "Students interested in Hungary for bachelor’s, master’s, one-tier master’s, or PhD study.",
    action: "Track Ministry of Education deadlines and Tempus portal requirements.",
    icon: Landmark,
  },
  {
    title: "Chevening Scholarship",
    tag: "UK master’s only",
    description:
      "UK Government-funded scholarship for future leaders pursuing a one-year master’s degree in the UK.",
    fit: "Postgraduate applicants with leadership, work experience, and strong career goals.",
    action: "Prepare leadership essays and UK course choices before applications open.",
    icon: Globe,
  },
  {
    title: "DAAD Scholarships",
    tag: "Germany / East Africa",
    description:
      "German academic funding opportunities for undergraduate, postgraduate, and research pathways depending on programme availability.",
    fit: "Students interested in Germany, research, development-related fields, or postgraduate study.",
    action: "Check DAAD Kenya funding calls regularly.",
    icon: BookOpen,
  },
  {
    title: "Erasmus Mundus",
    tag: "Europe joint master’s",
    description:
      "Fully funded European joint master’s programmes across multiple universities and countries.",
    fit: "Strong postgraduate applicants seeking international European master’s programmes.",
    action: "Shortlist Erasmus Mundus programmes early and prepare documents months ahead.",
    icon: GraduationCap,
  },
  {
    title: "Athletic / Talent Scholarships",
    tag: "Sports and talent",
    description:
      "Funding routes for students with competitive sports, arts, music, leadership, or special talent profiles.",
    fit: "Students with verified achievements, videos, awards, records, or coach recommendations.",
    action: "Prepare evidence, portfolio, coach contacts, and achievement history.",
    icon: Target,
  },
];

const readinessItems = [
  "KCSE certificate or result slip",
  "Academic transcript",
  "Passport or national ID",
  "Personal statement",
  "Recommendation letter",
  "Parent or sponsor income details",
  "Bank statement or sponsor proof",
  "English test result if required",
];

const scholarshipTypes = [
  "Need-based aid",
  "Merit scholarships",
  "Government scholarships",
  "Foundation scholarships",
  "University tuition discounts",
  "Athletic scholarships",
  "External awards",
  "Fee waivers",
];

export default function ScholarshipGuidePage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%),linear-gradient(to_bottom,#07111f,#0A0F1D,#07111f)]" />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
        <Link
          href="/dashboard"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          ← Back to dashboard
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-200">
              <Sparkles className="h-4 w-4" />
              UniNexa Funding Intelligence
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Scholarship Guide for Kenyan students applying abroad
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              Discover the best funding routes for Kenyan students, understand
              which scholarships fit your profile, and prepare documents before
              deadlines.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#funding-routes"
                className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 px-6 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20"
              >
                Explore Funding Routes
              </a>

              <a
                href="#readiness"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white/70 transition hover:bg-white/10"
              >
                Check Readiness
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <p className="text-sm text-white/45">Funding Readiness</p>

            <div className="mt-4 flex items-end justify-between gap-4">
              <h2 className="text-5xl font-black text-fuchsia-300">72%</h2>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                Improving
              </span>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500" />
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Personal statement missing",
                "Parent income details incomplete",
                "Recommendation letter needed",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/65"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="funding-routes"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            Funding Routes
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Every major funding option UniNexa should guide students through
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
            Not every scholarship fits every student. UniNexa should match
            students based on destination, study level, grades, financial need,
            documents, leadership, and deadlines.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {fundingRoutes.map((route) => {
            const Icon = route.icon;

            return (
              <div
                key={route.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-fuchsia-400/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-300">
                  <Icon className="h-7 w-7" />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
                  {route.tag}
                </p>

                <h3 className="mt-3 text-xl font-bold">{route.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {route.description}
                </p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-white/35">Best fit</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {route.fit}
                  </p>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  <p className="text-sm leading-6 text-white/70">
                    {route.action}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="readiness"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-fuchsia-300" />
              <h2 className="text-2xl font-bold">Document readiness</h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/55">
              These documents support most funding routes, especially
              need-based aid, CSS Profile preparation, foundation scholarships,
              and university merit awards.
            </p>

            <div className="mt-6 space-y-3">
              {readinessItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <BadgeCheck className="h-5 w-5 text-emerald-300" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/15 to-blue-500/10 p-6 backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-fuchsia-300" />
              <h2 className="text-2xl font-bold">Scholarship types</h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/60">
              UniNexa should explain each funding type clearly so students do
              not confuse admission, aid, scholarships, grants, and fee waivers.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {scholarshipTypes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                    <p className="font-semibold">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-amber-400/20 bg-amber-500/10 p-5">
              <h3 className="font-semibold text-amber-200">
                Important student warning
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Scholarships are not guaranteed. Students should apply early,
                verify official deadlines, and confirm fees or scholarship rules
                directly from the university or scholarship provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
        <div className="rounded-[2rem] border border-white/10 bg-[#0A0F1D] p-6 shadow-2xl sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
                Smart UniNexa Feature
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Match funding routes to selected universities
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                CSS Profile should only appear for universities that require it.
                Government scholarships should appear by country. Merit aid
                should appear when students have strong academic or leadership
                profiles.
              </p>
            </div>

            <div className="space-y-4">
              {[
                ["Harvard / Yale / Amherst", "CSS Profile likely relevant"],
                ["ASU / public US universities", "Merit aid and fee waivers"],
                ["Hungary", "Stipendium Hungaricum route"],
                ["UK Master’s", "Chevening route"],
                ["Germany", "DAAD route"],
              ].map(([school, note]) => (
                <div
                  key={school}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div>
                    <p className="font-semibold">{school}</p>
                    <p className="mt-1 text-sm text-white/45">{note}</p>
                  </div>

                  <ChevronRight className="h-5 w-5 text-fuchsia-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}