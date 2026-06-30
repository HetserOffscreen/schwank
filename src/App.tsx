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
    bioPart1: "Especialista em soluções de software com foco em optimização, segurança e resolução de problemas para celulares e computadores.",
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
    whatsappUrl: "https://wa.me/5521936180050?text=Olá%2C+gostaria+de+solicitar+um+orçamento+de+suporte+técnico%21"
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
    whatsappUrl: "https://wa.me/5521936180050?text=Hola%2C+me+gustaria+solicitar+un+presupuesto+de+soporte+tecnico%21"
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
    whatsappUrl: "https://wa.me/5521936180050?text=Hello%2C+I+would+like+to+request+a+technical+support+estimate%21"
  }
};

export default function App() {
  const [lang, setLang] = useState<"pt" | "en" | "es">("pt");

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

  const currentTranslation = translations[lang];

  return (
    <div 
      className="min-h-screen bg-[#06080b] text-slate-100 font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay to ensure ultimate readability and rich moodiness */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* Decorative Blur Spot */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md z-10 flex flex-col items-center">
        
        {/* The Card Applet */}
        <motion.div
          id="virtual-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-black/30 backdrop-blur-3xl border border-white/10 rounded-[32px] px-5 py-8 sm:px-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_1px_2px_rgba(255,255,255,0.05),0_25px_50px_-12px_rgba(0,0,0,0.7)] w-full text-center relative overflow-hidden"
        >
          {/* Subtle upper glow line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

          {/* Centered Language Switcher at the Top */}
          <div className="flex justify-center items-center gap-2.5 mb-6" id="lang-switcher">
            {(["pt", "es", "en"] as const).map((language) => (
              <button
                key={language}
                onClick={() => setLang(language)}
                className={`w-10 h-10 rounded-xl text-lg flex items-center justify-center transition-all cursor-pointer hover:bg-slate-800/80 border ${
                  lang === language 
                    ? "bg-emerald-500/20 border-emerald-500/40 text-white shadow-sm" 
                    : "bg-white/5 border-white/5 text-slate-400"
                }`}
                title={language === "pt" ? "Português" : language === "en" ? "English" : "Español"}
              >
                {language === "pt" ? "🇧🇷" : language === "en" ? "🇺🇸" : "🇪🇸"}
              </button>
            ))}
          </div>

          {/* Identity Header */}
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2.5" id="card-name">
            Ernesto Scheffer
          </h1>
          
          <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed" id="card-sub-1">
            {currentTranslation.subtitle}
          </p>
          <div className="mt-2" id="card-sub-2">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full">
              {currentTranslation.badge}
            </span>
          </div>

          {/* Professional Bio with Selected Language Translation */}
          <div className="mt-6 text-center px-1 space-y-2.5 text-sm md:text-base leading-relaxed">
            <p className="text-slate-100 font-semibold">
              {currentTranslation.bioPart1}
            </p>
          </div>

          {/* Delicate Divider */}
          <div className="my-6 h-[1px] bg-gradient-to-r from-transparent via-[#6392ab]/25 to-transparent" />

          {/* Premium Benefits List (No Emojis, Sleek SVG Icons) */}
          <div className="space-y-3.5 text-left mb-6" id="benefits-group">
            {[
              { 
                icon: <Home className="w-5 h-5 text-emerald-400" />, 
                title: currentTranslation.benefitHomeTitle, 
                subtitle: currentTranslation.benefitHomeSub 
              },
              { 
                icon: <Zap className="w-5 h-5 text-emerald-400" />, 
                title: currentTranslation.benefitSosTitle, 
                subtitle: currentTranslation.benefitSosSub 
              },
              { 
                icon: <Globe className="w-5 h-5 text-emerald-400" />, 
                title: currentTranslation.benefit1Title, 
                subtitle: currentTranslation.benefit1Sub 
              },
              { 
                icon: <MessageSquare className="w-5 h-5 text-emerald-400" />, 
                title: currentTranslation.benefit2Title, 
                subtitle: currentTranslation.benefit2Sub 
              },
              { 
                icon: <Check className="w-5 h-5 text-emerald-400" />, 
                title: currentTranslation.benefit3Title, 
                subtitle: currentTranslation.benefit3Sub 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 2, backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.01] border border-white/[0.015] transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-slate-400 leading-none mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-semibold text-slate-200">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Delicate Divider before CTA */}
          <div className="my-6 h-[1px] bg-gradient-to-r from-transparent via-[#6392ab]/25 to-transparent" />

          {/* Action CTAs */}
          <div className="space-y-3.5" id="cta-group">
            <motion.a
              href={currentTranslation.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              id="cta-whatsapp"
              className="flex items-center justify-center gap-1.5 sm:gap-2.5 w-full py-4 px-3 sm:px-6 bg-emerald-500 text-slate-950 font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 hover:bg-emerald-400 text-[13px] min-[360px]:text-sm sm:text-base md:text-lg cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-current flex-shrink-0" />
              <span>{currentTranslation.btnWhatsapp}</span>
            </motion.a>

            <motion.a
              href="mailto:contato@scheffer.help"
              whileHover={{ scale: 1.01, backgroundColor: "rgba(30, 41, 59, 0.9)" }}
              whileTap={{ scale: 0.99 }}
              id="cta-email"
              className="flex items-center justify-center gap-1.5 sm:gap-2.5 w-full py-4 px-3 sm:px-6 bg-slate-800 border border-slate-700/50 text-white font-bold rounded-2xl transition-all text-[13px] min-[360px]:text-sm sm:text-base md:text-lg cursor-pointer hover:border-slate-600 whitespace-nowrap"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>{currentTranslation.btnEmail}</span>
            </motion.a>
          </div>

          {/* Clean trust / status indicator footer */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs md:text-sm text-slate-400 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{currentTranslation.footerText}</span>
          </div>
        </motion.div>

        {/* Minimal Copyright */}
        <p className="mt-6 text-xs text-slate-600 font-mono tracking-wider">
          © {new Date().getFullYear()} Ernesto Scheffer. All rights reserved.
        </p>
      </div>

    </div>
  );
}
