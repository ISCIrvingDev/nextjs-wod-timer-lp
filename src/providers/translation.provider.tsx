"use-client";

import { createContext, useState, useCallback, ReactNode } from "react";
import { translations } from "@/constants/app-translations";

interface TranslationContextType {
  language: "en" | "es";
  t: (key: string) => string;
  changeLanguage: (newLanguage: "en" | "es") => void;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const t = useCallback(
    (key: string): string => {
      return translations[key]?.[language] || key;
    },
    [language]
  );

  const changeLanguage = useCallback((newLanguage: "en" | "es") => {
    setLanguage(newLanguage);
  }, []);

  const value = {
    language,
    t,
    changeLanguage,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}