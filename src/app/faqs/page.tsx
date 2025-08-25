"use client";

// * Images
import Image from 'next/image'
import wodTimerLogo from "@/assets/wod-timer-logo.png";

// * App Components
import { LanguageSwitcher } from "@/components/ui/language-switcher";

// * Components
// import { Benefits } from "./_components/Benefits";

// * Hooks
import { useTranslation } from "@/hooks/use-translation.hook";
import Link from 'next/link';

export default function Faqs() {
  const { t, language, changeLanguage } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen bg-gradient-background flex flex-col">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
          <Link href="/" style={{ display: 'inline' }}>
            <div className="flex items-center gap-3">
              <Image src={wodTimerLogo} alt="WOD Timer Logo" className="w-10 h-10" />
              <span className="text-xl font-bold text-foreground">WOD Timer</span>
            </div>
          </Link>

          <LanguageSwitcher
            currentLanguage={language}
            onLanguageChange={(changeLanguage) as (language: string) => void}
          />
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-1 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {t('faqTitle')}
                </h1>

                {/* Last Updated */}
                <div className="text-sm text-secondary">{t('faqLastUpdated')}</div>

                {/* Questions */}
                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ1')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA1')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ2')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA2')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ3')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA3')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ4')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA4')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ5')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA5')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ6')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA6')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ7')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA7')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ8')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA8')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ9')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA9')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ10')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA10')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ11')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA11')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ12')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA12')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ13')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA13')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ14')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA14')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ15')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA15')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ16')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA16t1')}

                    <>
                      <span className='text-primary'>
                        <Link href="mailto:irving@ivin-dev.com?subject=WOD%20Timer:%20Request%20a%20feature&body=Please%20describe%20the%20bug%20or%20requested%20features..."
                          target="_blank" rel="noopener external">
                          irving@ivin-dev.com
                        </Link>
                      </span>
                    </>

                    {t('faqA16t2')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ17')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA17')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ18')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA18')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ19')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA19t1')}

                    <>
                      <span className='text-primary'>
                        <Link href="mailto:irving@ivin-dev.com?subject=WOD%20Timer:%20Request%20a%20feature&body=Please%20describe%20the%20privacy%20questions..."
                          target="_blank" rel="noopener external">
                          irving@ivin-dev.com
                        </Link>
                      </span>
                    </>

                    {t('faqA19t2')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('faqQ20')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('faqA20')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
