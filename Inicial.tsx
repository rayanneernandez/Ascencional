import { useState } from "react";

const companyLogoSrc = new URL("./assets/logo.jpg", import.meta.url).href;
const heroScreenImageSrc = "";
// Foto de plataforma offshore (Jeff Stapleton / Pexels, uso comercial livre).
// Para trocar por outra foto, substitua o arquivo ./assets/atuacao.jpg.
const sectorsImageSrc = new URL("./assets/atuacao.jpg", import.meta.url).href;

const steps = [
  {
    number: "01",
    shortLabel: "Diagnostico",
    orbitLabel: "Diagnóstico",
    title: "Diagnóstico e gap analysis",
    description:
      "Avaliamos processos, documentação e requisitos legais aplicáveis ao seu segmento para revelar lacunas e prioridades com precisão.",
  },
  {
    number: "02",
    shortLabel: "Implementacao",
    orbitLabel: "Implementação",
    title: "Implementação dos requisitos",
    description:
      "Estruturamos programas, laudos, procedimentos e sistemas de gestão (ISO 9001, 14001 e 45001) alinhados à operação real da empresa.",
  },
  {
    number: "03",
    shortLabel: "Auditoria",
    orbitLabel: "Auditoria",
    title: "Auditoria e monitoramento",
    description:
      "Conduzimos auditorias internas, de conformidade legal e simulados PEOTRAM, acompanhando condicionantes e evidências continuamente.",
  },
  {
    number: "04",
    shortLabel: "Melhoria",
    orbitLabel: "Resultados",
    title: "Melhoria contínua e resultados",
    description:
      "Tratamos não conformidades pela causa-raiz e entregamos relatórios executivos que sustentam decisões, certificações e a nota ADT.",
  },
];

const stepHighlights = [
  ["Levantamento legal", "Gap analysis PEOTRAM", "Prioridades definidas"],
  ["Programas e laudos", "Sistemas de gestão ISO", "Procedimentos aplicados"],
  ["Auditorias internas", "Simulados PEOTRAM", "Condicionantes acompanhadas"],
  ["Causa-raiz tratada", "Relatórios executivos", "Certificação sustentada"],
];

const pillars = [
  {
    title: "Segurança e Saúde Ocupacional",
    description: "NRs, ISO 45001, PGR, PCMSO, LTCAT, higiene ocupacional, AET e planos de emergência.",
  },
  {
    title: "Meio Ambiente e Sustentabilidade",
    description: "ISO 14001, licenciamento, condicionantes, resíduos, PRAD e produtos perigosos.",
  },
  {
    title: "Qualidade e Excelência",
    description: "ISO 9001, mapeamento e redesenho de processos, planejamento estratégico e KPIs.",
  },
  {
    title: "Consultoria PEOTRAM",
    description: "Gap analysis, implementação, auditorias de preparação e gestão da nota ADT (Petrobras).",
  },
  {
    title: "Estratégia e Governança ESG",
    description: "Estratégia ESG, relatórios GRI/SASB, rating, compliance e gestão de riscos corporativos.",
  },
  {
    title: "Requisitos Legais e Outros",
    description: "Levantamento, avaliação e atualização contínua de requisitos legais e qualificação de fornecedores.",
  },
];

const serviceAreas = [
  {
    key: "sso",
    tag: "SSO",
    name: "Segurança e Saúde Ocupacional",
    lead:
      "Proteção da vida e da saúde dos trabalhadores com uma abordagem proativa, focada em prevenção e conformidade com as normas nacionais e internacionais.",
    groups: [
      {
        label: "Treinamentos",
        items: [
          "Normas Regulamentadoras (NRs) do Trabalho",
          "Interpretação, implementação e auditoria interna ISO 45001:2018",
          "Gerenciamento de perigos e riscos (APR, HAZOP)",
          "Análise de Riscos e Permissão de Trabalho (PT)",
          "Higiene ocupacional",
          "Abandono e situações de emergência",
        ],
      },
      {
        label: "Serviços",
        items: [
          "Implantação e manutenção do SGSSO ISO 45001:2018",
          "Plano de gestão das NRs e adequação ao eSocial",
          "Laudos técnicos (LTCAT, NR-20, NR-12, entre outros)",
          "Programas de SST (PGR, PCMSO, PCMAT, PPR, PCA, PPEOB, PPP)",
          "Higiene ocupacional avaliação quantitativa de riscos",
          "Análise Ergonômica do Trabalho (AET)",
          "Estudos de risco (HAZOP, APP, APR, FMEA)",
          "Licença AVCB junto ao Corpo de Bombeiros",
          "Plano de Emergência e Auxílio Mútuo (PAM) com simulados",
          "Gerenciamento de requisitos legais e FISPQ",
        ],
      },
      {
        label: "Auditorias",
        items: [
          "Auditoria interna do SGSSO ISO 45001:2018",
          "Auditoria de conformidade legal (requisitos legais e outros)",
          "Auditoria de qualificação de provedores externos",
        ],
      },
    ],
  },
  {
    key: "ambiente",
    tag: "Meio Ambiente",
    name: "Meio Ambiente e Sustentabilidade",
    lead:
      "Gestão responsável dos recursos naturais, minimização de impactos e promoção da sustentabilidade, garantindo conformidade legal e reputação corporativa.",
    groups: [
      {
        label: "Treinamentos",
        items: [
          "Interpretação, implementação e auditoria ISO 14001:2015 e versão 2026",
          "Gerenciamento de aspectos e impactos ambientais",
        ],
      },
      {
        label: "Serviços",
        items: [
          "Implantação e manutenção do SGA ISO 14001:2015 e versão 2026",
          "Estudos de risco (AIA, avaliação preliminar e detalhada)",
          "Monitoramento de condicionantes ambientais",
          "Laudo de ruído externo NBR 10.151 e CONAMA 01/86",
          "Programas de educação e responsabilidade socioambiental",
          "Gerenciamento de resíduos sólidos (PGRS)",
          "Plano de Recuperação de Áreas Degradadas (PRAD)",
          "SIPROQUIM e ficha de emergência",
          "Conformidade no transporte rodoviário de produtos perigosos",
          "Gerenciamento de requisitos legais e qualificação de fornecedores",
        ],
      },
      {
        label: "Auditorias",
        items: [
          "Auditoria ambiental  DZ 056 R.3 e SMAC 550/2014",
          "Auditoria interna do SGA ISO 14001:2015",
          "Auditoria de qualificação de provedores externos",
        ],
      },
    ],
  },
  {
    key: "qualidade",
    tag: "Qualidade",
    name: "Qualidade e Excelência Operacional",
    lead:
      "Otimização de processos, satisfação do cliente e busca pela excelência operacional como diferencial competitivo que impulsiona o crescimento do negócio.",
    groups: [
      {
        label: "Treinamentos",
        items: [
          "Interpretação, implementação e auditoria ISO 9001:2015 e versão 2026",
          "Análise e tratamento de não conformidades (5 Porquês, Ishikawa, 8D)",
        ],
      },
      {
        label: "Serviços",
        items: [
          "Implantação e manutenção do SGQ ISO 9001:2015 e versão 2026",
          "Mapeamento, redesenho e gestão por processos",
          "Planejamento estratégico e indicadores (KPIs)",
        ],
      },
      {
        label: "Auditorias",
        items: ["Auditoria interna do SGQ ISO 9001:2015 e versão 2026"],
      },
    ],
  },
  {
    key: "peotram",
    tag: "PEOTRAM",
    name: "Consultoria Especializada PEOTRAM",
    lead:
      "Programa de Excelência Operacional para Transporte Aéreo e Marítimo da Petrobras. Preparamos sua empresa para atender e superar as exigências, garantindo contratos e excelência operacional.",
    groups: [
      {
        label: "Metodologia",
        items: [
          "Diagnóstico de lacunas (gap analysis) do ciclo vigente",
          "Implementação dos requisitos de segurança, manutenção e operação",
          "Auditorias de preparação simuladas com o rigor da Petrobras",
          "Gestão de não conformidades e melhoria da nota ADT",
          "Treinamento de equipes nos padrões de excelência operacional",
        ],
      },
    ],
  },
  {
    key: "esg",
    tag: "ESG",
    name: "Estratégia e Governança ESG",
    lead:
      "Uma jornada de sustentabilidade que vai além do compliance, gerando valor financeiro e reputacional a partir dos critérios Ambiental, Social e de Governança.",
    groups: [
      {
        label: "Nossa atuação",
        items: [
          "Gestão ambiental, eficiência energética e economia circular",
          "diversidade e inclusão, direitos humanos e responsabilidade social",
          "Código de ética, compliance e gestão de riscos corporativos",
          "Relatórios de sustentabilidade (GRI e SASB)",
          "Rating ESG e obtenção de selos de sustentabilidade",
        ],
      },
    ],
  },
];

const benefits = [
  {
    title: "Conformidade legal",
    description:
      "Requisitos, prazos, licenças e condicionantes monitorados de forma centralizada e acionável.",
    scene: "legal",
  },
  {
    title: "Evidências organizadas",
    description:
      "Documentos, laudos, programas e comprovações prontos para consulta, auditorias e certificações.",
    scene: "evidence",
  },
  {
    title: "Visão executiva",
    description:
      "Indicadores claros e leitura executiva para priorizar riscos e sustentar decisões com segurança.",
    scene: "dashboard",
  },
  {
    title: "Prevenção de perdas",
    description:
      "Antecipe passivos com alertas de vencimentos, atualizações legais e atividades críticas.",
    scene: "alerts",
  },
];

const areaIconPaths: Record<string, string[]> = {
  sso: ["M12 3l7 3v5c0 4.2-2.9 7.7-7 8.9C7.9 18.7 5 15.2 5 11V6l7-3z", "M9 11.5l2 2 4-4.5"],
  ambiente: ["M20 4C10 5 5 10 5 18c0 0 6-1 9-4s6-9 6-10z", "M6 18C9 13 13 10 18 8"],
  qualidade: ["M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9 7.2 18l.9-5.4L4.2 8.7l5.4-.8L12 3z"],
  peotram: ["M4 15l1.6-6.2a2 2 0 011.9-1.5h9a2 2 0 011.9 1.5L20 15", "M3 15h18l-1.4 3.3a2 2 0 01-1.8 1.2H6.2a2 2 0 01-1.8-1.2L3 15z", "M12 4v3"],
  esg: ["M12 3a9 9 0 100 18 9 9 0 000-18z", "M3.5 9h17M3.5 15h17", "M12 3c2.5 2.4 3.8 5.6 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3z"],
};

const groupIconPaths: Record<string, string[]> = {
  Treinamentos: ["M3 8.5L12 4l9 4.5-9 4.5-9-4.5z", "M7 10.8V15c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-4.2", "M21 8.5V14"],
  "Serviços": ["M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z", "M19.4 13a7.6 7.6 0 000-2l1.8-1.4-1.8-3.1-2.1.9a7.6 7.6 0 00-1.7-1l-.3-2.3H9.7l-.3 2.3a7.6 7.6 0 00-1.7 1l-2.1-.9L3.8 9.6 5.6 11a7.6 7.6 0 000 2l-1.8 1.4 1.8 3.1 2.1-.9c.5.4 1.1.7 1.7 1l.3 2.3h4.6l.3-2.3c.6-.3 1.2-.6 1.7-1l2.1.9 1.8-3.1L19.4 13z"],
  Auditorias: ["M8 3h6l4 4v14H6V3h2z", "M14 3v4h4", "M9 12.5l1.8 1.8L15 10.5"],
  Metodologia: ["M6 4v10", "M6 20a3 3 0 100-6 3 3 0 000 6z", "M18 10a3 3 0 100-6 3 3 0 000 6z", "M18 10v2a4 4 0 01-4 4H9"],
  "Nossa atuação": ["M12 3a9 9 0 100 18 9 9 0 000-18z", "M14.5 9.5l-1.2 3.8-3.8 1.2 1.2-3.8 3.8-1.2z"],
};

function renderIcon(paths: string[] | undefined) {
  if (!paths) return null;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths.map((d, i) => (
        <path d={d} key={i} />
      ))}
    </svg>
  );
}

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
    color-scheme: light;
    --bg: #ffffff;
    --bg-warm: #faf6f2;
    --bg-tint: #fbf2f2;
    --panel: #ffffff;
    --panel-warm: #fdfaf7;
    --ink: #2b1a1e;
    --text: #3f2e31;
    --muted: #7a6a66;
    --wine: #a12f47;
    --wine-strong: #7f2135;
    --wine-soft: #f7e8ea;
    --gold: #c2963a;
    --gold-soft: #f4e8cd;
    --line: rgba(127, 33, 53, 0.14);
    --line-strong: rgba(127, 33, 53, 0.3);
    --line-soft: rgba(43, 26, 30, 0.08);
    --shadow-sm: 0 10px 26px rgba(72, 24, 34, 0.06);
    --shadow: 0 26px 60px rgba(72, 24, 34, 0.1);
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
      radial-gradient(circle at top left, rgba(161, 47, 71, 0.06), transparent 34%),
      radial-gradient(circle at top right, rgba(194, 150, 58, 0.07), transparent 36%),
      linear-gradient(180deg, #ffffff 0%, #faf6f2 100%);
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
    background: var(--wine-soft);
    color: var(--wine-strong);
    font-size: 0.88rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .badge::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--wine));
    box-shadow: 0 0 16px rgba(161, 47, 71, 0.35);
  }

  .kicker {
    margin: 0 0 12px;
    color: var(--wine);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.84rem;
    font-weight: 600;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  .title-xl {
    font-size: clamp(2.3rem, 4.8vw, 4.1rem);
    line-height: 1;
    letter-spacing: -0.04em;
    max-width: 20ch;
    color: var(--ink);
  }

  .title-lg {
    font-size: clamp(2rem, 4.2vw, 3.3rem);
    line-height: 1.04;
    letter-spacing: -0.03em;
    color: var(--ink);
  }

  .lead {
    margin-top: 16px;
    color: var(--muted);
    font-size: clamp(0.96rem, 1.15vw, 1.05rem);
    line-height: 1.66;
    max-width: 56ch;
  }

  .hero {
    position: relative;
    min-height: 100svh;
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background:
      radial-gradient(circle at 82% 12%, rgba(194, 150, 58, 0.08), transparent 30%),
      radial-gradient(circle at 6% 90%, rgba(161, 47, 71, 0.06), transparent 32%);
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        60deg,
        rgba(127, 33, 53, 0.04) 0,
        rgba(127, 33, 53, 0.04) 1px,
        transparent 1px,
        transparent 128px
      ),
      repeating-linear-gradient(
        -60deg,
        rgba(127, 33, 53, 0.04) 0,
        rgba(127, 33, 53, 0.04) 1px,
        transparent 1px,
        transparent 128px
      );
    opacity: 0.7;
    pointer-events: none;
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
    letter-spacing: 0.02em;
    color: var(--ink);
  }

  .brand-mark {
    width: 46px;
    height: 46px;
    border-radius: 16px;
    display: grid;
    place-items: center;
    overflow: hidden;
    background: linear-gradient(145deg, var(--gold-soft), var(--wine-soft));
    border: 1px solid var(--line);
    box-shadow: var(--shadow-sm);
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
    color: var(--wine);
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
    color: var(--wine-strong);
    border-color: var(--line);
    background: #fff;
  }

  .nav-button-secondary:hover {
    border-color: var(--line-strong);
  }

  .nav-button-primary {
    color: #fff;
    background: linear-gradient(135deg, var(--wine), var(--wine-strong));
    box-shadow: 0 14px 30px rgba(127, 33, 53, 0.24);
  }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.98fr) minmax(300px, 0.8fr);
    gap: clamp(14px, 2vw, 26px);
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
    background: linear-gradient(135deg, #fff7f0 0%, #f0cf93 55%, #c78739 100%);
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
    padding: 0 22px;
    border-radius: 999px;
    border: 1px solid transparent;
    font-weight: 600;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  .button:hover {
    transform: translateY(-1px);
  }

  .button-primary {
    background: linear-gradient(135deg, var(--wine), var(--wine-strong));
    color: #fff;
    box-shadow: 0 18px 40px rgba(127, 33, 53, 0.26);
  }

  .button-secondary {
    border-color: var(--line);
    background: #fff;
    color: var(--wine-strong);
  }

  .button-secondary:hover {
    border-color: var(--line-strong);
  }

  .hero-note {
    margin-top: 18px;
    color: var(--muted);
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
    border: 1px solid var(--line);
    background:
      radial-gradient(circle at top right, rgba(194, 150, 58, 0.1), transparent 32%),
      linear-gradient(180deg, #ffffff, #faf1ee);
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
    background: linear-gradient(180deg, #ffffff 0%, #f6ebe8 100%);
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
  }

  .hero-monitor-bezel {
    overflow: hidden;
    border-radius: 16px;
    background: #fff;
    border: 1px solid var(--line-soft);
  }

  .hero-monitor-topbar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 10px 14px;
    background: var(--bg-warm);
    border-bottom: 1px solid var(--line-soft);
  }

  .hero-monitor-dots {
    display: flex;
    gap: 8px;
  }

  .hero-monitor-dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(161, 47, 71, 0.35);
  }

  .hero-screen {
    display: grid;
    grid-template-columns: 80px minmax(0, 1fr);
    min-height: 256px;
    background: linear-gradient(180deg, #ffffff 0%, #fdf8f6 100%);
  }

  .hero-sidebar {
    padding: 12px 10px;
    border-right: 1px solid var(--line-soft);
    background: var(--bg-warm);
  }

  .hero-sidebar-badge {
    height: 38px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    overflow: hidden;
    margin-bottom: 12px;
    color: var(--wine);
    font-weight: 700;
    background: linear-gradient(135deg, var(--gold-soft), var(--wine-soft));
    border: 1px solid var(--line);
  }

  .hero-sidebar-item {
    height: 10px;
    margin-bottom: 10px;
    border-radius: 999px;
    background: rgba(127, 33, 53, 0.1);
  }

  .hero-sidebar-item:nth-child(3) { width: 82%; }
  .hero-sidebar-item:nth-child(4) { width: 70%; }
  .hero-sidebar-item:nth-child(5) { width: 88%; }

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
    color: var(--ink);
    font-size: 0.9rem;
    font-weight: 700;
  }

  .hero-system-preview {
    position: relative;
    min-height: 132px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px dashed var(--line-strong);
    background:
      linear-gradient(135deg, rgba(194, 150, 58, 0.08), transparent 52%),
      linear-gradient(180deg, #fdf7f5, #f8ece9);
  }

  .hero-system-preview::before {
    content: "";
    position: absolute;
    inset: 10px;
    border-radius: 12px;
    border: 1px solid var(--line-soft);
    background:
      linear-gradient(90deg, rgba(127, 33, 53, 0.06) 0, rgba(127, 33, 53, 0.06) 1px, transparent 1px, transparent 56px),
      linear-gradient(180deg, rgba(127, 33, 53, 0.06) 0, rgba(127, 33, 53, 0.06) 1px, transparent 1px, transparent 56px);
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
    border: 1px solid var(--line-soft);
    background: var(--bg-warm);
  }

  .hero-system-card strong {
    display: block;
    color: var(--ink);
    font-size: 0.88rem;
    margin-bottom: 6px;
  }

  .hero-system-card span {
    display: block;
    color: var(--muted);
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
    background: rgba(127, 33, 53, 0.12);
  }

  .hero-system-lines span:nth-child(2) { width: 84%; }
  .hero-system-lines span:nth-child(3) { width: 68%; }

  .hero-monitor-stand {
    position: relative;
    width: 130px;
    height: 14px;
    margin: 0 auto;
    background: linear-gradient(180deg, #e7d3ce, #d3b6b0);
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
    background: linear-gradient(180deg, #e7d3ce, #d3b6b0);
    border-radius: 0 0 12px 12px;
  }

  .hero-monitor-base {
    width: 176px;
    height: 10px;
    margin: 8px auto 0;
    border-radius: 999px;
    background: linear-gradient(180deg, #e2cbc5, #cdaea7);
    box-shadow: var(--shadow-sm);
  }

  .ticker {
    margin-top: 8px;
    overflow: hidden;
    padding: 10px 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: var(--bg-warm);
  }

  .ticker-track {
    display: flex;
    width: max-content;
    gap: 16px;
    color: var(--wine-strong);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.84rem;
    font-weight: 600;
    animation: ticker-move 26s linear infinite;
  }

  .ticker-item {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    white-space: nowrap;
  }

  .ticker-item::after {
    content: "+";
    color: var(--gold);
  }

  @keyframes ticker-move {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .contact-card,
  .contact-form,
  .showcase-panel,
  .process-step {
    border-radius: var(--radius-lg);
    border: 1px solid var(--line);
    background: var(--panel);
    box-shadow: var(--shadow-sm);
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
    background: linear-gradient(90deg, transparent, var(--line-strong), transparent);
  }

  .method-intro {
    display: block;
    margin-bottom: 18px;
  }

  .method-header {
    margin-bottom: 0;
  }

  .method-section {
    background: var(--bg-warm);
    color: var(--ink);
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
    max-width: 52ch;
    margin-left: auto;
    margin-right: auto;
    color: var(--ink);
    font-size: clamp(1.5rem, 1.95vw, 2.05rem);
    line-height: 1.08;
    text-wrap: balance;
  }

  .method-header .lead {
    color: var(--muted);
    max-width: 66ch;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.98rem;
    line-height: 1.5;
  }

  .method-classic-section {
    background: var(--bg-warm);
    color: var(--ink);
    padding: 58px 0 28px;
  }

  .method-classic-intro {
    max-width: 1100px;
    margin: 0 auto 24px;
    text-align: center;
  }

  .method-classic-intro .title-lg {
    max-width: 52ch;
    margin-left: auto;
    margin-right: auto;
    color: var(--ink);
    font-size: clamp(1.5rem, 1.95vw, 2.05rem);
    line-height: 1.08;
    text-wrap: balance;
  }

  .method-classic-intro .lead {
    color: var(--muted);
    max-width: 66ch;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.98rem;
    line-height: 1.5;
  }

  .method-classic-showcase {
    position: relative;
    display: grid;
    grid-template-columns: 260px minmax(0, 1fr);
    gap: 24px;
    padding: 32px 34px;
    max-width: 1120px;
    margin: 0 auto;
    border-radius: 32px;
    border: 1px solid var(--line);
    background: var(--panel);
    box-shadow: var(--shadow);
    overflow: hidden;
  }

  .method-classic-nav,
  .method-classic-stage {
    position: relative;
    z-index: 1;
  }

  .method-classic-nav {
    display: grid;
    gap: 8px;
    align-content: center;
    align-self: center;
    min-height: 100%;
    padding: 0;
  }

  .method-classic-tab {
    width: 100%;
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 12px;
    align-items: center;
    padding: 12px 14px;
    border-radius: 16px;
    border: 1px solid transparent;
    background: var(--bg-warm);
    color: inherit;
    text-align: left;
    position: relative;
    cursor: pointer;
    transition: background 0.22s ease, border-color 0.22s ease, transform 0.22s ease;
  }

  .method-classic-tab:hover {
    transform: translateX(2px);
    border-color: var(--line);
  }

  .method-classic-tab-active {
    background: var(--wine-soft);
    border-color: var(--line-strong);
  }

  .method-classic-tab-num {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    font-weight: 800;
    font-size: 0.9rem;
    color: var(--wine);
    background: #fff;
    border: 1px solid var(--line);
  }

  .method-classic-tab-active .method-classic-tab-num {
    color: #fff;
    background: linear-gradient(135deg, var(--wine), var(--wine-strong));
    border-color: transparent;
  }

  .method-classic-tab-copy strong,
  .method-classic-tab-copy small {
    display: block;
  }

  .method-classic-tab-copy strong {
    font-size: 0.92rem;
    line-height: 1.15;
    color: var(--ink);
  }

  .method-classic-tab-copy small {
    margin-top: 3px;
    color: var(--muted);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .method-classic-stage {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 0.66fr);
    grid-template-areas:
      "copy visual"
      "footer footer";
    gap: 28px;
    align-items: center;
    padding-top: 4px;
  }

  .method-classic-copy {
    grid-area: copy;
    color: var(--ink);
  }

  .method-classic-step {
    display: grid;
    gap: 6px;
    margin-top: 0;
  }

  .method-classic-step strong {
    font-size: clamp(1.6rem, 2.4vw, 2.2rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    max-width: 18ch;
    color: var(--ink);
  }

  .method-classic-description {
    margin-top: 12px;
    color: var(--muted);
    font-size: 0.98rem;
    line-height: 1.64;
    max-width: 46ch;
  }

  .method-classic-points {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
  }

  .method-classic-point {
    padding: 8px 12px;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: var(--wine-soft);
    color: var(--wine-strong);
    font-size: 0.8rem;
    font-weight: 500;
  }

  .method-classic-visual {
    grid-area: visual;
    position: relative;
    min-height: 300px;
    border-radius: 26px;
    overflow: hidden;
    background:
      radial-gradient(circle at top right, rgba(194, 150, 58, 0.14), transparent 26%),
      linear-gradient(160deg, var(--wine-soft), #fff);
    border: 1px solid var(--line);
  }

  .method-classic-screen,
  .method-classic-card,
  .method-classic-orb {
    position: absolute;
  }

  .method-classic-screen {
    inset: 22px;
    padding: 22px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.86);
    border: 1px solid var(--line);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: var(--shadow-sm);
  }

  .method-classic-screen-badge {
    display: inline-flex;
    padding: 7px 10px;
    border-radius: 999px;
    background: var(--gold-soft);
    color: var(--wine-strong);
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .method-classic-screen strong {
    display: block;
    margin-top: 14px;
    font-size: 1.14rem;
    line-height: 1.12;
    color: var(--ink);
    max-width: 14ch;
  }

  .method-classic-lines {
    display: grid;
    gap: 8px;
    margin-top: 14px;
  }

  .method-classic-lines span {
    display: block;
    height: 6px;
    border-radius: 999px;
    background: rgba(127, 33, 53, 0.16);
  }

  .method-classic-lines span:nth-child(2) { width: 82%; }
  .method-classic-lines span:nth-child(3) { width: 68%; }

  .method-classic-card {
    border-radius: 18px;
    background: linear-gradient(180deg, #ffffff, #f6ece8);
    box-shadow: 0 14px 28px rgba(72, 24, 34, 0.12);
    border: 1px solid var(--line-soft);
  }

  .method-classic-card-c {
    width: 54px;
    height: 54px;
    right: 16px;
    top: 16px;
    border-radius: 50%;
    background: linear-gradient(180deg, var(--gold), var(--wine));
    border: none;
  }

  .method-classic-orb {
    width: 90px;
    height: 90px;
    right: -10px;
    bottom: -12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(161, 47, 71, 0.18), transparent 68%);
    filter: blur(8px);
  }

  .method-classic-footer {
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;
    min-height: 40px;
  }

  .method-classic-footer p {
    display: none;
  }

  .method-classic-progress {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .method-classic-progress span {
    width: 34px;
    height: 6px;
    border-radius: 999px;
    background: rgba(127, 33, 53, 0.14);
    transition: width 0.24s ease, background 0.24s ease;
  }

  .method-classic-progress-active {
    width: 56px !important;
    background: linear-gradient(90deg, var(--wine), var(--gold)) !important;
  }

  /* ===== Services (areas) ===== */
  .services-section {
    background: var(--bg);
    color: var(--ink);
    padding: 62px 0;
  }

  .services-header {
    text-align: center;
    max-width: 860px;
    margin: 0 auto 26px;
  }

  .services-header .title-lg {
    margin-left: auto;
    margin-right: auto;
    max-width: none;
    font-size: clamp(1.4rem, 2.1vw, 1.85rem);
    line-height: 1.12;
    text-wrap: balance;
  }

  .services-header .lead {
    margin-left: auto;
    margin-right: auto;
    font-size: 0.94rem;
    line-height: 1.55;
    max-width: 74ch;
  }

  .services-shell {
    display: grid;
    grid-template-columns: 232px minmax(0, 1fr);
    gap: 18px;
    align-items: start;
    max-width: 1040px;
    margin: 0 auto;
  }

  .services-tabs {
    display: grid;
    gap: 10px;
    position: sticky;
    top: 18px;
  }

  .services-tab {
    display: grid;
    grid-template-columns: 38px 1fr;
    gap: 12px;
    align-items: center;
    padding: 12px 14px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: var(--panel);
    color: inherit;
    text-align: left;
    cursor: pointer;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  }

  .services-tab:hover {
    transform: translateX(3px);
    border-color: var(--line-strong);
    box-shadow: var(--shadow-sm);
  }

  .services-tab-active {
    background: linear-gradient(135deg, var(--wine), var(--wine-strong));
    border-color: transparent;
    box-shadow: 0 16px 34px rgba(127, 33, 53, 0.24);
  }

  .services-tab-ico {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    color: var(--wine);
    background: var(--wine-soft);
    border: 1px solid var(--line);
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }

  .services-tab-ico svg {
    width: 20px;
    height: 20px;
  }

  .services-tab-active .services-tab-ico {
    color: #fff;
    background: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.22);
  }

  .services-tab-text {
    display: grid;
    gap: 3px;
    min-width: 0;
  }

  .services-tab-chip {
    justify-self: start;
    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--wine);
    white-space: nowrap;
  }

  .services-tab-active .services-tab-chip {
    color: rgba(255, 244, 246, 0.8);
  }

  .services-tab strong {
    font-size: 0.86rem;
    line-height: 1.18;
    color: var(--ink);
  }

  .services-tab-active strong {
    color: #fff;
  }

  .services-panel {
    position: relative;
    border-radius: 24px;
    border: 1px solid var(--line);
    background:
      radial-gradient(circle at 100% 0, rgba(194, 150, 58, 0.08), transparent 24%),
      var(--panel);
    box-shadow: var(--shadow);
    padding: clamp(20px, 2.4vw, 30px);
    overflow: hidden;
  }

  .services-panel-orb {
    position: absolute;
    right: -60px;
    top: -60px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(161, 47, 71, 0.1), transparent 68%);
    pointer-events: none;
  }

  .services-panel-head {
    position: relative;
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 4px;
  }

  .services-panel-ico {
    width: 52px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 16px;
    display: grid;
    place-items: center;
    color: #fff;
    background: linear-gradient(140deg, var(--wine), var(--wine-strong));
    box-shadow: 0 14px 28px rgba(127, 33, 53, 0.22);
  }

  .services-panel-ico svg {
    width: 26px;
    height: 26px;
  }

  .services-panel-headcopy {
    display: grid;
    gap: 4px;
  }

  .services-panel-tag {
    justify-self: start;
    font-size: 0.66rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--wine);
  }

  .services-panel h3 {
    font-size: clamp(1.2rem, 1.9vw, 1.6rem);
    letter-spacing: -0.02em;
    color: var(--ink);
    max-width: 26ch;
    line-height: 1.12;
  }

  .services-panel-lead {
    position: relative;
    margin-top: 12px;
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.55;
    max-width: 66ch;
  }

  .services-groups {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 20px;
    align-items: start;
  }

  .services-group {
    border: 1px solid var(--line);
    border-radius: 16px;
    background: linear-gradient(180deg, #ffffff, var(--bg-warm));
    padding: 14px 15px 15px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .services-group:hover {
    transform: translateY(-3px);
    border-color: var(--line-strong);
    box-shadow: var(--shadow-sm);
  }

  .services-group-head {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 9px;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--line);
  }

  .services-group-ico {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 9px;
    display: grid;
    place-items: center;
    color: var(--wine);
    background: var(--wine-soft);
  }

  .services-group-ico svg {
    width: 16px;
    height: 16px;
  }

  .services-group-label {
    flex: 1;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--wine-strong);
  }

  .services-group-count {
    flex-shrink: 0;
    min-width: 22px;
    height: 22px;
    padding: 0 7px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--gold);
    background: var(--gold-soft);
  }

  .services-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    column-gap: 22px;
    row-gap: 9px;
    margin: 0;
    padding: 0;
  }

  .services-list li {
    position: relative;
    list-style: none;
    padding-left: 22px;
    color: var(--text);
    font-size: 0.8rem;
    line-height: 1.4;
  }

  .services-list li::before {
    content: "";
    position: absolute;
    left: 1px;
    top: 1px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background:
      linear-gradient(135deg, var(--gold), var(--wine));
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12.5l4 4 10-10'/%3E%3C/svg%3E") center / 11px 11px no-repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12.5l4 4 10-10'/%3E%3C/svg%3E") center / 11px 11px no-repeat;
  }

  /* ===== PEOTRAM break banner ===== */
  .method-break-section {
    background: var(--bg);
    color: var(--ink);
    padding: 24px 0;
  }

  .method-break-fullbleed {
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }

  .method-break-banner {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.86fr);
    gap: clamp(24px, 4vw, 48px);
    align-items: center;
    min-height: min(56vh, 460px);
    padding: clamp(28px, 3.4vw, 44px) clamp(28px, 4.8vw, 56px);
    overflow: hidden;
    background:
      radial-gradient(circle at 18% 50%, rgba(194, 150, 58, 0.14), transparent 26%),
      linear-gradient(135deg, #3f0d1a 0%, #641827 55%, #380b16 100%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }

  .method-break-banner::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(60deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 120px);
    pointer-events: none;
  }

  .method-break-copy,
  .method-break-visual {
    position: relative;
    z-index: 1;
  }

  .method-break-copy {
    max-width: 620px;
    color: #fff6f7;
  }

  .method-break-copy .kicker {
    color: rgba(255, 240, 220, 0.85);
  }

  .method-break-copy .title-lg {
    max-width: 18ch;
    font-size: clamp(1.9rem, 3.2vw, 3.1rem);
    line-height: 1;
    color: #ffffff;
  }

  .method-break-copy .lead {
    max-width: 52ch;
    color: rgba(255, 244, 240, 0.92);
    font-size: 0.98rem;
    line-height: 1.6;
  }

  .method-break-quote {
    margin-top: 18px;
    padding: 14px 18px;
    border-left: 3px solid var(--gold);
    background: rgba(255, 255, 255, 0.08);
    border-radius: 0 14px 14px 0;
    color: #fff;
    font-style: italic;
    font-size: 0.95rem;
    line-height: 1.55;
    max-width: 54ch;
  }

  .method-break-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 22px;
  }

  .method-break-button {
    min-height: 44px;
    padding: 0 18px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border: 1px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .method-break-button:hover {
    transform: translateY(-1px);
  }

  .method-break-button-primary {
    background: linear-gradient(135deg, #f3e6c8, var(--gold));
    color: #4a2411;
    box-shadow: 0 14px 26px rgba(0, 0, 0, 0.18);
  }

  .method-break-button-secondary {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.4);
    color: #fff;
  }

  .method-break-visual {
    min-height: 250px;
    display: grid;
    place-items: center;
  }

  .method-break-figure {
    position: relative;
    width: min(100%, 320px);
    aspect-ratio: 1;
  }

  .method-break-shield {
    position: absolute;
    inset: 8% 12% 14% 12%;
    border-radius: 38% 38% 44% 44% / 24% 24% 58% 58%;
    border: 10px solid rgba(255, 245, 225, 0.92);
    background: rgba(255, 255, 255, 0.06);
    box-shadow:
      inset 0 0 0 1px rgba(255, 245, 231, 0.16),
      0 0 40px rgba(243, 230, 200, 0.24);
  }

  .method-break-shield::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 20%;
    width: 22%;
    height: 40%;
    border-radius: 999px;
    background: rgba(255, 245, 225, 0.96);
    transform: translateX(-50%);
  }

  .method-break-shield::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 46%;
    width: 52%;
    height: 12px;
    border-radius: 999px;
    background: rgba(255, 245, 225, 0.96);
    transform: translateX(-50%);
  }

  .method-break-card {
    position: absolute;
    display: grid;
    gap: 6px;
    padding: 12px 14px;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.24);
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
    box-shadow: 0 16px 36px rgba(50, 12, 22, 0.28);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .method-break-card strong {
    font-size: 0.78rem;
    color: #f7e6c8;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .method-break-card span {
    font-size: 0.82rem;
    line-height: 1.4;
    color: rgba(255, 246, 240, 0.9);
  }

  .method-break-card-a { top: 6%; left: 2%; max-width: 165px; }
  .method-break-card-b { right: -2%; bottom: 10%; max-width: 175px; }

  .method-break-badge {
    position: absolute;
    right: 10%;
    top: 10%;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: #4a2411;
    font-weight: 800;
    font-size: 0.74rem;
    text-transform: uppercase;
    background: linear-gradient(180deg, #f7e6c8, var(--gold));
    box-shadow: 0 20px 34px rgba(0, 0, 0, 0.2);
  }

  .method-break-badge::before { content: "ADT"; }

  /* ===== Orbit method ===== */
  .method-showcase {
    position: relative;
    padding: clamp(24px, 4vw, 36px);
    max-width: 1120px;
    margin: 0 auto;
    border-radius: 40px;
    border: 1px solid var(--line);
    background:
      radial-gradient(circle at 20% 50%, rgba(194, 150, 58, 0.1), transparent 22%),
      radial-gradient(circle at 74% 18%, rgba(161, 47, 71, 0.08), transparent 26%),
      var(--panel);
    box-shadow: var(--shadow);
    overflow: hidden;
  }

  .method-showcase-shell,
  .method-showcase-orbit,
  .method-showcase-panel {
    position: relative;
    z-index: 1;
  }

  .method-showcase-shell {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.92fr);
    gap: clamp(24px, 4vw, 40px);
    align-items: center;
  }

  .method-showcase-orbit {
    min-height: 420px;
    display: grid;
    place-items: center;
  }

  .method-showcase-orbit::before,
  .method-showcase-orbit::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 1px solid var(--line);
  }

  .method-showcase-orbit::before {
    width: min(100%, 420px);
    aspect-ratio: 1;
  }

  .method-showcase-orbit::after {
    width: min(100%, 320px);
    aspect-ratio: 1;
  }

  .method-showcase-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid var(--line-soft);
  }

  .method-showcase-ring-a { width: min(100%, 500px); aspect-ratio: 1; }
  .method-showcase-ring-b { width: min(100%, 246px); aspect-ratio: 1; }

  .method-showcase-spark {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 18px rgba(194, 150, 58, 0.7);
  }

  .method-showcase-spark-a { top: 22%; right: 18%; }
  .method-showcase-spark-b {
    left: 16%;
    bottom: 18%;
    width: 8px;
    height: 8px;
    background: var(--wine);
    box-shadow: 0 0 16px rgba(161, 47, 71, 0.6);
  }

  .method-showcase-photo {
    position: relative;
    z-index: 1;
    pointer-events: none;
    width: min(100%, 236px);
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 10px;
    background: linear-gradient(180deg, #ffffff, #f6ece8);
    box-shadow: var(--shadow);
  }

  .method-showcase-photo::before {
    content: "";
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    border: 1px solid var(--line);
    pointer-events: none;
  }

  .method-showcase-photo-placeholder {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px dashed var(--line-strong);
    background:
      radial-gradient(circle at 30% 30%, rgba(194, 150, 58, 0.14), transparent 28%),
      linear-gradient(180deg, var(--wine-soft), #fff);
    display: grid;
    place-items: center;
    text-align: center;
    color: var(--wine-strong);
    font-size: 0.86rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .method-showcase-photo-placeholder span {
    display: block;
    max-width: 12ch;
    line-height: 1.4;
  }

  .method-showcase-tab {
    position: absolute;
    z-index: 4;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: inherit;
    text-align: left;
    cursor: pointer;
    transition: transform 0.22s ease, opacity 0.22s ease;
    opacity: 0.82;
  }

  .method-showcase-tab:hover,
  .method-showcase-tab-active {
    opacity: 1;
    transform: scale(1.02);
  }

  .method-showcase-tab-top { top: 14px; left: 50%; transform: translateX(-50%); }
  .method-showcase-tab-top:hover,
  .method-showcase-tab-top.method-showcase-tab-active { transform: translateX(-50%) scale(1.02); }

  .method-showcase-tab-left { left: 0; top: 50%; transform: translateY(-50%); }
  .method-showcase-tab-left:hover,
  .method-showcase-tab-left.method-showcase-tab-active { transform: translateY(-50%) scale(1.02); }

  .method-showcase-tab-right { right: 0; top: 50%; transform: translateY(-50%); }
  .method-showcase-tab-right:hover,
  .method-showcase-tab-right.method-showcase-tab-active { transform: translateY(-50%) scale(1.02); }

  .method-showcase-tab-bottom { bottom: 14px; left: 50%; transform: translateX(-50%); }
  .method-showcase-tab-bottom:hover,
  .method-showcase-tab-bottom.method-showcase-tab-active { transform: translateX(-50%) scale(1.02); }

  .method-showcase-tab-reverse {
    flex-direction: row-reverse;
    text-align: right;
  }

  .method-showcase-tab-dot {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border: 1px solid var(--line);
    background: #fff;
    color: var(--wine);
    box-shadow: var(--shadow-sm);
    transition: background 0.22s ease, color 0.22s ease, box-shadow 0.22s ease;
  }

  .method-showcase-tab-active .method-showcase-tab-dot {
    background: linear-gradient(180deg, var(--wine), var(--wine-strong));
    color: #fff;
    box-shadow:
      0 0 0 8px rgba(161, 47, 71, 0.12),
      0 14px 28px rgba(127, 33, 53, 0.24);
  }

  .method-showcase-tab-dot span {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid currentColor;
    position: relative;
  }

  .method-showcase-tab-dot span::before {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 999px;
    background: currentColor;
  }

  .method-showcase-tab-copy {
    display: grid;
    gap: 3px;
    padding: 6px 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid var(--line);
    box-shadow: var(--shadow-sm);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  .method-showcase-tab-copy strong,
  .method-showcase-tab-copy small {
    display: block;
  }

  .method-showcase-tab-copy strong {
    font-size: 0.72rem;
    line-height: 1.02;
    color: var(--ink);
    text-transform: uppercase;
    letter-spacing: 0.14em;
  }

  .method-showcase-tab-copy small {
    color: var(--muted);
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .method-showcase-panel {
    padding: clamp(24px, 3vw, 34px);
    border-radius: 34px;
    background: var(--bg-warm);
    border: 1px solid var(--line);
    box-shadow: var(--shadow-sm);
  }

  .method-showcase-panel-header {
    display: grid;
    gap: 14px;
  }

  .method-showcase-kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--wine);
    font-size: 0.72rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    font-weight: 600;
  }

  .method-showcase-kicker::before {
    content: "";
    width: 22px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--wine), var(--gold));
  }

  .method-showcase-heading {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }

  .method-showcase-icon {
    width: 54px;
    height: 54px;
    flex-shrink: 0;
    border-radius: 18px;
    display: grid;
    place-items: center;
    background: linear-gradient(180deg, var(--wine), var(--wine-strong));
    box-shadow: 0 14px 26px rgba(127, 33, 53, 0.22);
  }

  .method-showcase-icon span {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #fff;
    position: relative;
  }

  .method-showcase-icon span::before {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: #fff;
  }

  .method-showcase-step {
    display: grid;
    gap: 12px;
    margin-top: 0;
  }

  .method-showcase-step strong {
    font-size: clamp(1.7rem, 2.6vw, 2.6rem);
    line-height: 1.06;
    letter-spacing: -0.03em;
    max-width: 16ch;
    color: var(--ink);
  }

  .method-showcase-description {
    margin-top: 0;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.72;
    max-width: 44ch;
  }

  .method-showcase-points {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 22px;
  }

  .method-showcase-point {
    padding: 8px 14px;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: var(--wine-soft);
    color: var(--wine-strong);
    font-size: 0.76rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: 500;
  }

  .method-showcase-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-top: 28px;
    padding-top: 22px;
    border-top: 1px solid var(--line);
  }

  .method-showcase-footer p {
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.6;
    max-width: 28ch;
  }

  .method-showcase-progress {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .method-showcase-progress span {
    width: 26px;
    height: 6px;
    border-radius: 999px;
    background: rgba(127, 33, 53, 0.14);
    transition: width 0.24s ease, background 0.24s ease;
  }

  .method-showcase-progress-active {
    width: 48px !important;
    background: linear-gradient(90deg, var(--wine), var(--gold)) !important;
  }

  /* ===== Benefits ===== */
  .benefits-section {
    background: var(--bg-warm);
    color: var(--ink);
    padding: 64px 0 72px;
  }

  .benefits-section .kicker {
    color: var(--wine);
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
    font-size: clamp(1.9rem, 3.4vw, 2.7rem);
    line-height: 1.06;
    max-width: 20ch;
    color: var(--ink);
    text-wrap: balance;
  }

  .benefits-header .lead {
    color: var(--muted);
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
    min-height: 360px;
    padding: 0;
    overflow: hidden;
    border-radius: 26px;
    border: 1px solid var(--line);
    background: var(--panel);
    box-shadow: var(--shadow-sm);
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    transition: transform 0.26s ease, box-shadow 0.32s ease, border-color 0.28s ease;
    z-index: 2;
  }

  .showcase-panel:hover {
    transform: translateY(-8px);
    border-color: var(--line-strong);
    box-shadow: var(--shadow);
  }

  .showcase-panel:hover .benefit-scene {
    transform: scale(1.03);
  }

  .showcase-index,
  .benefit-index {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 3;
    color: #fff;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .showcase-copy {
    position: static;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 18px 18px 20px;
    background: var(--panel);
  }

  .showcase-title {
    color: var(--ink);
    font-size: 1.08rem;
    line-height: 1.16;
    max-width: 16ch;
  }

  .showcase-description {
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 26ch;
  }

  .benefit-scene {
    position: relative;
    height: 190px;
    flex-shrink: 0;
    overflow: hidden;
    background:
      radial-gradient(circle at top right, rgba(194, 150, 58, 0.24), transparent 34%),
      linear-gradient(145deg, var(--wine), var(--wine-strong));
    transition: transform 0.26s ease;
  }

  .benefit-scene::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.14));
  }

  .benefit-scene-glow {
    position: absolute;
    inset: auto auto 10% 8%;
    width: 54%;
    height: 44%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(243, 230, 200, 0.28), transparent 70%);
    filter: blur(8px);
  }

  .benefit-scene-card {
    position: absolute;
    border-radius: 14px;
    background: linear-gradient(180deg, #ffffff, #f3e6df);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);
  }

  .benefit-scene-card-a { inset: 20% 20% 20% 14%; }
  .benefit-scene-card-b { inset: 34% 14% 18% 36%; opacity: 0.82; }
  .benefit-scene-card-c { inset: 18% 46% 44% 18%; opacity: 0.78; }

  .benefit-scene-card::before,
  .benefit-scene-card::after {
    content: "";
    position: absolute;
    left: 16%;
    right: 16%;
    height: 6px;
    border-radius: 999px;
    background: rgba(127, 33, 53, 0.18);
  }

  .benefit-scene-card::before {
    top: 20%;
    box-shadow: 0 16px 0 rgba(127, 33, 53, 0.12), 0 32px 0 rgba(127, 33, 53, 0.12);
  }

  .benefit-scene-card::after { top: 70%; right: 34%; }

  .benefit-scene-chip {
    position: absolute;
    border-radius: 999px;
    background: var(--gold);
    box-shadow: 0 10px 24px rgba(120, 80, 20, 0.24);
  }

  .benefit-scene-chip-a { width: 48px; height: 48px; right: 14%; top: 16%; }
  .benefit-scene-chip-b {
    width: 70px;
    height: 9px;
    left: 18%;
    bottom: 18%;
    background: rgba(255, 245, 225, 0.8);
    box-shadow: none;
  }
  .benefit-scene-chip-c { display: none; }

  .benefit-scene-legal .benefit-scene-card-a { inset: 16% 22% 18% 18%; transform: rotate(-6deg); }
  .benefit-scene-legal .benefit-scene-card-b { inset: 34% 12% 18% 42%; transform: rotate(6deg); }
  .benefit-scene-legal .benefit-scene-chip-a {
    width: 50px; height: 50px; right: 16%; bottom: 18%; top: auto;
    border-radius: 50%; display: grid; place-items: center; color: #4a2411; font-weight: 800;
  }
  .benefit-scene-legal .benefit-scene-chip-a::before { content: "OK"; font-size: 0.72rem; }

  .benefit-scene-evidence .benefit-scene-card-a,
  .benefit-scene-evidence .benefit-scene-card-b,
  .benefit-scene-evidence .benefit-scene-card-c { inset: 20% 18% 18% 18%; }
  .benefit-scene-evidence .benefit-scene-card-a { transform: rotate(-9deg) translate(-12px, 12px); }
  .benefit-scene-evidence .benefit-scene-card-b { transform: rotate(7deg) translate(16px, 6px); }
  .benefit-scene-evidence .benefit-scene-card-c { transform: rotate(-1deg); }

  .benefit-scene-dashboard .benefit-scene-card-a {
    inset: 20% 14% 20% 14%;
    background: linear-gradient(180deg, #ffffff, #f6ece8);
  }
  .benefit-scene-dashboard .benefit-scene-card-a::before,
  .benefit-scene-dashboard .benefit-scene-card-a::after {
    left: 12%; right: 46%;
    background: rgba(161, 47, 71, 0.4);
    box-shadow: 0 18px 0 rgba(194, 150, 58, 0.4), 54px 0 0 rgba(161, 47, 71, 0.24);
  }
  .benefit-scene-dashboard .benefit-scene-card-b { display: none; }
  .benefit-scene-dashboard .benefit-scene-card-c {
    width: 48px; height: 48px; inset: 16% 12% auto auto; border-radius: 50%;
    background: conic-gradient(from 90deg, var(--gold), var(--wine), var(--gold));
  }
  .benefit-scene-dashboard .benefit-scene-card-c::before,
  .benefit-scene-dashboard .benefit-scene-card-c::after,
  .benefit-scene-dashboard .benefit-scene-chip-a,
  .benefit-scene-dashboard .benefit-scene-chip-b { display: none; }

  .benefit-scene-alerts .benefit-scene-card-a {
    inset: 20% 16% 28% 16%;
    background: linear-gradient(180deg, #ffffff, #f6ece8);
  }
  .benefit-scene-alerts .benefit-scene-card-b {
    inset: 60% 22% 12% 22%;
    background: linear-gradient(180deg, var(--gold), #a67a1f);
  }
  .benefit-scene-alerts .benefit-scene-card-c {
    width: 50px; height: 50px; inset: 16% 12% auto auto; border-radius: 14px;
    background: linear-gradient(180deg, #f7e6c8, var(--gold));
  }
  .benefit-scene-alerts .benefit-scene-card-c::before,
  .benefit-scene-alerts .benefit-scene-card-c::after { display: none; }
  .benefit-scene-alerts .benefit-scene-chip-a { width: 14px; height: 14px; right: 16%; top: 22%; background: #ffe6a8; }
  .benefit-scene-alerts .benefit-scene-chip-b { width: 90px; left: 24%; bottom: 22%; }

  /* ===== Pillars / sectors ===== */
  .sectors-section {
    padding: 78px 0;
    background: var(--bg);
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

  .sectors-header .kicker { color: var(--wine); }

  .sectors-header .title-lg {
    max-width: 18ch;
    font-size: clamp(2rem, 3.4vw, 2.9rem);
    line-height: 1.04;
    text-wrap: balance;
  }

  .sectors-header .lead {
    max-width: 36ch;
    color: var(--muted);
  }

  .sectors-media {
    position: relative;
    margin-top: 24px;
    max-width: 420px;
    aspect-ratio: 3 / 2;
    border-radius: 22px;
    overflow: hidden;
    border: 1px solid var(--line);
    background:
      radial-gradient(circle at 82% 14%, rgba(194, 150, 58, 0.16), transparent 32%),
      linear-gradient(150deg, var(--wine-soft), #ffffff);
    box-shadow: var(--shadow-sm);
  }

  .sectors-media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .sectors-media-ph {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 14px;
    padding: 22px;
    text-align: center;
  }

  .sectors-media-ph::before {
    content: "";
    position: absolute;
    inset: 12px;
    border-radius: 16px;
    border: 1.5px dashed var(--line-strong);
    pointer-events: none;
  }

  .sectors-media-icons {
    display: flex;
    gap: 12px;
  }

  .sectors-media-icons span {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    color: #fff;
    background: linear-gradient(140deg, var(--wine), var(--wine-strong));
    box-shadow: 0 12px 24px rgba(127, 33, 53, 0.2);
  }

  .sectors-media-icons span svg {
    width: 24px;
    height: 24px;
  }

  .sectors-media-ph strong {
    color: var(--ink);
    font-size: 0.98rem;
  }

  .sectors-media-ph small {
    color: var(--muted);
    font-size: 0.82rem;
    line-height: 1.45;
    max-width: 30ch;
  }

  .sector-list {
    order: 1;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .sector-row {
    position: relative;
    min-height: 158px;
    padding: 20px 20px 20px 74px;
    border-radius: 22px;
    border: 1px solid var(--line);
    background: var(--panel);
    box-shadow: var(--shadow-sm);
    transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
  }

  .sector-row:hover {
    transform: translateY(-4px);
    border-color: var(--line-strong);
    box-shadow: var(--shadow);
  }

  .sector-number {
    position: absolute;
    left: 18px;
    top: 18px;
    width: 42px;
    height: 42px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    color: #fff;
    font-weight: 800;
    font-size: 0.92rem;
    background: linear-gradient(135deg, var(--wine), var(--wine-strong));
    box-shadow: 0 10px 22px rgba(127, 33, 53, 0.22);
  }

  .sector-title {
    font-size: 1.08rem;
    line-height: 1.24;
    color: var(--ink);
  }

  .sector-description {
    margin-top: 10px;
    color: var(--muted);
    line-height: 1.6;
    font-size: 0.94rem;
    max-width: 30ch;
  }

  /* ===== Contact ===== */
  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 22px;
  }

  .contact-section {
    background: var(--bg-warm);
    color: var(--ink);
    padding: 64px 0;
  }

  .contact-section .kicker { color: var(--wine); }
  .contact-section .title-lg { color: var(--ink); }
  .contact-section .lead { color: var(--muted); }

  .contact-section .section-header {
    margin-bottom: 28px;
    max-width: 760px;
  }

  .contact-header {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .contact-section .title-lg {
    font-size: clamp(1.9rem, 2.8vw, 2.6rem);
    max-width: 30ch;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.08;
    text-wrap: balance;
  }

  .contact-card,
  .contact-form {
    padding: 24px;
  }

  .contact-section .contact-card {
    background: linear-gradient(160deg, #641827 0%, #3f0d1a 100%);
    border-color: transparent;
    box-shadow: 0 24px 50px rgba(63, 13, 26, 0.28);
    color: #fff;
  }

  .contact-section .contact-card .badge {
    background: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.24);
    color: #fff;
  }

  .contact-section .contact-card .badge::before {
    background: linear-gradient(135deg, #f7e6c8, var(--gold));
  }

  .contact-section .contact-card .lead {
    color: rgba(255, 246, 242, 0.9);
  }

  .contact-section .contact-form {
    background: var(--panel);
    border-color: var(--line);
    box-shadow: var(--shadow-sm);
  }

  .contact-list {
    display: grid;
    gap: 12px;
    margin-top: 20px;
  }

  .contact-item {
    padding: 14px 16px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .contact-item span {
    display: block;
    color: rgba(255, 246, 242, 0.78);
    font-size: 0.9rem;
    margin-bottom: 6px;
  }

  .contact-item strong {
    color: #fff;
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
    color: var(--ink);
    font-size: 0.92rem;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--line);
    background: #fff;
    color: var(--text);
    border-radius: 14px;
    padding: 14px 16px;
    font: inherit;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(63, 46, 49, 0.4);
  }

  input:focus,
  textarea:focus {
    border-color: var(--wine);
    box-shadow: 0 0 0 4px rgba(161, 47, 71, 0.12);
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
    padding: 30px 0 40px;
    color: var(--muted);
    font-size: 0.92rem;
    background: var(--bg-warm);
  }

  .footer-row {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    padding-top: 18px;
    border-top: 1px solid var(--line);
  }

  .footer-row span:first-child {
    color: var(--ink);
    font-weight: 600;
  }

  @media (max-width: 1100px) {
    .hero-grid,
    .contact-grid,
    .sector-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .services-shell {
      grid-template-columns: 1fr;
    }

    .services-tabs {
      position: static;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .method-classic-showcase {
      grid-template-columns: 1fr;
    }

    .method-classic-nav {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .method-classic-stage {
      grid-template-columns: minmax(0, 1fr) minmax(260px, 0.88fr);
    }

    .method-break-banner {
      grid-template-columns: 1fr;
    }

    .method-break-copy {
      max-width: 100%;
    }

    .method-showcase,
    .method-showcase-shell {
      max-width: 100%;
    }

    .method-showcase-shell {
      grid-template-columns: 1fr;
    }

    .method-showcase-orbit {
      min-height: 460px;
    }

    .title-xl {
      font-size: clamp(2.2rem, 4.8vw, 3.8rem);
    }

    .method-layout {
      grid-template-columns: 1fr;
      gap: 18px;
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

    .services-section {
      padding: 60px 0;
    }

    .method-section {
      padding: 54px 0 60px;
    }

    .method-classic-section {
      padding: 54px 0 18px;
    }

    .method-classic-showcase {
      padding: 22px;
    }

    .method-classic-nav {
      grid-template-columns: 1fr;
    }

    .method-classic-stage {
      grid-template-columns: 1fr;
      grid-template-areas:
        "copy"
        "visual"
        "footer";
    }

    .method-classic-step strong,
    .method-classic-description {
      max-width: 100%;
    }

    .method-classic-visual {
      min-height: 300px;
    }

    .method-classic-footer {
      justify-content: flex-start;
    }

    .method-break-banner {
      min-height: 0;
      padding: 28px 22px;
    }

    .method-break-copy .title-lg,
    .method-break-copy .lead {
      max-width: 100%;
    }

    .method-break-visual {
      min-height: 280px;
    }

    .method-showcase {
      padding: 24px 20px;
    }

    .method-showcase-footer {
      flex-direction: column;
      align-items: flex-start;
    }

    .method-showcase-orbit {
      min-height: 420px;
    }

    .method-showcase-photo {
      width: min(100%, 240px);
    }

    .showcase-stage {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
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
      padding: 56px 0;
    }

    .nav {
      gap: 16px;
    }

    .benefits-section {
      padding: 52px 0 60px;
    }

    .method-header,
    .benefits-header,
    .sectors-header,
    .services-header {
      text-align: center;
    }

    .benefits-header .title-lg,
    .benefits-header .lead,
    .sectors-header .title-lg,
    .sectors-header .lead {
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
    }

    .sectors-media {
      margin-left: auto;
      margin-right: auto;
    }

    .showcase-stage {
      grid-template-columns: 1fr;
    }

    .services-tabs {
      grid-template-columns: 1fr;
    }

    .services-groups {
      grid-template-columns: 1fr;
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

    .method-break-actions {
      display: grid;
      grid-template-columns: 1fr;
    }

    .method-break-button {
      width: 100%;
    }

    .method-showcase-tab-copy strong,
    .method-showcase-tab-copy small {
      display: none;
    }

    .method-showcase-orbit {
      min-height: 360px;
    }

    .method-showcase-photo {
      width: min(100%, 190px);
    }

    .method-showcase-tab-dot {
      width: 44px;
      height: 44px;
    }

    .button {
      width: 100%;
    }

    .title-xl {
      font-size: clamp(2.2rem, 11vw, 3.4rem);
      max-width: 100%;
    }
  }

  /* ===== Hero em vinho (tema escuro somente no topo) ===== */
  .hero {
    background:
      radial-gradient(circle at top left, rgba(166, 42, 74, 0.28), transparent 32%),
      radial-gradient(circle at top right, rgba(137, 22, 44, 0.3), transparent 34%),
      linear-gradient(180deg, #2a0a14 0%, #4a0f20 44%, #1a0710 100%);
    color: #f7eee6;
  }

  .hero::before {
    background:
      repeating-linear-gradient(60deg, rgba(214, 163, 87, 0.08) 0, rgba(214, 163, 87, 0.08) 1px, transparent 1px, transparent 128px),
      repeating-linear-gradient(-60deg, rgba(214, 163, 87, 0.08) 0, rgba(214, 163, 87, 0.08) 1px, transparent 1px, transparent 128px);
    opacity: 0.5;
  }

  .hero .brand {
    color: #f7eee6;
  }

  .hero .brand-mark {
    background: linear-gradient(145deg, rgba(213, 161, 79, 0.3), rgba(123, 26, 43, 0.16));
    border-color: rgba(214, 163, 87, 0.24);
  }

  .hero .nav-links {
    color: #d8beb1;
  }

  .hero .nav-links a:hover {
    color: #fff;
  }

  .hero .nav-button-secondary {
    color: #f7eee6;
    border-color: rgba(214, 163, 87, 0.3);
    background: rgba(255, 255, 255, 0.06);
  }

  .hero .nav-button-primary,
  .hero .button-primary {
    background: linear-gradient(135deg, #f0cf93, #d5a14f);
    color: #2a0d10;
    box-shadow: 0 14px 32px rgba(182, 122, 47, 0.24);
  }

  .hero .kicker {
    color: #e6c79b;
  }

  .hero .title-xl {
    color: #fff;
  }

  .hero .lead {
    color: #e2c8bb;
  }

  .hero .hero-note {
    color: #e5cdbf;
  }

  .hero .button-secondary {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(214, 163, 87, 0.3);
    color: #f7eee6;
  }

  .hero-art::before {
    border-color: rgba(214, 163, 87, 0.14);
    background:
      radial-gradient(circle at top right, rgba(213, 161, 79, 0.1), transparent 32%),
      linear-gradient(180deg, rgba(88, 18, 33, 0.5), rgba(40, 9, 18, 0.46));
  }

  .hero-monitor-frame {
    background: linear-gradient(180deg, #2c1118 0%, #13060a 100%);
    border-color: rgba(214, 163, 87, 0.18);
  }

  .hero-monitor-bezel {
    background: #17060c;
    border-color: rgba(214, 163, 87, 0.1);
  }

  .hero-monitor-topbar {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
    border-bottom-color: rgba(214, 163, 87, 0.1);
  }

  .hero-monitor-dots span {
    background: rgba(240, 207, 147, 0.55);
  }

  .hero-screen {
    background: linear-gradient(180deg, #24070f 0%, #18050b 100%);
  }

  .hero-sidebar {
    background: rgba(255, 255, 255, 0.02);
    border-right-color: rgba(214, 163, 87, 0.1);
  }

  .hero-sidebar-badge {
    color: #f0cf93;
    background: linear-gradient(135deg, rgba(213, 161, 79, 0.18), rgba(106, 18, 36, 0.14));
    border-color: rgba(214, 163, 87, 0.16);
  }

  .hero-sidebar-item {
    background: rgba(255, 255, 255, 0.1);
  }

  .hero-system-title {
    color: #f6e7d6;
  }

  .hero-system-preview {
    border-color: rgba(214, 163, 87, 0.24);
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.04), transparent 52%),
      linear-gradient(180deg, rgba(84, 21, 34, 0.68), rgba(37, 10, 17, 0.9));
  }

  .hero-system-preview::before {
    border-color: rgba(214, 163, 87, 0.14);
    background:
      linear-gradient(90deg, rgba(214, 163, 87, 0.08) 0, rgba(214, 163, 87, 0.08) 1px, transparent 1px, transparent 56px),
      linear-gradient(180deg, rgba(214, 163, 87, 0.08) 0, rgba(214, 163, 87, 0.08) 1px, transparent 1px, transparent 56px);
  }

  .hero-system-card {
    border-color: rgba(214, 163, 87, 0.12);
    background: rgba(255, 255, 255, 0.03);
  }

  .hero-system-card strong {
    color: #f4dec7;
  }

  .hero-system-card span {
    color: #d8beb1;
  }

  .hero-system-lines span {
    background: rgba(255, 255, 255, 0.12);
  }

  .hero-monitor-stand,
  .hero-monitor-stand::before {
    background: linear-gradient(180deg, rgba(73, 28, 36, 0.94), rgba(20, 7, 11, 0.98));
  }

  .hero-monitor-base {
    background: linear-gradient(180deg, rgba(73, 28, 36, 0.84), rgba(12, 4, 7, 0.96));
  }

  .ticker {
    background: rgba(20, 7, 11, 0.5);
    border-top-color: rgba(214, 163, 87, 0.18);
    border-bottom-color: rgba(214, 163, 87, 0.18);
  }

  .ticker-track {
    color: #ebd7c6;
  }

  .ticker-item::after {
    color: #f0cf93;
  }
`;

export default function Inicial() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeArea, setActiveArea] = useState(0);
  const currentStep = steps[activeStep];
  const currentHighlights = stepHighlights[activeStep];
  const currentArea = serviceAreas[activeArea];
  const orbitPositions = ["top", "left", "right", "bottom"];

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
                <a href="#servicos">Serviços</a>
                <a href="#metodo">Método</a>
                <a href="#peotram">PEOTRAM</a>
                <a href="#atuacao">Atuação</a>
                <a href="#contato">Contato</a>
              </div>

              <div className="nav-actions">
                <a className="nav-button nav-button-secondary" href="#servicos">
                  Serviços
                </a>
                <a className="nav-button nav-button-primary" href="#contato">
                  Solicitar proposta
                </a>
              </div>
            </div>
          </nav>

          <div className="hero-grid" id="inicio">
            <div className="hero-copy">
              <p className="kicker">QHSE • PEOTRAM • Estratégia ESG</p>
              <h1 className="title-xl">
                Excelência em <strong>QHSE, PEOTRAM e governança ESG</strong>.
              </h1>
              <p className="lead">
                Consultoria especializada em Qualidade, Meio Ambiente, Saúde e Segurança
                Ocupacional e Governança. Transformamos exigências regulatórias em performance,
                conformidade e reputação com experiência em setores de alta exigência como Óleo e Gás.
              </p>

              <div className="cta-row">
                <a className="button button-primary" href="#contato">
                  Solicitar proposta
                </a>
                <a className="button button-secondary" href="#servicos">
                  Ver serviços
                </a>
              </div>

              <p className="hero-note">
                Preparação completa para o ciclo vigente do PEOTRAM (Petrobras).
              </p>
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
                          <strong className="hero-system-title">Painel de Conformidade QHSE</strong>
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
                            <strong>Indicadores</strong>
                            <span>
                              Espaço para inserir a imagem do painel com gráficos, status de auditorias
                              e acompanhamento de condicionantes.
                            </span>
                          </div>

                          <div className="hero-system-card">
                            <strong>Programas</strong>
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
      </section>

      <section className="services-section" id="servicos">
        <div className="container">
          <header className="services-header">
            <p className="kicker">Portfólio de serviços</p>
            <h2 className="title-lg">Soluções completas em QHSE, PEOTRAM e ESG.</h2>
            <p className="lead">
              Metodologias e abordagens que garantem excelência em Qualidade, Meio Ambiente, Saúde e
              Segurança Ocupacional e Governança. Selecione uma área para ver treinamentos, serviços e
              auditorias.
            </p>
          </header>

          <div className="services-shell">
            <div className="services-tabs" role="tablist" aria-label="Áreas de serviço">
              {serviceAreas.map((area, index) => (
                <button
                  className={`services-tab ${index === activeArea ? "services-tab-active" : ""}`}
                  key={area.key}
                  onClick={() => setActiveArea(index)}
                  role="tab"
                  aria-selected={index === activeArea}
                  type="button"
                >
                  <span className="services-tab-ico" aria-hidden="true">{renderIcon(areaIconPaths[area.key])}</span>
                  <span className="services-tab-text">
                    <span className="services-tab-chip">{area.tag}</span>
                    <strong>{area.name}</strong>
                  </span>
                </button>
              ))}
            </div>

            <div className="services-panel" role="tabpanel">
              <span className="services-panel-orb" aria-hidden="true" />
              <div className="services-panel-head">
                <span className="services-panel-ico" aria-hidden="true">{renderIcon(areaIconPaths[currentArea.key])}</span>
                <div className="services-panel-headcopy">
                  <span className="services-panel-tag">{currentArea.tag}</span>
                  <h3>{currentArea.name}</h3>
                </div>
              </div>
              <p className="services-panel-lead">{currentArea.lead}</p>

              <div className="services-groups">
                {currentArea.groups.map((group) => (
                  <div className="services-group" key={group.label}>
                    <div className="services-group-head">
                      <span className="services-group-ico" aria-hidden="true">{renderIcon(groupIconPaths[group.label])}</span>
                      <span className="services-group-label">{group.label}</span>
                      <span className="services-group-count">{group.items.length}</span>
                    </div>
                    <ul className="services-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section method-classic-section" id="metodo">
        <div className="container">
          <div className="method-transition" aria-hidden="true" />

          <div className="method-classic-intro">
            <p className="kicker">Como trabalhamos</p>
            <h2 className="title-lg">Um método claro, do diagnóstico à melhoria contínua.</h2>
            <p className="lead">
              Estruturamos cada projeto em etapas objetivas para atender às exigências regulatórias e
              impulsionar a performance da sua operação.
            </p>
          </div>

          <div className="method-classic-showcase">
            <div className="method-classic-nav" aria-label="Etapas do metodo em cards">
              {steps.map((step, index) => (
                <button
                  className={`method-classic-tab ${index === activeStep ? "method-classic-tab-active" : ""}`}
                  key={`classic-${step.number}`}
                  onClick={() => setActiveStep(index)}
                  type="button"
                >
                  <span className="method-classic-tab-num">{step.number}</span>
                  <span className="method-classic-tab-copy">
                    <strong>{step.title}</strong>
                    <small>{stepHighlights[index][0]}</small>
                  </span>
                </button>
              ))}
            </div>

            <div className={`method-classic-stage method-classic-stage-${currentStep.number}`}>
              <div className="method-classic-copy">
                <div className="method-classic-step">
                  <strong>{currentStep.title}</strong>
                </div>
                <p className="method-classic-description">{currentStep.description}</p>

                <div className="method-classic-points">
                  {currentHighlights.map((item) => (
                    <span className="method-classic-point" key={`classic-point-${item}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="method-classic-visual" aria-hidden="true">
                <div className="method-classic-screen">
                  <span className="method-classic-screen-badge">Metodo Ascensional</span>
                  <strong>{currentStep.title}</strong>
                  <div className="method-classic-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <span className="method-classic-card method-classic-card-c" />
                <span className="method-classic-orb" />
              </div>

              <div className="method-classic-footer">
                <p>Selecione uma etapa na lateral para atualizar o painel.</p>
                <div className="method-classic-progress" aria-hidden="true">
                  {steps.map((step, index) => (
                    <span
                      className={index === activeStep ? "method-classic-progress-active" : ""}
                      key={`classic-progress-${step.number}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section method-break-section" id="peotram">
        <div className="method-break-fullbleed">
          <div className="method-break-banner">
            <div className="method-break-copy">
              <p className="kicker">Consultoria PEOTRAM • Petrobras</p>
              <h2 className="title-lg">Preparação para atender e superar o PEOTRAM.</h2>
              <p className="lead">
                O PEOTRAM avalia embarcações e operações offshore em segurança, eficiência e
                responsabilidade ambiental. Preparamos sua empresa para manter contratos e elevar a
                nota ADT com gap analysis, implementação e auditorias de preparação.
              </p>

              <p className="method-break-quote">
                “O PEOTRAM não olha apenas papéis. Ele avalia se existe coerência entre o que a empresa
                define como padrão e o que realmente acontece na operação.”
              </p>

              <div className="method-break-actions">
                <a className="method-break-button method-break-button-primary" href="#contato">
                  Preparar minha operação
                </a>
                <a className="method-break-button method-break-button-secondary" href="#servicos">
                  Ver metodologia
                </a>
              </div>
            </div>

            <div className="method-break-visual" aria-hidden="true">
              <div className="method-break-figure">
                <span className="method-break-shield" />
                <div className="method-break-card method-break-card-a">
                  <strong>Diagnóstico</strong>
                  <span>Gap analysis frente ao ciclo vigente do programa.</span>
                </div>
                <div className="method-break-card method-break-card-b">
                  <strong>Auditoria</strong>
                  <span>Simulados com o rigor e a metodologia da Petrobras.</span>
                </div>
                <span className="method-break-badge" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section method-section" id="metodo-destaque">
        <div className="container">
          <div className="method-transition" aria-hidden="true" />

          <div className="method-header">
            <p className="kicker">Método Ascensional</p>
            <h2 className="title-lg">Cada etapa conectada a um resultado de conformidade.</h2>
            <p className="lead">
              Explore visualmente as fases da nossa atuação do levantamento legal à sustentação de
              auditorias e certificações.
            </p>
          </div>

          <div className="method-layout">
            <div className="method-showcase">
              <div className="method-showcase-shell">
                <div className="method-showcase-orbit" aria-label="Etapas do metodo">
                  <span className="method-showcase-ring method-showcase-ring-a" aria-hidden="true" />
                  <span className="method-showcase-ring method-showcase-ring-b" aria-hidden="true" />
                  <span className="method-showcase-spark method-showcase-spark-a" aria-hidden="true" />
                  <span className="method-showcase-spark method-showcase-spark-b" aria-hidden="true" />

                  {steps.map((step, index) => {
                    const position = orbitPositions[index] ?? "top";
                    const reverse = position === "left";

                    return (
                      <button
                        aria-pressed={index === activeStep}
                        className={`method-showcase-tab method-showcase-tab-${position} ${reverse ? "method-showcase-tab-reverse" : ""} ${index === activeStep ? "method-showcase-tab-active" : ""}`}
                        key={step.number}
                        onClick={() => setActiveStep(index)}
                        type="button"
                      >
                        <span className="method-showcase-tab-copy">
                          <strong>{step.orbitLabel}</strong>
                          <small>{step.shortLabel}</small>
                        </span>
                        <span className="method-showcase-tab-dot" aria-hidden="true">
                          <span />
                        </span>
                      </button>
                    );
                  })}

                  <div className="method-showcase-photo" aria-label="Espaco reservado para foto">
                    <div className="method-showcase-photo-placeholder">
                      <span>Foto reservada</span>
                    </div>
                  </div>
                </div>

                <div className="method-showcase-panel">
                  <div className="method-showcase-panel-header">
                    <span className="method-showcase-kicker">Metodo Ascensional</span>
                    <div className="method-showcase-heading">
                      <div className="method-showcase-icon" aria-hidden="true">
                        <span />
                      </div>
                      <div className="method-showcase-step">
                        <strong>{currentStep.title}</strong>
                        <p className="method-showcase-description">{currentStep.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="method-showcase-points">
                    {currentHighlights.map((item) => (
                      <span className="method-showcase-point" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="method-showcase-footer">
                    <p>Clique nos pontos ao redor da foto para trocar o conteudo do painel.</p>
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
        </div>
      </section>

      <section className="section benefits-section" id="beneficios">
        <div className="container">
          <div className="benefits-top">
            <header className="section-header benefits-header">
              <p className="kicker">Por que a Ascensional</p>
              <h2 className="title-lg">Conhecimento técnico com visão estratégica de negócio.</h2>
              <p className="lead">
                Combinamos domínio das normas nacionais e internacionais com uma abordagem executiva
                para que sua empresa não apenas atenda aos requisitos, mas se destaque em QHSE, ESG e PEOTRAM.
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
              <h2 className="title-lg">Cobertura completa dos pilares QHSE e ESG.</h2>
              <p className="lead">
                Atuamos nos principais eixos regulatórios e de gestão, adaptando o escopo à realidade,
                ao porte e ao segmento de cada empresa.
              </p>

              <div className="sectors-media">
                {sectorsImageSrc ? (
                  <img alt="Atuação da Ascensional Consultoria" src={sectorsImageSrc} />
                ) : (
                  <div className="sectors-media-ph" aria-hidden="true">
                    <div className="sectors-media-icons">
                      <span>{renderIcon(areaIconPaths.sso)}</span>
                      <span>{renderIcon(areaIconPaths.ambiente)}</span>
                      <span>{renderIcon(areaIconPaths.esg)}</span>
                    </div>
                    <strong>Imagem reservada</strong>
                    <small>Adicione aqui uma foto da equipe, da operação ou de campo.</small>
                  </div>
                )}
              </div>
            </header>

            <div className="sector-list">
              {pillars.map((pillar, index) => (
                <article className="sector-row" key={pillar.title}>
                  <div className="sector-number">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="sector-title">{pillar.title}</h3>
                    <p className="sector-description">{pillar.description}</p>
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
            <p className="kicker">Fale com a Ascensional</p>
            <h2 className="title-lg">Transforme desafios de gestão em diferenciais competitivos.</h2>
          </header>

          <div className="contact-grid">
            <article className="contact-card">
              <span className="badge">Ascensional Consultoria</span>
              <p className="lead">
                Excelência em QHSE, PEOTRAM e estratégia ESG com visão técnica e estratégica.
                Entre em contato e solicite uma proposta personalizada.
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <span>Telefone</span>
                  <strong>(21) 99999-9999</strong>
                </div>
                <div className="contact-item">
                  <span>E-mail</span>
                  <strong>contato@ascensional.com.br</strong>
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
                    placeholder="Conte sobre sua operação e o que precisa estruturar (QHSE, PEOTRAM, ESG)."
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

      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <span>Ascensional Consultoria</span>
            <span>Excelência em QHSE, PEOTRAM e estratégia ESG.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
