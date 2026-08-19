export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "PathFinder",
    slug: "pathfinder",
    description:
      "AI-powered career and interview preparation platform built for personalized growth.",
    detailedDescription:
      "A full-stack career platform with an AI resume builder, ATS optimization tools, personalized industry insights, and adaptive interview preparation powered by Gemini AI.",
    image: "/pathfinder.png",
    tags: ["AI", "Next.js", "Career", "Full-Stack"],
    status: "active",
    techStack: [
      "Next.js",
      "Prisma ORM",
      "PostgreSQL",
      "Gemini AI",
      "Docker",
      "Clerk",
      "Arcjet",
    ],
    features: [
      "AI resume builder and ATS optimization tools",
      "Gemini-powered personalized industry insights",
      "Adaptive mock interviews with real-time voice interaction",
      "Clerk authentication and Arcjet rate limiting",
      "Dockerized deployment workflow",
    ],
    learningOutcomes: [
      "Full-stack architecture with Next.js and Prisma",
      "AI feature design for career workflows",
      "Production-minded authentication and security",
    ],
    links: {
      github: "https://github.com/shreyavni/PathFinder",
    },
    author: "PathFinder",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "2",
    title: "Hablot",
    slug: "hablot",
    description:
      "Cross-platform real estate marketplace with secure authentication and live property data.",
    detailedDescription:
      "A React Native real estate marketplace prototype that lets users browse, search, and explore property listings with Clerk authentication, Supabase data, and interactive maps.",
    image: "/hablot.png",
    tags: ["React Native", "Supabase", "Clerk", "Mobile"],
    status: "active",
    techStack: ["React Native", "Expo", "Clerk", "Supabase"],
    features: [
      "Cross-platform property browsing and search",
      "Secure Clerk authentication",
      "Supabase-backed real-time data management",
      "Interactive maps for location-based discovery",
    ],
    learningOutcomes: [
      "React Native and Expo application development",
      "Mobile authentication and backend integration",
      "Location-aware marketplace UX",
    ],
    links: {
      github: "https://github.com/shreyavni/Hablot",
    },
    author: "Hablot",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "3",
    title: "Triply",
    slug: "triply",
    description:
      "AI-powered trip planner generating personalized day-by-day itineraries.",
    detailedDescription:
      "An AI travel planner that generates personalized itineraries with Google Gemini AI based on duration, budget, and preferences, with Firebase persistence across sessions.",
    image: "/triply.png",
    tags: ["React", "Gemini AI", "Firebase", "Travel"],
    status: "active",
    techStack: ["React", "Google Gemini AI", "Firebase"],
    features: [
      "Personalized day-by-day itinerary generation",
      "Gemini AI planning based on budget and preferences",
      "Firebase persistence across sessions",
    ],
    learningOutcomes: [
      "Generative AI integration in a consumer workflow",
      "Real-time persistence with Firebase",
      "Constraint-aware itinerary generation",
    ],
    links: {
      github: "https://github.com/shreyavni/Triply",
    },
    author: "Triply",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "4",
    title: "EchoMinutes",
    slug: "echominutes",
    description:
      "Multilingual meeting intelligence platform for transcripts, summaries, and grounded chat.",
    detailedDescription:
      "An AI assistant that transcribes meetings with OpenAI Whisper and Sarvam AI, generates summaries and action items through LangChain and Mistral AI, and supports RAG chat over transcripts.",
    image: "/echominutes.png",
    tags: ["Whisper", "LangChain", "RAG", "Streamlit"],
    status: "active",
    techStack: [
      "Python",
      "OpenAI Whisper",
      "Sarvam AI",
      "LangChain (LCEL)",
      "Mistral AI",
      "ChromaDB",
      "Streamlit",
    ],
    features: [
      "English transcription with OpenAI Whisper",
      "Hindi and Hinglish transcription with Sarvam AI",
      "LangChain and Mistral AI summaries and action items",
      "RAG chat over meeting transcripts",
      "PDF and TXT export through Streamlit",
    ],
    learningOutcomes: [
      "Multilingual speech and language-model orchestration",
      "Embedding-backed retrieval over user documents",
      "AI product UX with Streamlit",
    ],
    links: {
      github: "https://github.com/shreyavni/EchoMinutes",
    },
    author: "EchoMinutes",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "5",
    title: "VaultMind",
    slug: "vaultmind",
    description:
      "Offline, privacy-first RAG system for grounded question answering over sensitive PDFs.",
    detailedDescription:
      "A fully offline RAG pipeline for sensitive PDFs with zero cloud API dependency, using Ollama for local Llama 3.2 inference and ChromaDB for retrieval on approximately 8GB RAM.",
    image: "/vaultmind.png",
    tags: ["RAG", "Ollama", "Llama 3.2", "Privacy"],
    status: "active",
    techStack: [
      "Python",
      "Streamlit",
      "LangChain",
      "Ollama",
      "Llama 3.2 3B",
      "ChromaDB",
      "PyPDF",
    ],
    features: [
      "Fully offline PDF question answering",
      "Local Llama 3.2 3B inference through Ollama",
      "ChromaDB retrieval for grounded responses",
      "Fuzzy-matching groundedness evaluator",
      "Designed to run on approximately 8GB RAM",
    ],
    learningOutcomes: [
      "Privacy-first local AI architecture",
      "RAG pipeline design for sensitive documents",
      "Evaluation of grounded model responses",
    ],
    links: {
      github: "https://github.com/shreyavni/VaultMind",
    },
    author: "VaultMind",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "6",
    title: "ResearchCrew",
    slug: "researchcrew",
    description:
      "Autonomous multi-agent research system that produces structured, reviewed reports.",
    detailedDescription:
      "A LangChain LCEL system with Search, Reader, Writer, and Critic agents. Tavily API and BeautifulSoup power research collection, while parallel review chains orchestrate grounded report generation.",
    image: "/researchcrew.png",
    tags: ["Multi-Agent", "LangChain", "Tavily", "Research"],
    status: "active",
    techStack: [
      "Python",
      "LangChain (LCEL)",
      "OpenAI",
      "Tavily API",
      "BeautifulSoup",
    ],
    features: [
      "Four collaborating Search, Reader, Writer, and Critic agents",
      "Tavily API and BeautifulSoup research collection",
      "Parallel Writer/Critic review chains",
      "Shared memory for structured report generation",
    ],
    learningOutcomes: [
      "Multi-agent workflow orchestration with LangChain LCEL",
      "Web research extraction and synthesis",
      "Critic-driven quality review for generated reports",
    ],
    links: {
      github: "https://github.com/shreyavni/ResearchCrew",
    },
    author: "ResearchCrew",
    authorAvatar: "/Hexagon.png",
  },
];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(
  slug: string | undefined | null,
): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}
