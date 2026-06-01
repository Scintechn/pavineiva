import { ImageResponse } from "next/og";
import { defaultLocale, getDictionary, isLocale } from "@/lib/i18n";
import { business } from "@/lib/business";

export const alt = "PAVINEIVA — Pré-fabricados de Betão desde 1978";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const t = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #1d3557 0%, #152744 60%, #0f1d34 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: -0.5,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 6,
              background: "rgba(244,154,50,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              color: "#f8b25a",
            }}
          >
            P
          </div>
          PAVINEIVA
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 22,
              color: "#f8b25a",
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {t.home.heroEyebrow}
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            {t.home.heroTitle}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 500,
            }}
          >
            {business.registeredOffice.locality} ·{" "}
            {business.registeredOffice.region} · {business.registeredOffice.countryName}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
