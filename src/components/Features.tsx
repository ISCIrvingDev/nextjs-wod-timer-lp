"use client";

import { useTranslation } from "@/hooks/use-translation.hook";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Repeat, Target, Zap } from "lucide-react";

const features = [
  {
    key: "amrap",
    icon: Target,
    color: "text-primary"
  },
  {
    key: "emom",
    icon: Timer,
    color: "text-primary"
  },
  {
    key: "rft",
    icon: Repeat,
    color: "text-primary"
  },
  {
    key: "tabata",
    icon: Zap,
    color: "text-primary"
  }
];

export function Features() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('featuresTitle')}
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Choose the perfect timer mode for your CrossFit workout and push your limits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.key} className="bg-card border-border shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground">
                    {t(`${feature.key}Title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-secondary">
                    {t(`${feature.key}Description`)}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}