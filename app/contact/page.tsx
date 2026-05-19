import {
  Clock3,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%),linear-gradient(to_bottom,#050816,#070b1f,#050816)]" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 text-sm text-violet-200 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Contact UniNexa
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
              Let’s build global opportunities together
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Whether you are a student, parent, university, or organization,
              UniNexa is ready to help you navigate international education
              opportunities through a more transparent and structured platform.
            </p>
          </div>

          <div className="mt-14 lg:mt-0">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="rounded-[28px] border border-white/10 bg-[#0a1024] p-8">
                <p className="text-sm text-violet-300">
                  UniNexa Contact Information
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <Mail className="mt-1 h-6 w-6 text-violet-300" />

                    <div>
                      <p className="text-sm text-white/50">
                        Email
                      </p>

                      <p className="mt-1 text-lg font-semibold">
                        hello@uninexa.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <Phone className="mt-1 h-6 w-6 text-violet-300" />

                    <div>
                      <p className="text-sm text-white/50">
                        Phone
                      </p>

                      <p className="mt-1 text-lg font-semibold">
                        +254 769 753 581
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <MapPin className="mt-1 h-6 w-6 text-violet-300" />

                    <div>
                      <p className="text-sm text-white/50">
                        Location
                      </p>

                      <p className="mt-1 text-lg font-semibold">
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <Globe className="mt-1 h-6 w-6 text-violet-300" />

                    <div>
                      <p className="text-sm text-white/50">
                        Website
                      </p>

                      <p className="mt-1 text-lg font-semibold">
                        www.uninexa.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              Contact Form
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Send us a message
            </h2>

            <p className="mt-5 text-lg text-white/65">
              We aim to respond to enquiries as quickly as possible.
            </p>
          </div>

          <form className="mt-14 grid gap-6 md:grid-cols-2">
            <Input label="Full Name *" />
            <Input label="Email Address *" />

            <Input label="Phone Number" />
            <Input label="Organization / Institution" />

            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-semibold text-white/80">
                Message *
              </label>

              <textarea
                rows={7}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-violet-400/40"
                placeholder="Tell us how UniNexa can help..."
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-sm font-semibold shadow-xl shadow-violet-900/40 transition hover:scale-[1.02]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Student Support",
              icon: MessageSquare,
              text: "Guidance for applications, scholarships, documents, and studying abroad.",
            },
            {
              title: "University Partnerships",
              icon: ShieldCheck,
              text: "Collaboration opportunities for international recruitment and admissions.",
            },
            {
              title: "Response Times",
              icon: Clock3,
              text: "UniNexa aims to respond to enquiries within 2–5 business days.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-white/65">
                  {item.text}
                </p>
              </div>
            );
          })}
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