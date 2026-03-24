import { useState } from "react";

export default function FastCashOffersSDPreview() {
  const [propertyAddress, setPropertyAddress] = useState("");
  const [showStepTwo, setShowStepTwo] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [situation, setSituation] = useState("Need to sell quickly");

  const testimonials = [
    {
      name: "Lori F.",
      quote:
        "John helped sell my mom’s home in poor condition and got her far more than expected. Communication was excellent the entire time.",
    },
    {
      name: "Jermaine S.",
      quote:
        "The selling process was seamless and we knew we were in good hands. John's understanding of the emotions and attachment to the family home served to be respectful to our family elders, ensuring they were comfortable, not rushed and taken care of.",
    },
    {
      name: "Thomas V.",
      quote:
        "John is outstanding! Very professional, adaptive, and exceedingly helpful. When we were in a bind, he was there to quickly get our house sold. He was a pleasure to deal with the entire time.",
    },
  ];

  const situations = [
    "Facing foreclosure",
    "Inherited a property",
    "Tired Landlord",
    "Major repairs needed",
    "Divorce or life transition",
    "Just want a simple sale",
  ];

  const reasons = [
    "Multiple local offers — not just one low-ball number",
    "Sell as-is with no repairs, cleanings, or showings",
    "Straightforward process with no surprises",
    "Local San Diego-focused approach",
    "Fast, clear communication",
    "No pressure to choose any option",
  ];

  const steps = [
    {
      title: "Tell Us About Your Property",
      body: "Start with the address so we know what property you want to discuss.",
    },
    {
      title: "Review Real Cash Offers",
      body: "We help you compare serious local buyer interest without the usual hassle.",
    },
    {
      title: "Close On Your Timeline",
      body: "Close in as little as 7-10 days.",
    },
  ];

  const faqs = [
    {
      question: "Are these real offers or just estimates?",
      answer:
        "These are real offers from local buyers. You can review them and decide what works best for you with no obligation.",
    },
    {
      question: "Do I have to accept an offer?",
      answer:
        "No. This is simply a way to explore your options. You can review offers and decide what makes sense for you.",
    },
    {
      question: "Are there any fees or commissions?",
      answer:
        "There are no seller fees. The sale is run through a traditional escrow, and the buyer will pay all your closing costs.",
    },
    {
      question: "Do I need to make repairs or clean the property?",
      answer:
        "No. Your home is sold as-is. Take everything you want, and leave the rest behind",
    },
    {
      question: "How quickly can I sell?",
      answer:
        "Some sales can close in as little as 7–10 days, depending on your timeline.",
    },
    {
      question: "Who am I actually working with?",
      answer:
        "You will receive offers from local San Diego buyers, and real estate professionals will walk you through your options clearly and honestly.",
    },
    {
      question: "What if my home might sell for more on the open market?",
      answer:
        "If that’s the case, we’ll walk you through that option as well. The goal is to help you choose the best path for your situation - not push you into one.",
    },
  ];

  const handleStepOneSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!propertyAddress.trim()) {
      alert("Please enter the property address.");
      return;
    }

    setShowStepTwo(true);
  };
  const closeModal = () => {
    setShowStepTwo(false);
  };
  const handleStepTwoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      propertyAddress,
      fullName,
      phone,
      email,
      situation,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxxsV5lwpvAs1DzrSxsDigMQrdqN_oCu_-rfEMSk91fqnf3nyI6BsyVq5syx4E2lBbu/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );

      alert("Your info has been submitted. We’ll be in touch shortly.");

      setShowStepTwo(false);
      setPropertyAddress("");
      setFullName("");
      setPhone("");
      setEmail("");
      setSituation("Need to sell quickly");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.58) 26%, rgba(194, 88, 28, 0.28) 62%, rgba(15,23,42,0.82) 100%), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-slate-950/40" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                Local San Diego Home Selling Options
              </div>

              <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Get{" "}
                <span className="text-orange-400">Multiple Cash Offers</span> on
                Your San Diego Home — Sell As-Is, On Your Timeline
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
                Real cash offers in 72 hours. If a better option exists, we’ll
               show you that too.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#offer-form"
                  className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-orange-950/30 transition hover:scale-[1.02] hover:bg-orange-400"
                >
                  Get My Cash Offers
                </a>
                <a
                  href="tel:6197962021"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-black/20 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Call Now: (619) 796-2021
                </a>
              </div>

              <div className="mt-8 max-w-xl rounded-2xl border border-white/15 bg-black/15 p-5 backdrop-blur-md">
                <div className="text-sm uppercase tracking-[0.18em] text-orange-300">
                  Trusted by San Diego homeowners
                </div>
                <div className="mt-2 text-lg font-semibold text-yellow-400">
                  ★★★★★
                </div>
                <p className="mt-2 text-slate-100">
                  “John made the process simple and stress-free. We got clarity
                  fast and never felt pressured.”
                </p>
                <p className="mt-3 text-sm text-slate-300">— Mike R.</p>
              </div>
            </div>

            <div id="offer-form" className="mx-auto w-full max-w-md">
              <div className="rounded-[28px] border border-white/15 bg-white/95 p-6 text-slate-900 shadow-2xl shadow-slate-950/30 md:p-7">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
                  Get started
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                  Get Multiple Cash Offers in 72 Hours
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Enter the property address and we’ll get to work on your
                  offers.
                </p>

                <form className="mt-6 space-y-4" onSubmit={handleStepOneSubmit}>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Property Address
                    </label>
                    <input
                      type="text"
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                      placeholder="123 Main St, San Diego, CA"
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-orange-500 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-orange-950/20 transition hover:bg-orange-400"
                  >
                    Get My Cash Offers Now
                  </button>
                </form>

                <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">✔️</span>
                    <span>Compare multiple cash offers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">✔️</span>
                    <span>Sell as-is, no repairs needed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">✔️</span>
                    <span>No pressure — explore all your options</span>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-5 text-slate-500">
                  No obligation. No hidden fees. Just a straightforward
                  conversation about your options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
              Process
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/10 backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-lg font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
              Why homeowners choose us
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Simple, direct options without the usual hassle
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              We help San Diego homeowners compare real options — whether that’s
              a fast cash offer or another path that better fits your goals.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-[24px] border border-white/10 bg-black/20 p-5 text-slate-200"
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-orange-400/15 bg-gradient-to-r from-orange-500/10 to-white/5 p-8 md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                Common situations
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                We can help if your property situation feels complicated
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                Whether you need speed, simplicity, or just clarity on what your
                options are, this process is designed to reduce stress and give
                you real answers.
              </p>
            </div>
            <a
              href="#offer-form"
              className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-400"
            >
              Get My Cash Offers Now
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {situations.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                Reviews
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                What sellers say about working with us
              </h2>
            </div>
            <a
              href="#offer-form"
              className="hidden md:inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 font-semibold text-white shadow-lg shadow-orange-950/20 transition hover:bg-orange-400"
            >
              Get My Cash Offers Now
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7"
              >
                <div className="text-lg font-semibold text-yellow-400">
                  ★★★★★
                </div>
                <p className="mt-4 leading-8 text-slate-300">“{item.quote}”</p>
                <p className="mt-5 text-sm font-medium text-slate-200">
                  — {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
              FAQs
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Common Questions About Selling Your Home for Cash
            </h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-300">
              Straight answers to the questions sellers usually have before they
              take the next step.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[24px] border border-white/10 bg-black/20 p-6"
              >
                <h3 className="text-lg font-semibold text-orange-300">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-950 to-black px-6 pb-20 pt-12 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[34px] border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/20 md:p-12">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
            Final step
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Get Your No-Obligation Cash Offers Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Takes less than a minute to get started.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#offer-form"
              className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-7 py-4 text-base font-semibold text-white transition hover:bg-orange-400"
            >
              Get My Cash Offers Now
            </a>
            <a
              href="tel:6197962021"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
            >
              Call (619) 796-2021
            </a>
          </div>
        </div>
      </section>

      {showStepTwo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-lg rounded-[28px] bg-white p-6 text-slate-900 shadow-2xl md:p-8">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              Close
            </button>

            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
              Almost done
            </div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Where should we send your offers?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Property:{" "}
              <span className="font-semibold text-slate-800">
                {propertyAddress}
              </span>
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleStepTwoSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(619) 555-1234"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  What best describes your situation?
                </label>
                <select
                  value={situation}
                  onChange={(e) => setSituation(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                >
                  <option>Need to sell quickly</option>
                  <option>Inherited property</option>
                  <option>Repairs needed</option>
                  <option>Tired landlord</option>
                  <option>Just exploring options</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-orange-500 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-orange-950/20 transition hover:bg-orange-400"
              >
                Submit My Information
              </button>
            </form>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              No obligation. No seller fees. Just a straightforward conversation
              about your options.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
