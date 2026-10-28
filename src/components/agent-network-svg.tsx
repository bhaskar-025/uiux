"use client";

import { BrainCircuit } from "lucide-react";

export function AgentNetworkSvg() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none select-none" aria-hidden="true">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 via-zinc-950/90 to-black p-6 sm:p-8 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.85)]">
        {/* Top ambient highlight with monochrome gradient */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Header HUD */}
        <div className="mb-4 flex items-center justify-between border-b border-zinc-900 pb-3">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-white" />
            </span>
            <span className="text-sm font-normal tracking-wide text-zinc-200">
              Embedded Agent Telemetry
            </span>
          </div>
          <span className="text-sm text-zinc-400">Realtime Pipeline</span>
        </div>

        {/* Vector SVG Canvas with auto-flowing data pulses */}
        <div className="relative w-full aspect-[4/3] flex items-center justify-center">
          <svg
            viewBox="0 0 500 380"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Radial gradient glow for center */}
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>

              {/* Data packet linear gradient */}
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#52525b" stopOpacity="0.2" />
              </linearGradient>

              {/* Filter glow */}
              <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background vector circuit grid lines */}
            <g stroke="#18181b" strokeWidth="1" opacity="0.6">
              <line x1="50" y1="0" x2="50" y2="380" strokeDasharray="3 3" />
              <line x1="150" y1="0" x2="150" y2="380" strokeDasharray="3 3" />
              <line x1="250" y1="0" x2="250" y2="380" strokeDasharray="3 3" />
              <line x1="350" y1="0" x2="350" y2="380" strokeDasharray="3 3" />
              <line x1="450" y1="0" x2="450" y2="380" strokeDasharray="3 3" />
              <line x1="0" y1="90" x2="500" y2="90" strokeDasharray="3 3" />
              <line x1="0" y1="190" x2="500" y2="190" strokeDasharray="3 3" />
              <line x1="0" y1="290" x2="500" y2="290" strokeDasharray="3 3" />
            </g>

            {/* Glowing flow lines from center (250, 190) to satellites */}
            {/* Top-Left: Web Portal (80, 70) */}
            <path
              d="M 250 190 C 180 190, 120 120, 80 70"
              stroke="#27272a"
              strokeWidth="1.5"
            />
            <path
              d="M 250 190 C 180 190, 120 120, 80 70"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="6 12"
              className="animate-flow-line"
              filter="url(#svgGlow)"
            />

            {/* Top-Right: Customer Support (420, 70) */}
            <path
              d="M 250 190 C 320 190, 380 120, 420 70"
              stroke="#27272a"
              strokeWidth="1.5"
            />
            <path
              d="M 250 190 C 320 190, 380 120, 420 70"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="6 12"
              className="animate-flow-line"
              filter="url(#svgGlow)"
            />

            {/* Mid-Left: CRM Context (60, 200) */}
            <path
              d="M 250 190 L 60 200"
              stroke="#27272a"
              strokeWidth="1.5"
            />
            <path
              d="M 250 190 L 60 200"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="6 12"
              className="animate-flow-line"
              filter="url(#svgGlow)"
            />

            {/* Mid-Right: Tool APIs (440, 200) */}
            <path
              d="M 250 190 L 440 200"
              stroke="#27272a"
              strokeWidth="1.5"
            />
            <path
              d="M 250 190 L 440 200"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="6 12"
              className="animate-flow-line"
              filter="url(#svgGlow)"
            />

            {/* Bottom-Left: Knowledge Base (90, 320) */}
            <path
              d="M 250 190 C 180 190, 130 260, 90 320"
              stroke="#27272a"
              strokeWidth="1.5"
            />
            <path
              d="M 250 190 C 180 190, 130 260, 90 320"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="6 12"
              className="animate-flow-line"
              filter="url(#svgGlow)"
            />

            {/* Bottom-Right: Databases / ERP (410, 320) */}
            <path
              d="M 250 190 C 320 190, 370 260, 410 320"
              stroke="#27272a"
              strokeWidth="1.5"
            />
            <path
              d="M 250 190 C 320 190, 370 260, 410 320"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="6 12"
              className="animate-flow-line"
              filter="url(#svgGlow)"
            />

            {/* Satellite 1: Web UI */}
            <g transform="translate(80, 70)">
              <circle r="26" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
              <circle r="3.5" fill="#ffffff" />
              <text y="42" textAnchor="middle" fill="#d4d4d8" fontSize="13" fontWeight="400">
                Web App
              </text>
            </g>

            {/* Satellite 2: Support */}
            <g transform="translate(420, 70)">
              <circle r="26" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
              <circle r="3.5" fill="#ffffff" />
              <text y="42" textAnchor="middle" fill="#d4d4d8" fontSize="13" fontWeight="400">
                Support
              </text>
            </g>

            {/* Satellite 3: CRM */}
            <g transform="translate(60, 200)">
              <circle r="24" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
              <circle r="3.5" fill="#ffffff" />
              <text y="40" textAnchor="middle" fill="#d4d4d8" fontSize="13" fontWeight="400">
                CRM
              </text>
            </g>

            {/* Satellite 4: Action Tools */}
            <g transform="translate(440, 200)">
              <circle r="24" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
              <circle r="3.5" fill="#ffffff" />
              <text y="40" textAnchor="middle" fill="#d4d4d8" fontSize="13" fontWeight="400">
                Action APIs
              </text>
            </g>

            {/* Satellite 5: Knowledge Vector */}
            <g transform="translate(90, 320)">
              <circle r="26" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
              <circle r="3.5" fill="#ffffff" />
              <text y="42" textAnchor="middle" fill="#d4d4d8" fontSize="13" fontWeight="400">
                RAG Docs
              </text>
            </g>

            {/* Satellite 6: ERP Databases */}
            <g transform="translate(410, 320)">
              <circle r="26" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
              <circle r="3.5" fill="#ffffff" />
              <text y="42" textAnchor="middle" fill="#d4d4d8" fontSize="13" fontWeight="400">
                ERP / DB
              </text>
            </g>

            {/* Center Core: Radar rings & Nexora AI Engine */}
            <g transform="translate(250, 190)">
              {/* Radial background glow */}
              <circle r="75" fill="url(#centerGlow)" />

              {/* Rotating radar / orbital ring */}
              <circle
                r="56"
                stroke="#52525b"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="animate-spin-slow origin-center"
              />

              {/* Static ring */}
              <circle r="42" stroke="#27272a" strokeWidth="1.5" />

              {/* Pulsing core badge */}
              <circle r="32" fill="#000000" stroke="#ffffff" strokeWidth="2" filter="url(#svgGlow)" />

              {/* Center icon text representation */}
              <text
                textAnchor="middle"
                dy="5"
                fill="#ffffff"
                fontSize="13"
                letterSpacing="0.5"
                fontWeight="500"
              >
                Core
              </text>
            </g>
          </svg>
        </div>

        {/* Real-time telemetry ticker */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-900 pt-3 text-sm text-zinc-400 font-normal">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-white animate-pulse" />
            <span>Multi-agent sync: Active</span>
          </div>
          <span>Throughput: 8.4k evt/s</span>
          <span>Zero-retention: Enabled</span>
        </div>
      </div>
    </div>
  );
}

