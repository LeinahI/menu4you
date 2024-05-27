import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"] });

export const metadata = {
  title: "Menu 4 You",
  description:
    "Come in and see where every cup is a masterpiece of flavor. Enjoy our meticulously crafted coffees, from bold richness to velvety smoothness, complemented by delectable sweet offerings. Experience perfection in every sip.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cinzel.className}>{children}</body>
    </html>
  );
}
