"use client";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useTranslation } from "@/hooks/use-translation.hook";
import { Download, Play } from "lucide-react";

// * Images
import Image from 'next/image'
// import wodTimerLogo from "../assets/wod-timer-logo.jpg";
import wodTimerLogo from "@/assets/wod-timer-logo.png";
import appMockup from "@/assets/app-mockup.jpg";

export function Hero() {
  const { t, language, changeLanguage } = useTranslation();

  return (
    <section className="relative min-h-screen bg-gradient-background flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <Image src={wodTimerLogo} alt="WOD Timer Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-foreground">WOD Timer</span>
        </div>

        <LanguageSwitcher
          currentLanguage={language}
          onLanguageChange={(changeLanguage) as (language: string) => void}
        />
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('heroTitle')}
              </h1>
              <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto lg:mx-0">
                {t('heroSubtitle')}
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {t('downloadGoogle')}
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {t('downloadApple')}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-secondary">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-secondary">App Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-secondary">Workouts Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column - App Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-75"></div>
              <Image
                src={appMockup}
                alt="WOD Timer App Mockup"
                className="relative z-10 w-80 md:w-96 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}