import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dalienst Owino Oduor | Systems Architect & Software Engineer | Founder, Corban Technologies LTD",
  description:
    "Personal portfolio of Dalienst Owino Oduor — Founder, Managing Director & Lead Software Engineer at Corban Technologies LTD. Systems architect specializing in mission-critical core banking, applied AI analytics, and high-throughput telecom platforms.",
  keywords: [
    "Dalienst Owino Oduor",
    "Corban Technologies LTD",
    "Systems Architect Kenya",
    "Software Engineer Mombasa Nairobi",
    "SACCO Core Banking",
    "Wananchi Mali",
    "Manna Books",
    "Meta WhatsApp Cloud API Kenya",
    "Tamarind Enterprise Solutions",
  ],
  authors: [{ name: "Dalienst Owino Oduor", url: "https://www.dalienst.co.ke" }],
  creator: "Dalienst Owino Oduor",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Dalienst Owino Oduor | Systems Architect & Software Engineer",
    description:
      "Founder, Managing Director & Lead Software Engineer at Corban Technologies LTD. Architecting cloud-native banking, applied AI tools, and enterprise platforms across East Africa.",
    url: "https://www.dalienst.co.ke",
    siteName: "Dalienst Owino Oduor",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased selection:bg-[#eb8a0c] selection:text-white">
        {children}
      </body>
    </html>
  );
}
