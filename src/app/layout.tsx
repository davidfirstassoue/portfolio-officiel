import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David | Développeur Full-Stack & UI/UX Designer",
  description: "Portfolio de David, développeur Full-Stack et UI/UX designer spécialisé dans la création d'applications web modernes et performantes.",
  keywords: ["David", "Portfolio", "Développeur Web", "Next.js", "React", "TypeScript", "Full-Stack", "UI/UX Designer"],
  authors: [{ name: "David" }],
  openGraph: {
    title: "David | Développeur Full-Stack & UI/UX Designer",
    description: "Découvrez mes réalisations, mes compétences et mon parcours de développeur web.",
    type: "website",
    locale: "fr_FR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="dark">
      <body>
        <div className="glow-spot glow-primary" />
        <div className="glow-spot glow-secondary" />
        {children}
      </body>
    </html>
  );
}
