"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { Download, Play } from "lucide-react";

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-gradient-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('ctaTitle')}
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          {t('ctaSubtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="download"
            size="xl"
            className="bg-white text-primary hover:bg-white/90 hover:text-primary-dark group shadow-xl"
          >
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
            {t('downloadGoogle')}
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="border-white text-white hover:bg-white hover:text-primary group"
          >
            <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
            {t('downloadApple')}
          </Button>
        </div>
      </div>
    </section>
  );
}