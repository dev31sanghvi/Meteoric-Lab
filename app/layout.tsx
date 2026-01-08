import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transform Your Fitness Expertise Into a Thriving Business",
  description: "We help fitness, nutrition, yoga, and biohacking coaches monetize their expertise through proven systems. 30-60 days to launch, 100% ROI guarantee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
