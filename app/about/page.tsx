import Link from "next/link";

const interests = [
  "FULL-STACK DEV",
  "AI ENGINEER",
  "MACHINE LEARNING",
  "DATA SCIENCE",
  "UI/UX DESIGNER",
  "TRAVEL",
  "MUSIC",
];
const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "LangChain",
  "ChromaDB",
  "Docker",
];
const principles = [
  [
    "01",
    "Make it useful",
    "I start with the problem and shape the technology around a better workflow.",
  ],
  [
    "02",
    "Ground the magic",
    "I prefer AI systems that are explainable, testable, and connected to trustworthy context.",
  ],
  [
    "03",
    "Sweat the interface",
    "A powerful model still needs a calm, considered interface that invites people in.",
  ],
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-100 md:px-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-emerald-300">
            The person behind the projects
          </p>
          <h1 className="text-5xl font-bold tracking-[-0.06em] md:text-7xl">
            About me
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
            I&apos;m Avni, an AI/ML engineer who likes turning complicated ideas
            into products that feel simple to use.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-y border-zinc-800 py-4 font-mono text-xs tracking-[0.12em] text-zinc-500">
          {interests.map((interest) => (
            <span
              key={interest}
              className="after:ml-4 after:text-emerald-400 after:content-['/']"
            >
              {interest}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-emerald-400/50 hover:text-emerald-200"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
        <section
          className="mt-16 grid gap-3 md:grid-cols-3"
          aria-label="Working principles"
        >
          {principles.map(([number, title, text]) => (
            <article
              className="border border-zinc-800 bg-zinc-900/40 p-5 transition-transform hover:-translate-y-1"
              key={number}
            >
              <span className="font-mono text-xs text-emerald-300">
                {number}
              </span>
              <h2 className="mt-8 text-xl font-semibold text-zinc-100">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
            </article>
          ))}
        </section>
        <div className="mt-20 max-w-3xl space-y-12 text-zinc-400">
          <section>
            <h2 className="text-2xl font-bold text-zinc-100">Who I Am</h2>
            <p className="mt-4 leading-relaxed">
              Hello! I&apos;m Avni Shukla, a final-year B.Tech student at Dr.
              Ambedkar Institute of Technology specializing in AI &amp; ML. I
              build practical Generative AI, machine learning, and full-stack
              applications that turn complex workflows into useful products.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-zinc-100">What I Do</h2>
            <p className="mt-4 leading-relaxed">
              My recent experience includes Data Science &amp; Machine Learning
              and Artificial Intelligence internships, where I built crop-yield
              prediction pipelines, CNN image classifiers, and a deployed
              full-stack AI application.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-zinc-100">My Journey</h2>
            <p className="mt-4 leading-relaxed">
              Alongside internships, I have built RAG systems, multilingual
              meeting intelligence tools, autonomous research agents, and
              production-style applications with React, Next.js, Node.js, and
              modern databases.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-zinc-100">Vision</h2>
            <p className="mt-4 leading-relaxed">
              I am interested in reliable AI systems: grounded retrieval, useful
              agent workflows, privacy-first local inference, and interfaces
              that make model capabilities understandable.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-zinc-100">Beyond Code</h2>
            <p className="mt-4 leading-relaxed">
              Beyond code, I enjoy travel, music, reading, and staying curious
              about the systems and people shaping technology.
            </p>
          </section>
        </div>
        <Link
          className="mt-16 inline-block rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950"
          href="/contact"
        >
          Get in Touch
        </Link>
      </div>
    </main>
  );
}
