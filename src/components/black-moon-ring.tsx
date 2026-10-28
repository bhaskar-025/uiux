import { cn } from "cn";

interface BlackMoonRingProps {
  className?: string;
  size?: number;
}

export function BlackMoonRing({ className, size = 640 }: BlackMoonRingProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute select-none flex items-center justify-center",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Ambient radial halo */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 45%, rgba(0, 0, 0, 0) 72%)",
        }}
      />

      {/* SVG Celestial Eclipse / Black Moon Ring Canvas */}
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Intense perimeter ring glow filter */}
          <filter id="moonRingGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="2" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial gradient for the dark moon body */}
          <radialGradient id="darkMoonCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="1" />
            <stop offset="85%" stopColor="#050507" stopOpacity="1" />
            <stop offset="98%" stopColor="#121217" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#27272a" stopOpacity="0.4" />
          </radialGradient>

          {/* Linear gradient for corona sweep */}
          <linearGradient id="coronaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#a1a1aa" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#27272a" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          {/* Crescent lighting gradient */}
          <linearGradient id="crescentSweep" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#71717a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer orbital guide rings */}
        <circle
          cx="300"
          cy="300"
          r="280"
          stroke="rgba(255, 255, 255, 0.04)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <circle
          cx="300"
          cy="300"
          r="250"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="1"
        />
        <circle
          cx="300"
          cy="300"
          r="220"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />

        {/* Crosshair coordinate markers */}
        <g stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1">
          {/* North */}
          <line x1="300" y1="20" x2="300" y2="40" />
          {/* South */}
          <line x1="300" y1="560" x2="300" y2="580" />
          {/* West */}
          <line x1="20" y1="300" x2="40" y2="300" />
          {/* East */}
          <line x1="560" y1="300" x2="580" y2="300" />
        </g>

        {/* Outer luminous corona arc */}
        <circle
          cx="300"
          cy="300"
          r="190"
          stroke="url(#coronaGrad)"
          strokeWidth="3"
          filter="url(#moonRingGlow)"
        />

        {/* Bright crescent edge (Upper perimeter) */}
        <path
          d="M 110 300 A 190 190 0 0 1 490 300"
          stroke="url(#crescentSweep)"
          strokeWidth="2.5"
          filter="url(#moonRingGlow)"
        />

        {/* Concentric high-tech technical tick marks */}
        <circle
          cx="300"
          cy="300"
          r="186"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1"
          strokeDasharray="1 12"
        />

        {/* Dark Obsidian Moon Core Body */}
        <circle
          cx="300"
          cy="300"
          r="185"
          fill="url(#darkMoonCore)"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
        />

        {/* Inner concentric technical contour */}
        <circle
          cx="300"
          cy="300"
          r="140"
          stroke="rgba(255, 255, 255, 0.03)"
          strokeWidth="1"
        />
        <circle
          cx="300"
          cy="300"
          r="90"
          stroke="rgba(255, 255, 255, 0.04)"
          strokeWidth="1"
          strokeDasharray="3 7"
        />
        <circle
          cx="300"
          cy="300"
          r="40"
          stroke="rgba(255, 255, 255, 0.06)"
          strokeWidth="1"
        />

        {/* Core center dot */}
        <circle cx="300" cy="300" r="2" fill="rgba(255, 255, 255, 0.4)" />
      </svg>
    </div>
  );
}

