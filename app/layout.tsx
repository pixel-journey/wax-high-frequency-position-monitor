import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'A quote age, not a monitor',
  description: 'Fresh at 30 seconds, stale at 31. Nothing is polled.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
