export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-black">Privacy Policy</h1>

        <p className="mt-4 text-white/60">
          Effective Date: August 2026
        </p>

        <div className="mt-10 space-y-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <section>
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p className="mt-4 leading-8 text-white/70">
              UniNexa ("we", "our", or "us") respects your privacy and is
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, store, and protect your
              information when you use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              2. Information We Collect
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-white/70">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Date of birth</li>
              <li>Nationality</li>
              <li>Academic qualifications</li>
              <li>KCSE results and certificates</li>
              <li>Passport information (when provided)</li>
              <li>Application documents</li>
              <li>Universities and programs of interest</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              3. How We Use Your Information
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-white/70">
              <li>Create and manage your UniNexa account.</li>
              <li>Assist with international university applications.</li>
              <li>Match you with suitable universities.</li>
              <li>Verify academic documents where applicable.</li>
              <li>Improve platform performance.</li>
              <li>Provide customer support.</li>
              <li>Communicate important updates.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              4. Sharing Your Information
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              We do not sell your personal information.
              Your information may only be shared with:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-white/70">
              <li>Universities you choose to apply to.</li>
              <li>Credential evaluation organizations where required.</li>
              <li>Scholarship providers you choose.</li>
              <li>Government authorities where legally required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              5. Data Security
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              We use industry-standard security practices to protect your
              information, including secure cloud infrastructure,
              authentication, encrypted communications, and access controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              6. Your Rights
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              You may:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-white/70">
              <li>Access your personal information.</li>
              <li>Update incorrect information.</li>
              <li>Delete your account (subject to legal obligations).</li>
              <li>Request a copy of your stored information.</li>
              <li>Withdraw consent where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              7. Cookies
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              UniNexa uses cookies and similar technologies to improve user
              experience, remember preferences, analyze traffic, and enhance
              platform security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              8. Changes to this Policy
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              We may update this Privacy Policy from time to time.
              The latest version will always be available on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              9. Contact Us
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              If you have questions regarding this Privacy Policy, please
              contact us.
            </p>

            <div className="mt-6 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-6">
              <p className="font-semibold">UniNexa</p>
              <p className="mt-2 text-white/70">
                Email: connect@uninexa.org
              </p>
              <p className="text-white/70">
                Website: https://uninexa.org
              </p>
              <p className="text-white/70">
                Nairobi, Kenya
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}