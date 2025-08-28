"use client";

// * Images
import Image from 'next/image'
import wodTimerLogo from "@/assets/wod-timer-logo.png";

// * App Components
import { LanguageSwitcher } from "@/components/ui/language-switcher";

// * Links
import Link from 'next/link';

// * Hooks
import { useTranslation } from "@/hooks/use-translation.hook";

export function PrivacyComponent() {
  const { t, language, changeLanguage } = useTranslation();

  return (
    <>
      {/* Navigation */}
      < nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full" >
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
      </nav >

      {/* Terms and Conditions Sections */}
      < div className="flex-1 flex items-center justify-center px-6" >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-1 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('privacyTitle')}
              </h1>

              {/* Last Updated */}
              <div className="text-sm text-secondary">{t('privacyLastUpdated')}</div>

              {/* Terms and Conditions */}
              <div>
                <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                  {t('privacyTitle1')}
                </p>
                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy1')}
                </p>
              </div>

              <div>
                <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                  {t('privacyTitle2')}
                </p>

                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy2t1')}
                </p>

                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy2t2')}

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

              <div>
                <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                  {t('privacyTitle3')}
                </p>

                <div className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  <p>
                    <b>{t('privacy3i1')}: </b> {t('privacy3i1t')}
                  </p>

                  <p>
                    <b>{t('privacy3i2')}: </b> {t('privacy3i2t')}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                  {t('privacyTitle4')}
                </p>
                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy4')}
                </p>
              </div>

              <div>
                <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                  {t('privacyTitle5')}
                </p>
                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy5')}
                </p>
              </div>

              <div>
                <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                  {t('privacyTitle6')}
                </p>
                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy6')}
                </p>
              </div>

              <div>
                <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                  {t('privacyTitle7')}
                </p>
                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy7')}
                </p>
              </div>

              <div>
                <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                  {t('privacyTitle8')}
                </p>
                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy8')}
                </p>
              </div>

              <div>
                <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                  {t('privacyTitle9')}
                </p>

                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy9t1')}
                </p>

                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy9t2')}
                </p>

                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy9t3')}
                </p>

                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy9t4')}
                </p>

                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy9t5')}
                </p>

                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy9t6')}

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

              <div>
                <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                  {t('privacyTitle10')}
                </p>
                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy10')}
                </p>
              </div>

              <div>
                <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                  {t('privacyTitle11')}
                </p>
                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy11')}
                </p>
              </div>

              <div>
                <p className="text-xl font-bold max-w-2xl mx-auto lg:mx-0">
                  {t('privacyTitle12')}
                </p>
                <p className="text-lg text-secondary max-w-2xl mx-auto lg:mx-0">
                  {t('privacy12')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}