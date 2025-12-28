/**
 * Projects Data
 * Auto-generated from resume - Haresh D
 */

export const projects = [
  {
    id: 1,
    title: "AgentNeo",
    subtitle: "Generative 3D Warehouse Agent",
    category: "AI / Full Stack",
    featured: true,
    award: "🏆 1st Place Winner - Crystal Ball 2025",
    description: "A LangChain-based agentic AI system capable of generating intelligent 3D warehouse layouts based on user text prompts. Features RAG for contextual memory and autonomous design decisioning.",
    longDescription: "Developed a sophisticated AI agent that revolutionizes warehouse design. The system uses natural language processing to understand user requirements, implements Retrieval-Augmented Generation (RAG) for contextual memory, and autonomously generates optimized 3D warehouse layouts. Built with a FastAPI-powered backend integrating LLM inference pipelines and Docker containers for scalable deployment.",
    achievements: [
      "Implemented RAG for contextual memory and autonomous design decisioning",
      "Built FastAPI-powered backend with LLM inference pipelines",
      "Integrated Docker containers for scalable deployment",
      "Recognized by Blue Yonder leadership and Woolworths for advancing generative AI in industrial design"
    ],
    technologies: ["LangChain", "GPT-4", "FastAPI", "Docker", "OpenAI APIs", "RAG", "Python", "3D Visualization"],
    image: "/projects/agentneo.png",
    github: "https://github.com/hareshd",
    demo: null,
    color: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    title: "RouteXpert",
    subtitle: "AI-Powered Dynamic Vehicle Routing",
    category: "AI / Machine Learning",
    featured: true,
    award: "🏆 3rd Place - FAER Scholar Award",
    description: "A MaxEnt Reinforcement Learning algorithm for real-time vehicle routing and cross-docking optimization in dairy logistics.",
    longDescription: "Designed an innovative vehicle routing solution using Maximum Entropy Reinforcement Learning. The system optimizes routes in real-time, achieving ~28% reduction in total travel time compared to traditional ML routing methods. Features a React frontend with Bing Maps API integration for live route generation.",
    achievements: [
      "Achieved ~28% reduction in total travel time vs traditional ML routing methods",
      "Built with FastAPI + SQLite backend and React frontend",
      "Integrated Bing Maps API for live route visualization",
      "Recognized nationally by FAER Foundation for innovation in sustainable logistics AI"
    ],
    technologies: ["Reinforcement Learning", "Python", "FastAPI", "React", "SQLite", "Bing Maps API"],
    image: "/projects/routexpert.png",
    github: "https://github.com/hareshd",
    demo: null,
    color: "from-green-500 to-teal-500"
  },
  {
    id: 3,
    title: "Sparrow",
    subtitle: "AI-Powered Survey Sentiment Analysis",
    category: "AI / NLP",
    featured: true,
    award: "🏆 2nd Prize - SurveySparrow Campus Clash",
    description: "A survey response analytics engine using pre-trained Hugging Face models (DistilBERT, BART) with domain-specific fine-tuning for sentiment and keyword extraction.",
    longDescription: "Built an intelligent survey analytics platform that processes responses using state-of-the-art NLP models. Features include automated sentiment analysis, keyword extraction, word cloud generation via LDA and WordNet Lemmatization, and TF-IDF clustering for semantic theme detection. Achieved 90%+ precision in text categorization.",
    achievements: [
      "Fine-tuned DistilBERT and BART models for domain-specific sentiment analysis",
      "Generated word clouds via LDA, WordNet Lemmatizer, and TF-IDF clustering",
      "Achieved 90%+ precision in text categorization",
      "Built REST endpoint with FastAPI for real-time predictions",
      "Concept later pitched as a startup idea for survey intelligence automation"
    ],
    technologies: ["Python", "Transformers", "Hugging Face", "LDA", "TF-IDF", "FastAPI", "Pandas", "NLP"],
    image: "/projects/sparrow.png",
    github: "https://github.com/hareshd",
    demo: "https://sparrow-demo.com",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    title: "Review Fusion",
    subtitle: "Walmart Hackathon Project",
    category: "Full Stack / NLP",
    featured: false,
    award: null,
    description: "An end-to-end review summarization engine to process 10k+ Walmart reviews using TextRank, Sentiment Analysis, and Topic Modeling.",
    longDescription: "Created a comprehensive review analytics platform for processing large-scale customer feedback. The system uses advanced NLP pipelines with spaCy and NLTK for tokenization, POS tagging, and sentiment polarity scoring. Features real-time visualization with Flask + Plotly dashboard, achieving 18% improvement in ROUGE-L scores.",
    achievements: [
      "Processed 10k+ Walmart reviews using TextRank and Topic Modeling",
      "Designed NLP pipelines with spaCy and NLTK for tokenization and sentiment scoring",
      "Achieved 18% improvement in ROUGE-L scores compared to baseline summarizers",
      "Built real-time visualization dashboard with Flask + Plotly"
    ],
    technologies: ["Python", "NLTK", "spaCy", "TextRank", "Flask", "Plotly", "Scikit-learn"],
    image: "/projects/reviewfusion.png",
    github: "https://github.com/hareshd",
    demo: "https://review-fusion-demo.com",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 5,
    title: "MarketView Dashboard",
    subtitle: "Algorithmic Trading Platform",
    category: "Full Stack / FinTech",
    featured: false,
    award: null,
    description: "A real-time trading signal platform integrating FastAPI, SQLAlchemy, and TradingView data feeds for market analysis.",
    longDescription: "Co-developed a sophisticated trading platform that implements fractal-based swing point detection and market structure analysis to identify breakouts. Features a StrongBuy/StrongSell signal engine using body-to-range ratio logic and integrated Options Chain Analysis for risk-adjusted entries.",
    achievements: [
      "Implemented fractal-based swing point detection and market structure analysis",
      "Designed StrongBuy/StrongSell signal engine with >50% logic accuracy",
      "Integrated Options Chain Analysis for risk-adjusted entries",
      "Built web dashboard for visualizing real-time trade signals with HTML, CSS, JavaScript (Jinja2)"
    ],
    technologies: ["FastAPI", "Python", "SQLAlchemy", "Pandas", "NumPy", "TradingView API", "JavaScript", "HTML/CSS"],
    image: "/projects/marketview.png",
    github: "https://github.com/hareshd",
    demo: null,
    color: "from-purple-500 to-indigo-500"
  }
];

export default projects;
