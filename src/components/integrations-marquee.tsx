"use client";

const integrations = [
  { name: "Salesforce CRM", category: "CRM & Pipelines" },
  { name: "Zendesk Support", category: "Helpdesk & Triage" },
  { name: "PostgreSQL Database", category: "Structured Data" },
  { name: "Snowflake Cloud", category: "Data Warehousing" },
  { name: "Slack Workspaces", category: "Internal Chatops" },
  { name: "HubSpot Marketing", category: "Inbound Leads" },
  { name: "Jira Software", category: "Ticket Routing" },
  { name: "Stripe Billing", category: "Payment Context" },
  { name: "Notion Knowledge", category: "Internal Wikis" },
  { name: "AWS Cloud", category: "Secure Compute" },
];

export function IntegrationsMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-zinc-900 bg-gradient-to-b from-black via-zinc-950 to-black py-9 backdrop-blur-sm">
      {/* Edge gradient masks for seamless fade out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-28 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-28 bg-gradient-to-l from-black via-black/80 to-transparent" />

      <div className="mb-5 text-center">
        <p className="text-sm font-normal tracking-wide text-zinc-400">
          Pre-built connectors for enterprise ecosystems
        </p>
      </div>

      <div className="flex select-none">
        <div className="animate-marquee flex items-center gap-4">
          {[...integrations, ...integrations, ...integrations].map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 px-5 py-3 shadow-sm"
            >
              {/* Sleek SVG integration icon dot */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-zinc-300"
              >
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              <div>
                <p className="text-base font-medium text-white">{item.name}</p>
                <p className="text-sm text-zinc-400 font-normal">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

