import "./globals.css";
import { Inter, JetBrains_Mono, Nunito_Sans, Roboto } from "next/font/google";
import Background from "@/components/Background/Background";

export const metadata = {
  title: "",
  description: "",
};

// Configure the font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jet-brains",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrains.variable} ${nunitoSans.variable} ${roboto.variable} antialiased text-custom-white-base text-sm font-roboto `}
      >
        <Background color="#456DFF" />
        {children}
      </body>
    </html>
  );
}
