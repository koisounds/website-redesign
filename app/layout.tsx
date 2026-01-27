import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Galotti | Cloud & DevSecOps Engineer",
  description:
    "Portfolio of Alex Galotti, a Cloud & DevSecOps Engineer automating secure, compliant cloud platforms.",
  openGraph: {
    title: "Alex Galotti | Cloud & DevSecOps Engineer",
    description:
      "DevSecOps / Cloud Engineer focused on automation, cloud security, and infrastructure-as-code.",
    url: "https://example.com",
    siteName: "Alex Galotti Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-bg text-text selection:bg-accent-primary/30 font-sans antialiased overflow-x-hidden">
        <div className="dither-overlay" />
        {children}
      </body>
    </html>
  );
}
