export default function App() {
  const benefits = [
    "Get multiple cash offers in 72 hours",
    "Sell directly to local investors, not wholesalers",
    "No repairs, cleaning, or prep needed",
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
      text: "Let investors compete for your home, on a timeline that works for you, whether you need speed, flexibility, or both.",
    },
    {
      title: "Close On Your Terms",
      text: "Close in as little as 10 days or as late as 60. In some cases, you may also qualify for an advance during escrow.",
    },
  ];

  const faqs = [
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
    {
      q: "Do I have to accept one of the offers?",
      a: "No. You are not obligated to accept any of the offers you are presented.",
    },
  ];

  const featureCards = [
    ["Multiple Offers", "Investors compete to purchase your home."],
    ["As-Is Sale", "No repairs, no cleaning, and no staging required."],
    ["Flexible Move-Out", "Take what you want and leave the rest behind."],
    [
      "Faster Relief",
      "Potential access to funds during escrow for qualified sellers.",
    ],
  ];

  const sellerSituations = [
    "Inherited house or probate-related sale",
    "Tired Landlord",
    "House needs some love before listing",
    "Relocating and need speed",
    "Need flexibility on timing or move-out",
    "Want to avoid wholesalers and compare real buyers",
  ];

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-slate-900">
      {/* HERO */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <div className="mb-4 text-sm text-[#0d4f5c] font-semibold">
            Multiple Cash Offers, One Simple Process
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-[#0f3d47]">
            Get Multiple Cash Offers On Your San Diego Home In 72 Hours
          </h1>

          <p className="mt-6 text-lg text-[#27545f]">
            Compare serious offers from actual investors, not wholesalers, so
            you can sell as-is, move on your timeline, and protect your equity.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {benefits.map((item) => (
              <div key={item} className="bg-white p-3 rounded-xl shadow">
                {item}
              </div>
            ))}
          </div>

          <button className="mt-8 bg-orange-500 text-white px-6 py-4 rounded-xl font-semibold">
            Get My Cash Offers
          </button>
        </div>

        {/* FORM */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">See What Investors Would Pay</h2>

          <div className="space-y-3 mt-4">
            <input
              placeholder="First name"
              className="w-full border p-3 rounded-xl"
            />
            <input
              placeholder="Last name"
              className="w-full border p-3 rounded-xl"
            />
            <input
              placeholder="Property address"
              className="w-full border p-3 rounded-xl"
            />
            <input
              placeholder="Phone"
              className="w-full border p-3 rounded-xl"
            />
            <input
              placeholder="Email"
              className="w-full border p-3 rounded-xl"
            />

            <button className="w-full bg-orange-500 text-white p-4 rounded-xl">
              Get My Multiple Cash Offers
            </button>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">
          Why Use Fast Cash Offers SD?
        </h2>

        <p className="text-lg">
          We're Not Just Offering Speed. We Are Offering Options. And Piece Of
          Mind.
        </p>

        <p className="mt-4">
          Most “cash offer” sites feel like a single low-ball offer in disguise.
          Or they are just selling your info to a bunch of investors and
          wholesalers who never stop calling. We are different. We are a single
          contact to dozens of vetted local investors in San Diego County. And
          they compete to buy your home.
        </p>

        <p className="mt-4">
          Whether you have an inherited home you need to sell, a rental property
          with deferred maintenance, retiring and relocating, or you simply want
          a clean exit without fixing everything first, this might be a great
          option. And if you don't like any of the offers you receive, you are
          not obligated to accept any of them!
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">{item.q}</h3>
              <p className="text-sm mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
