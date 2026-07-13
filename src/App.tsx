import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Phone, Mail, Globe, MessageSquare, Check, Home, Zap } from "lucide-react";
// @ts-expect-error - image asset
import bgImage from "./assets/images/dark_chrome_bg_1782688407983.jpg";

// Translation database
const translations = {
  pt: {
    subtitle: "Assistência Técnica de Software",
    badge: "Celulares & Computadores",
    bioPart1: "Especialista em soluções de software com foco em otimização, segurança e resolução de problemas para celulares e computadores.",
    benefitHomeTitle: "Atendimento em Domicílio",
    benefitHomeSub: "Zona Sul do Rio de Janeiro",
    benefitSosTitle: "SOS - Pronto Atendimento",
    benefitSosSub: "Leblon - Ipanema - Copacabana",
    benefit1Title: "Suporte Remoto",
    benefit1Sub: "Brasil & Exterior",
    benefit2Title: "Atendimento Multilíngue",
    benefit2Sub: "Português, Inglês e Espanhol",
    benefit3Title: "Orçamento Gratuito",
    benefit3Sub: "Sem Compromisso",
    btnWhatsapp: "Solicitar Orçamento via WhatsApp",
    btnEmail: "Enviar um E-mail",
    footerText: "",
    whatsappUrl: "https://wa.me/5521990046651?text=Olá%2C+gostaria+de+solicitar+um+orçamento+de+suporte+técnico%21"
  },
  es: {
    subtitle: "Soporte Técnico de Software",
    badge: "Celulares & Computadoras",
    bioPart1: "Especialista en soluciones de software con enfoque en optimización, segurança y resolución de problemas para celulares y computadoras.",
    benefitHomeTitle: "Atención a Domicilio",
    benefitHomeSub: "Zona Sur de Río de Janeiro",
    benefitSosTitle: "SOS - Atención Inmediata",
    benefitSosSub: "Leblon - Ipanema - Copacabana",
    benefit1Title: "Soporte Remoto",
    benefit1Sub: "Brasil & Extranjero",
    benefit2Title: "Atención Multilingüe",
    benefit2Sub: "Portugués, Inglés y Español",
    benefit3Title: "Presupuesto Gratis",
    benefit3Sub: "Sin Compromiso",
    btnWhatsapp: "Solicitar Presupuesto por WhatsApp",
    btnEmail: "Enviar un Correo",
    footerText: "",
    whatsappUrl: "https://wa.me/5521990046651?text=Hola%2C+me+gustaria+solicitar+un+presupuesto+de+soporte+tecnico%21"
  },
  en: {
    subtitle: "Software Technical Support",
    badge: "Phones & Computers",
    bioPart1: "Specialist in software solutions with a focus on optimization, security, and troubleshooting for phones and computers.",
    benefitHomeTitle: "In-Home Support",
    benefitHomeSub: "South Zone of Rio de Janeiro",
    benefitSosTitle: "SOS - Urgent Support",
    benefitSosSub: "Leblon - Ipanema - Copacabana",
    benefit1Title: "Remote Support",
    benefit1Sub: "Brazil & Abroad",
    benefit2Title: "Multilingual Service",
    benefit2Sub: "Portuguese, English and Spanish",
    benefit3Title: "Free Estimate",
    benefit3Sub: "No Attachments",
    btnWhatsapp: "Request Estimate via WhatsApp",
    btnEmail: "Send an Email",
    footerText: "",
    whatsappUrl: "https://wa.me/5521990046651?text=Hello%2C+I+would+like+to+request+a+technical+support+estimate%21"
  }
};

export default function App() {
  const [lang, setLang] = useState<"pt" | "en" | "es">("pt");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    try {
      const saved = localStorage.getItem("glass-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {
      // Fail silently
    }
    return "dark";
  });

  useEffect(() => {
    // Auto-detect browser language if available
    try {
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "es") {
        setLang("es");
      } else if (browserLang === "en") {
        setLang("en");
      }
    } catch (e) {
      // Fail silently
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("glass-theme", theme);
    } catch (e) {
      // Fail silently
    }
  }, [theme]);

  const currentTranslation = translations[lang];

  return (
    <div 
      className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden transition-colors duration-500"
    >
      {/* Floating Theme Toggle */}
      <button 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 z-50 glass w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl cursor-pointer shadow-lg hover:scale-110 active:scale-95 transition-all border border-[var(--glass-border)]"
        title={theme === "dark" ? "Alternar para modo claro" : "Alternar para modo escuro"}
      >
        <span>{theme === "dark" ? "☀️" : "🌙"}</span>
      </button>

      {/* Liquid Glass Background Ambient Scene Blobs */}
      <div className="scene" aria-hidden="true">
        <div className="scene__blob scene__blob--1"></div>
        <div className="scene__blob scene__blob--2"></div>
        <div className="scene__blob scene__blob--3"></div>
      </div>

      {/* Background Image layer with transition */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 pointer-events-none"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          opacity: theme === "dark" ? 1 : 0.05
        }}
      />

      {/* Dark overlay to ensure ultimate readability and rich moodiness */}
      <div 
        className="absolute inset-0 bg-black transition-opacity duration-500 pointer-events-none" 
        style={{
          opacity: theme === "dark" ? 0.55 : 0.0
        }}
      />

      {/* Main Container */}
      <div className="w-full max-w-md z-10 flex flex-col items-center">
        
        {/* The Card Applet with Soft bevelled border, highlights, inner shadows, and high-depth frosted effect */}
        <motion.div
          id="virtual-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass glass-card px-5 py-8 sm:px-8 md:p-10 w-full text-center relative overflow-hidden"
        >
          {/* Subtle upper glow line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-aqua)]/20 to-transparent" />

          {/* Centered Language Switcher at the Top */}
          <div className="flex justify-center items-center gap-2.5 mb-6" id="lang-switcher">
            {(["pt", "es", "en"] as const).map((language) => (
              <button
                key={language}
                onClick={() => setLang(language)}
                className={`w-11 h-11 rounded-2xl text-xl flex items-center justify-center transition-all cursor-pointer border ${
                  lang === language 
                    ? "bg-[var(--glass-white-md)] border-[var(--glass-border-bright)] text-[var(--color-text)] shadow-[0_0_12px_rgba(255,255,255,0.15)]" 
                    : "bg-white/5 border-[var(--glass-border-subtle)] text-[var(--color-text-subtle)] hover:bg-[var(--glass-white-md)]"
                }`}
                title={language === "pt" ? "Português" : language === "en" ? "English" : "Español"}
              >
                {language === "pt" ? "🇧🇷" : language === "en" ? "🇺🇸" : "🇪🇸"}
              </button>
            ))}
          </div>

          {/* Identity Header */}
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-text)] mb-2.5" id="card-name">
            Ernesto Scheffer
          </h1>
          
          <p className="text-[var(--color-text-muted)] font-medium text-base md:text-lg leading-relaxed" id="card-sub-1">
            {currentTranslation.subtitle}
          </p>
          <div className="mt-2.5" id="card-sub-2">
            <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full glass-badge-aqua">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {currentTranslation.badge}
            </span>
          </div>

          {/* Professional Bio with Selected Language Translation */}
          <div className="mt-6 text-center px-1 space-y-2.5 text-sm md:text-base leading-relaxed">
            <p className="text-[var(--color-text)] font-semibold">
              {currentTranslation.bioPart1}
            </p>
          </div>

          {/* Delicate Divider */}
          <div className="my-6 h-[1px] bg-gradient-to-r from-transparent via-[#6392ab]/25 to-transparent" />

          {/* Premium Benefits List (No Emojis, Sleek SVG Icons) */}
          <div className="space-y-3.5 text-left mb-6" id="benefits-group">
            {[
              { 
                icon: <Home className="w-5 h-5" />, 
                title: currentTranslation.benefitHomeTitle, 
                subtitle: currentTranslation.benefitHomeSub 
              },
              { 
                icon: <Zap className="w-5 h-5" />, 
                title: currentTranslation.benefitSosTitle, 
                subtitle: currentTranslation.benefitSosSub 
              },
              { 
                icon: <Globe className="w-5 h-5" />, 
                title: currentTranslation.benefit1Title, 
                subtitle: currentTranslation.benefit1Sub 
              },
              { 
                icon: <MessageSquare className="w-5 h-5" />, 
                title: currentTranslation.benefit2Title, 
                subtitle: currentTranslation.benefit2Sub 
              },
              { 
                icon: <Check className="w-5 h-5" />, 
                title: currentTranslation.benefit3Title, 
                subtitle: currentTranslation.benefit3Sub 
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--glass-white)] border border-[var(--glass-border-subtle)]"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border icon-container-aqua">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] opacity-80 leading-none mb-1">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-[var(--color-text)]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Delicate Divider before CTA */}
          <div className="my-6 h-[1px] bg-gradient-to-r from-transparent via-[#6392ab]/25 to-transparent" />

          {/* Action CTAs */}
          <div className="space-y-4" id="cta-group">
            <motion.a
              href={currentTranslation.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              id="cta-whatsapp"
              className="glass-btn glass-btn-whatsapp flex items-center justify-center gap-2 w-full py-4.5 px-4 sm:px-6 font-bold rounded-2xl text-[14px] min-[360px]:text-base sm:text-lg md:text-xl cursor-pointer whitespace-nowrap overflow-hidden"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current flex-shrink-0" />
              <span>{currentTranslation.btnWhatsapp}</span>
            </motion.a>

            <motion.a
              href="mailto:contato@scheffer.help"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              id="cta-email"
              className="glass-btn glass-btn-ghost flex items-center justify-center gap-2 w-full py-4.5 px-4 sm:px-6 text-[var(--color-text)] font-bold rounded-2xl text-[14px] min-[360px]:text-base sm:text-lg md:text-xl cursor-pointer whitespace-nowrap overflow-hidden"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span>{currentTranslation.btnEmail}</span>
            </motion.a>
          </div>

          {/* Clean trust / status indicator footer */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs md:text-sm text-[var(--color-text-muted)] font-medium">
            <span 
              className="w-2.5 h-2.5 rounded-full animate-pulse" 
              style={{ backgroundColor: "var(--accent-aqua)" }}
            />
            <span>{currentTranslation.footerText}</span>
          </div>
        </motion.div>

        {/* Minimal Copyright */}
        <p className="mt-6 text-xs text-[var(--color-text-subtle)] opacity-60 font-mono tracking-wider">
          © {new Date().getFullYear()} Ernesto Scheffer. All rights reserved.
        </p>
      </div>

    </div>
  );
}
