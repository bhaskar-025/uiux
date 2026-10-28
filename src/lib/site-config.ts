export const siteConfig = {
  name: "Nexora AI",
  tagline: "Intelligent Agents. Seamlessly Embedded.",
  description:
    "Nexora AI helps businesses embed intelligent AI agents into websites, applications, customer support systems, and enterprise workflows. Conversational AI, knowledge assistants, workflow automation, and custom integrations.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contact: {
    email: "hello@nexora-ai.example.com",
    phone: "+1 (555) 000-0000",
    note: "Illustrative contact information for demonstration purposes.",
  },
  social: {
    linkedIn: "#",
    twitter: "#",
  },
} as const;

export type SiteConfig = typeof siteConfig;
