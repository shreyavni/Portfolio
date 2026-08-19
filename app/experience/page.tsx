"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    period: "Aug 2026 - Present",
    title: "Data Science & Machine Learning Intern · UniConverge Technologies",
    subtitle: "Agricultural crop-yield prediction",
    meta: "Internship · India",
    color: "text-blue-400",
    points: [
      "Built an end-to-end ML pipeline using five government datasets from data.gov.in",
      "Cleaned and joined inconsistent tables using partial crop and state keys",
      "Benchmarked Linear Regression, Random Forest, and Gradient Boosting; GridSearchCV tuning achieved an R2 of 0.96",
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "GridSearchCV"],
  },
  {
    period: "Jul 2026 - Aug 2026",
    title: "Artificial Intelligence Intern · iNeuBytes Technology & Services",
    subtitle: "Computer vision, NLP, and AI application development",
    meta: "Internship · India",
    color: "text-purple-400",
    points: [
      "Built a CNN image classifier for CIFAR-10 with a custom AlexNet-inspired TensorFlow/Keras architecture",
      "Achieved at least 70% test accuracy and compared TF-IDF sentiment analysis with an LSTM benchmark",
      "Developed and deployed a full-stack AI web application with a live public URL",
    ],
    tags: ["Python", "TensorFlow", "Keras", "TF-IDF", "Machine Learning"],
  },
];

const technologyGroups = [
  [
    "Frontend",
    "React.js, React Native, Next.js, Tailwind CSS",
    "text-blue-400",
  ],
  ["Backend", "Node.js, Express.js, REST APIs", "text-emerald-400"],
  ["AI/ML", "LangChain, RAG, TensorFlow, Scikit-learn", "text-purple-400"],
  ["Databases", "PostgreSQL, MongoDB, Firebase, Supabase", "text-amber-400"],
  ["LLMs", "Mistral AI, Llama 3.2, Gemini, Whisper", "text-rose-400"],
  ["Deployment", "Docker, Streamlit, Git, Prisma", "text-cyan-400"],
] as const;

const certifications = [
  {
    domain: "Artificial Intelligence",
    organization: "Samsung Innovation Campus & ESSCI",
    href: "https://drive.google.com/file/d/18PI_AHBLJd0CoSmQ_b6TFPQkvxps4LKj/view?usp=sharing",
  },
  {
    domain: "AI & Cybersecurity Awareness",
    organization: "TCS iON",
    href: "https://drive.google.com/file/d/1-JWXqtZaI6amvX6RzocNXPypH0ABKneV/view?usp=sharing",
  },
  {
    domain: "Data Science",
    organization: "Infosys Springboard",
    href: "https://drive.google.com/file/d/1FemN4popJQSWePktjprggLR-xrBisPvj/view?usp=sharing",
  },
  {
    domain: "SheFi Program Scholar",
    organization: "Web3 technologies program",
    href: "#",
  },
] as const;

export default function ExperiencePage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  useEffect(() => {
    const updateProgress = () => {
      if (!timelineRef.current) return;
      const bounds = timelineRef.current.getBoundingClientRect();
      const progress = (window.innerHeight * 0.55 - bounds.top) / bounds.height;
      setLineProgress(Math.max(0, Math.min(1, progress)));
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-timeline-item");
            if (id)
              setVisibleItems((items) =>
                items.includes(id) ? items : [...items, id],
              );
          }
        }),
      { threshold: 0.2 },
    );
    document
      .querySelectorAll("[data-timeline-item]")
      .forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-24 text-zinc-100 md:px-16">
      <div className="mx-auto max-w-5xl">
        <span className="rounded-full bg-blue-950/60 px-4 py-2 text-sm text-blue-400">
          Career Timeline
        </span>
        <h1 className="mt-7 text-5xl font-bold tracking-tight md:text-7xl">
          Experience that ships
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
          A hands-on record of building AI systems, full-stack products, and
          reliable solutions from the first experiment to launch.
        </p>
        <div className="mt-8 flex flex-wrap gap-5 text-sm text-zinc-400">
          <span className="text-blue-400">● Current Role</span>
          <span className="text-purple-400">● AI-ML Internship</span>
          <span className="text-emerald-400">● Data Science </span>
        </div>
        <div className="relative mt-20 space-y-20" ref={timelineRef}>
          <div
            className="absolute bottom-0 left-3.5 top-0 w-px bg-zinc-800 md:left-61"
            aria-hidden="true"
          >
            <div
              className="w-full bg-linear-to-b from-emerald-400 via-blue-500 to-purple-500 transition-[height] duration-300"
              style={{ height: `${lineProgress * 100}%` }}
            />
          </div>
          {experiences.map((experience) => (
            <article
              className={`relative grid gap-6 pl-12 transition-all duration-700 md:grid-cols-[15rem_1fr] md:pl-0 ${visibleItems.includes(experience.period) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              data-timeline-item={experience.period}
              key={experience.period}
            >
              <span
                className="absolute left-3.5 top-1 z-10 h-7 w-7 -translate-x-1/2 rounded-full border-8 border-zinc-100 bg-zinc-950 md:left-61"
                aria-hidden="true"
              />
              <h2 className="text-3xl font-bold text-zinc-500 md:text-right md:pr-8">
                {experience.period}
              </h2>
              <div>
                <h3 className={`text-xl font-bold ${experience.color}`}>
                  {experience.title}
                </h3>
                <p className="mt-2 text-zinc-300">{experience.subtitle}</p>
                <p className="mt-2 text-sm text-zinc-500">{experience.meta}</p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-zinc-400">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <section className="mt-24 border-t border-zinc-800 pt-16">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/50 bg-emerald-400/10 text-2xl font-bold text-emerald-300 shadow-[0_0_28px_rgba(52,211,153,.25)]">
                ✓
              </span>
              <h2 className="mt-5 text-4xl font-bold text-zinc-100">
                Certifications
              </h2>
              <p className="mt-3 max-w-sm text-base leading-7 text-zinc-400">
                Structured learning across AI, data science, cybersecurity, and
                emerging technologies.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 to-zinc-950 p-4 shadow-[0_18px_50px_rgba(0,0,0,.2)] md:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {certifications.map((certificate) => (
                  <div
                    className="group rounded-xl border border-zinc-800 bg-zinc-950/80 p-5 transition-colors hover:border-emerald-400/50"
                    key={certificate.domain}
                  >
                    <p className="text-base font-semibold leading-6 text-emerald-300">
                      {certificate.domain}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      {certificate.organization}
                    </p>
                    <a
                      className="mt-5 inline-flex text-sm font-medium text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors group-hover:text-emerald-300 group-hover:decoration-emerald-400"
                      href={certificate.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View certificate
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <section className="mt-14 border-t border-zinc-800 pt-14">
            <h2 className="text-3xl font-bold">Achievements</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Campus Mantri, GeeksforGeeks campus ambassador",
                "1st Prize, WebMania at Dr. AITD",
                "5-Star HackerRank rating and 250+ LeetCode problems solved",
                "SheFi Program Scholar for an intensive Web3 technologies program",
              ].map((achievement) => (
                <p
                  className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-300"
                  key={achievement}
                >
                  <span className="mr-2 text-emerald-400">+</span>
                  {achievement}
                </p>
              ))}
            </div>
          </section>
          <div className="mt-14 rounded-xl border border-zinc-900 bg-zinc-900/70 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-zinc-800 px-3 py-2 text-xl">
                &lt;/&gt;
              </span>
              <div>
                <h2 className="text-2xl font-bold">Technologies Mastered</h2>
                <p className="text-sm text-zinc-500">
                  Full-stack expertise across modern tech stack
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {technologyGroups.map(([name, description, color]) => (
                <div
                  className="rounded-lg bg-zinc-950/70 p-4 text-center"
                  key={name}
                >
                  <h3 className={`font-semibold ${color}`}>{name}</h3>
                  <p className="mt-3 text-xs leading-5 text-zinc-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
