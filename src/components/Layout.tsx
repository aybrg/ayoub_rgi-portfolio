import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { CursorGlow } from "./CursorGlow";
import { profile } from "@/data/portfolioData";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grain relative min-h-screen overflow-x-clip bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <main>{children}</main>
      <footer className="border-t border-border/60 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with intent — Casablanca, Morocco</span>
        </div>
      </footer>
    </div>
  );
}
