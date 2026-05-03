import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Mod Scheduler — Schedule Moderation Actions in Advance",
  description: "Pre-schedule bans, mutes, role changes, and announcements for your Discord server. Automate moderation with a powerful job queue dashboard."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f3ae5b83-5a84-4ee1-98c9-27719b5d5fb6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
