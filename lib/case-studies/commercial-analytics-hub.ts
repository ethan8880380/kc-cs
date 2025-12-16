import type { CaseStudy } from "./types"

export const commercialAnalyticsHub: CaseStudy = {
  slug: "commercial-analytics-hub",
  title: "Commercial Analytics Hub",
  client: "Internal", // TODO: Update with company name if desired
  description: "Centralizing discovery, trust, and enablement for enterprise analytics",
  industry: "Enterprise Analytics",
  duration: "~2 years", // TODO: Update with actual duration
  teamSize: "1 designer/developer + backend support", // TODO: Adjust as needed
  tags: ["React", "Webflow", "FullStory", "Power BI", "TypeScript"],
  thumbnail: "/cs/comm/comm-hero.png", // TODO: Replace with hub homepage screenshot
  gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
  stats: [
    { label: "Discovery Time Reduction", value: "about 60min → <1min" },
    { label: "Active Users", value: "1,000+" },
  ],
  contentGroups: [
    {
      id: "overview",
      title: "Overview",
      sections: [
        {
          id: "overview-intro",
          title: "What is the Commercial Analytics Hub?",
          content: "The Commercial Analytics Hub is an internal platform designed to centralize access to commercial analytics dashboards used across the organization. It serves as the primary entry point for market share, pricing, promotions, assortment, and revenue management analytics.",
        },
        {
          id: "overview-before",
          title: "The Before State",
          content: "Before the hub existed, dashboards were fragmented across Power BI workspaces, SharePoint sites, and personal bookmarks. Finding the right dashboard was time-consuming, error-prone, and heavily dependent on tribal knowledge.",
        },
        {
          id: "overview-today",
          title: "Today",
          content: "Today, the hub is the first stop for over 1,000 users, reducing dashboard discovery time from over an hour to under a minute, and serving as a reusable model for multiple internal platforms.",
        },
      ],
    },
    {
      id: "context",
      title: "Context & Background",
      sections: [
        {
          id: "context-audience",
          title: "Target Audience",
          content: "The platform was built for the internal Commercial Analytics organization—teams responsible for market analysis, pricing strategy, promotional effectiveness, and broader commercial decision-making.",
        },
        {
          id: "context-starting-point",
          title: "Starting Point",
          content: "At the start of the project, the landscape was fragmented and difficult to navigate:",
          items: [
            "26 active Power BI dashboards",
            "Dashboards owned by multiple teams",
            "Reports scattered across different Power BI workspaces and SharePoint sites",
            "Users relied on bookmarks, emails, or word of mouth to find reports",
            "Links changed 1–2 times per month, often without notice",
          ],
        },
        {
          id: "context-pain",
          title: "User Pain",
          content: "While power users developed workarounds, occasional analytics users regularly struggled to find what they needed.",
          image: {
            src: "https://placehold.co/800x400/1a1a2e/4a9eff?text=Before+State+Diagram", // TODO: Replace with actual diagram
            alt: "Before state diagram showing dashboards scattered across Power BI, SharePoint, and bookmarks",
            caption: "Dashboards were scattered across Power BI, SharePoint, and personal bookmarks",
          },
        },
      ],
    },
    {
      id: "problem",
      title: "The Problem",
      sections: [
        {
          id: "problem-intro",
          title: "Core Issues",
          content: "Research and stakeholder interviews surfaced three core problems that needed to be addressed.",
        },
        {
          id: "problem-fragmentation",
          title: "1. Fragmentation and Unclear Ownership",
          content: "Dashboards were created by different teams with overlapping purposes. Users were often unsure:",
          items: [
            "Which dashboard to use for their specific need",
            "Whether the data was current and accurate",
            "Who owned or maintained each dashboard",
          ],
        },
        {
          id: "problem-visibility",
          title: "2. Low Visibility into Changes",
          content: "When links changed, users usually discovered the issue only after a report failed to load—forcing them to search again or interrupt colleagues.",
        },
        {
          id: "problem-training",
          title: "3. Disappearing Training and Context",
          content: "Training was delivered through live office hours, but recordings were not stored anywhere. Once a session ended:",
          items: [
            "The knowledge was effectively lost",
            "New hires had no self-serve onboarding",
            "Occasional users lacked context for how dashboards should be used",
          ],
        },
        {
          id: "problem-impact",
          title: "Real-World Impact",
          content: "In practice, users could spend over an hour just locating the right dashboard before doing any analysis.",
        },
      ],
    },
    {
      id: "goals",
      title: "Goals & Success Criteria",
      sections: [
        {
          id: "goals-user",
          title: "User Goals",
          content: "The platform needed to address fundamental user needs:",
          items: [
            "Find the right dashboard in under a minute",
            "Understand which report to use for a given question",
            "Trust that links were current and authoritative",
          ],
        },
        {
          id: "goals-business",
          title: "Business Goals",
          content: "From an organizational perspective, the goals were clear:",
          items: [
            "Centralize access to all commercial analytics dashboards",
            "Improve productivity by reducing search time",
            "Establish a trusted source of truth",
          ],
        },
        {
          id: "goals-measurement",
          title: "Measuring Success",
          content: "While no formal KPIs were defined, success was measured through adoption rates, behavioral analytics, and qualitative feedback. Failure was simple: if people didn't use it, the project failed.",
        },
      ],
    },
    {
      id: "role",
      title: "Our Role",
      sections: [
        {
          id: "role-responsibilities",
          title: "Responsibilities",
          content: "We served as the primary drivers and owners of the project, responsible for:",
          items: [
            "Defining the product vision and scope",
            "Leading research and stakeholder interviews",
            "Designing the information architecture and UX",
            "Designing and implementing the UI",
            "Building and maintaining the front end",
            "Managing stakeholders and decision-making",
            "Evolving the platform over time",
          ],
        },
        {
          id: "role-ownership",
          title: "End-to-End Ownership",
          content: "Aside from a small development team supporting backend chatbot integration, we owned the project end-to-end.",
        },
      ],
    },
    {
      id: "research",
      title: "Research & Key Insights",
      sections: [
        {
          id: "research-discovery",
          title: "Discovery",
          content: "Research revealed a clear pattern in how different user types approached dashboard discovery.",
        },
        {
          id: "research-power-users",
          title: "Power Users",
          content: "Power users had developed their own systems:",
          items: [
            "Bookmarked dashboards they used frequently",
            "Memorized workspace locations",
            "Navigated directly to known reports",
          ],
        },
        {
          id: "research-occasional-users",
          title: "Occasional Analytics Users",
          content: "Occasional users faced significant friction:",
          items: [
            "Searched across multiple SharePoint sites",
            "Clicked outdated links",
            "Messaged teammates on Teams asking for help",
            "Often spent hours finding the right dashboard",
          ],
        },
        {
          id: "research-analytics",
          title: "Behavioral Analytics",
          content: "Using FullStory, we analyzed click paths, time on page, navigation patterns, and points of hesitation or drop-off to understand where users struggled.",
        },
        {
          id: "research-insight",
          title: "Core Insight",
          content: "Users didn't need better dashboards. They needed a single, trusted place to start. Fragmentation—not complexity—was the root cause of wasted time and low confidence.",
        },
      ],
    },
    {
      id: "ia",
      title: "Information Architecture",
      sections: [
        {
          id: "ia-structure",
          title: "Dashboard Organization",
          content: "Dashboards were grouped by type of analytics, not by question or audience:",
          items: [
            "Market Share",
            "Assortment",
            "Revenue Management",
            "Shelf Planning",
            "And more...",
          ],
        },
        {
          id: "ia-rationale",
          title: "Why This Structure",
          content: "This aligned with how analysts already thought about their work and reduced cognitive load.",
        },
        {
          id: "ia-alternatives",
          title: "Alternatives Considered",
          content: "A question-based structure (e.g. \"How do we grow market share in Q3?\") was explored but rejected because:",
          items: [
            "It introduced ambiguity",
            "It didn't scale well",
            "It required subjective interpretation",
          ],
        },
        {
          id: "ia-overlap",
          title: "Handling Overlapping Dashboards",
          content: "Where overlap existed, each dashboard included a clear definition, guidance on when to use it, and clarity on level of granularity. This allowed users to self-select the right tool without tribal knowledge.",
          image: {
            src: "https://placehold.co/800x500/1a1a2e/4a9eff?text=Dashboard+Index+Page", // TODO: Replace with actual screenshot
            alt: "Dashboard index page showing grouped dashboards with category labels and descriptions",
            caption: "Dashboards organized by analytics type with clear descriptions",
          },
        },
      ],
    },
    {
      id: "design",
      title: "Key Design Decisions",
      sections: [
        {
          id: "design-centralized",
          title: "Centralized Hub Over Tool-Level Fixes",
          content: "Rather than optimizing navigation inside Power BI or SharePoint, we created a dedicated access layer whose sole purpose was clarity and discovery.",
        },
        {
          id: "design-separation",
          title: "Separation of Dashboards and Self-Service Tools",
          content: "Power BI dashboards were clearly separated from self-service data tools, preventing non-power users from landing in workflows they weren't equipped to use.",
        },
        {
          id: "design-browse",
          title: "Browse-First Experience",
          content: "The site prioritized clear categories, visible descriptions, and predictable navigation. This supported users who didn't yet know what they were looking for.",
        },
        {
          id: "design-trust",
          title: "Trust Through Consistency",
          content: "The hub became trusted by keeping links current, communicating changes clearly, and maintaining a single authoritative source.",
        },
      ],
    },
    {
      id: "training",
      title: "Training & Enablement",
      sections: [
        {
          id: "training-problem",
          title: "Addressing Disappearing Knowledge",
          content: "To solve the problem of lost training knowledge, we implemented a structured approach:",
          items: [
            "Office hours were recorded",
            "Videos were embedded directly into the site",
            "Sessions were labeled by topic and dashboard",
          ],
        },
        {
          id: "training-impact",
          title: "Knowledge Base",
          content: "This turned training into an on-demand knowledge base, supporting new hires, occasional analytics users, and independent learning.",
          image: {
            src: "https://placehold.co/800x500/1a1a2e/4a9eff?text=Training+Page", // TODO: Replace with actual screenshot
            alt: "Training page showing embedded videos organized by topic and dashboard",
            caption: "On-demand training videos organized by topic and dashboard",
          },
        },
      ],
    },
    {
      id: "evolution",
      title: "Continuous Improvement & Evolution",
      sections: [
        {
          id: "evolution-intro",
          title: "Intentional Phases",
          content: "The platform evolved through multiple intentional phases, each building on learnings from the previous iteration.",
        },
        {
          id: "evolution-phase1",
          title: "Phase 1 — MVP (Webflow)",
          content: "Started with a simple Webflow site that centralized dashboards and basic info. The goal was to validate adoption. Using FullStory, we confirmed strong usage and engagement.",
        },
        {
          id: "evolution-phase2",
          title: "Phase 2 — Expansion (Webflow Redesign)",
          content: "Added training and enablement content, improved visual consistency, and better alignment with the internal design system. The hub evolved from a directory into a learning resource.",
        },
        {
          id: "evolution-phase3",
          title: "Phase 3 — Rebuild for Scale (React)",
          content: "As updates grew more complex, Webflow became a bottleneck—global changes required page-by-page edits, and dashboard updates were duplicated across tabs. The site was rebuilt in React to:",
          items: [
            "Centralize shared logic",
            "Improve maintainability",
            "Increase performance",
            "Speed up iteration",
          ],
        },
        {
          id: "evolution-phase3-feedback",
          title: "User Feedback",
          content: "Users explicitly noted the faster performance and cleaner UI after the React rebuild.",
        },
        {
          id: "evolution-phase4",
          title: "Phase 4 — Platform Maturity",
          content: "The latest iteration focused on full alignment with internal branding, clean reusable components, and design system integration in code. The hub became a reference platform, influencing 4–5 similar internal sites.",
          image: {
            src: "https://placehold.co/800x400/1a1a2e/4a9eff?text=Platform+Evolution", // TODO: Replace with actual comparison
            alt: "Evolution comparison showing early Webflow version, React version, and latest redesign",
            caption: "Platform evolution: from Webflow MVP to React to the latest design system integration",
          },
        },
        {
          id: "evolution-chatbot",
          title: "AI-Powered Chatbot",
          content: "We integrated an AI chatbot that allows users to find the data they need through natural language queries. Instead of navigating through categories or scanning descriptions, users can simply ask the chatbot what they're looking for and receive direct links to the relevant dashboards.",
          items: [
            "Natural language search for dashboards and data",
            "Contextual recommendations based on user questions",
            "Reduced friction for new and occasional users",
            "Faster path to insights without requiring platform expertise",
          ],
        },
        {
          id: "evolution-academy",
          title: "Analytics Academy",
          content: "We launched the Analytics Academy—a comprehensive, multi-faceted curriculum designed to drive role-based expertise across critical knowledge pillars. The academy provides structured learning paths tailored to different roles and skill levels.",
          items: [
            "Live sessions conducted for new content and topics",
            "Recordings added as self-guided resources for on-demand learning",
            "Role-based curricula targeting specific skill development",
            "Centralized within the hub for seamless discovery alongside dashboards",
          ],
        },
      ],
    },
    {
      id: "impact",
      title: "Impact",
      sections: [
        {
          id: "impact-metrics",
          title: "Key Results",
          content: "The platform delivered measurable improvements across the organization:",
          items: [
            "~60 minutes → ~1 minute dashboard discovery time",
            "1,000+ continuous users within the first few months",
            "Organic adoption across teams",
            "Improved trust and visibility into analytics",
            "Reusable platform model adopted by other teams",
          ],
        },
        {
          id: "impact-quotes",
          title: "User Sentiment",
          content: "Many users described the hub as \"the first thing I open when I start my workday.\"",
        },
      ],
    },
    {
      id: "reflection",
      title: "Reflection & Growth",
      sections: [
        {
          id: "reflection-differently",
          title: "What We'd Do Differently",
          content: "Given the depth of upfront research and strong adoption, there are no major architectural decisions we would change.",
        },
        {
          id: "reflection-growth",
          title: "Team Growth",
          content: "This project significantly strengthened our front-end development skills. We began the project with limited hands-on coding experience and, by owning implementation end-to-end, became proficient front-end developers—allowing us to move faster, reduce handoff friction, and iterate directly on user feedback.",
        },
      ],
    },
    {
      id: "closing",
      title: "Closing",
      sections: [
        {
          id: "closing-summary",
          title: "Summary",
          content: "The Commercial Analytics Hub demonstrates how clarity, trust, and ownership can be just as impactful as the analytics themselves. What began as a simple MVP evolved into a platform relied on daily—proving that solving discovery and enablement at scale can unlock meaningful productivity gains across an organization.",
        },
      ],
    },
  ],
}

