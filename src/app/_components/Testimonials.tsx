"use client";

import { useTranslation } from "@/hooks/use-translation.hook";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    key: "testimonial1",
    author: "Sarah Chen",
    role: "CrossFit Athlete",
    avatar: "👩‍💼"
  },
  {
    key: "testimonial2",
    author: "Mike Rodriguez",
    role: "CrossFit Coach",
    avatar: "👨‍🏫"
  },
  {
    key: "testimonial3",
    author: "Emily Johnson",
    role: "Fitness Enthusiast",
    avatar: "👩‍🦰"
  }
];

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('testimonialsTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.key} className="bg-card border-border shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-center text-secondary mb-6 leading-relaxed">
                  &quot;{t(testimonial.key)}&quot;
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="text-4xl mb-2">{testimonial.avatar}</div>
                  <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                  <div className="text-sm text-secondary">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}