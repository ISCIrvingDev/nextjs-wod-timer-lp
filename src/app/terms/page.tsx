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

export default function Terms() {
  const { t, language, changeLanguage } = useTranslation();

  return (
    <div className="min-h-screen bg-background mb-8">
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

        {/* Terms and Conditions Sections */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-1 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {t('termsTitle')}
                </h1>

                {/* Last Updated */}
                <div className="text-sm text-secondary">{t('termsLastUpdated')}</div>

                {/* Terms and Conditions */}
                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle1')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term1')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle2')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term2')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle3')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term3')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle4')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term4')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle5')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term5')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle6')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term6')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle7')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term7')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle8')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term8')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle9')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term9')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle10')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term10')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle11')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term11')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle12')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term12')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle13')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term13')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle14')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term14')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle15')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term15')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle16')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term16')}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                    {t('termTitle17')}
                  </p>
                  <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                    {t('term17')}

                    <>
                      <span className='text-primary'>
                        <Link href="mailto:irving@ivin-dev.com?subject=WOD%20Timer:%20Terms%20and%20Conditions"
                          target="_blank" rel="noopener external">
                          irving@ivin-dev.com
                        </Link>
                      </span>
                    </>
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
