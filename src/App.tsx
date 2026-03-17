export default function App() {
  const benefits = [
    "Get multiple cash offers in 72 hours",
    "Sell directly to local investors, not wholesalers",
    "No repairs, No Seller Fees, No Cleaning",
    "Love it or Leave it. Take what you want, leave the rest behind",
    "You may be eligible for a $10,000 cash advance during escrow",
    "Close in as little as 10 days or choose up to 60 days",
  ];

  const steps = [
    {
      title: "Tell Us About The Property",
      text: "Share the address and a few details. No showings, no open houses, and no pressure.",
    },
    {
      title: "We Bring You Multiple Offers",
      text: "We shop your property to real investors so you can compare serious cash offers instead of guessing at one low number from a wholesaler who simply sells the contract for a profit.",
    },
    {
      title: "Choose The Best Fit",
      text: "Let investors compete for your home on a timeline that works for you, whether you need speed, flexibility, or both.",
    },
    {
      title: "Close On Your Terms",
      text: "Close in as little as 10 days or as late as 60. In some cases, you may also qualify for an advance during escrow.",
    },
  ];

  const featureCards = [
    ["🏠 Multiple Offers", "Investors compete to purchase your home."],
    ["🛠 As-Is Sale", "No repairs, no cleaning, no seller fees."],
    ["📦 Flexible Move-Out", "Take what you want and leave the rest behind."],
    [
      "💵 Faster Relief",
      "Potential access to funds during escrow for qualified sellers.",
    ],
  ];

  const sellerSituations = [
    "Inherited house or probate-related sale",
    "Tired of dealing with tenants",
    "House needs some love before listing",
    "Relocating and need speed",
    "Need flexibility on timing or move-out",
    "Want to avoid wholesalers and compare real buyers",
  ];

  const faqs = [
    {
      q: "Do I have to accept one of the offers?",
      a: "No. You are not obligated to accept any of the offers you are presented.",
    },
    {
      q: "There are no seller fees?",
      a: "That is correct. All sales are run through a traditional escrow and the buyers will pay all your closing costs.",
    },
    {
      q: "Do I need to clean or make repairs first?",
      a: "No. We work with sellers who want a simple sale without fixing the property up first.",
    },
    {
      q: "Can I leave unwanted items behind?",
      a: "Yes. Take what you want and leave the rest behind. We'll take care of clean out.",
    },
    {
      q: "How is this different from selling to a wholesaler?",
      a: "Wholesalers sell the contract to investors for a profit, we connect you with actual buyers who will purchase and fix up your home, meaning more money in your pocket.",
    },
    {
      q: "How fast can I close?",
      a: "Close in as little as 10 days, or take your time and close closer to 60 days.",
    },
    {
      q: "What is the $10,000 advance?",
      a: "Some sellers may qualify for an advance during escrow to help with moving costs, bills, or transition expenses. Terms depend on the transaction.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-900">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')",
            backgroundPosition: "center 20%",
          }}
        />

        {/* Light gradient overlay to match your palette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7efe1]/95 via-[#ffd28a]/55 via-[#ffd28a]/35 to-[#b9e6e2]/70" />

        {/* Soft white haze for readability */}
        <div className="absolute inset-0 bg-white/18" />

        {/* Sun glow */}
        <div className="absolute inset-x-0 top-[10vh] h-[26vh] bg-gradient-to-b from-[#f47a00]/8 to-transparent" />

        {/* Horizon glow */}
        <div className="absolute inset-x-0 top-[28vh] h-32 bg-gradient-to-b from-white/28 to-transparent" />

        {/* Bottom ocean tint */}
        <div className="absolute inset-x-0 bottom-0 h-[36vh] bg-gradient-to-t from-[#76cbca]/42 via-[#b7ece9]/16 to-transparent" />
      </div>
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex justify-center">
            <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-[#cfe8e5] bg-[#f4f7f6] px-6 py-3 text-sm font-medium text-[#355e63] shadow-sm">
              {/* LEFT */}
              <div className="flex items-center gap-2 whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-6v-6H10v6H4a1 1 0 01-1-1V10z"
                  />
                </svg>
                <span>Serving homeowners across San Diego County</span>
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <circle cx="6.5" cy="8" r="2.2" />
                  <circle cx="12" cy="6.5" r="2.4" />
                  <circle cx="17.5" cy="8" r="2.2" />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 19c0-2 2.5-3.5 4.5-3.5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 19c0-2.5 2.5-4 4.5-4s4.5 1.5 4.5 4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 15.5c2 0 4.5 1.5 4.5 3.5"
                  />
                </svg>
                <span>Local investors</span>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-2 whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Fast closings • No hidden fees</span>
              </div>
            </div>
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div>
              <div className="mb-4 inline-block rounded-full border border-[#8dd4cf] bg-white/90 px-4 py-2 text-sm font-semibold text-[#0d4f5c] shadow-sm">
                Multiple Cash Offers, One Simple Process
              </div>

              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0f3d47] sm:text-5xl lg:max-w-3xl lg:text-6xl">
                Get <span className="text-[#f47a00]">Multiple Cash Offers</span>{" "}
                On Your San Diego Home In 72 Hours
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#27545f]">
                Compare serious offers from actual investors, not wholesalers,
                so you can sell as-is, move on your timeline, and protect your
                equity.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/60 bg-white/95 px-4 py-3 text-sm font-medium text-[#0d4f5c] shadow-[0_10px_25px_rgba(13,79,92,0.06)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="#offer-form"
                  className="inline-block rounded-2xl bg-[#f47a00] px-8 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(244,122,0,0.28)] transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Get My Cash Offers
                </a>
                <p className="mt-3 text-sm font-medium text-[#3d6770]">
                  It only takes 30 seconds
                </p>
              </div>

              <p className="mt-4 text-sm text-[#3d6770]">
                No fees. No obligation. Just a straightforward cash offer option
                for homeowners who want clarity.
              </p>
            </div>

            <div>
              <div
                id="offer-form"
                className="rounded-[2rem] border border-white/70 bg-white/95 p-6 shadow-[0_18px_50px_rgba(13,79,92,0.12)] lg:p-8"
              >
                <div className="mb-4 flex flex-wrap gap-2 text-sm font-medium text-[#0d4f5c]">
                  <span className="rounded-full bg-[#eef8f7] px-3 py-1">
                    ✔ No Pressure
                  </span>
                  <span className="rounded-full bg-[#eef8f7] px-3 py-1">
                    ✔ No Obligation
                  </span>
                  <span className="rounded-full bg-[#eef8f7] px-3 py-1">
                    ✔ No Seller Fees
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0d4f5c]/70">
                    Request Offers
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-[#0f3d47]">
                    See What Investors Would Pay For Your Property
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#38616a]">
                    Fill out the short form below and we’ll begin lining up
                    qualified investor interest.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      className="rounded-2xl border border-[#b7e5e1] bg-white px-4 py-3 outline-none placeholder:text-[#7aa4aa]"
                      placeholder="First name"
                    />
                    <input
                      className="rounded-2xl border border-[#b7e5e1] bg-white px-4 py-3 outline-none placeholder:text-[#7aa4aa]"
                      placeholder="Last name"
                    />
                  </div>

                  <input
                    className="w-full rounded-2xl border border-[#b7e5e1] bg-white px-4 py-3 outline-none placeholder:text-[#7aa4aa]"
                    placeholder="Property address"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      className="rounded-2xl border border-[#b7e5e1] bg-white px-4 py-3 outline-none placeholder:text-[#7aa4aa]"
                      placeholder="Phone"
                    />
                    <input
                      className="rounded-2xl border border-[#b7e5e1] bg-white px-4 py-3 outline-none placeholder:text-[#7aa4aa]"
                      placeholder="Email"
                    />
                  </div>

                  <select className="w-full rounded-2xl border border-[#b7e5e1] bg-white px-4 py-3 text-[#5b838a] outline-none">
                    <option>Property condition</option>
                    <option>Move-in ready</option>
                    <option>Needs cosmetic updates</option>
                    <option>Needs major repairs</option>
                    <option>Inherited / distressed</option>
                  </select>

                  <select className="w-full rounded-2xl border border-[#b7e5e1] bg-white px-4 py-3 text-[#5b838a] outline-none">
                    <option>Preferred timeline</option>
                    <option>As fast as possible</option>
                    <option>Within 30 days</option>
                    <option>Within 60 days</option>
                    <option>Just exploring options</option>
                  </select>

                  <textarea
                    className="min-h-[120px] w-full rounded-2xl border border-[#b7e5e1] bg-white px-4 py-3 outline-none placeholder:text-[#7aa4aa]"
                    placeholder="Tell us anything helpful: tenant situation, repairs, inherited property, leaving items behind, etc."
                  />

                  <button
                    type="button"
                    className="w-full rounded-2xl bg-[#f47a00] px-6 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(244,122,0,0.28)] transition hover:-translate-y-0.5 hover:opacity-95"
                  >
                    Get My Multiple Cash Offers
                  </button>

                  <p className="text-xs leading-5 text-[#547880]">
                    By submitting, you agree to be contacted about your
                    property. Any advance during escrow is subject to
                    transaction terms and qualification.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-4">
            {featureCards.map(([title, text]) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-white/70 bg-white/95 p-6 shadow-[0_10px_24px_rgba(13,79,92,0.06)]"
              >
                <h3 className="text-lg font-semibold text-[#0f3d47]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#3f6871]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d4f5c] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b9e6e2]">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A Simple Way To Sell
            </h2>
            <p className="mt-4 text-base font-medium text-[#b9e6e2] sm:text-lg">
              Here’s exactly how we get you multiple offers without the hassle:
            </p>
            <p className="mt-4 text-lg leading-8 text-[#ddf3f1]">
              Not everyone has the budget or the time to fix up their house to
              sell traditionally, and sometimes a cash offer is the best option.
              But why accept a low-ball offer when you can compare multiple cash
              offers and maximize your equity? Don&apos;t leave money on the
              table!
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f47a00] text-lg font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#ddf3f1]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/60 bg-white/95 p-8 shadow-[0_16px_40px_rgba(13,79,92,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0d4f5c]/70">
              Why Use Fast Cash Offers SD?
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0f3d47] sm:text-4xl">
              We&apos;re Not Just Offering Speed. We Are Offering Options. And
              Peace Of Mind.
            </h2>
            <div className="mt-8 space-y-5 text-[#3e676f]">
              <p className="text-lg leading-8">
                Most “cash offer” sites feel like a single low-ball offer in
                disguise. Or they are just selling your info to a bunch of
                investors and wholesalers who never stop calling.
              </p>
              <p className="text-lg leading-8">
                We are different. We are a single contact to dozens of vetted
                local investors in San Diego County. And they compete to buy
                your home.
              </p>
              <p className="text-lg leading-8">
                Whether you have an inherited home you need to sell, a rental
                property with deferred maintenance, retiring and relocating, or
                you simply want a clean exit without fixing everything first,
                this might be a great option.
              </p>
              <p className="text-lg leading-8">
                And if you don&apos;t like any of the offers you receive, you
                are not obligated to accept any of them.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/65 bg-white/95 p-8 shadow-[0_16px_40px_rgba(13,79,92,0.08)]">
            <h3 className="text-2xl font-bold text-[#0f3d47]">
              Ideal Seller Situations
            </h3>
            <div className="mt-6 space-y-4">
              {sellerSituations.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#c8ece8] bg-white px-4 py-3 text-sm font-medium text-[#0d4f5c]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/40 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0d4f5c]/70">
              Frequently Asked Questions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0f3d47] sm:text-4xl">
              Common Questions From San Diego Sellers
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-[1.75rem] border border-white/70 bg-white/95 p-6 shadow-[0_10px_24px_rgba(13,79,92,0.06)]"
              >
                <h3 className="text-lg font-semibold text-[#0f3d47]">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#406870]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.25rem] bg-[#0d4f5c] px-8 py-12 text-white shadow-[0_18px_40px_rgba(13,79,92,0.15)] sm:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b9e6e2]">
                  Ready To See Your Options?
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Find Out What Real Investors Would Offer For Your House
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-[#ddf3f1]">
                  Whether the property is clean, cluttered, inherited,
                  tenant-occupied, outdated, or distressed, you can start with a
                  quick conversation and see what the market gives you.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="#offer-form"
                  className="rounded-2xl bg-[#f47a00] px-6 py-4 text-center text-base font-semibold text-white shadow-[0_14px_30px_rgba(244,122,0,0.28)] transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Get My Cash Offers
                </a>
                <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm leading-6 text-[#ddf3f1]">
                  San Diego-focused • Multiple offers in 72 hours • Close in
                  10–60 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
