/**
 * Experience Data
 */

export const experiences = [
  {
    id: 1,
    title: "Technical Consultant",
    company: "Blue Yonder",
    location: "Bengaluru, India",
    type: "Hybrid",
    period: "Jul 2025 – Present",
    current: true,
    description: "Leading development of automation solutions and microservices for enterprise clients.",
    achievements: [
      "Created automation scripts for JSON ↔ CSV transformations for Dunnes Stores, implementing recursive flattening and schema-based mapping logic in Python. Reduced data processing time by 60%.",
      "Designed and deployed microservice-based WMS modules for Smyths Retail (BEACON) using Docker, REST APIs, and FastAPI, improving modularity and CI/CD readiness.",
      "1st Place Winner, Crystal Ball 2025: Designed an LLM-powered 3D warehouse design agent using LangChain and RAG architecture to autonomously generate layouts and provide conversational feedback.",
      "Presented AgentNeo to Woolworths client and BY executives, recognized for innovation and practical AI deployment."
    ],
    technologies: ["Python", "LangChain", "FastAPI", "Docker", "RAG", "GPT-4", "REST APIs", "Microservices"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Associate Technical Consultant",
    company: "Blue Yonder",
    location: "Bengaluru, India",
    type: "Hybrid",
    period: "Jul 2024 – Jul 2025",
    current: false,
    description: "Delivered full-stack solutions and UI components for global enterprise clients.",
    achievements: [
      "Delivered RF/Web UI components, Label Designer outputs, and Jasper reports across 8+ global clients.",
      "Notable projects: ShopperStop (flow optimization), ATD (consumption metrics), DFSV (OSD logic), Alshaya (BOE sequence generation), and Sandvik Mining (PO receipt enhancements).",
      "Achieved GEM Award and Crystal Ball Hackathon Semi-Finalist recognition."
    ],
    technologies: ["React", "JavaScript", "Java", "SQL", "REST APIs", "Jasper Reports"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Intern, Associate Technical Consultant",
    company: "Blue Yonder",
    location: "Bengaluru, India",
    type: "Onsite",
    period: "Jan 2024 – Jun 2024",
    current: false,
    description: "Built enterprise features and managed end-to-end development workflows.",
    achievements: [
      "Created new tab in BY WMS app for ATD; wrote 300+ lines of SQL for filtering logic.",
      "Owned end-to-end development and GitHub deployment for the feature."
    ],
    technologies: ["SQL", "Java", "Git", "GitHub", "WMS"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    title: "Research Intern",
    company: "PassionAI",
    location: "Madurai, India",
    type: "Onsite",
    period: "Sep 2022 – Feb 2023",
    current: false,
    description: "Conducted AI research on career recommendation systems using NLP techniques.",
    achievements: [
      "Researched AI-driven career recommendation using TF-IDF, Cosine Similarity, and KNN classifiers.",
      "Designed question-based interactive flow mapping user profiles to job categories; early foundation in pre-GPT NLP model experimentation."
    ],
    technologies: ["Python", "TF-IDF", "KNN", "NLP", "Scikit-learn", "Machine Learning"],
    color: "from-green-500 to-teal-500"
  }
];

export default experiences;
