import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const siteName = "ObraLink.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const description = "Venta de materiales de construcción, iluminación, electricidad, seguridad, domótica, aire acondicionado, piedras, aluminio y vidrios. Alianzas con arquitectos, ingenieros e inmobiliarias.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} Materiales y soluciones para tu proyecto`,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    description,
    siteName,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}