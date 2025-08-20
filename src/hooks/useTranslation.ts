"use client";

import { useState, useCallback } from "react";

export interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

const translations: Translations = {
  // Hero Section
  heroTitle: {
    en: "The Ultimate Timer for Your CrossFit Workouts",
    es: "El Temporizador Definitivo para tus Entrenamientos de CrossFit",
  },
  heroSubtitle: {
    en: "Train harder, train smarter with a timer designed for WODs",
    es: "Entrena más fuerte, entrena más inteligente con un timer diseñado para WODs",
  },
  downloadGoogle: {
    en: "Download on Google Play",
    es: "Descargar en Google Play",
  },
  downloadApple: {
    en: "Download on App Store",
    es: "Descargar en App Store",
  },

  // Features Section
  featuresTitle: {
    en: "Workout Modes",
    es: "Modalidades de Entrenamiento",
  },
  amrapTitle: {
    en: "AMRAP",
    es: "AMRAP",
  },
  amrapDescription: {
    en: "As Many Reps As Possible - Push your limits in the given time",
    es: "Tantas Repeticiones Como Sea Posible - Supera tus límites en el tiempo dado",
  },
  emomTitle: {
    en: "EMOM",
    es: "EMOM",
  },
  emomDescription: {
    en: "Every Minute On the Minute - Structured interval training",
    es: "Cada Minuto en el Minuto - Entrenamiento de intervalos estructurado",
  },
  rftTitle: {
    en: "RFT",
    es: "RFT",
  },
  rftDescription: {
    en: "Rounds For Time - Complete prescribed rounds as fast as possible",
    es: "Rondas por Tiempo - Completa las rondas prescritas lo más rápido posible",
  },
  tabataTitle: {
    en: "Tabata",
    es: "Tabata",
  },
  tabataDescription: {
    en: "High-intensity interval training with 20s work, 10s rest",
    es: "Entrenamiento de intervalos de alta intensidad con 20s trabajo, 10s descanso",
  },

  // Benefits Section
  benefitsTitle: {
    en: "Why Choose WOD Timer?",
    es: "¿Por Qué Elegir WOD Timer?",
  },
  benefit1Title: {
    en: "Simple to Use",
    es: "Fácil de Usar",
  },
  benefit1Description: {
    en: "Intuitive interface designed for athletes in action",
    es: "Interfaz intuitiva diseñada para atletas en acción",
  },
  benefit2Title: {
    en: "All Levels",
    es: "Todos los Niveles",
  },
  benefit2Description: {
    en: "Perfect for beginners and elite CrossFit athletes",
    es: "Perfecto para principiantes y atletas de CrossFit élite",
  },
  benefit3Title: {
    en: "Clean Design",
    es: "Diseño Limpio",
  },
  benefit3Description: {
    en: "Focused design that eliminates distractions during workouts",
    es: "Diseño enfocado que elimina distracciones durante los entrenamientos",
  },

  // Testimonials Section
  testimonialsTitle: {
    en: "What Athletes Say",
    es: "Lo Que Dicen los Atletas",
  },
  testimonial1: {
    en: "WOD Timer has completely transformed my training sessions. The EMOM feature is perfect for my strength workouts!",
    es: "WOD Timer ha transformado completamente mis sesiones de entrenamiento. ¡La función EMOM es perfecta para mis entrenamientos de fuerza!",
  },
  testimonial2: {
    en: "As a CrossFit coach, I recommend WOD Timer to all my athletes. It's reliable, simple, and exactly what we need.",
    es: "Como entrenador de CrossFit, recomiendo WOD Timer a todos mis atletas. Es confiable, simple y exactamente lo que necesitamos.",
  },
  testimonial3: {
    en: "The Tabata timer is incredibly accurate. I've seen real improvements in my conditioning since using this app.",
    es: "El temporizador Tabata es increíblemente preciso. He visto mejoras reales en mi acondicionamiento desde que uso esta app.",
  },

  // CTA Section
  ctaTitle: {
    en: "Take Your Training to the Next Level",
    es: "Lleva tu Entrenamiento al Siguiente Nivel",
  },
  ctaSubtitle: {
    en: "Join thousands of athletes who trust WOD Timer for their daily workouts",
    es: "Únete a miles de atletas que confían en WOD Timer para sus entrenamientos diarios",
  },

  // Footer
  footerSupport: {
    en: "Support",
    es: "Soporte",
  },
  footerContact: {
    en: "Contact",
    es: "Contacto",
  },
  footerPrivacy: {
    en: "Privacy Policy",
    es: "Política de Privacidad",
  },
  footerTerms: {
    en: "Terms of Service",
    es: "Términos de Servicio",
  },
  footerCopyright: {
    en: "© 2024 WOD Timer. All rights reserved.",
    es: "© 2024 WOD Timer. Todos los derechos reservados.",
  },
};

export function useTranslation() {
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

  return {
    t,
    language,
    changeLanguage,
  };
}
