import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Globe, MessageSquare, Check, Copy, Code } from "lucide-react";

// Translation database
const translations = {
  pt: {
    subtitle: "Assistência Técnica de Software",
    badge: "Celulares & Computadores",
    bioPart1: "Especialista em soluções de software com foco em otimização, segurança e resolução de problemas para celulares e computadores.",
    bioPart2: "Com atendimento em três idiomas e suporte remoto, tenha sua solução sem sair de casa.",
    bioCta: "Faça um orçamento agora!",
    benefit1Title: "Atendimento 100% Remoto",
    benefit1Sub: "Brasil & Exterior",
    benefit2Title: "Suporte Multilíngue",
    benefit2Sub: "Português, English & Español",
    benefit3Title: "Orçamento Prévio",
    benefit3Sub: "Sem Compromisso",
    btnWhatsapp: "Solicitar Orçamento via WhatsApp",
    btnEmail: "Enviar um E-mail",
    footerText: "Pronto para atendimento remoto imediato"
  },
  en: {
    subtitle: "Software Technical Support",
    badge: "Phones & Computers",
    bioPart1: "Specialist in software solutions with a focus on optimization, security, and troubleshooting for phones and computers.",
    bioPart2: "With support in three languages and remote service, get your solution without leaving home.",
    bioCta: "Get an estimate now!",
    benefit1Title: "100% Remote Support",
    benefit1Sub: "Brazil & Abroad",
    benefit2Title: "Multilingual Support",
    benefit2Sub: "Português, English & Español",
    benefit3Title: "Prior Estimate",
    benefit3Sub: "No Obligation",
    btnWhatsapp: "Request Estimate via WhatsApp",
    btnEmail: "Send an Email",
    footerText: "Ready for immediate remote assistance"
  },
  es: {
    subtitle: "Soporte Técnico de Software",
    badge: "Celulares & Computadoras",
    bioPart1: "Especialista en soluciones de software con enfoque en optimización, seguridad y resolución de problemas para celulares y computadoras.",
    bioPart2: "Con soporte en tres idiomas y asistencia remota, obtenga su solución sin salir de casa.",
    bioCta: "¡Solicite un presupuesto ahora!",
    benefit1Title: "Soporte 100% Remoto",
    benefit1Sub: "Brasil y Extranjero",
    benefit2Title: "Soporte Multilingüe",
    benefit2Sub: "Português, English & Español",
    benefit3Title: "Presupuesto Previo",
    benefit3Sub: "Sin Compromiso",
    btnWhatsapp: "Solicitar Presupuesto por WhatsApp",
    btnEmail: "Enviar un Correo",
    footerText: "Listo para soporte remoto inmediato"
  }
};

export default function App() {
  const [lang, setLang] = useState<"pt" | "en" | "es">("pt");
  const [copied, setCopied] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);

  const rawHtmlCode = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ernesto Scheffer | Assistência de Software</title>
    <style>
        /* CSS Reset & Variáveis */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        :root {
            --bg-color: #0b0f19;
            --card-bg: rgba(17, 24, 39, 0.7);
            --card-border: rgba(255, 255, 255, 0.08);
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --text-muted: #64748b;
            --accent-primary: #10b981;
            --accent-hover: #059669;
            --accent-glow: rgba(16, 185, 129, 0.15);
            --secondary-bg: #1e293b;
            --secondary-hover: #334155;
            --transition-speed: 0.3s;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            line-height: 1.6;
            overflow-x: hidden;
            position: relative;
        }

        /* Fundo Limpo e Moderno */
        body::before {
            content: "";
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(0, 0, 0, 0) 75%);
            top: 15%;
            left: 50%;
            transform: translateX(-50%);
            z-index: -1;
            pointer-events: none;
        }

        /* Container Principal (Cartão) */
        .card {
            background-color: var(--card-bg);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid var(--card-border);
            border-radius: 24px;
            width: 100%;
            max-width: 440px;
            padding: 3rem 2.25rem 2.5rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
            text-align: center;
            animation: cardEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            transform: translateY(15px);
            position: relative;
        }

        @keyframes cardEntrance {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Seletor de Idiomas no Canto Superior Direito */
        .lang-selector {
            position: absolute;
            top: 1.25rem;
            right: 1.25rem;
            display: flex;
            gap: 0.35rem;
            z-index: 10;
        }

        .lang-btn {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            width: 28px;
            height: 28px;
            font-size: 0.95rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all var(--transition-speed) ease;
            padding: 0;
        }

        .lang-btn:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.15);
            transform: translateY(-1px);
        }

        .lang-btn.active {
            background: rgba(16, 185, 129, 0.15);
            border-color: rgba(16, 185, 129, 0.3);
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.1);
        }

        /* Avatar Minimalista */
        .avatar-container {
            position: relative;
            display: inline-flex;
            margin: 0.5rem auto 1.5rem;
        }

        .avatar {
            padding: 0.55rem 1.15rem;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            border: 1px solid var(--card-border);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 800;
            color: var(--accent-primary);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            letter-spacing: 0.05em;
        }

        .avatar sup {
            font-size: 0.65rem;
            margin-left: 3px;
            font-weight: 600;
            color: var(--text-secondary);
        }

        /* Textos */
        .title {
            font-size: 1.75rem;
            font-weight: 800;
            letter-spacing: -0.025em;
            color: var(--text-primary);
            margin-bottom: 0.35rem;
        }

        .subtitle {
            font-size: 0.95rem;
            color: var(--text-secondary);
            font-weight: 500;
            margin-bottom: 0.5rem;
        }

        .category-badge {
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--accent-primary);
            background-color: rgba(16, 185, 129, 0.08);
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            margin-bottom: 1.25rem;
            border: 1px solid rgba(16, 185, 129, 0.15);
        }

        /* Bio */
        .bio {
            font-size: 0.9rem;
            color: #cbd5e1;
            line-height: 1.6;
            margin: 1.5rem 0;
            text-align: center;
        }

        .bio-text {
            display: block;
            margin-bottom: 0.75rem;
            color: #f8fafc;
            font-weight: 600;
        }

        .bio-cta {
            display: block;
            color: #f8fafc;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            margin-top: 0.75rem;
        }

        /* Divisor Sutil */
        .divider {
            height: 1px;
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 100%);
            margin: 1.5rem 0;
        }

        /* Lista de Diferenciais */
        .benefits-list {
            list-style: none;
            text-align: left;
            margin-bottom: 2rem;
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
        }

        .benefit-item {
            display: flex;
            align-items: center;
            gap: 0.85rem;
            padding: 0.65rem 0.85rem;
            background-color: rgba(255, 255, 255, 0.015);
            border: 1px solid rgba(255, 255, 255, 0.02);
            border-radius: 12px;
            transition: all var(--transition-speed) ease;
        }

        .benefit-item:hover {
            background-color: rgba(255, 255, 255, 0.03);
            border-color: rgba(255, 255, 255, 0.05);
            transform: translateX(2px);
        }

        .benefit-icon {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            background-color: rgba(16, 185, 129, 0.08);
            border-radius: 8px;
            color: var(--accent-primary);
        }

        .benefit-icon svg {
            width: 15px;
            height: 15px;
        }

        .benefit-text-container {
            display: flex;
            flex-direction: column;
        }

        .benefit-title {
            font-size: 0.65rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-secondary);
            line-height: 1.2;
            margin-bottom: 0.1rem;
        }

        .benefit-subtitle {
            font-size: 0.8rem;
            font-weight: 600;
            color: #cbd5e1;
            line-height: 1.3;
        }

        /* Botões de Ação */
        .buttons-container {
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            width: 100%;
            padding: 1rem 1.5rem;
            border-radius: 14px;
            font-size: 0.95rem;
            font-weight: 600;
            text-decoration: none;
            transition: all var(--transition-speed) cubic-bezier(0.16, 1, 0.3, 1);
            cursor: pointer;
            outline: none;
        }

        .btn-primary {
            background-color: var(--accent-primary);
            color: #04100b;
            box-shadow: 0 4px 18px var(--accent-glow);
            border: none;
        }

        .btn-primary:hover {
            background-color: var(--accent-hover);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.25);
        }

        .btn-primary:active {
            transform: translateY(0);
        }

        .btn-secondary {
            background-color: var(--secondary-bg);
            color: var(--text-primary);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .btn-secondary:hover {
            background-color: var(--secondary-hover);
            border-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
        }

        .btn-secondary:active {
            transform: translateY(0);
        }

        /* Rodapé Focado em Conversão */
        .footer-note {
            margin-top: 1.5rem;
            font-size: 0.8rem;
            color: var(--text-muted);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.4rem;
        }

        .footer-dot {
            width: 6px;
            height: 6px;
            background-color: var(--accent-primary);
            border-radius: 50%;
        }

        /* SVG Icons Inline */
        .icon {
            width: 18px;
            height: 18px;
            fill: currentColor;
        }

        .icon-stroke {
            width: 18px;
            height: 18px;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
    </style>
</head>
<body>

    <div class="card">
        <!-- Seletor de Idiomas -->
        <div class="lang-selector">
            <button class="lang-btn active" data-lang="pt" title="Português">🇧🇷</button>
            <button class="lang-btn" data-lang="es" title="Español">🇪🇸</button>
            <button class="lang-btn" data-lang="en" title="English">🇺🇸</button>
        </div>

        <!-- Avatar Section -->
        <div class="avatar-container">
            <div class="avatar">SCHWANK <sup>LTDA</sup></div>
        </div>

        <!-- Header Info -->
        <h1 class="title">Ernesto Scheffer</h1>
        <p class="subtitle" data-i18n="subtitle">Assistência Técnica de Software</p>
        <span class="category-badge" data-i18n="badge">Celulares & Computadores</span>

        <!-- Bio Profissional -->
        <p class="bio">
            <span class="bio-text" data-i18n="bioPart1">Especialista em soluções de software com foco em otimização, segurança e resolução de problemas para celulares e computadores.</span>
            <span class="bio-text" data-i18n="bioPart2">Com atendimento em três idiomas e suporte remoto, tenha sua solução sem sair de casa.</span>
            <span class="bio-cta" data-i18n="bioCta">Faça um orçamento agora!</span>
        </p>

        <div class="divider"></div>

        <!-- Diferenciais / Benefícios -->
        <ul class="benefits-list">
            <li class="benefit-item">
                <span class="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                    </svg>
                </span>
                <div class="benefit-text-container">
                    <span class="benefit-title" data-i18n="benefit1Title">Atendimento 100% Remoto</span>
                    <span class="benefit-subtitle" data-i18n="benefit1Sub">Brasil & Exterior</span>
                </div>
            </li>
            <li class="benefit-item">
                <span class="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m5 8 6 6 6-6"/><path d="m4 14 6 6 8-8"/>
                    </svg>
                </span>
                <div class="benefit-text-container">
                    <span class="benefit-title" data-i18n="benefit2Title">Suporte Multilíngue</span>
                    <span class="benefit-subtitle" data-i18n="benefit2Sub">Português, English & Español</span>
                </div>
            </li>
            <li class="benefit-item">
                <span class="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                    </svg>
                </span>
                <div class="benefit-text-container">
                    <span class="benefit-title" data-i18n="benefit3Title">Orçamento Prévio</span>
                    <span class="benefit-subtitle" data-i18n="benefit3Sub">Sem Compromisso</span>
                </div>
            </li>
        </ul>

        <!-- Botões de Ação -->
        <div class="buttons-container">
            <!-- Botão WhatsApp -->
            <a href="#" class="btn btn-primary" id="btn-whatsapp">
                <svg class="icon" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.855.001-2.63-1.019-5.101-2.873-6.958C16.608 1.936 14.133 1.01 11.5 1.01c-5.44 0-9.866 4.418-9.869 9.856-.001 1.77.472 3.5 1.369 5.011L1.933 22l6.194-1.627-.212-.12c-1.577-.945-3.193-1.458-4.81-1.452zM17.16 14.3c-.27-.135-1.597-.788-1.846-.879-.25-.09-.431-.135-.613.135-.18.27-.7.879-.856 1.057-.158.18-.317.202-.587.067-.27-.135-1.139-.42-2.17-1.34-1.03-.92-1.7-2.055-1.9-2.325-.2-.34-.02-.524.15-.658.15-.12.33-.39.5-.58.17-.2.22-.34.33-.56.11-.23.06-.43-.03-.61-.09-.18-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.47-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.62 1.11 2.8c.14.18 1.93 2.94 4.67 4.13.65.28 1.16.45 1.56.58.66.21 1.25.18 1.73.11.53-.08 1.6-.65 1.82-1.28.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.52-.315z"/>
                </svg>
                <span id="txt-whatsapp" data-i18n="btnWhatsapp">Solicitar Orçamento via WhatsApp</span>
            </a>

            <!-- Botão E-mail -->
            <a href="mailto:seu-email@dominio.com" class="btn btn-secondary" id="btn-email">
                <svg class="icon-stroke" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span id="txt-email" data-i18n="btnEmail">Enviar um E-mail</span>
            </a>
        </div>

        <!-- Rodapé -->
        <div class="footer-note">
            <span class="footer-dot"></span>
            <span id="txt-footer" data-i18n="footerText">Pronto para atendimento remoto imediato</span>
        </div>
    </div>

    <!-- Tradução Logic -->
    <script>
        const translations = {
            pt: {
                subtitle: "Assistência Técnica de Software",
                badge: "Celulares & Computadores",
                bioPart1: "Especialista em soluções de software com foco em otimização, segurança e resolução de problemas para celulares e computadores.",
                bioPart2: "Com atendimento em três idiomas e suporte remoto, tenha sua solução sem sair de casa.",
                bioCta: "Faça um orçamento agora!",
                benefit1Title: "Atendimento 100% Remoto",
                benefit1Sub: "Brasil & Exterior",
                benefit2Title: "Suporte Multilíngue",
                benefit2Sub: "Português, English & Español",
                benefit3Title: "Orçamento Prévio",
                benefit3Sub: "Sem Compromisso",
                btnWhatsapp: "Solicitar Orçamento via WhatsApp",
                btnEmail: "Enviar um E-mail",
                footerText: "Pronto para atendimento remoto imediato"
            },
            en: {
                subtitle: "Software Technical Support",
                badge: "Phones & Computers",
                bioPart1: "Specialist in software solutions with a focus on optimization, security, and troubleshooting for phones and computers.",
                bioPart2: "With support in three languages and remote service, get your solution without leaving home.",
                bioCta: "Get an estimate now!",
                benefit1Title: "100% Remote Support",
                benefit1Sub: "Brazil & Abroad",
                benefit2Title: "Multilingual Support",
                benefit2Sub: "Português, English & Español",
                benefit3Title: "Prior Estimate",
                benefit3Sub: "No Obligation",
                btnWhatsapp: "Request Estimate via WhatsApp",
                btnEmail: "Send an Email",
                footerText: "Ready for immediate remote assistance"
            },
            es: {
                subtitle: "Soporte Técnico de Software",
                badge: "Celulares & Computadoras",
                bioPart1: "Especialista en soluciones de software con enfoque en optimización, seguridad y resolución de problemas para celulares y computadoras.",
                bioPart2: "Con soporte en tres idiomas y asistencia remota, obtenga su solución sin salir de casa.",
                bioCta: "¡Solicite un presupuesto ahora!",
                benefit1Title: "Soporte 100% Remoto",
                benefit1Sub: "Brasil y Extranjero",
                benefit2Title: "Soporte Multilingüe",
                benefit2Sub: "Português, English & Español",
                benefit3Title: "Presupuesto Previo",
                benefit3Sub: "Sin Compromiso",
                btnWhatsapp: "Solicitar Presupuesto por WhatsApp",
                btnEmail: "Enviar un Correo",
                footerText: "Listo para soporte remoto inmediato"
            }
        };

        const langBtns = document.querySelectorAll('.lang-btn');
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                langBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const lang = btn.getAttribute('data-lang');
                document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
                
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (translations[lang] && translations[lang][key]) {
                        el.innerText = translations[lang][key];
                    }
                });
            });
        });
    </script>
</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rawHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentTranslation = translations[lang];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Blur Spot */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md z-10 flex flex-col items-center">
        
        {/* Floating Code Export Button */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setShowCodeModal(true)}
            id="btn-view-code"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 text-xs font-medium text-slate-300 transition-all cursor-pointer shadow-lg hover:translate-y-[-1px]"
          >
            <Code className="w-3.5 h-3.5 text-emerald-400" />
            Ver Código HTML Pronto
          </button>
          
          <button
            onClick={copyToClipboard}
            id="btn-copy-fast"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 text-xs font-medium text-slate-300 transition-all cursor-pointer shadow-lg hover:translate-y-[-1px]"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-emerald-400" />
                Copiar HTML Completo
              </>
            )}
          </button>
        </div>

        {/* The Card Applet */}
        <motion.div
          id="virtual-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900/60 backdrop-blur-2xl border border-slate-800/80 rounded-[32px] p-8 md:p-10 shadow-2xl w-full text-center relative overflow-hidden pt-12"
        >
          {/* Subtle upper glow line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

          {/* Absolute Language Switcher */}
          <div className="absolute top-4 right-4 flex items-center gap-1">
            {(["pt", "es", "en"] as const).map((language) => (
              <button
                key={language}
                onClick={() => setLang(language)}
                className={`w-7 h-7 rounded-lg text-sm flex items-center justify-center transition-all cursor-pointer hover:bg-slate-800 border ${
                  lang === language 
                    ? "bg-emerald-500/10 border-emerald-500/30 text-white" 
                    : "bg-transparent border-transparent text-slate-400"
                }`}
                title={language === "pt" ? "Português" : language === "en" ? "English" : "Español"}
              >
                {language === "pt" ? "🇧🇷" : language === "en" ? "🇺🇸" : "🇪🇸"}
              </button>
            ))}
          </div>

          {/* Avatar */}
          <div className="relative inline-flex mx-auto mb-6">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="px-5 py-2.5 bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-800/80 rounded-xl flex items-center justify-center text-lg md:text-xl font-extrabold text-emerald-400 shadow-xl relative z-10 tracking-wider"
            >
              SCHWANK <sup className="text-[10px] md:text-[11px] text-slate-400 ml-1 font-bold">LTDA</sup>
            </motion.div>
          </div>

          {/* Identity Header */}
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2" id="card-name">
            Ernesto Scheffer
          </h1>
          
          <p className="text-slate-300 font-medium text-sm md:text-base leading-relaxed" id="card-sub-1">
            {currentTranslation.subtitle}
          </p>
          <div className="mt-1" id="card-sub-2">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              {currentTranslation.badge}
            </span>
          </div>

          {/* Professional Bio with Selected Language Translation */}
          <div className="mt-5 text-center px-1 space-y-2.5 text-xs md:text-sm leading-relaxed">
            <p className="text-slate-100 font-semibold">
              {currentTranslation.bioPart1}
            </p>
            <p className="text-slate-100 font-semibold">
              {currentTranslation.bioPart2}
            </p>
            <p className="text-white font-bold tracking-wider uppercase pt-1">
              {currentTranslation.bioCta}
            </p>
          </div>

          {/* Delicate Divider */}
          <div className="my-6 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

          {/* Premium Benefits List (No Emojis, Sleek SVG Icons) */}
          <div className="space-y-3 text-left mb-8" id="benefits-group">
            {[
              { 
                icon: <Globe className="w-4 h-4 text-emerald-400" />, 
                title: currentTranslation.benefit1Title, 
                subtitle: currentTranslation.benefit1Sub 
              },
              { 
                icon: <MessageSquare className="w-4 h-4 text-emerald-400" />, 
                title: currentTranslation.benefit2Title, 
                subtitle: currentTranslation.benefit2Sub 
              },
              { 
                icon: <Check className="w-4 h-4 text-emerald-400" />, 
                title: currentTranslation.benefit3Title, 
                subtitle: currentTranslation.benefit3Sub 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 2, backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.01] border border-white/[0.015] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-none mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-200">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="space-y-3" id="cta-group">
            <motion.a
              href="#"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              id="cta-whatsapp"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 bg-emerald-500 text-slate-950 font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 hover:bg-emerald-400 text-sm md:text-base cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              {currentTranslation.btnWhatsapp}
            </motion.a>

            <motion.a
              href="mailto:seu-email@dominio.com"
              whileHover={{ scale: 1.01, backgroundColor: "rgba(30, 41, 59, 0.9)" }}
              whileTap={{ scale: 0.99 }}
              id="cta-email"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 bg-slate-800 border border-slate-700/50 text-white font-semibold rounded-2xl transition-all text-sm md:text-base cursor-pointer hover:border-slate-600"
            >
              <Mail className="w-4 h-4" />
              {currentTranslation.btnEmail}
            </motion.a>
          </div>

          {/* Clean trust / status indicator footer */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{currentTranslation.footerText}</span>
          </div>
        </motion.div>

        {/* Minimal Copyright */}
        <p className="mt-6 text-xs text-slate-600 font-mono tracking-wider">
          © {new Date().getFullYear()} Ernesto Scheffer. All rights reserved.
        </p>
      </div>

      {/* Code Export Drawer / Modal */}
      <AnimatePresence>
        {showCodeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl"
              id="code-modal"
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    <Code className="w-5 h-5 text-emerald-400" />
                    Código index.html Standalone
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    100% autossuficiente, sem dependências externas. Pronto para o GitHub Pages.
                  </p>
                </div>
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold px-1">✕</span>
                </button>
              </div>

              {/* Modal Code Viewer */}
              <div className="p-4 bg-[#05070c] overflow-y-auto flex-1 font-mono text-xs text-slate-300 leading-relaxed max-h-[50vh]">
                <pre className="whitespace-pre-wrap select-all">
                  {rawHtmlCode}
                </pre>
              </div>

              {/* Modal Actions */}
              <div className="p-5 border-t border-slate-800 bg-slate-900/50 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Código formatado com recuo de 4 espaços.</span>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={copyToClipboard}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copiar Todo o Código
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
