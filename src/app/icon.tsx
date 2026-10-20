import { ImageResponse } from "next/og";
import { StaticMonogram } from "@/components/Monogram";

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
        <StaticMonogram width={52} color="#ffffff" />
      </div>
    ),
    { ...size }
  );
}
