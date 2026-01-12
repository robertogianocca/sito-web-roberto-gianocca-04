import "./globals.css";
import Background from "@/components/Background/Background";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Background color="#456DFF" />
      <body>{children}</body>
    </html>
  );
}
