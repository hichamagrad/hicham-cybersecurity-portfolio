import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0D10",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -1,
          }}
        >
          HA<span style={{ color: "#3B82F6" }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
