// app/providers.js
"use client";

// * Providers
import { TooltipProvider } from "@/components/ui/tooltip";
import { TranslationProvider } from "./translation.provider";

export function AppProviders({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TranslationProvider>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </TranslationProvider>
  );
}