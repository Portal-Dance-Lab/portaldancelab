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
  title: "Portal Dance Lab — Richmond, TX | Where Champions Are Made",
  description:
    "11x National Champions. Competitive and recreational dance training for all ages in Richmond, TX. Hip hop, ballet, contemporary, jazz, drill team prep, and adult classes. Book your free first class today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
