"use client";

import { useTranslation } from "@/hooks/use-translation.hook";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Users, Palette } from "lucide-react";

const benefits = [
  {
    key: "benefit1",
    icon: Smartphone,
  },
  {
    key: "benefit2",
    icon: Users,
  },
  {
    key: "benefit3",
    icon: Palette,
  }
];

export function Benefits() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            {t('benefitsTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div key={benefit.key} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-button">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  {t(`${benefit.key}Title`)}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {t(`${benefit.key}Description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}