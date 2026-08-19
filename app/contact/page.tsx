"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-24 text-zinc-100 md:px-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          Interested in collaborating on AI, ML, or full-stack products? Send a
          message.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4"
            href="mailto:avnireeta@gmail.com"
          >
            Email
            <br />
            <span className="text-zinc-400">avnireeta@gmail.com</span>
          </a>
          <a
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4"
            href="tel:+916388463521"
          >
            Phone
            <br />
            <span className="text-zinc-400">+91 6388463521</span>
          </a>
        </div>
        <form
          className="mt-10 space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-4 outline-none focus:border-zinc-500"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-4 outline-none focus:border-zinc-500"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-4 outline-none focus:border-zinc-500"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-4 outline-none focus:border-zinc-500"
            name="message"
            rows={6}
            placeholder="Tell me about your project..."
            required
          />
          <button
            className="rounded-xl bg-zinc-100 px-8 py-4 text-sm font-semibold text-zinc-950"
            type="submit"
          >
            Send message
          </button>
          {submitted && (
            <p className="text-sm text-emerald-400">
              Thanks, your message is ready to send.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
