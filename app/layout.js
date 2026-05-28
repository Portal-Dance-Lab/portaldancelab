import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.portaldancelab.com"),
  title: {
    default: "Portal Dance Lab — Richmond, TX | Where Champions Are Made",
    template: "%s | Portal Dance Lab",
  },
  description:
    "11x National Champions. Competitive and recreational dance training for all ages in Richmond, TX. Hip hop, ballet, contemporary, jazz, drill team prep, and adult classes. Book your free first class today.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.portaldancelab.com",
    siteName: "Portal Dance Lab",
    title: "Portal Dance Lab — Richmond, TX | Where Champions Are Made",
    description:
      "11x National Champions. Competitive dance training in Richmond, TX. Book your free trial class today.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portal Dance Lab — Richmond, TX competitive dance studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal Dance Lab — Richmond, TX",
    description:
      "11x National Champions. Book your free trial class today.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
