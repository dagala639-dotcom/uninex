import Link from "next/link";
import {
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  FileCheck2,
  Globe,
  Lock,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const principles = [
  {
    title: "Student-centred guidance",
    text: "UniNexa places the student’s academic goals, welfare, budget, and long-term interests at the centre of every recommendation.",
    icon: UserCheck,
  },
  {
    title: "Honest and accurate information",
    text: "We aim to provide clear, current, and accurate information about universities, programmes, deadlines, costs, scholarships, and application requirements.",
    icon: BadgeCheck,
  },
  {
    title: "No false guarantees",
    text: "UniNexa does not guarantee admission, scholarships, visas, or employment outcomes. We help students prepare stronger and more complete applications.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent fees and services",
    text: "Students should understand what support they are receiving, what is free, what may be paid, and whether any third-party or institutional relationship exists.",
    icon: FileCheck2,
  },
  {
    title: "Data protection and privacy",
    text: "Student personal data, academic records, financial documents, and application details are handled responsibly in line with Kenyan data protection expectations.",
    icon: Lock,
  },
  {
    title: "Responsible international recruitment",
    text: "UniNexa supports ethical recruitment practices and aims to align with recognized international education agent standards.",
    icon: Globe,
  },
];

const commitments = [
  "We will not misrepresent university entry requirements, tuition fees, scholarships, visa rules, or employment opportunities.",
  "We will not submit false, altered, or misleading documents on behalf of a student.",
  "We will encourage students to make informed choices based on academic fit, affordability, destination requirements, and long-term goals.",
  "We will clearly explain that final admission decisions are made by universities, not UniNexa.",
  "We will protect student information and only use it for legitimate application, advising, verification, and communication purposes.",
  "We will maintain a student complaints process and respond to concerns in a fair and timely manner.",
];

export default function EthicalPracticePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            ← Back to UniNexa
          </Link>

          <div className="mt-12 max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
              <Scale className="h-4 w-4" />
              Ethical Recruitment Standards
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              National Code of Ethical Practice
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              UniNexa is committed to responsible, transparent, and student-first
              international admissions support for Kenyan and African students
              applying to study abroad.
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
              <div>
                <h2 className="text-2xl font-bold">
                  Our ethical recruitment commitment
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                  UniNexa is guided by the principles of the UK Agent Quality
                  Framework and the National Code of Ethical Practice for UK
                  Education Agents. These standards promote student protection,
                  accurate counselling, transparency, and responsible recruitment.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                  UniNexa also recognizes the importance of Kenya’s data protection
                  framework when handling student personal data, academic records,
                  passports, financial documents, and application information.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-5">
                <ShieldCheck className="h-10 w-10 text-emerald-300" />

                <h3 className="mt-5 text-xl font-bold text-emerald-200">
                  Student-first promise
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  We support students with clarity, honesty, and respect. UniNexa
                  does not pressure students into unsuitable choices or make
                  misleading promises about admission, visas, scholarships, or jobs.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-fuchsia-400/25"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-[#0a1024]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="flex items-start gap-4">
              <BookOpen className="mt-1 h-7 w-7 shrink-0 text-fuchsia-300" />

              <div>
                <h2 className="text-2xl font-bold">
                  What UniNexa commits to
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  These commitments apply to our student advising, application
                  support, university matching, scholarship guidance, and document
                  preparation services.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {commitments.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                  <p className="text-sm leading-7 text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
              <h2 className="text-2xl font-bold">
                Student protection
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/65">
                Students should understand the universities they are applying to,
                the costs involved, the admissions requirements, document
                expectations, scholarship conditions, visa-related responsibilities,
                and any limitations of the advice provided.
              </p>

              <Link
                href="/student-guide"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
              >
                Read Student Guide
              </Link>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
              <h2 className="text-2xl font-bold">
                Complaints and concerns
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/65">
                If a student believes they received unclear advice, inaccurate
                information, unfair treatment, or poor communication, they may use
                UniNexa’s complaints process for review and resolution.
              </p>

              <Link
                href="/complaints"
                className="mt-6 inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Complaints Process
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/20 p-6 text-sm leading-7 text-white/55">
            <p>
              Note: UniNexa is not a law firm, immigration authority, or visa
              decision-maker. Visa, immigration, and institutional decisions remain
              the responsibility of the relevant government authorities and
              universities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}