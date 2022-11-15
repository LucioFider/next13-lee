import "../styles/globals.css";
import { Comfortaa } from "@next/font/google";

const sand = Comfortaa();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sand.className}>{children}</body>
    </html>
  );
}
