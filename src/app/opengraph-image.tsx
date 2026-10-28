import { ImageResponse } from "next/og";

export const alt = "Nexora AI — Intelligent Agents. Seamlessly Embedded.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          backgroundColor: "#000000",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 500,
              color: "#000000",
            }}
          >
            N
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontFamily: "monospace",
              color: "#a1a1aa",
              letterSpacing: "0.1em",
            }}
          >
            Nexora AI Platform
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 58,
            fontWeight: 500,
            color: "#ffffff",
            marginBottom: 20,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          <span>Intelligent Agents.</span>
          <span>Seamlessly Embedded.</span>
        </div>

        <div
          style={{
            width: 140,
            height: 2,
            backgroundColor: "#ffffff",
            marginBottom: 28,
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#a1a1aa",
            lineHeight: 1.5,
            maxWidth: 900,
          }}
        >
          Enterprise AI Agents Embedded in Digital Products, Workflows &amp; Customer Support
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 15,
            fontFamily: "monospace",
            color: "#71717a",
          }}
        >
          nexora-ai.example.com · Minimalist Black &amp; White Architecture
        </div>
      </div>
    ),
    { ...size }
  );
}
