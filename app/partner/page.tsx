"use client";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Globe,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function PartnerUniversitiesPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_30%),linear-gradient(to_bottom,#050816,#070b1f,#050816)]" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 text-sm text-violet-200 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Partner with UniNexa
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
              Build stronger access to{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                African student talent
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              UniNexa helps international universities connect with structured,
              verified, and globally prepared Kenyan applicants through a modern
              digital admissions ecosystem.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#partnership-form"
                className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-sm font-semibold shadow-xl shadow-violet-900/40 transition hover:scale-[1.02]"
              >
                Become a Partner
              </a>

              <a
                href="#why-partner"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold backdrop-blur transition hover:border-white/30"
              >
                Why UniNexa
              </a>
            </div>
          </div>

          <div className="mt-14 lg:mt-0">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="rounded-[28px] border border-white/10 bg-[#0a1024] p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-violet-300">
                      University Partnership Dashboard
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">
                      Africa Recruitment Pipeline
                    </h3>
                  </div>

                  <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                    Active
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">
                      Structured Applications
                    </p>
                    <p className="mt-3 text-4xl font-black text-violet-300">
                      100%
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">
                      Kenya-first Recruitment
                    </p>
                    <p className="mt-3 text-2xl font-bold">
                      Premium Student Market
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/50">
                    UniNexa Partnership Includes
                  </p>

                  <div className="mt-4 space-y-4">
                    {[
                      "Structured student applications",
                      "Organized academic records",
                      "Document verification support",
                      "Premium digital recruitment pipeline",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
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
        </div>
      </section>

      {/* WHY PARTNER */}
      <section
        id="why-partner"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Why Partner With UniNexa
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            A premium university recruitment infrastructure
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/65">
            UniNexa is designed to help universities recruit more efficiently
            from Kenya using a structured, transparent, and digitally organized
            admissions ecosystem.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Structured applications",
              icon: Building2,
              text: "Receive cleaner, globally organized applications.",
            },
            {
              title: "Verified records",
              icon: ShieldCheck,
              text: "Improve confidence in submitted academic documents.",
            },
            {
              title: "Premium student market",
              icon: GraduationCap,
              text: "Connect with ambitious Kenyan applicants.",
            },
            {
              title: "Digital recruitment",
              icon: Globe,
              text: "Modern student recruitment with full visibility.",
            },
          ].map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-violet-400/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FORM */}
      <section
        id="partnership-form"
        className="mx-auto max-w-5xl px-4 pb-24 sm:px-6"
      >
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
              Partnership Request
            </p>

            <h2 className="mt-4 text-4xl font-black">
              University Partnership Form
            </h2>

            <p className="mt-5 text-lg text-white/65">
              Submit your institution’s details and our partnerships team will
              contact you.
            </p>
          </div>

          <form className="mt-14 grid gap-6 md:grid-cols-2">
            <Input label="University Name *" />
            <Input label="Country *" />

            <Input label="Website *" />
            <Input label="Institution Email *" />

            <Input label="Primary Contact Name *" />
            <Input label="Position / Title *" />

            <Input label="Phone Number *" />
            <Input label="Recruitment Region Interest *" />

            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-semibold text-white/80">
                Tell us about your institution *
              </label>

              <textarea
                rows={6}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-violet-400/40"
                placeholder="Describe your institution, international recruitment goals, programmes offered, and partnership interests..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-semibold text-white/80">
                Partnership Interests
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Undergraduate recruitment",
                  "Scholarship partnerships",
                  "Pathway programmes",
                  "Direct admissions",
                  "East Africa expansion",
                  "Student mobility programmes",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-sm font-semibold shadow-xl shadow-violet-900/40 transition hover:scale-[1.02]"
              >
                Submit Partnership Request
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function Input({ label }: { label: string }) {
  return (
    <div>
      <label className="mb-3 block text-sm font-semibold text-white/80">
        {label}
      </label>

      <input
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-violet-400/40"
        placeholder={label.replace("*", "")}
      />
    </div>
  );
}