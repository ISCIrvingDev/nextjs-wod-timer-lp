"use client";

import { useTranslation } from "@/hooks/use-translation.hook";
import { Github, Twitter, Instagram, Mail, Facebook } from "lucide-react";

// * Images
import Image from 'next/image'
// import wodTimerLogo from "@/assets/wod-timer-logo.jpg";
import wodTimerLogo from "@/assets/wod-timer-logo.png";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src={wodTimerLogo} alt="WOD Timer Logo" className="w-8 h-8" />
              <span className="text-lg font-bold text-card-foreground">WOD Timer</span>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              {t('footerSubtitle')}
            </p>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">{t('footerSupport')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-secondary hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  {t('footerContact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  {t('footerPrivacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  {t('footerTerms')}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/WODTimer" target="_blank" rel="noopener external" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/WODTimer_" target="_blank" rel="noopener external" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              {/* <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-primary hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </a> */}
              {/* <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-primary hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </a> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-secondary text-sm">
            {t('footerCopyright')}
          </p>

          <p className="text-secondary text-sm">
            {t('footerIvinDev')} <span className="text-primary"><a href="https://ivin-dev.com/" target="_blank" rel="noopener external">Ivin Dev</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
