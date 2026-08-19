"use client";

import { motion } from "motion/react";
import { Layers3 } from "lucide-react";

const skillGroups = [
  { title: "Languages", skills: ["C", "C++", "Python", "JavaScript", "Java"] },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "GSAP",
      "Shadcn/UI",
    ],
  },
  { title: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    title: "AI / Data Science",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "TF-IDF",
      "Feature Engineering",
    ],
  },
  {
    title: "AI/ML & LLM Frameworks",
    skills: [
      "LangChain (LCEL)",
      "Multi-Agent Systems",
      "RAG",
      "Prompt Engineering",
      "Vector Search",
      "Machine Learning",
    ],
  },
  {
    title: "LLMs & AI APIs",
    skills: [
      "OpenAI Whisper",
      "Mistral AI",
      "Llama 3.2 (Ollama)",
      "Sarvam AI",
      "Google Gemini API",
      "Tavily API",
    ],
  },
  {
    title: "Vector Databases & Embeddings",
    skills: [
      "ChromaDB",
      "HuggingFace Embeddings",
      "Sentence-Transformers (all-MiniLM-L6-v2)",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: ["Docker", "Prisma ORM", "Drizzle ORM", "Git", "Clerk", "Arcjet"],
  },
  {
    title: "Deployment",
    skills: ["Vercel", "Render", "Streamlit"],
  },
] as const;

function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="flex min-h-16 items-center rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-3 transition-colors hover:border-emerald-400/50 hover:bg-zinc-900">
      <span className="text-base font-semibold leading-6 text-zinc-100">
        {skill}
      </span>
    </div>
  );
}

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-100 md:px-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-emerald-300">
          The working set
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.06em] md:text-7xl">
          Toolkit
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
          A complete view of the languages, systems, and tools I use to build AI
          and full-stack products.
        </p>

        <section className="mt-12 space-y-10" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="sr-only">
            Technical skills
          </h2>
          {skillGroups.map((group, groupIndex) => (
            <motion.section
              key={group.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: groupIndex * 0.04 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <Layers3
                  className="h-4 w-4 text-emerald-300"
                  aria-hidden="true"
                />
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">
                  {group.title}
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.skills.map((skill) => (
                  <SkillCard key={skill} skill={skill} />
                ))}
              </div>
            </motion.section>
          ))}
        </section>
      </div>
    </main>
  );
}
