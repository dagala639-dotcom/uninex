import Link from "next/link";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  FileText,
  MessageSquareWarning,
  Scale,
  ShieldCheck,
} from "lucide-react";

const complaintSteps = [
  {
    title: "Submit your complaint",
    description:
      "Students may submit concerns regarding counselling, communication, applications, document handling, admissions guidance, or service quality.",
  },
  {
    title: "Internal review",
    description:
      "UniNexa reviews complaints fairly and confidentially to understand the issue and gather the necessary information.",
  },
  {
    title: "Resolution response",
    description:
      "A formal response, clarification, or resolution outcome will be shared with the student after review.",
  },
];

const acceptedComplaints = [
  "Misleading or inaccurate admissions guidance",
  "Poor communication or delayed responses",
  "Concerns regarding professionalism or conduct",
  "Application handling concerns",
  "Document management concerns",
  "Privacy or personal information concerns",
  "Technical platform-related concerns",
];

export default function ComplaintsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            ← Back to UniNexa
          </Link>

          <div className="mt-12 max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm text-red-200">
              <Scale className="h-4 w-4" />
              Student Complaints & Resolution
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Student Complaints Process
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              UniNexa is committed to transparent, fair, and student-first
              international admissions support. Students may raise concerns
              regarding our services, communication, application guidance, or
              platform experience.
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
              <div>
                <h2 className="text-2xl font-bold">
                  Our complaints commitment
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                  UniNexa believes students deserve clear communication, respectful
                  treatment, and transparent admissions guidance. If a student is
                  dissatisfied with any aspect of our service, we encourage them to
                  raise the concern so it can be reviewed fairly and professionally.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                  Complaints are handled confidentially and reviewed internally to
                  improve accountability, transparency, and student trust.
                </p>
              </div>

              <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-5">
                <ShieldCheck className="h-10 w-10 text-red-300" />

                <h3 className="mt-5 text-xl font-bold text-red-200">
                  Student protection
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  UniNexa does not tolerate misleading advice, unethical conduct,
                  discrimination, document misuse, or unfair treatment of students.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-bold">
              Complaint resolution process
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {complaintSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-300">
                    <span className="text-lg font-bold">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-[#0a1024]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="mt-1 h-7 w-7 shrink-0 text-red-300" />

                <div>
                  <h2 className="text-2xl font-bold">
                    Concerns we accept
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Examples of complaints or concerns students may raise include:
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {acceptedComplaints.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />

                    <p className="text-sm leading-7 text-white/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
                <div className="flex items-start gap-4">
                  <Clock3 className="mt-1 h-7 w-7 shrink-0 text-fuchsia-300" />

                  <div>
                    <h2 className="text-2xl font-bold">
                      Response timelines
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/65">
                      UniNexa aims to:
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    "Acknowledge complaints within 5 business days",
                    "Review concerns fairly and internally",
                    "Provide a response or update within 14 business days where reasonably possible",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="text-sm text-white/70">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
                <div className="flex items-start gap-4">
                  <MessageSquareWarning className="mt-1 h-7 w-7 shrink-0 text-yellow-300" />

                  <div>
                    <h2 className="text-2xl font-bold">
                      Submit a complaint
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/65">
                      Students may submit complaints by email with:
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    "Full name",
                    "Email address",
                    "Application reference (if available)",
                    "Description of the issue",
                    "Relevant screenshots or documents",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="text-sm text-white/70">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 p-5">
                  <p className="text-sm text-white/70">
                    Complaints contact:
                  </p>

                  <p className="mt-2 text-lg font-semibold text-fuchsia-200">
                    complaints@uninexa.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/20 p-6">
            <div className="flex items-start gap-4">
              <FileText className="mt-1 h-7 w-7 shrink-0 text-fuchsia-300" />

              <div>
                <h2 className="text-2xl font-bold">
                  Additional information
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  UniNexa reviews complaints in good faith and encourages students
                  to provide accurate information when raising concerns. Complaints
                  involving universities, immigration authorities, visa decisions,
                  or third-party organizations may require separate external review
                  processes beyond UniNexa’s control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}