import { useState } from "react";

const approachTags = [
  "ISO 14001",
  "NR-10",
  "NR-12",
  "NR-35",
  "CONAMA 237",
  "Lei 6.938/81",
  "PCMSO",
  "PGR",
  "eSocial",
  "PNRS",
  "ANTT 5.232",
  "ISO 45001",
];

const companyLogoSrc = new URL("./assets/logo.jpg", import.meta.url).href;
const heroScreenImageSrc = "";

const steps = [
  {
    number: "01",
    title: "Levantamento legal aplicável",
    description:
      "Identificamos leis, normas, licenças e obrigações regulatórias aplicáveis ao segmento, unidade e operação da empresa.",
  },
  {
    number: "02",
    title: "Enquadramento por processo",
    description:
      "Relacionamos cada requisito às atividades, áreas responsáveis, riscos e evidências exigidas para garantir clareza operacional.",
  },
  {
    number: "03",
    title: "Avaliação de atendimento",
    description:
      "A equipe responde avaliações, acompanha pendências, anexa evidências e registra o status de conformidade de cada obrigação.",
  },
  {
    number: "04",
    title: "Planos de ação e relatórios",
    description:
      "Dashboards intuitivos e relatórios detalhados orientam prioridades, reduzem exposição legal e sustentam auditorias e decisões.",
  },
];

const stepHighlights = [
  ["Mapeamento por segmento", "Leis, licencas e normas", "Base inicial estruturada"],
  ["Vinculo com processos", "Responsaveis definidos", "Risco e evidencia por area"],
  ["Rotina de atendimento", "Pendencias acompanhadas", "Status de conformidade visivel"],
  ["Plano de acao claro", "Prioridades executivas", "Relatorios para auditoria"],
];

const benefits = [
  {
    title: "Controle de obrigações legais",
    description:
      "Monitore prazos, condicionantes, normas e requisitos críticos com uma visão centralizada e acionável.",
    scene: "legal",
  },
  {
    title: "Evidências organizadas",
    description:
      "Centralize documentos, registros, licenças, laudos e comprovações em uma estrutura pronta para consulta e auditoria.",
    scene: "evidence",
  },
  {
    title: "Painéis intuitivos",
    description:
      "Visualize rapidamente o panorama da conformidade legal com indicadores claros, leitura executiva e foco em prioridade.",
    scene: "dashboard",
  },
  {
    title: "Alertas e vencimentos",
    description:
      "Receba alertas sobre prazos, atualizações legais, documentos vencendo e atividades críticas antes que virem passivos.",
    scene: "alerts",
  },
  {
    title: "Relatórios detalhados",
    description:
      "Gere relatórios gerenciais e evidências para auditorias, clientes, lideranças e processos de certificação.",
    scene: "reports",
  },
];

const sectors = [
  {
    title: "Meio Ambiente",
    description: "Licenças, condicionantes, requisitos ambientais e monitoramentos obrigatórios.",
  },
  {
    title: "Saúde Ocupacional",
    description: "Programas ocupacionais, exames, laudos e controles de medicina do trabalho.",
  },
  {
    title: "Segurança do Trabalho",
    description: "Normas regulamentadoras, treinamentos, inspeções e gestão documental de SST.",
  },
  {
    title: "Transporte e Logística",
    description: "Requisitos para operações logísticas, transporte, cargas e produtos controlados.",
  },
  {
    title: "Qualidade e Certificações",
    description: "Padronização, evidências, auditorias e suporte a processos de certificação.",
  },
  {
    title: "Requisitos Personalizados",
    description: "Estruture categorias conforme unidade, segmento, contrato ou exigência específica.",
  },
];

function renderBenefitVisual(scene: string) {
  return (
    <div className={`benefit-scene benefit-scene-${scene}`} aria-hidden="true">
      <span className="benefit-scene-glow" />
      <span className="benefit-scene-card benefit-scene-card-a" />
      <span className="benefit-scene-card benefit-scene-card-b" />
      <span className="benefit-scene-card benefit-scene-card-c" />
      <span className="benefit-scene-chip benefit-scene-chip-a" />
      <span className="benefit-scene-chip benefit-scene-chip-b" />
      <span className="benefit-scene-chip benefit-scene-chip-c" />
    </div>
  );
}

const styles = `
  :root {
    color-scheme: dark;
    --bg: #1b0711;
    --bg-soft: rgba(53, 17, 24, 0.72);
    --panel: rgba(54, 16, 24, 0.78);
    --panel-strong: rgba(43, 12, 19, 0.96);
    --line: rgba(214, 163, 87, 0.18);
    --line-strong: rgba(214, 163, 87, 0.36);
    --text: #f7eee6;
    --muted: #d8beb1;
    --primary: #d5a14f;
    --primary-strong: #b67a2f;
    --accent: #f0cf93;
    --shadow: 0 30px 80px rgba(0, 0, 0, 0.34);
    --radius-xl: 32px;
    --radius-lg: 24px;
    --radius-md: 18px;
    --container: 1180px;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background:
      radial-gradient(circle at top left, rgba(166, 42, 74, 0.26), transparent 30%),
      radial-gradient(circle at top right, rgba(137, 22, 44, 0.28), transparent 32%),
      linear-gradient(180deg, #2a0a14 0%, #4a0f20 42%, #1a0710 100%);
    color: var(--text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .landing-shell {
    min-height: 100vh;
    overflow-x: hidden;
  }

  .container {
    width: min(calc(100% - 32px), var(--container));
    margin: 0 auto;
  }

  .section {
    padding: 88px 0;
  }

  .section-header {
    max-width: 720px;
    margin-bottom: 34px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(95, 30, 45, 0.42);
    color: #f2d6ba;
    font-size: 0.88rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .badge::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--primary));
    box-shadow: 0 0 20px rgba(213, 161, 79, 0.65);
  }

  .kicker {
    margin: 0 0 12px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.84rem;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  .title-xl {
    font-size: clamp(2.45rem, 5.2vw, 4.7rem);
    line-height: 0.92;
    letter-spacing: -0.05em;
    max-width: 10ch;
  }

  .title-lg {
    font-size: clamp(2rem, 4.2vw, 3.5rem);
    line-height: 1.02;
    letter-spacing: -0.04em;
  }

  .lead {
    margin-top: 16px;
    color: var(--muted);
    font-size: clamp(0.94rem, 1.15vw, 1rem);
    line-height: 1.64;
    max-width: 54ch;
  }

  .hero {
    position: relative;
    min-height: 100svh;
    padding: 16px 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 70% 18%, rgba(215, 161, 79, 0.1), transparent 26%),
      repeating-linear-gradient(
        60deg,
        rgba(214, 163, 87, 0.08) 0,
        rgba(214, 163, 87, 0.08) 2px,
        transparent 2px,
        transparent 126px
      ),
      repeating-linear-gradient(
        -60deg,
        rgba(214, 163, 87, 0.08) 0,
        rgba(214, 163, 87, 0.08) 2px,
        transparent 2px,
        transparent 126px
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 22%);
    opacity: 0.65;
    pointer-events: none;
  }

  .hero::after {
    content: "";
    position: absolute;
    inset: auto -12% 12% auto;
    width: 52vw;
    height: 52vw;
    max-width: 740px;
    max-height: 740px;
    background: radial-gradient(circle, rgba(122, 19, 41, 0.22), transparent 62%);
    pointer-events: none;
    filter: blur(18px);
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 8px 0 16px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  .brand-mark {
    width: 46px;
    height: 46px;
    border-radius: 16px;
    display: grid;
    place-items: center;
    overflow: hidden;
    background: linear-gradient(145deg, rgba(213, 161, 79, 0.3), rgba(123, 26, 43, 0.12));
    border: 1px solid var(--line);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }

  .brand-mark img,
  .hero-sidebar-badge img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 18px;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .nav-links a:hover {
    color: var(--text);
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nav-button {
    min-height: 40px;
    padding: 0 16px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.92rem;
    font-weight: 600;
    border: 1px solid transparent;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  .nav-button:hover {
    transform: translateY(-1px);
  }

  .nav-button-secondary {
    color: var(--text);
    border-color: var(--line);
    background: rgba(95, 30, 45, 0.22);
  }

  .nav-button-primary {
    color: #2a0d10;
    background: linear-gradient(135deg, var(--primary), var(--primary-strong));
    box-shadow: 0 14px 32px rgba(182, 122, 47, 0.22);
  }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.98fr) minmax(300px, 0.8fr);
    gap: clamp(14px, 2vw, 22px);
    align-items: center;
    flex: 1;
    min-height: 0;
    padding-top: 2px;
  }

  .hero-copy,
  .hero-art,
  .ticker,
  .process-flow,
  .showcase-stage,
  .sector-list,
  .contact-grid,
  .footer {
    position: relative;
    z-index: 1;
  }

  .hero-copy {
    padding: 6px 0 0;
  }

  .hero-copy strong {
    background: linear-gradient(135deg, #fff7f0, #f0cf93 55%, #c78739 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 22px;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: 0 20px;
    border-radius: 999px;
    border: 1px solid transparent;
    font-weight: 600;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  .button:hover {
    transform: translateY(-1px);
  }

  .button-primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-strong));
    color: #2a0d10;
    box-shadow: 0 18px 40px rgba(182, 122, 47, 0.28);
  }

  .button-secondary {
    border-color: var(--line);
    background: rgba(95, 30, 45, 0.28);
    color: var(--text);
  }

  .hero-note {
    margin-top: 18px;
    color: #e5cdbf;
    font-size: 0.95rem;
  }

  .hero-art {
    position: relative;
    min-height: clamp(340px, 48vh, 470px);
    display: grid;
    place-items: center;
    padding: 8px 8px 0;
    overflow: hidden;
  }

  .hero-art::before {
    content: "";
    position: absolute;
    inset: 8% 5% 16%;
    border-radius: 28px;
    border: 1px solid rgba(214, 163, 87, 0.12);
    background:
      radial-gradient(circle at top right, rgba(213, 161, 79, 0.08), transparent 30%),
      linear-gradient(180deg, rgba(88, 18, 33, 0.48), rgba(40, 9, 18, 0.42));
    box-shadow: var(--shadow);
  }

  .hero-monitor {
    position: relative;
    width: min(100%, 440px);
    z-index: 1;
  }

  .hero-monitor-frame {
    position: relative;
    padding: 12px;
    border-radius: 22px;
    background: linear-gradient(180deg, #2c1118 0%, #13060a 100%);
    border: 1px solid rgba(214, 163, 87, 0.16);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.34);
  }

  .hero-monitor-bezel {
    overflow: hidden;
    border-radius: 16px;
    background: #17060c;
    border: 1px solid rgba(214, 163, 87, 0.08);
  }

  .hero-monitor-topbar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 10px 14px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01));
    border-bottom: 1px solid rgba(214, 163, 87, 0.08);
  }

  .hero-monitor-dots {
    display: flex;
    gap: 8px;
  }

  .hero-monitor-dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(240, 207, 147, 0.56);
  }

  .hero-screen {
    display: grid;
    grid-template-columns: 80px minmax(0, 1fr);
    min-height: 256px;
    background:
      linear-gradient(180deg, rgba(123, 22, 43, 0.18), transparent 28%),
      linear-gradient(180deg, #24070f 0%, #18050b 100%);
  }

  .hero-sidebar {
    padding: 12px 10px;
    border-right: 1px solid rgba(214, 163, 87, 0.08);
    background: rgba(255, 255, 255, 0.02);
  }

  .hero-sidebar-badge {
    height: 38px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    overflow: hidden;
    margin-bottom: 12px;
    color: #f0cf93;
    font-weight: 700;
    background: linear-gradient(135deg, rgba(213, 161, 79, 0.18), rgba(106, 18, 36, 0.12));
    border: 1px solid rgba(214, 163, 87, 0.14);
  }

  .hero-sidebar-item {
    height: 10px;
    margin-bottom: 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.1);
  }

  .hero-sidebar-item:nth-child(3) {
    width: 82%;
  }

  .hero-sidebar-item:nth-child(4) {
    width: 70%;
  }

  .hero-sidebar-item:nth-child(5) {
    width: 88%;
  }

  .hero-screen-main {
    padding: 14px;
    display: grid;
    gap: 10px;
  }

  .hero-system-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .hero-system-title {
    color: #f6e7d6;
    font-size: 0.9rem;
    font-weight: 700;
  }

  .hero-system-preview {
    position: relative;
    min-height: 132px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px dashed rgba(214, 163, 87, 0.24);
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.04), transparent 52%),
      linear-gradient(180deg, rgba(84, 21, 34, 0.68), rgba(37, 10, 17, 0.9));
  }

  .hero-system-preview::before {
    content: "";
    position: absolute;
    inset: 10px;
    border-radius: 12px;
    border: 1px solid rgba(214, 163, 87, 0.12);
    background:
      linear-gradient(90deg, rgba(214, 163, 87, 0.08) 0, rgba(214, 163, 87, 0.08) 1px, transparent 1px, transparent 56px),
      linear-gradient(180deg, rgba(214, 163, 87, 0.08) 0, rgba(214, 163, 87, 0.08) 1px, transparent 1px, transparent 56px);
    background-size: 44px 44px;
  }

  .hero-system-image {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  .hero-system-panels {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 10px;
  }

  .hero-system-card {
    padding: 12px;
    border-radius: 14px;
    border: 1px solid rgba(214, 163, 87, 0.1);
    background: rgba(255, 255, 255, 0.03);
  }

  .hero-system-card strong {
    display: block;
    color: #f4dec7;
    font-size: 0.88rem;
    margin-bottom: 6px;
  }

  .hero-system-card span {
    display: block;
    color: #d8beb1;
    font-size: 0.8rem;
    line-height: 1.45;
  }

  .hero-system-lines {
    display: grid;
    gap: 8px;
  }

  .hero-system-lines span {
    display: block;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
  }

  .hero-system-lines span:nth-child(2) {
    width: 84%;
  }

  .hero-system-lines span:nth-child(3) {
    width: 68%;
  }

  .hero-monitor-stand {
    position: relative;
    width: 130px;
    height: 14px;
    margin: 0 auto;
    background: linear-gradient(180deg, rgba(73, 28, 36, 0.94), rgba(20, 7, 11, 0.98));
    border-radius: 0 0 20px 20px;
  }

  .hero-monitor-stand::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 100%;
    width: 28px;
    height: 24px;
    transform: translateX(-50%);
    background: linear-gradient(180deg, rgba(73, 28, 36, 0.94), rgba(20, 7, 11, 0.98));
    border-radius: 0 0 12px 12px;
  }

  .hero-monitor-base {
    width: 176px;
    height: 10px;
    margin: 8px auto 0;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(73, 28, 36, 0.84), rgba(12, 4, 7, 0.96));
    box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);
  }

  .ticker {
    margin-top: 8px;
    overflow: hidden;
    padding: 8px 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.02);
  }

  .ticker-track {
    display: flex;
    width: max-content;
    gap: 16px;
    color: #ebd7c6;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.84rem;
    animation: ticker-move 24s linear infinite;
  }

  .ticker-item {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    white-space: nowrap;
  }

  .ticker-item::after {
    content: "+";
    color: var(--accent);
  }

  @keyframes ticker-move {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .contact-card,
  .contact-form,
  .showcase-panel,
  .process-step {
    border-radius: var(--radius-lg);
    border: 1px solid var(--line);
    background: var(--panel);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  }

  .method-transition {
    display: flex;
    align-items: center;
    gap: 0;
    margin-bottom: 24px;
  }

  .method-transition::before,
  .method-transition::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.72), transparent);
    box-shadow: 0 0 14px rgba(255, 255, 255, 0.18);
  }

  .method-intro {
    display: block;
    margin-bottom: 18px;
  }

  .method-header {
    margin-bottom: 0;
  }

  .method-section {
    background: #fbf8f4;
    color: #241715;
    padding: 58px 0 66px;
  }

  .method-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 22px;
    align-items: start;
  }

  .method-intro {
    max-width: 920px;
    margin: 0 auto 10px;
  }

  .method-header {
    text-align: center;
  }

  .method-header .title-lg {
    max-width: 34ch;
    margin-left: auto;
    margin-right: auto;
    color: #241715;
    font-size: clamp(1.5rem, 1.95vw, 2.05rem);
    line-height: 1.08;
    text-wrap: balance;
  }

  .method-header .lead {
    color: #5b4b45;
    max-width: 42ch;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.98rem;
    line-height: 1.42;
  }

  .method-showcase {
    position: relative;
    display: grid;
    grid-template-columns: 82px minmax(0, 1fr);
    gap: 14px;
    padding: 22px 24px 18px;
    max-width: 960px;
    margin: 0 auto;
    border-radius: 32px;
    border: 1px solid rgba(214, 163, 87, 0.08);
    background:
      radial-gradient(circle at top right, rgba(213, 161, 79, 0.1), transparent 24%),
      linear-gradient(135deg, rgba(21, 6, 12, 0.98), rgba(61, 10, 28, 0.96));
    box-shadow:
      0 30px 60px rgba(7, 2, 4, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.03);
    overflow: hidden;
  }

  .method-showcase::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.08) 0.7px, transparent 0.7px);
    background-size: 22px 22px;
    opacity: 0.12;
    pointer-events: none;
  }

  .method-showcase::after {
    content: "";
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 18px;
    height: 74px;
    border-radius: 18px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.06));
    opacity: 0.38;
    pointer-events: none;
  }

  .method-showcase-nav,
  .method-showcase-stage {
    position: relative;
    z-index: 1;
  }

  .method-showcase-nav {
    display: grid;
    gap: 2px;
    align-content: center;
    align-self: center;
    min-height: 100%;
    padding: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
  }

  .method-showcase-tab {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2px;
    align-items: center;
    padding: 6px 6px 6px 8px;
    border-radius: 0;
    border: 0;
    background: transparent;
    color: inherit;
    text-align: left;
    position: relative;
    transition: opacity 0.22s ease, transform 0.22s ease;
    opacity: 0.42;
  }

  .method-showcase-tab:hover,
  .method-showcase-tab-active {
    opacity: 1;
    transform: translateX(2px);
  }

  .method-showcase-tab::before {
    content: "";
    position: absolute;
    left: -1px;
    top: 50%;
    width: 2px;
    height: calc(100% - 10px);
    border-radius: 999px;
    background: transparent;
    transform: translateY(-50%);
    transition: background 0.22s ease, box-shadow 0.22s ease;
  }

  .method-showcase-tab-active::before {
    background: linear-gradient(180deg, rgba(240, 207, 147, 0.98), rgba(213, 161, 79, 0.92));
    box-shadow: 0 0 18px rgba(213, 161, 79, 0.28);
  }

  .method-showcase-tab-copy strong,
  .method-showcase-tab-copy small {
    display: block;
  }

  .method-showcase-tab-copy strong {
    font-size: 0.56rem;
    line-height: 1.02;
    color: #f8ede4;
  }

  .method-showcase-tab-copy small {
    margin-top: 2px;
    color: rgba(226, 212, 203, 0.34);
    font-size: 0.34rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .method-showcase-stage {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.58fr);
    grid-template-areas:
      "copy visual"
      "footer footer";
    gap: 20px;
    align-items: center;
    padding-top: 6px;
  }

  .method-showcase-copy {
    grid-area: copy;
    color: #fff6ee;
  }

  .method-showcase-kicker { display: none; }

  .method-showcase-step {
    display: grid;
    gap: 6px;
    margin-top: 0;
  }

  .method-showcase-step strong {
    font-size: clamp(1.8rem, 2.7vw, 2.5rem);
    line-height: 1;
    letter-spacing: -0.04em;
    max-width: 14ch;
    color: #fff6ee;
  }

  .method-showcase-description {
    margin-top: 12px;
    color: #e6d0c3;
    font-size: 0.94rem;
    line-height: 1.64;
    max-width: 44ch;
  }

  .method-showcase-points {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
  }

  .method-showcase-point {
    padding: 8px 12px;
    border-radius: 999px;
    border: 1px solid rgba(214, 163, 87, 0.14);
    background: rgba(255, 255, 255, 0.03);
    color: #f3e5d8;
    font-size: 0.8rem;
  }

  .method-showcase-visual {
    grid-area: visual;
    position: relative;
    min-height: 250px;
    border-radius: 26px;
    overflow: hidden;
    background:
      radial-gradient(circle at top right, rgba(213, 161, 79, 0.16), transparent 22%),
      linear-gradient(180deg, rgba(73, 12, 29, 0.68), rgba(21, 6, 12, 0.96));
    border: 1px solid rgba(214, 163, 87, 0.08);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  }

  .method-showcase-screen,
  .method-showcase-card,
  .method-showcase-orb {
    position: absolute;
  }

  .method-showcase-screen {
    inset: 18px 18px 62px 18px;
    padding: 18px;
    border-radius: 24px;
    background:
      linear-gradient(180deg, rgba(16, 8, 12, 0.24), rgba(16, 8, 12, 0.62)),
      rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .method-showcase-screen-badge {
    display: inline-flex;
    padding: 7px 10px;
    border-radius: 999px;
    background: rgba(213, 161, 79, 0.12);
    color: #f0cf93;
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .method-showcase-screen strong {
    display: block;
    margin-top: 14px;
    font-size: 1.18rem;
    line-height: 1.08;
    color: #fff6ee;
    max-width: 11ch;
  }

  .method-showcase-lines {
    display: grid;
    gap: 8px;
    margin-top: 12px;
  }

  .method-showcase-lines span {
    display: block;
    height: 6px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
  }

  .method-showcase-lines span:nth-child(2) {
    width: 82%;
  }

  .method-showcase-lines span:nth-child(3) {
    width: 68%;
  }

  .method-showcase-card {
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255, 248, 242, 0.98), rgba(241, 230, 220, 0.94));
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.16);
  }

  .method-showcase-card-a {
    width: 74px;
    height: 102px;
    left: 18px;
    bottom: 18px;
    transform: rotate(-10deg);
  }

  .method-showcase-card-b {
    width: 88px;
    height: 112px;
    left: 54px;
    bottom: 12px;
    opacity: 0.92;
    transform: rotate(6deg);
  }

  .method-showcase-card-c {
    width: 58px;
    height: 58px;
    right: 14px;
    top: 14px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(213, 161, 79, 0.98), rgba(181, 101, 37, 0.92));
  }

  .method-showcase-orb {
    width: 92px;
    height: 92px;
    right: -10px;
    bottom: -12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(130, 17, 43, 0.34), transparent 68%);
    filter: blur(8px);
  }

  .method-showcase-stage-02 .method-showcase-card-a {
    width: 82px;
    height: 120px;
    left: 22px;
    bottom: 16px;
    transform: rotate(-7deg);
  }

  .method-showcase-stage-02 .method-showcase-card-b {
    width: 98px;
    height: 130px;
    left: 62px;
    bottom: 10px;
  }

  .method-showcase-stage-03 .method-showcase-card-a,
  .method-showcase-stage-03 .method-showcase-card-b {
    background: linear-gradient(180deg, rgba(8, 18, 36, 0.96), rgba(5, 10, 21, 0.96));
  }

  .method-showcase-stage-03 .method-showcase-card-c {
    background: conic-gradient(from 90deg, rgba(226, 178, 97, 0.94), rgba(103, 63, 209, 0.92), rgba(41, 195, 162, 0.92), rgba(226, 178, 97, 0.94));
  }

  .method-showcase-stage-04 .method-showcase-card-a {
    width: 88px;
    height: 118px;
    left: 18px;
    bottom: 16px;
    background: linear-gradient(180deg, rgba(255, 248, 242, 0.98), rgba(241, 230, 220, 0.98));
  }

  .method-showcase-stage-04 .method-showcase-card-b {
    width: 74px;
    height: 40px;
    left: 26px;
    bottom: 20px;
    background: linear-gradient(180deg, rgba(88, 17, 33, 0.88), rgba(36, 11, 17, 0.96));
  }

  .method-showcase-footer {
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;
    min-height: 74px;
    padding: 14px 16px;
    border-radius: 18px;
    border: 1px solid rgba(214, 163, 87, 0.05);
    background: transparent;
  }

  .method-showcase-footer p {
    display: none;
  }

  .method-showcase-progress {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .method-showcase-progress span {
    width: 34px;
    height: 6px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
    transition: width 0.24s ease, background 0.24s ease;
  }

  .method-showcase-progress-active {
    width: 56px !important;
    background: linear-gradient(90deg, rgba(240, 207, 147, 0.98), rgba(213, 161, 79, 0.92)) !important;
  }

  .benefits-section {
    background: #fbf8f4;
    color: #241715;
    padding: 64px 0 72px;
  }

  .benefits-section .kicker {
    color: #8f5b26;
  }

  .benefits-top {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: 28px;
    align-items: start;
  }

  .benefits-header {
    max-width: 100%;
    margin-bottom: 0;
    padding-top: 14px;
  }

  .benefits-header .title-lg {
    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 1.02;
    max-width: 12ch;
    color: #241715;
  }

  .benefits-header .lead {
    color: #5b4b45;
    max-width: 46ch;
  }

  .showcase-stage {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
    align-items: stretch;
  }

  .showcase-panel {
    position: relative;
    width: 100%;
    min-height: 390px;
    padding: 0;
    overflow: hidden;
    border-radius: 30px;
    border: none;
    background: transparent;
    box-shadow: 0 18px 38px rgba(58, 28, 18, 0.12);
    cursor: pointer;
    transform-origin: center center;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    transition:
      transform 0.26s ease,
      min-height 0.32s ease,
      box-shadow 0.32s ease,
      border-color 0.28s ease;
    z-index: 2;
  }

  .showcase-panel::before {
    content: none;
  }

  .showcase-panel:hover {
    transform: translateY(-8px) scale(1.015);
    box-shadow:
      0 30px 58px rgba(58, 28, 18, 0.2),
      0 0 0 1px rgba(255, 240, 221, 0.12);
  }

  .showcase-panel:hover .benefit-scene {
    transform: scale(1.04);
    filter: blur(6px) saturate(1.04) brightness(0.94);
  }

  .showcase-panel:hover .benefit-scene::before {
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.12), transparent 34%),
      linear-gradient(180deg, rgba(33, 18, 24, 0.02) 0%, rgba(33, 18, 24, 0.14) 46%, rgba(16, 8, 12, 0.34) 100%);
  }

  .showcase-index,
  .benefit-index {
    position: absolute;
    top: 18px;
    left: 18px;
    z-index: 3;
    color: rgba(255, 244, 228, 0.88);
    font-size: 0.9rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-shadow: 0 8px 18px rgba(0, 0, 0, 0.24);
  }

  .showcase-copy {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
    padding: 18px 16px 16px;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.56);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 0.86) 100%);
    box-shadow:
      0 18px 34px rgba(58, 28, 18, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.26s ease, transform 0.26s ease;
    pointer-events: none;
  }

  .showcase-panel-dashboard .showcase-copy {
    border-color: rgba(255, 255, 255, 0.74);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.95) 100%);
    box-shadow:
      0 18px 34px rgba(34, 17, 20, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .showcase-panel:hover .showcase-copy {
    opacity: 1;
    transform: translateY(0);
  }

  .showcase-title {
    position: relative;
    z-index: 1;
    color: #2b1714;
    font-size: 1.1rem;
    line-height: 1.02;
    max-width: 11ch;
    text-shadow: none;
  }

  .showcase-description {
    position: relative;
    z-index: 1;
    color: rgba(58, 33, 29, 0.88);
    font-size: 0.88rem;
    line-height: 1.5;
    max-width: 19ch;
    text-shadow: none;
  }

  .showcase-visual {
    position: relative;
    z-index: 1;
    flex: 1;
    margin-top: 18px;
    border-radius: 22px;
    overflow: hidden;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.84), rgba(240, 229, 219, 0.96)),
      linear-gradient(145deg, rgba(213, 161, 79, 0.16), transparent 44%);
    border: 1px solid rgba(124, 91, 66, 0.08);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
  }

  .showcase-visual::before {
    content: "";
    position: relative;
    z-index: 1;
  }

  .benefit-scene {
    position: relative;
    flex: 1;
    margin-top: 0;
    min-height: 290px;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
    background:
      linear-gradient(145deg, rgba(96, 28, 40, 0.9), rgba(22, 8, 14, 0.98)),
      radial-gradient(circle at top right, rgba(226, 178, 97, 0.26), transparent 30%);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      inset 0 -50px 80px rgba(11, 8, 10, 0.14);
    transition: transform 0.26s ease, filter 0.26s ease;
  }

  .benefit-scene::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.06), transparent 34%),
      linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.18));
  }

  .benefit-scene-glow {
    position: absolute;
    inset: auto auto 10% 8%;
    width: 54%;
    height: 44%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(215, 163, 88, 0.2), transparent 70%);
    filter: blur(8px);
  }

  .benefit-scene-card {
    position: absolute;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255, 248, 242, 0.96), rgba(236, 223, 211, 0.94));
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.16);
  }

  .benefit-scene-card-a {
    inset: 18% 18% 18% 14%;
  }

  .benefit-scene-card-b {
    inset: 30% 14% 16% 34%;
    opacity: 0.8;
  }

  .benefit-scene-card-c {
    inset: 18% 46% 40% 18%;
    opacity: 0.76;
  }

  .benefit-scene-card::before,
  .benefit-scene-card::after {
    content: "";
    position: absolute;
    left: 16%;
    right: 16%;
    height: 7px;
    border-radius: 999px;
    background: rgba(116, 78, 48, 0.18);
  }

  .benefit-scene-card::before {
    top: 18%;
    box-shadow: 0 20px 0 rgba(116, 78, 48, 0.12), 0 40px 0 rgba(116, 78, 48, 0.12);
  }

  .benefit-scene-card::after {
    top: 66%;
    right: 34%;
  }

  .benefit-scene-chip {
    position: absolute;
    border-radius: 999px;
    background: rgba(226, 178, 97, 0.9);
    box-shadow: 0 10px 24px rgba(161, 106, 46, 0.24);
  }

  .benefit-scene-chip-a {
    width: 54px;
    height: 54px;
    right: 14%;
    top: 16%;
  }

  .benefit-scene-chip-b {
    width: 74px;
    height: 10px;
    left: 18%;
    bottom: 18%;
    background: rgba(255, 237, 221, 0.78);
    box-shadow: none;
  }

  .benefit-scene-chip-c {
    display: none;
  }

  .benefit-scene-legal .benefit-scene-card-a {
    inset: 14% 20% 16% 18%;
    transform: rotate(-6deg);
  }

  .benefit-scene-legal .benefit-scene-card-b {
    inset: 34% 12% 16% 42%;
    transform: rotate(6deg);
  }

  .benefit-scene-legal .benefit-scene-chip-a {
    width: 58px;
    height: 58px;
    right: 16%;
    bottom: 20%;
    top: auto;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: #fff7ef;
    font-weight: 700;
  }

  .benefit-scene-legal .benefit-scene-chip-a::before {
    content: "OK";
    font-size: 0.76rem;
  }

  .benefit-scene-evidence .benefit-scene-card-a,
  .benefit-scene-evidence .benefit-scene-card-b,
  .benefit-scene-evidence .benefit-scene-card-c {
    inset: 18% 18% 16% 18%;
  }

  .benefit-scene-evidence .benefit-scene-card-a { transform: rotate(-9deg) translate(-14px, 16px); }
  .benefit-scene-evidence .benefit-scene-card-b { transform: rotate(7deg) translate(18px, 8px); }
  .benefit-scene-evidence .benefit-scene-card-c { transform: rotate(-1deg); }

  .benefit-scene-dashboard .benefit-scene-card-a {
    inset: 18% 14% 18% 14%;
    background: linear-gradient(180deg, rgba(11, 18, 27, 0.96), rgba(9, 13, 21, 0.98));
  }

  .benefit-scene-dashboard .benefit-scene-card-a::before,
  .benefit-scene-dashboard .benefit-scene-card-a::after {
    left: 12%;
    right: 42%;
    background: rgba(58, 233, 209, 0.36);
    box-shadow:
      0 24px 0 rgba(68, 164, 255, 0.24),
      62px 0 0 rgba(117, 92, 255, 0.18),
      62px 24px 0 rgba(85, 255, 172, 0.16);
  }

  .benefit-scene-dashboard .benefit-scene-card-b {
    inset: 58% 18% 16% 18%;
    background: linear-gradient(180deg, rgba(18, 29, 44, 0.84), rgba(9, 14, 24, 0.9));
  }

  .benefit-scene-dashboard .benefit-scene-card-b::before,
  .benefit-scene-dashboard .benefit-scene-card-b::after {
    display: none;
  }

  .benefit-scene-dashboard .benefit-scene-card-c {
    width: 54px;
    height: 54px;
    inset: 14% 12% auto auto;
    border-radius: 50%;
    background: conic-gradient(from 90deg, rgba(226, 178, 97, 0.94), rgba(103, 63, 209, 0.92), rgba(41, 195, 162, 0.92), rgba(226, 178, 97, 0.94));
  }

  .benefit-scene-dashboard .benefit-scene-card-c::before,
  .benefit-scene-dashboard .benefit-scene-card-c::after {
    display: none;
  }

  .benefit-scene-dashboard .benefit-scene-chip-a,
  .benefit-scene-dashboard .benefit-scene-chip-b {
    display: none;
  }

  .benefit-scene-dashboard .benefit-scene-glow {
    inset: auto auto 16% 18%;
    width: 42%;
    height: 32%;
  }

  .benefit-scene-alerts .benefit-scene-card-a {
    inset: 18% 16% 26% 16%;
    background: linear-gradient(180deg, rgba(255, 248, 242, 0.98), rgba(241, 230, 220, 0.96));
  }

  .benefit-scene-alerts .benefit-scene-card-b {
    inset: 58% 22% 12% 22%;
    background: linear-gradient(180deg, rgba(96, 28, 40, 0.9), rgba(35, 12, 18, 0.98));
  }

  .benefit-scene-alerts .benefit-scene-card-c {
    width: 56px;
    height: 56px;
    inset: 16% 12% auto auto;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(226, 178, 97, 0.98), rgba(181, 101, 37, 0.96));
  }

  .benefit-scene-alerts .benefit-scene-card-c::before,
  .benefit-scene-alerts .benefit-scene-card-c::after {
    display: none;
  }

  .benefit-scene-alerts .benefit-scene-chip-a {
    width: 16px;
    height: 16px;
    right: 16%;
    top: 22%;
    background: #ffcf76;
  }

  .benefit-scene-alerts .benefit-scene-chip-b {
    width: 96px;
    left: 24%;
    bottom: 22%;
  }

  .benefit-scene-alerts .benefit-scene-chip-c {
    display: none;
  }

  .benefit-scene-reports .benefit-scene-card-a {
    inset: 14% 16% 14% 18%;
    transform: rotate(-6deg);
  }

  .benefit-scene-reports .benefit-scene-card-b {
    inset: 34% 20% 14% 24%;
    background: linear-gradient(180deg, rgba(48, 16, 24, 0.88), rgba(24, 8, 14, 0.96));
  }

  .benefit-scene-reports .benefit-scene-card-b::before,
  .benefit-scene-reports .benefit-scene-card-b::after {
    right: 22%;
    background: rgba(226, 178, 97, 0.42);
    box-shadow: 0 22px 0 rgba(255, 248, 240, 0.12), 0 44px 0 rgba(255, 248, 240, 0.12);
  }

  .benefit-scene-reports .benefit-scene-card-c {
    width: 82px;
    height: 58px;
    inset: auto 14% 16% auto;
    background: linear-gradient(180deg, rgba(255, 248, 242, 0.98), rgba(240, 228, 216, 0.94));
  }

  .benefit-scene-reports .benefit-scene-card-c::before {
    left: 16%;
    right: 16%;
    top: auto;
    bottom: 18%;
    height: 18px;
    background: linear-gradient(90deg, rgba(226, 178, 97, 0.94) 0 24%, rgba(116, 78, 48, 0.18) 24% 40%, rgba(179, 98, 37, 0.9) 40% 62%, rgba(116, 78, 48, 0.18) 62% 78%, rgba(94, 63, 205, 0.76) 78% 100%);
    box-shadow: none;
  }

  .benefit-scene-reports .benefit-scene-card-c::after {
    display: none;
  }

  .benefit-scene-reports .benefit-scene-chip-a,
  .benefit-scene-reports .benefit-scene-chip-b {
    display: none;
  }

  .benefit-visual-legal,
  .benefit-visual-evidence,
  .benefit-visual-dashboard,
  .benefit-visual-team,
  .benefit-visual-alert,
  .benefit-visual-report {
    display: grid;
    place-items: center;
    min-height: 100%;
  }

  .benefit-board {
    position: relative;
    width: 76%;
    aspect-ratio: 0.82;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 235, 225, 0.98));
    box-shadow: 0 16px 30px rgba(77, 46, 29, 0.1);
  }

  .benefit-board::before {
    content: "";
    position: absolute;
    top: 12px;
    left: 50%;
    width: 44%;
    height: 10px;
    border-radius: 999px;
    background: rgba(125, 85, 45, 0.18);
    transform: translateX(-50%);
  }

  .benefit-board span {
    position: absolute;
    left: 18%;
    right: 18%;
    height: 8px;
    border-radius: 999px;
    background: rgba(125, 85, 45, 0.2);
  }

  .benefit-board span:nth-child(1) { top: 34%; }
  .benefit-board span:nth-child(2) { top: 50%; }
  .benefit-board span:nth-child(3) { top: 66%; }

  .benefit-stamp {
    position: absolute;
    right: 22%;
    bottom: 18%;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(226, 183, 105, 0.94), rgba(170, 104, 35, 0.96));
    color: #fff7ef;
    display: grid;
    place-items: center;
    font-size: 0.82rem;
    font-weight: 700;
    box-shadow: 0 12px 26px rgba(148, 90, 36, 0.26);
  }

  .benefit-paper-stack {
    position: relative;
    width: 78%;
    height: 76%;
  }

  .benefit-paper-stack span {
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 236, 229, 0.96));
    box-shadow: 0 14px 30px rgba(77, 46, 29, 0.08);
  }

  .benefit-paper-stack span:nth-child(1) { transform: rotate(-8deg) translate(-12px, 12px); }
  .benefit-paper-stack span:nth-child(2) { transform: rotate(5deg) translate(12px, 4px); }
  .benefit-paper-stack span:nth-child(3) { transform: translateY(-4px); }

  .benefit-paper-stack span::before {
    content: "";
    position: absolute;
    left: 18%;
    right: 18%;
    top: 22%;
    height: 8px;
    border-radius: 999px;
    background: rgba(125, 85, 45, 0.2);
    box-shadow:
      0 22px 0 rgba(125, 85, 45, 0.14),
      0 44px 0 rgba(125, 85, 45, 0.14),
      0 66px 0 rgba(125, 85, 45, 0.14);
  }

  .benefit-visual-dashboard {
    grid-template-columns: repeat(3, 26px);
    align-content: end;
    justify-content: center;
    gap: 10px;
    padding: 20px;
  }

  .benefit-chart-bar {
    align-self: end;
    border-radius: 14px 14px 8px 8px;
    background: linear-gradient(180deg, rgba(213, 161, 79, 0.92), rgba(147, 82, 33, 0.94));
    box-shadow: 0 12px 24px rgba(138, 84, 35, 0.2);
  }

  .benefit-chart-bar-1 { height: 62px; }
  .benefit-chart-bar-2 { height: 92px; }
  .benefit-chart-bar-3 { height: 132px; }

  .benefit-chart-ring {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 10px solid rgba(213, 161, 79, 0.24);
    border-top-color: rgba(171, 96, 36, 0.9);
    border-right-color: rgba(213, 161, 79, 0.9);
  }

  .benefit-avatar-row {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .benefit-avatar-row span {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(231, 212, 198, 0.98), rgba(201, 164, 133, 0.96));
    box-shadow: 0 12px 24px rgba(77, 46, 29, 0.12);
  }

  .benefit-avatar-row span:nth-child(2) {
    width: 58px;
    height: 58px;
    background: linear-gradient(180deg, rgba(227, 184, 109, 0.98), rgba(176, 99, 38, 0.96));
  }

  .benefit-connection-line {
    width: 72%;
    height: 8px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(125, 85, 45, 0.14), rgba(213, 161, 79, 0.48), rgba(125, 85, 45, 0.14));
    margin-top: 18px;
  }

  .benefit-alert-bell {
    position: relative;
    width: 78px;
    height: 84px;
    border-radius: 44px 44px 18px 18px;
    background: linear-gradient(180deg, rgba(213, 161, 79, 0.94), rgba(165, 93, 35, 0.96));
    box-shadow: 0 18px 32px rgba(141, 86, 35, 0.2);
  }

  .benefit-alert-bell::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(125, 85, 45, 0.86);
    transform: translateX(-50%);
  }

  .benefit-alert-bell::after {
    content: "";
    position: absolute;
    left: 50%;
    top: -14px;
    width: 24px;
    height: 18px;
    border-radius: 999px 999px 0 0;
    border: 4px solid rgba(125, 85, 45, 0.72);
    border-bottom: 0;
    transform: translateX(-50%);
  }

  .benefit-alert-lines {
    display: grid;
    gap: 10px;
    margin-top: 18px;
    width: 72%;
  }

  .benefit-alert-lines span {
    height: 8px;
    border-radius: 999px;
    background: rgba(125, 85, 45, 0.18);
  }

  .benefit-report-sheet {
    position: relative;
    width: 76%;
    aspect-ratio: 0.8;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.99), rgba(245, 236, 227, 0.96));
    box-shadow: 0 16px 30px rgba(77, 46, 29, 0.1);
  }

  .benefit-report-sheet span {
    position: absolute;
    left: 18%;
    right: 18%;
    height: 8px;
    border-radius: 999px;
    background: rgba(125, 85, 45, 0.18);
  }

  .benefit-report-sheet span:nth-child(1) { top: 20%; }
  .benefit-report-sheet span:nth-child(2) { top: 34%; }
  .benefit-report-sheet span:nth-child(3) { top: 48%; }

  .benefit-report-chart {
    position: absolute;
    left: 24%;
    right: 24%;
    bottom: 18%;
    display: flex;
    align-items: end;
    gap: 8px;
  }

  .benefit-report-chart span {
    flex: 1;
    border-radius: 8px 8px 4px 4px;
    background: linear-gradient(180deg, rgba(213, 161, 79, 0.95), rgba(169, 96, 37, 0.96));
  }

  .benefit-report-chart span:nth-child(1) { height: 24px; }
  .benefit-report-chart span:nth-child(2) { height: 42px; }
  .benefit-report-chart span:nth-child(3) { height: 58px; }

  .sectors-section {
    padding: 70px 0 78px;
  }

  .sectors-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.16fr) minmax(0, 0.84fr);
    gap: 28px;
    align-items: start;
  }

  .sectors-header {
    order: 2;
    max-width: 100%;
    margin-bottom: 0;
    position: sticky;
    top: 18px;
  }

  .sectors-header .title-lg {
    max-width: 11ch;
    font-size: clamp(2.2rem, 4vw, 3.7rem);
    line-height: 0.98;
  }

  .sectors-header .lead {
    max-width: 34ch;
  }

  .sector-list {
    order: 1;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .sector-row {
    position: relative;
    min-height: 152px;
    padding: 18px 18px 18px 74px;
    border-radius: 24px;
    border: 1px solid rgba(214, 163, 87, 0.14);
    background:
      linear-gradient(180deg, rgba(88, 17, 33, 0.56), rgba(42, 10, 18, 0.76)),
      radial-gradient(circle at top right, rgba(213, 161, 79, 0.16), transparent 34%);
    box-shadow:
      0 18px 36px rgba(0, 0, 0, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
    transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
  }

  .sector-row:hover {
    transform: translateY(-4px);
    border-color: rgba(214, 163, 87, 0.24);
    box-shadow:
      0 24px 46px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .sector-number {
    position: absolute;
    left: 18px;
    top: 18px;
    width: 40px;
    height: 40px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    color: var(--primary);
    font-size: 0.92rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border: 1px solid rgba(214, 163, 87, 0.18);
    background: rgba(255, 255, 255, 0.03);
  }

  .sector-title {
    font-size: 1.08rem;
    line-height: 1.22;
  }

  .sector-description {
    margin-top: 10px;
    color: var(--muted);
    line-height: 1.62;
    font-size: 0.96rem;
    max-width: 28ch;
  }

  .card-number {
    width: 52px;
    height: 52px;
    border-radius: 18px;
    display: grid;
    place-items: center;
    font-weight: 800;
    background: linear-gradient(135deg, rgba(213, 161, 79, 0.28), rgba(122, 22, 42, 0.18));
    border: 1px solid var(--line);
  }

  .card-title {
    font-size: 1.14rem;
    line-height: 1.3;
  }

  .card-description {
    color: var(--muted);
    line-height: 1.75;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 22px;
  }

  .contact-section {
    background: #fbf8f4;
    color: #241715;
    padding: 58px 0 60px;
  }

  .contact-section .kicker {
    color: #8f5b26;
  }

  .contact-section .title-lg {
    color: #241715;
  }

  .contact-section .lead {
    color: #5b4b45;
  }

  .contact-section .section-header {
    margin-bottom: 24px;
    max-width: 760px;
  }

  .contact-header {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .contact-section .title-lg {
    font-size: clamp(1.58rem, 2.2vw, 2.15rem);
    max-width: 30ch;
  }

  .contact-header .title-lg {
    margin-left: auto;
    margin-right: auto;
    line-height: 1.06;
    text-wrap: balance;
  }

  .contact-card,
  .contact-form {
    padding: 22px;
  }

  .contact-section .contact-card,
  .contact-section .contact-form {
    background:
      radial-gradient(circle at top right, rgba(213, 161, 79, 0.08), transparent 28%),
      linear-gradient(180deg, rgba(57, 15, 24, 0.96), rgba(32, 8, 14, 0.98));
    border-color: rgba(214, 163, 87, 0.14);
    box-shadow:
      0 12px 24px rgba(22, 6, 10, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.03);
  }

  .contact-section .badge {
    background: rgba(95, 30, 45, 0.42);
    border-color: var(--line);
    color: #f2d6ba;
  }

  .contact-section .contact-card .lead {
    color: var(--muted);
  }

  .contact-list {
    display: grid;
    gap: 12px;
    margin-top: 20px;
  }

  .contact-item {
    padding: 14px 16px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.04);
  }

  .contact-section .contact-item {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.06);
  }

  .contact-item span {
    display: block;
    color: var(--muted);
    font-size: 0.9rem;
    margin-bottom: 6px;
  }

  .contact-section .contact-item span {
    color: var(--muted);
  }

  .contact-section .contact-item strong {
    color: var(--text);
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .field,
  .field-full {
    display: grid;
    gap: 8px;
  }

  .field-full {
    grid-column: 1 / -1;
  }

  label {
    color: #f0dfd4;
    font-size: 0.92rem;
  }

  .contact-section label {
    color: #f0dfd4;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--line);
    background: rgba(48, 13, 21, 0.78);
    color: var(--text);
    border-radius: 16px;
    padding: 14px 16px;
    font: inherit;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .contact-section input,
  .contact-section textarea {
    border-color: rgba(214, 163, 87, 0.12);
    background: rgba(39, 9, 16, 0.92);
    color: var(--text);
  }

  .contact-section input::placeholder,
  .contact-section textarea::placeholder {
    color: rgba(242, 223, 212, 0.45);
  }

  input:focus,
  textarea:focus {
    border-color: var(--line-strong);
    box-shadow: 0 0 0 4px rgba(213, 161, 79, 0.12);
  }

  textarea {
    resize: vertical;
    min-height: 118px;
  }

  .form-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 18px;
  }

  .footer {
    padding: 22px 0 42px;
    color: var(--muted);
    font-size: 0.92rem;
  }

  .footer-light {
    background: #fbf8f4;
    color: #7a675f;
  }

  .footer-row {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    padding-top: 18px;
    border-top: 1px solid var(--line);
  }

  .footer-light .footer-row {
    border-top-color: rgba(124, 91, 66, 0.12);
  }

  @media (max-width: 1100px) {
    .hero-grid,
    .contact-grid,
    .sector-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .method-showcase {
      grid-template-columns: 1fr;
    }

    .method-showcase-nav {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .method-showcase-stage {
      grid-template-columns: minmax(0, 1fr) minmax(260px, 0.88fr);
    }

    .title-xl {
      font-size: clamp(2.2rem, 4.8vw, 4rem);
      max-width: 10ch;
    }

    .lead {
      max-width: 52ch;
    }

    .hero-art {
      min-height: clamp(320px, 40vw, 390px);
    }

    .method-layout {
      grid-template-columns: 1fr;
      gap: 18px;
    }

    .method-intro {
      order: 1;
    }

    .method-showcase {
      order: 2;
    }

    .method-header .title-lg,
    .method-header .lead {
      max-width: 100%;
    }

    .benefits-top {
      grid-template-columns: 1fr;
      gap: 22px;
    }

    .sectors-layout {
      grid-template-columns: 1fr;
      gap: 22px;
    }

    .sectors-header {
      order: 1;
      position: static;
    }

    .sector-list {
      order: 2;
    }

    .sectors-header .title-lg,
    .sectors-header .lead {
      max-width: 100%;
    }

    .showcase-stage {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }

    .showcase-panel {
      min-height: 340px;
    }
  }

  @media (max-width: 820px) {
    .section {
      padding: 72px 0;
    }

    .hero {
      min-height: auto;
      padding: 14px 0 18px;
    }

    .nav {
      flex-direction: column;
      align-items: flex-start;
    }

    .nav-right {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;
    }

    .nav-links {
      flex-wrap: wrap;
    }

    .hero-grid,
    .sector-list,
    .contact-grid,
    .form-grid {
      grid-template-columns: 1fr;
    }

    .hero-art,
    .contact-card,
    .contact-form {
      padding: 24px;
    }

    .hero-grid {
      padding-top: 0;
    }

    .hero-art {
      min-height: 350px;
    }

    .method-section {
      padding: 54px 0 60px;
    }

    .method-showcase {
      padding: 22px;
    }

    .method-showcase-nav {
      grid-template-columns: 1fr;
    }

    .method-showcase-stage {
      grid-template-columns: 1fr;
      grid-template-areas:
        "copy"
        "visual"
        "footer";
    }

    .method-showcase-step strong,
    .method-showcase-description {
      max-width: 100%;
    }

    .method-showcase-visual {
      min-height: 320px;
    }

    .method-showcase-footer {
      flex-direction: column;
      align-items: flex-start;
    }

    .showcase-stage {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    .sectors-section {
      padding: 62px 0 70px;
    }

    .sector-row {
      min-height: 0;
    }

    .title-xl {
      max-width: 100%;
    }

    .footer-row {
      flex-direction: column;
    }
  }

  @media (max-width: 560px) {
    .container {
      width: min(calc(100% - 20px), var(--container));
    }

    .section {
      padding: 60px 0;
    }

    .hero {
      padding-bottom: 58px;
    }

    .nav {
      gap: 16px;
    }

    .benefits-section {
      padding: 52px 0 60px;
    }

    .method-section {
      padding: 46px 0 52px;
    }

    .benefits-header .title-lg {
      max-width: 100%;
    }

    .method-header {
      text-align: center;
    }

    .method-header .title-lg,
    .method-header .lead {
      margin-left: auto;
      margin-right: auto;
    }

    .showcase-stage {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .benefits-header {
      text-align: center;
    }

    .sectors-header {
      text-align: center;
    }

    .sectors-header .title-lg,
    .sectors-header .lead {
      margin-left: auto;
      margin-right: auto;
    }

    .benefits-header .lead,
    .benefits-header .title-lg {
      margin-left: auto;
      margin-right: auto;
    }

    .showcase-panel {
      min-height: 320px;
    }

    .sector-row {
      padding: 16px 16px 16px 66px;
      border-radius: 20px;
    }

    .sector-title {
      font-size: 1rem;
    }

    .sector-description {
      font-size: 0.9rem;
      line-height: 1.52;
    }

    .showcase-copy {
      padding: 18px 16px 16px;
    }

    .showcase-title {
      font-size: 1.02rem;
    }

    .showcase-description {
      font-size: 0.82rem;
      line-height: 1.45;
    }

    .nav-right,
    .nav-actions {
      width: 100%;
    }

    .nav-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .nav-button {
      width: 100%;
    }

    .method-showcase {
      padding: 18px;
    }

    .method-showcase-tab {
      grid-template-columns: 42px minmax(0, 1fr);
      padding: 12px;
    }

    .method-showcase-tab-number {
      width: 42px;
      height: 42px;
    }

    .method-showcase-step strong {
      font-size: clamp(1.8rem, 9vw, 2.45rem);
    }

    .method-showcase-description {
      font-size: 0.94rem;
      line-height: 1.62;
    }

    .method-showcase-point {
      font-size: 0.82rem;
      padding: 9px 12px;
    }

    .method-showcase-visual {
      min-height: 280px;
    }

    .method-showcase-screen {
      inset: 18px 18px 70px 18px;
      padding: 18px;
    }

    .method-showcase-screen strong {
      font-size: 1.24rem;
    }

    .method-showcase-footer {
      padding: 14px 16px;
    }

    .method-showcase-progress span {
      width: 28px;
    }

    .method-showcase-progress-active {
      width: 48px !important;
    }

    .brand {
      gap: 10px;
      font-size: 0.95rem;
    }

    .brand-mark {
      width: 42px;
      height: 42px;
    }

    .title-xl {
      font-size: clamp(2.2rem, 12vw, 3.55rem);
      line-height: 0.95;
      max-width: 9ch;
    }

    .lead {
      font-size: 0.96rem;
      line-height: 1.68;
    }

    .hero-note {
      font-size: 0.9rem;
    }

    .button {
      width: 100%;
    }

    .hero-art {
      min-height: 330px;
      padding: 10px 0 0;
    }

    .hero-art::before {
      inset: 4% 0 18%;
      border-radius: 26px;
    }

    .hero-monitor-frame {
      padding: 10px;
      border-radius: 20px;
    }

    .hero-screen {
      grid-template-columns: 62px minmax(0, 1fr);
      min-height: 214px;
    }

    .hero-sidebar {
      padding: 12px 10px;
    }

    .hero-sidebar-badge {
      height: 38px;
      margin-bottom: 14px;
      font-size: 0.92rem;
    }

    .hero-screen-main {
      padding: 14px;
      gap: 12px;
    }

    .hero-system-title {
      font-size: 0.88rem;
    }

    .hero-system-preview {
      min-height: 112px;
    }

    .hero-system-panels {
      grid-template-columns: 1fr;
    }

    .hero-system-card span {
      font-size: 0.84rem;
    }

    .showcase-panel {
      width: 100%;
      padding: 0;
    }
  }

  @media (max-height: 860px) and (min-width: 821px) {
    .hero {
      padding: 12px 0;
    }

    .nav {
      padding-bottom: 12px;
    }

    .title-xl {
      font-size: clamp(2.1rem, 4.2vw, 3.65rem);
    }

    .lead {
      margin-top: 14px;
      font-size: 0.96rem;
      line-height: 1.6;
      max-width: 50ch;
    }

    .cta-row {
      margin-top: 16px;
    }

    .hero-note {
      margin-top: 14px;
      font-size: 0.9rem;
    }

    .hero-art {
      min-height: clamp(280px, 38vh, 340px);
    }

    .hero-monitor {
      width: min(100%, 390px);
    }

    .hero-screen {
      min-height: 228px;
    }

    .hero-system-preview {
      min-height: 108px;
    }

    .ticker {
      display: none;
    }
  }
`;

export default function Inicial() {
  const [activeStep, setActiveStep] = useState(0);
  const tickerItems = [...approachTags, ...approachTags];
  const currentStep = steps[activeStep];
  const currentHighlights = stepHighlights[activeStep];

  return (
    <main className="landing-shell">
      <style>{styles}</style>

      <section className="hero">
        <div className="container">
          <nav className="nav" aria-label="Principal">
            <a className="brand" href="#inicio">
              <span className="brand-mark">
                <img alt="Logo Ascensional" src={companyLogoSrc} />
              </span>
              <span>Ascensional Consultoria</span>
            </a>

            <div className="nav-right">
              <div className="nav-links">
                <a href="#metodo">Método</a>
                <a href="#beneficios">Benefícios</a>
                <a href="#atuacao">Atuação</a>
                <a href="#contato">Contato</a>
              </div>

              <div className="nav-actions">
                <a className="nav-button nav-button-secondary" href="#contato">
                  Entrar
                </a>
                <a className="nav-button nav-button-primary" href="#contato">
                  Cadastrar
                </a>
              </div>
            </div>
          </nav>

          <div className="hero-grid" id="inicio">
            <div className="hero-copy">
              <p className="kicker">Tecnologia + consultoria especializada</p>
              <h1 className="title-xl">
                Simplifique sua <strong>gestão de requisitos legais</strong>.
              </h1>
              <p className="lead">
                Plataforma completa para gestão de conformidade legal em Meio Ambiente, Saúde,
                Segurança do Trabalho e muito mais. Controle suas obrigações com dashboards
                intuitivos, responsáveis definidos e relatórios detalhados para auditoria e tomada
                de decisão.
              </p>

              <div className="cta-row">
                <a className="button button-primary" href="#contato">
                  Começar Agora
                </a>
                <a className="button button-secondary" href="https://wa.me/5511999999999">
                  Fale Conosco
                </a>
              </div>

            </div>

            <aside className="hero-art" aria-label="Mockup da tela do sistema">
              <div className="hero-monitor">
                <div className="hero-monitor-frame">
                  <div className="hero-monitor-bezel">
                    <div className="hero-monitor-topbar">
                      <div className="hero-monitor-dots">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <div className="hero-screen">
                      <aside className="hero-sidebar">
                        <div className="hero-sidebar-badge">
                          <img alt="Logo Ascensional" src={companyLogoSrc} />
                        </div>
                        <div className="hero-sidebar-item" />
                        <div className="hero-sidebar-item" />
                        <div className="hero-sidebar-item" />
                        <div className="hero-sidebar-item" />
                      </aside>

                      <div className="hero-screen-main">
                        <div className="hero-system-bar">
                          <strong className="hero-system-title">Gestão de Requisitos Legais</strong>
                        </div>

                        <div className="hero-system-preview">
                          {heroScreenImageSrc ? (
                            <img
                              alt="Preview do sistema Ascensional"
                              className="hero-system-image"
                              src={heroScreenImageSrc}
                            />
                          ) : null}
                        </div>

                        <div className="hero-system-panels">
                          <div className="hero-system-card">
                            <strong>Painel Executivo</strong>
                            <span>
                              Espaço ideal para inserir a imagem do sistema com gráficos,
                              indicadores e acompanhamento da conformidade.
                            </span>
                          </div>

                          <div className="hero-system-card">
                            <strong>Recursos</strong>
                            <div className="hero-system-lines">
                              <span />
                              <span />
                              <span />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-monitor-stand" />
                <div className="hero-monitor-base" />
              </div>
            </aside>
          </div>
        </div>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {tickerItems.map((item, index) => (
              <span className="ticker-item" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section method-section" id="metodo">
        <div className="container">
          <div className="method-transition" aria-hidden="true" />

          <div className="method-layout">


            <div className="method-showcase">
              <div className="method-showcase-nav" aria-label="Etapas do metodo">
                {steps.map((step, index) => (
                  <button
                    className={`method-showcase-tab ${index === activeStep ? "method-showcase-tab-active" : ""}`}
                    key={step.number}
                    onClick={() => setActiveStep(index)}
                    type="button"
                  >
                    <span className="method-showcase-tab-copy">
                      <strong>{step.title}</strong>
                      <small>{stepHighlights[index][0]}</small>
                    </span>
                  </button>
                ))}
              </div>

              <div className={`method-showcase-stage method-showcase-stage-${currentStep.number}`}>
                <div className="method-showcase-copy">
                  <div className="method-showcase-step">
                    <strong>{currentStep.title}</strong>
                  </div>
                  <p className="method-showcase-description">{currentStep.description}</p>

                  <div className="method-showcase-points">
                    {currentHighlights.map((item) => (
                      <span className="method-showcase-point" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="method-showcase-visual" aria-hidden="true">
                  <div className="method-showcase-screen">
                    <span className="method-showcase-screen-badge">Metodo Ascensional</span>
                    <strong>{currentStep.title}</strong>
                    <div className="method-showcase-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <span className="method-showcase-card method-showcase-card-a" />
                  <span className="method-showcase-card method-showcase-card-b" />
                  <span className="method-showcase-card method-showcase-card-c" />
                  <span className="method-showcase-orb" />
                </div>

                <div className="method-showcase-footer">
                  <p>Selecione uma etapa na lateral para atualizar o painel e visualizar o foco de cada fase.</p>
                  <div className="method-showcase-progress" aria-hidden="true">
                    {steps.map((step, index) => (
                      <span
                        className={index === activeStep ? "method-showcase-progress-active" : ""}
                        key={step.number}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section" id="beneficios">
        <div className="container">
          <div className="benefits-top">
            <header className="section-header benefits-header">
              <p className="kicker">Benefícios</p>
              <h2 className="title-lg">A plataforma organiza a conformidade e reduz exposição legal.</h2>
              <p className="lead">
                Cada funcionalidade foi apresentada para comunicar valor real na gestão de
                requisitos legais, desde o controle de documentos até o acompanhamento de planos de
                ação e auditorias.
              </p>
            </header>

            <div className="showcase-stage">
              {benefits.slice(0, 4).map((benefit, index) => {
                return (
                <article
                  className={`showcase-panel showcase-panel-${benefit.scene}`}
                  key={benefit.title}
                >
                  <span className="showcase-index">{String(index + 1).padStart(2, "0")}</span>
                  {renderBenefitVisual(benefit.scene)}
                  <div className="showcase-copy">
                    <h3 className="showcase-title">{benefit.title}</h3>
                    <p className="showcase-description">{benefit.description}</p>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section sectors-section" id="atuacao">
        <div className="container">
          <div className="sectors-layout">
            <header className="section-header sectors-header">
              <p className="kicker">Áreas de atuação</p>
              <h2 className="title-lg">Cobertura completa dos temas que sustentam a conformidade.</h2>
              <p className="lead">
                A solução abrange os principais eixos regulatórios da operação e permite adaptar
                categorias conforme a realidade, o porte e o segmento de cada empresa.
              </p>
            </header>

            <div className="sector-list">
              {sectors.map((sector, index) => (
                <article className="sector-row" key={sector.title}>
                  <div className="sector-number">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="sector-title">{sector.title}</h3>
                    <p className="sector-description">{sector.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contato">
        <div className="container">
          <header className="section-header contact-header">
            <h2 className="title-lg">
              Fale com a equipe e entenda como estruturar
              <br />
              sua conformidade.
            </h2>
          </header>

          <div className="contact-grid">
            <article className="contact-card">
              <span className="badge">Ascensional Consultoria</span>
              <p className="lead">
                Gestão de requisitos legais com visão estratégica, dashboards intuitivos e
                relatórios detalhados para manter a empresa aderente às obrigações regulatórias.
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <span>Telefone</span>
                  <strong>(11) 99999-9999</strong>
                </div>
                <div className="contact-item">
                  <span>E-mail</span>
                  <strong>contato@ascensional.com.br</strong>
                </div>
                <div className="contact-item">
                  <span>Base de atendimento</span>
                  <strong>São Paulo, SP - Brasil</strong>
                </div>
              </div>
            </article>

            <article className="contact-form">
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" name="nome" placeholder="Seu nome" />
                </div>

                <div className="field">
                  <label htmlFor="empresa">Empresa</label>
                  <input id="empresa" name="empresa" placeholder="Nome da empresa" />
                </div>

                <div className="field">
                  <label htmlFor="email">E-mail</label>
                  <input id="email" name="email" type="email" placeholder="voce@empresa.com" />
                </div>

                <div className="field">
                  <label htmlFor="telefone">Telefone</label>
                  <input id="telefone" name="telefone" placeholder="(11) 99999-9999" />
                </div>

                <div className="field-full">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Conte um pouco sobre sua operação e o que precisa estruturar."
                  />
                </div>
              </div>

              <div className="form-actions">
                <a className="button button-primary" href="mailto:contato@ascensional.com.br">
                  Enviar por e-mail
                </a>
                <a className="button button-secondary" href="https://wa.me/5511999999999">
                  Continuar no WhatsApp
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="footer footer-light">
        <div className="container">
          <div className="footer-row">
            <span>Ascensional Consultoria</span>
            <span>Plataforma de conformidade legal com foco em controle, evidência e governança.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
