import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Hicham AGRAD, Cybersecurity Engineering Student";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B0D10",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(700px circle at 15% 15%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(600px circle at 90% 85%, rgba(6,182,212,0.2), transparent 60%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 26,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -0.5,
            marginBottom: 32,
          }}
        >
          HA<span style={{ color: "#3B82F6" }}>.</span>sec
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -1.5,
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 600,
            marginTop: 20,
            color: "#3B82F6",
          }}
        >
          Cybersecurity Engineering Student
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            marginTop: 28,
            color: "#B0B7C3",
            maxWidth: 780,
          }}
        >
          Offensive security · Secure software development · AI system security
        </div>
      </div>
    ),
    { ...size }
  );
}
