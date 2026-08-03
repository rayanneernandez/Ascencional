import { useEffect, useState } from "react";

const heroScreenImageSrc = new URL("./assets/analisando.png", import.meta.url).href;
const brandLogoSrc = new URL("./assets/letra branca sem fundo.png", import.meta.url).href;
// Foto de plataforma offshore (Jeff Stapleton / Pexels, uso comercial livre).
// Para trocar por outra foto, substitua o arquivo ./assets/atuacao.jpg.
const sectorsImageSrc = new URL("./assets/atuacao.jpg", import.meta.url).href;

const steps = [
  {
    number: "01",
    shortLabel: "Identificacao",
    orbitLabel: "Identificação",
    title: "Identificação dos requisitos",
    description:
      "Identificamos os requisitos legais do escopo do seu negócio, além dos aspectos ambientais e perigos de SSO relevantes.",
  },
  {
    number: "02",
    shortLabel: "Controle",
    orbitLabel: "Controle",
    title: "Controle dinâmico",
    description:
      "Acompanhe revogações e alterações da legislação, mantendo sua base de dados sempre alinhada às normas vigentes.",
  },
  {
    number: "03",
    shortLabel: "Evidencias",
    orbitLabel: "Evidências",
    title: "Lançamento de evidências",
    description:
      "Registre as evidências de conformidade de forma ágil, com interface intuitiva, sem múltiplas telas ou etapas complexas.",
  },
  {
    number: "04",
    shortLabel: "Avaliacao",
    orbitLabel: "Avaliação",
    title: "Avaliação e relatórios",
    description:
      "Avalie o atendimento aos requisitos pela sua equipe ou pela equipe técnica da Synergy EB e acompanhe os resultados.",
  },
];

const stepHighlights = [
  ["Requisitos do escopo", "Aspectos e perigos de SSO", "Enquadramento claro"],
  ["Revogações e alterações", "Legislação na íntegra", "Base sempre atualizada"],
  ["Registro ágil", "Interface intuitiva", "Sem retrabalho"],
  ["Equipe do cliente ou EB", "Atualização mensal", "Visão de conformidade"],
];

const pillars = [
  {
    title: "Lançamento simplificado",
    description: "Registre evidências de conformidade de forma ágil, sem múltiplas telas ou etapas complexas.",
  },
  {
    title: "Condução intuitiva",
    description: "O sistema guia o usuário pelo processo fácil de usar mesmo sem experiência prévia.",
  },
  {
    title: "Identificação precisa",
    description: "Requisitos legais do escopo do negócio, aspectos ambientais e perigos de SSO relevantes.",
  },
  {
    title: "Controle dinâmico",
    description: "Acompanhamento contínuo de revogações e alterações da legislação vigente.",
  },
  {
    title: "Legislação na íntegra",
    description: "Acesso à íntegra das legislações aplicáveis, direto no sistema, para consulta e referência.",
  },
  {
    title: "Atualização mensal",
    description: "A equipe técnica insere novas legislações todo mês; você nunca perde uma mudança importante.",
  },
];

const serviceAreas = [
  {
    key: "facilidade",
    tag: "Fácil de usar",
    name: "Sua conformidade, nossa prioridade: um sistema desenvolvido para você",
    lead:
      "Nosso sistema de gerenciamento de requisitos legais foi cuidadosamente desenvolvido para atender às necessidades específicas da sua organização, proporcionando uma ferramenta robusta e, acima de tudo, fácil de usar. Entendemos que o tempo é um recurso valioso, e por isso, eliminamos a burocracia e o retrabalho:",
    groups: [
      {
        label: "Destaques",
        items: [
          "Lançamento simplificado de evidências: diga adeus às múltiplas telas e etapas complexas. Com uma interface intuitiva e direta, você registra as evidências de conformidade de forma ágil, focando no que realmente importa.",
          "Condução intuitiva: o sistema guia você através do processo, tornando a gestão de requisitos legais uma tarefa descomplicada e eficiente, mesmo para usuários sem experiência prévia.",
        ],
      },
    ],
  },
  {
    key: "funcionalidades",
    tag: "Funcionalidades",
    name: "Funcionalidades essenciais para uma gestão completa",
    lead:
      "O sistema da Synergy EB Consultoria oferece um conjunto abrangente de funcionalidades para garantir que sua organização esteja sempre à frente em termos de conformidade:",
    groups: [
      {
        label: "Recursos",
        items: [
          "Identificação precisa: realizamos a identificação dos requisitos legais associados ao escopo de negócio da sua organização, bem como dos aspectos ambientais e perigos de Saúde e Segurança Ocupacional (SSO) relevantes.",
          "Controle dinâmico: mantenha-se atualizado com o controle contínuo das revogações e alterações dos requisitos legais, garantindo que sua base de dados esteja sempre alinhada com a legislação vigente.",
          "Legislação na íntegra: tenha acesso facilitado à íntegra das legislações aplicáveis, diretamente no sistema, para consulta e referência sempre que necessário.",
          "Atualização mensal garantida: nossa equipe técnica realiza atualizações mensais dos requisitos legais, inserindo novas legislações aplicáveis e garantindo que você nunca perca uma mudança importante.",
        ],
      },
    ],
  },
  {
    key: "avaliacao",
    tag: "Avaliação",
    name: "Avaliação e suporte personalizado",
    lead:
      "A avaliação do atendimento aos requisitos legais pode ser realizada de duas formas, adaptando-se à sua preferência e capacidade interna:",
    groups: [
      {
        label: "Como avaliar",
        items: [
          "Equipe do cliente: sua própria equipe pode conduzir as avaliações, utilizando a ferramenta para registrar e monitorar a conformidade.",
          "Equipe técnica da Synergy EB Consultoria: conte com a expertise dos nossos especialistas para realizar as avaliações, garantindo um olhar técnico e aprofundado sobre sua conformidade.",
        ],
      },
      {
        label: "Nota importante",
        items: [
          "Caso sua organização ainda não possua a identificação formal de aspectos ambientais e perigos de SSO, a Synergy EB Consultoria disponibilizará uma lista de verificação detalhada para auxiliar no enquadramento das suas atividades, garantindo que nenhum ponto crítico seja negligenciado.",
        ],
      },
    ],
  },
];

const clientPlaceholders = [1, 2, 3, 4, 5, 6, 7, 8];

const testimonials = [
  {
    name: "Depoimento reservado",
    role: "Cargo — Empresa reservada",
    quote:
      "Espaço reservado para o depoimento de um cliente sobre a parceria com a Synergy EB Consultoria.",
    since: "Parceiro reservado",
  },
  {
    name: "Depoimento reservado",
    role: "Cargo — Empresa reservada",
    quote:
      "Espaço reservado para o depoimento de outro cliente sobre os resultados obtidos com o sistema.",
    since: "Parceiro reservado",
  },
  {
    name: "Depoimento reservado",
    role: "Cargo — Empresa reservada",
    quote:
      "Espaço reservado para um depoimento sobre o suporte técnico e a atualização mensal da legislação.",
    since: "Parceiro reservado",
  },
];

const benefits = [
  {
    title: "Identificação precisa",
    description:
      "Requisitos legais do escopo, aspectos ambientais e perigos de SSO identificados com precisão.",
    scene: "legal",
  },
  {
    title: "Controle dinâmico",
    description:
      "Revogações e alterações acompanhadas continuamente, base sempre alinhada à legislação vigente.",
    scene: "dashboard",
  },
  {
    title: "Legislação na íntegra",
    description:
      "Acesso à íntegra das leis aplicáveis, direto no sistema, para consulta e referência.",
    scene: "evidence",
  },
  {
    title: "Atualização mensal",
    description:
      "Novas legislações inseridas todo mês pela equipe técnica você nunca perde uma mudança.",
    scene: "alerts",
  },
];

const areaIconPaths: Record<string, string[]> = {
  facilidade: ["M13 2L4 14h6l-1 8 9-12h-6l1-8z"],
  funcionalidades: ["M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z", "M19.4 13a7.6 7.6 0 000-2l1.8-1.4-1.8-3.1-2.1.9a7.6 7.6 0 00-1.7-1l-.3-2.3H9.7l-.3 2.3a7.6 7.6 0 00-1.7 1l-2.1-.9L3.8 9.6 5.6 11a7.6 7.6 0 000 2l-1.8 1.4 1.8 3.1 2.1-.9c.5.4 1.1.7 1.7 1l.3 2.3h4.6l.3-2.3c.6-.3 1.2-.6 1.7-1l2.1.9 1.8-3.1L19.4 13z"],
  avaliacao: ["M8 3h6l4 4v14H6V3h2z", "M14 3v4h4", "M9 12.5l1.8 1.8L15 10.5"],
  sso: ["M12 3l7 3v5c0 4.2-2.9 7.7-7 8.9C7.9 18.7 5 15.2 5 11V6l7-3z", "M9 11.5l2 2 4-4.5"],
  ambiente: ["M20 4C10 5 5 10 5 18c0 0 6-1 9-4s6-9 6-10z", "M6 18C9 13 13 10 18 8"],
  qualidade: ["M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9 7.2 18l.9-5.4L4.2 8.7l5.4-.8L12 3z"],
  peotram: ["M4 15l1.6-6.2a2 2 0 011.9-1.5h9a2 2 0 011.9 1.5L20 15", "M3 15h18l-1.4 3.3a2 2 0 01-1.8 1.2H6.2a2 2 0 01-1.8-1.2L3 15z", "M12 4v3"],
  esg: ["M12 3a9 9 0 100 18 9 9 0 000-18z", "M3.5 9h17M3.5 15h17", "M12 3c2.5 2.4 3.8 5.6 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3z"],
  seguranca: ["M4 15v-1a8 8 0 0116 0v1", "M3 15h18v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3z", "M12 6v3"],
};

const groupIconPaths: Record<string, string[]> = {
  Treinamentos: ["M3 8.5L12 4l9 4.5-9 4.5-9-4.5z", "M7 10.8V15c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-4.2", "M21 8.5V14"],
  "Serviços": ["M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z", "M19.4 13a7.6 7.6 0 000-2l1.8-1.4-1.8-3.1-2.1.9a7.6 7.6 0 00-1.7-1l-.3-2.3H9.7l-.3 2.3a7.6 7.6 0 00-1.7 1l-2.1-.9L3.8 9.6 5.6 11a7.6 7.6 0 000 2l-1.8 1.4 1.8 3.1 2.1-.9c.5.4 1.1.7 1.7 1l.3 2.3h4.6l.3-2.3c.6-.3 1.2-.6 1.7-1l2.1.9 1.8-3.1L19.4 13z"],
  Auditorias: ["M8 3h6l4 4v14H6V3h2z", "M14 3v4h4", "M9 12.5l1.8 1.8L15 10.5"],
  Metodologia: ["M6 4v10", "M6 20a3 3 0 100-6 3 3 0 000 6z", "M18 10a3 3 0 100-6 3 3 0 000 6z", "M18 10v2a4 4 0 01-4 4H9"],
  "Nossa atuação": ["M12 3a9 9 0 100 18 9 9 0 000-18z", "M14.5 9.5l-1.2 3.8-3.8 1.2 1.2-3.8 3.8-1.2z"],
  Destaques: ["M12 2l2.6 6.4L21 9l-5 4.6L17.4 21 12 17.4 6.6 21 8 13.6 3 9l6.4-0.6L12 2z"],
  Recursos: ["M4 6h16", "M4 12h16", "M4 18h10"],
  "Como avaliar": ["M9 12.5l1.8 1.8L15 10.5", "M12 3a9 9 0 100 18 9 9 0 000-18z"],
  "Nota importante": ["M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z", "M12 8v5", "M12 16.2v.1"],
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

const LOGO_PATH =
  "M 359.50 323.24 C353.06,325.09 348.80,325.28 305.97,325.67 C280.37,325.91 259.11,325.78 258.72,325.38 C258.32,324.99 258.00,319.79 258.00,313.83 L 258.00 303.00 L 303.29 303.00 C340.43,303.00 349.62,302.73 354.37,301.49 C390.81,292.00 404.22,249.33 378.78,223.80 C372.67,217.67 364.89,213.19 355.73,210.52 C351.16,209.20 346.45,208.94 331.28,209.19 C313.48,209.48 312.21,209.64 306.95,212.10 C299.68,215.51 295.02,219.72 291.66,225.88 C289.43,229.97 288.75,232.96 287.95,242.13 C286.05,263.69 281.95,274.91 272.38,284.70 C266.48,290.72 260.42,294.43 250.02,298.35 C244.78,300.33 242.23,300.45 199.39,300.77 L 154.29 301.11 L 151.21 298.52 C147.06,295.03 145.48,290.11 147.01,285.46 C149.34,278.41 148.36,278.56 197.45,277.98 L 241.50 277.46 L 247.03 274.88 C253.75,271.75 260.30,264.65 262.43,258.17 C263.28,255.60 264.45,247.95 265.04,241.16 C266.61,222.82 271.38,211.32 281.36,201.75 C291.38,192.14 303.83,188.02 322.96,187.97 C346.89,187.91 356.99,185.20 365.33,176.62 C371.32,170.46 373.34,165.87 373.81,157.40 C374.16,151.17 373.85,149.58 371.39,144.54 C368.44,138.53 363.08,133.16 356.78,129.91 C347.40,125.07 346.51,125.03 249.75,125.01 L 159.00 125.00 L 159.00 102.00 L 248.89 102.00 C325.68,102.00 340.00,102.23 347.14,103.54 C373.28,108.38 390.44,122.81 395.49,144.22 C399.66,161.92 394.61,180.46 382.48,191.93 C379.40,194.84 377.02,197.33 377.19,197.46 C377.36,197.59 380.42,199.21 384.00,201.06 C396.66,207.61 406.82,220.40 412.15,236.50 C415.16,245.58 415.36,264.12 412.55,273.50 C406.87,292.50 394.96,307.04 377.50,316.30 C371.34,319.56 368.43,320.68 359.50,323.24 ZM 270.18 203.39 L 268.00 206.28 L 231.25 206.39 C182.39,206.54 163.80,205.92 161.58,204.07 C157.18,200.41 155.89,194.04 158.52,188.97 C159.01,188.01 159.37,187.21 159.90,186.53 C162.69,182.97 170.07,183.00 225.84,183.22 C227.87,183.23 229.97,183.23 232.14,183.24 L 298.35 183.50 L 289.86 187.71 C281.73,191.74 274.87,197.20 270.18,203.39 Z";

function LogoMark() {
  // Monograma EB oficial da Synergy EB Consultoria.
  return (
    <svg className="logo-mark" viewBox="128 90 300 250" role="img" aria-label="Synergy EB Consultoria">
      <path d={LOGO_PATH} fill="currentColor" />
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
    --bg-warm: #f4f7fb;
    --bg-tint: #eef3f9;
    --panel: #ffffff;
    --panel-warm: #f8fafd;
    --ink: #142338;
    --text: #33404f;
    --muted: #64748b;
    --wine: #1e3a63;
    --wine-strong: #13294a;
    --wine-soft: #e7eef7;
    --gold: #c2963a;
    --gold-soft: #f4e8cd;
    --line: rgba(30, 58, 99, 0.14);
    --line-strong: rgba(30, 58, 99, 0.3);
    --line-soft: rgba(20, 30, 45, 0.08);
    --shadow-sm: 0 10px 26px rgba(20, 35, 60, 0.06);
    --shadow: 0 26px 60px rgba(20, 35, 60, 0.1);
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
      radial-gradient(circle at top left, rgba(31, 61, 115, 0.06), transparent 34%),
      radial-gradient(circle at top right, rgba(194, 150, 58, 0.07), transparent 36%),
      linear-gradient(180deg, #ffffff 0%, #f4f7fb 100%);
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
    box-shadow: 0 0 16px rgba(31, 61, 115, 0.35);
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
      radial-gradient(circle at 6% 90%, rgba(31, 61, 115, 0.06), transparent 32%);
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        60deg,
        rgba(30, 58, 99, 0.04) 0,
        rgba(30, 58, 99, 0.04) 1px,
        transparent 1px,
        transparent 128px
      ),
      repeating-linear-gradient(
        -60deg,
        rgba(30, 58, 99, 0.04) 0,
        rgba(30, 58, 99, 0.04) 1px,
        transparent 1px,
        transparent 128px
      );
    opacity: 0.7;
    pointer-events: none;
  }

  .nav-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 60;
    background: rgba(6, 16, 32, 0.62);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 6px 0;
  }

  .hero {
    padding-top: 64px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: var(--ink);
  }

  .brand-logo-wrap {
    position: relative;
    display: block;
    width: 200px;
    height: 34px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .brand-logo {
    position: absolute;
    left: -39px;
    top: -120px;
    width: 274px;
    height: 274px;
    max-width: none;
  }

  @media (max-width: 560px) {
    .brand-logo-wrap {
      width: 166px;
      height: 28px;
    }

    .brand-logo {
      left: -32px;
      top: -99px;
      width: 226px;
      height: 226px;
    }
  }

  .brand-word {
    display: flex;
    flex-direction: column;
    gap: 3px;
    line-height: 1;
  }

  .brand-word strong {
    font-size: 1.02rem;
    font-weight: 800;
    letter-spacing: 0.04em;
  }

  .brand-word small {
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    opacity: 0.72;
  }

  .nav-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.06);
    cursor: pointer;
    flex-shrink: 0;
  }

  .nav-toggle span {
    display: block;
    width: 18px;
    height: 2px;
    margin: 0 auto;
    border-radius: 999px;
    background: #fff;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .nav-toggle[aria-expanded="true"] span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .nav-toggle[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle[aria-expanded="true"] span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .brand-mark {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
  }

  .brand-mark img,
  .hero-sidebar-badge img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .brand-mark {
    color: #fff;
  }

  .hero-sidebar-badge {
    color: var(--wine);
  }

  .logo-mark {
    width: 100%;
    height: 100%;
    display: block;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 16px;
    color: var(--muted);
    font-size: 0.9rem;
  }

  .nav-links a:hover {
    color: var(--wine);
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 16px;
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
    box-shadow: 0 14px 30px rgba(30, 58, 99, 0.24);
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
    box-shadow: 0 18px 40px rgba(30, 58, 99, 0.26);
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

  .hero-pillars {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 16px;
  }

  .hero-pillar {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 12px;
    border-radius: 999px;
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.86);
  }

  .hero-pillar svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }

  .hero-pillar-quality svg {
    color: #6fa3e0;
  }

  .hero-pillar-environment svg {
    color: #5fc76a;
  }

  .hero-pillar-safety svg {
    color: #3ecfd9;
  }

  .hero-art {
    position: relative;
    min-height: clamp(340px, 48vh, 470px);
    display: grid;
    place-items: center;
    padding: 8px 8px 0;
    overflow: hidden;
  }

  .hero-art-photo::before {
    content: none;
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

  .hero-photo {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 560px;
    aspect-ratio: 1402 / 1122;
  }

  .hero-photo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(18%) brightness(0.9) contrast(1.1) saturate(0.9);
    -webkit-mask-image: radial-gradient(ellipse 46% 48% at 50% 42%, #000 12%, transparent 100%);
    mask-image: radial-gradient(ellipse 46% 48% at 50% 42%, #000 12%, transparent 100%);
  }

  .hero-photo::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    mix-blend-mode: screen;
    background:
      radial-gradient(circle at 24% 16%, rgba(194, 150, 58, 0.28), transparent 55%),
      radial-gradient(circle at 82% 84%, rgba(255, 255, 255, 0.08), transparent 50%);
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
    background: rgba(31, 61, 115, 0.35);
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
    background: rgba(30, 58, 99, 0.1);
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
      linear-gradient(90deg, rgba(30, 58, 99, 0.06) 0, rgba(30, 58, 99, 0.06) 1px, transparent 1px, transparent 56px),
      linear-gradient(180deg, rgba(30, 58, 99, 0.06) 0, rgba(30, 58, 99, 0.06) 1px, transparent 1px, transparent 56px);
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
    background: rgba(30, 58, 99, 0.12);
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
    font-size: 0.76rem;
    letter-spacing: 0.01em;
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
    background: rgba(30, 58, 99, 0.16);
  }

  .method-classic-lines span:nth-child(2) { width: 82%; }
  .method-classic-lines span:nth-child(3) { width: 68%; }

  .method-classic-card {
    border-radius: 18px;
    background: linear-gradient(180deg, #ffffff, #f6ece8);
    box-shadow: 0 14px 28px rgba(20, 35, 60, 0.12);
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
    background: radial-gradient(circle, rgba(31, 61, 115, 0.18), transparent 68%);
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
    background: rgba(30, 58, 99, 0.14);
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
    padding: 48px 0;
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
    box-shadow: 0 16px 34px rgba(30, 58, 99, 0.24);
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
    border-radius: 34px 34px 34px 10px;
    border: 1px solid var(--line);
    background:
      radial-gradient(circle at 100% 0, rgba(194, 150, 58, 0.08), transparent 24%),
      var(--panel);
    box-shadow: var(--shadow);
    padding: clamp(18px, 2.2vw, 26px);
    overflow: hidden;
  }

  .services-panel-orb {
    position: absolute;
    right: -60px;
    top: -60px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(31, 61, 115, 0.1), transparent 68%);
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
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 14px;
    display: grid;
    place-items: center;
    color: #fff;
    background: linear-gradient(140deg, var(--wine), var(--wine-strong));
    box-shadow: 0 14px 28px rgba(30, 58, 99, 0.22);
  }

  .services-panel-ico svg {
    width: 22px;
    height: 22px;
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
    margin-top: 10px;
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 66ch;
  }

  .services-groups {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 16px;
    align-items: start;
  }

  .services-group {
    border: 1px solid var(--line);
    border-radius: 20px 20px 20px 6px;
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
    padding: clamp(40px, 5vw, 64px) 0;
    background:
      radial-gradient(circle at 18% 50%, rgba(194, 150, 58, 0.14), transparent 26%),
      linear-gradient(135deg, #0b1c38 0%, #163a68 55%, #0a1830 100%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }

  .method-break-banner {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 0.7fr);
    gap: clamp(24px, 4vw, 56px);
    align-items: center;
    justify-content: center;
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
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
    box-shadow: 0 16px 36px rgba(9, 24, 48, 0.28);
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

  .method-break-badge::before { content: "ISO"; }

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
      radial-gradient(circle at 74% 18%, rgba(31, 61, 115, 0.08), transparent 26%),
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
    box-shadow: 0 0 16px rgba(31, 61, 115, 0.6);
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
      0 0 0 8px rgba(31, 61, 115, 0.12),
      0 14px 28px rgba(30, 58, 99, 0.24);
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
    box-shadow: 0 14px 26px rgba(30, 58, 99, 0.22);
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
    background: rgba(30, 58, 99, 0.14);
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
    gap: 24px;
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
    background: rgba(30, 58, 99, 0.18);
  }

  .benefit-scene-card::before {
    top: 20%;
    box-shadow: 0 16px 0 rgba(30, 58, 99, 0.12), 0 32px 0 rgba(30, 58, 99, 0.12);
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
    background: rgba(31, 61, 115, 0.4);
    box-shadow: 0 18px 0 rgba(194, 150, 58, 0.4), 54px 0 0 rgba(31, 61, 115, 0.24);
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

  /* ===== Clients ===== */
  .clients-section {
    background: linear-gradient(160deg, #0b1a33 0%, #12294d 100%);
    color: #fff;
    padding: 74px 0;
  }

  .clients-header-v2 {
    max-width: 640px;
    margin-bottom: 32px;
  }

  .clients-header-v2 .kicker {
    color: rgba(255, 255, 255, 0.7);
  }

  .clients-title-v2 {
    color: #fff;
  }

  .clients-header-v2 .kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--muted);
  }

  .clients-header-v2 .kicker::before {
    content: "";
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background: var(--gold);
  }

  .clients-title-v2 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    line-height: 1.1;
    max-width: 20ch;
  }

  .clients-title-v2 strong {
    color: var(--gold);
  }

  .clients-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.58fr);
    gap: 28px;
    align-items: start;
  }

  .testimonial-card {
    display: grid;
    grid-template-columns: minmax(160px, 0.85fr) minmax(0, 1.15fr);
    border-radius: 28px;
    overflow: hidden;
    border: 1px solid var(--line);
    background: var(--panel);
    box-shadow: var(--shadow);
  }

  .testimonial-photo {
    position: relative;
    min-height: 260px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: #fff;
    background:
      radial-gradient(circle at 85% 0, rgba(194, 150, 58, 0.22), transparent 40%),
      linear-gradient(160deg, var(--wine) 0%, var(--wine-strong) 100%);
  }

  .testimonial-photo-placeholder {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
  }

  .testimonial-photo-avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1.5px dashed rgba(255, 255, 255, 0.4);
    display: grid;
    place-items: center;
    color: rgba(255, 255, 255, 0.8);
  }

  .testimonial-photo-avatar svg {
    width: 30px;
    height: 30px;
  }

  .testimonial-photo-caption {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
  }

  .testimonial-photo-badge {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.22);
    font-size: 0.7rem;
    font-weight: 600;
  }

  .testimonial-photo-badge::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--gold);
  }

  .testimonial-copy {
    padding: 26px 28px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .testimonial-stars {
    color: var(--gold);
    letter-spacing: 2px;
    font-size: 0.92rem;
  }

  .testimonial-name {
    font-size: 1.08rem;
    color: var(--ink);
  }

  .testimonial-role {
    font-size: 0.76rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-weight: 600;
  }

  .testimonial-quote {
    margin-top: 6px;
    padding-left: 16px;
    border-left: 3px solid var(--gold);
    color: var(--text);
    font-size: 0.94rem;
    line-height: 1.6;
    font-style: italic;
  }

  .testimonial-footer {
    margin-top: auto;
    padding-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border-top: 1px solid var(--line);
  }

  .testimonial-brand {
    font-size: 0.76rem;
    color: var(--muted);
    font-weight: 700;
    letter-spacing: 0.03em;
  }

  .testimonial-nav {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
  }

  .testimonial-nav button {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid var(--line);
    background: #fff;
    color: var(--wine);
    font-size: 1.1rem;
    line-height: 1;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  }

  .testimonial-nav button:hover {
    background: var(--wine-soft);
    border-color: var(--line-strong);
    transform: translateY(-2px);
  }

  .clients-logos {
    display: flex;
    flex-direction: column;
    gap: 14px;
    min-width: 0;
  }

  .clients-logos-kicker {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
  }

  .clients-logos-columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    height: 300px;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(180deg, transparent, #000 14%, #000 86%, transparent);
    mask-image: linear-gradient(180deg, transparent, #000 14%, #000 86%, transparent);
  }

  .clients-logos-col {
    overflow: hidden;
  }

  .clients-logos-track-v {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    animation: clients-logos-move-v 14s linear infinite;
  }

  .client-logo-tile {
    flex: 0 0 64px;
    width: 100%;
    display: grid;
    place-items: center;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.65);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  @keyframes clients-logos-move-v {
    from { transform: translateY(0); }
    to { transform: translateY(-50%); }
  }

  /* ===== Pillars / sectors ===== */
  .sectors-section {
    padding: 78px 0;
    background: var(--bg);
  }

  .sectors-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.16fr) minmax(0, 0.84fr);
    gap: 28px;
    align-items: stretch;
  }

  .sectors-header {
    order: 2;
    max-width: 100%;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
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
    margin-top: auto;
    width: 100%;
    aspect-ratio: 4 / 3;
    flex-shrink: 0;
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
    box-shadow: 0 12px 24px rgba(30, 58, 99, 0.2);
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
    box-shadow: 0 10px 22px rgba(30, 58, 99, 0.22);
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
    background: linear-gradient(160deg, #163a68 0%, #0b1c38 100%);
    border-color: transparent;
    box-shadow: 0 24px 50px rgba(11, 28, 56, 0.28);
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
    box-shadow: 0 0 0 4px rgba(31, 61, 115, 0.12);
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
      padding-top: 64px;
    }

    .clients-layout {
      grid-template-columns: minmax(0, 1fr);
    }

    .testimonial-card {
      grid-template-columns: minmax(0, 1fr);
    }

    .testimonial-photo {
      min-height: 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }


    .nav-toggle {
      display: flex;
    }

    .nav-right {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      padding: 18px 16px 22px;
      background: rgba(6, 16, 32, 0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav-right-open {
      display: flex;
    }

    .nav-links {
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;
    }

    .nav-actions {
      width: 100%;
    }

    .nav-actions .nav-button {
      width: 100%;
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

    .method-break-fullbleed {
      padding: 28px 0;
    }

    .method-break-banner {
      padding: 0 22px;
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

    .method-showcase {
      padding: 16px;
    }

    .method-showcase-orbit {
      min-height: 0;
      height: 260px;
    }

    .method-showcase-orbit::before {
      width: 240px;
    }

    .method-showcase-orbit::after {
      width: 180px;
    }

    .method-showcase-ring-a {
      width: 260px;
    }

    .method-showcase-ring-b {
      width: 140px;
    }

    .method-showcase-spark {
      width: 6px;
      height: 6px;
    }

    .method-showcase-photo {
      width: 110px;
      padding: 6px;
    }

    .method-showcase-tab-dot {
      width: 34px;
      height: 34px;
    }

    .method-showcase-tab-dot span {
      width: 12px;
      height: 12px;
    }

    .method-showcase-photo-placeholder {
      font-size: 0.62rem;
      letter-spacing: 0.04em;
      border-width: 1.5px;
    }

    .method-showcase-photo-placeholder span {
      max-width: 8ch;
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
      radial-gradient(circle at top left, rgba(31, 61, 115, 0.28), transparent 32%),
      radial-gradient(circle at top right, rgba(20, 45, 90, 0.3), transparent 34%),
      linear-gradient(180deg, #0b1a33 0%, #12294d 44%, #081426 100%);
    color: #f7eee6;
  }

  .hero::before {
    background:
      repeating-linear-gradient(60deg, rgba(214, 163, 87, 0.08) 0, rgba(214, 163, 87, 0.08) 1px, transparent 1px, transparent 128px),
      repeating-linear-gradient(-60deg, rgba(214, 163, 87, 0.08) 0, rgba(214, 163, 87, 0.08) 1px, transparent 1px, transparent 128px);
    opacity: 0.5;
  }

  .nav-fixed .brand {
    color: #fff;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
  }

  .nav-fixed .nav-links {
    color: rgba(255, 255, 255, 0.88);
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
  }

  .nav-fixed .nav-links a:hover {
    color: #fff;
  }

  .nav-fixed .nav-button-secondary {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(6, 16, 32, 0.4);
  }

  .nav-fixed .nav-button-primary,
  .hero .button-primary {
    background: linear-gradient(135deg, #f0cf93, #d5a14f);
    color: #0a1a2e;
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
      linear-gradient(180deg, rgba(14, 34, 66, 0.5), rgba(9, 22, 44, 0.46));
  }

  .hero-monitor-frame {
    background: linear-gradient(180deg, #0d2244 0%, #081426 100%);
    border-color: rgba(214, 163, 87, 0.18);
  }

  .hero-monitor-bezel {
    background: #0a1a30;
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
    background: linear-gradient(180deg, #0c1f3c 0%, #0a1730 100%);
  }

  .hero-sidebar {
    background: rgba(255, 255, 255, 0.02);
    border-right-color: rgba(214, 163, 87, 0.1);
  }

  .hero-sidebar-badge {
    color: #f0cf93;
    background: linear-gradient(135deg, rgba(213, 161, 79, 0.18), rgba(18, 40, 80, 0.14));
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
      linear-gradient(180deg, rgba(16, 38, 72, 0.68), rgba(9, 22, 44, 0.9));
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
    background: linear-gradient(180deg, rgba(20, 44, 84, 0.94), rgba(8, 20, 40, 0.98));
  }

  .hero-monitor-base {
    background: linear-gradient(180deg, rgba(20, 44, 84, 0.84), rgba(8, 18, 36, 0.96));
  }

  .ticker {
    background: rgba(8, 20, 40, 0.5);
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentStep = steps[activeStep];
  const currentHighlights = stepHighlights[activeStep];
  const currentArea = serviceAreas[activeArea];
  const currentTestimonial = testimonials[activeTestimonial];
  const orbitPositions = ["top", "left", "right", "bottom"];

  const showPrevTestimonial = () =>
    setActiveTestimonial((index) => (index - 1 + testimonials.length) % testimonials.length);
  const showNextTestimonial = () =>
    setActiveTestimonial((index) => (index + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((step) => (step + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="landing-shell">
      <style>{styles}</style>

      <nav className="nav-fixed" aria-label="Principal">
        <div className="container nav">
          <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)}>
            <span className="brand-logo-wrap">
              <img className="brand-logo" alt="Synergy EB Consultoria" src={brandLogoSrc} />
            </span>
          </a>

          <button
            className="nav-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-right ${menuOpen ? "nav-right-open" : ""}`}>
            <div className="nav-links">
              <a href="#servicos" onClick={() => setMenuOpen(false)}>O sistema</a>
              <a href="#metodo" onClick={() => setMenuOpen(false)}>Como funciona</a>
              <a href="#peotram" onClick={() => setMenuOpen(false)}>Vantagens</a>
              <a href="#atuacao" onClick={() => setMenuOpen(false)}>Diferenciais</a>
              <a href="#clientes" onClick={() => setMenuOpen(false)}>Clientes</a>
            </div>

            <div className="nav-actions">
              <a className="nav-button nav-button-primary" href="#contato" onClick={() => setMenuOpen(false)}>
                Fale conosco
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-grid" id="inicio">
            <div className="hero-copy">
              <p className="kicker">   </p>
              <h1 className="title-xl">
                Garanta a <strong>Conformidade Legal</strong> e otimize sua gestão.
              </h1>
              <p className="lead">
              A Synergy EB Consultoria oferece uma solução intuitiva para simplificar a gestão de requisitos legais de Qualidade, Meio Ambiente, Saúde e Segurança Ocupacional, auxiliando empresas a manterem conformidade. 
              </p>

              <div className="cta-row">
                <a className="button button-primary" href="#contato">
                  Fale conosco
                </a>
                <a className="button button-secondary" href="#servicos">
                  Conhecer o sistema
                </a>
              </div>

              <p className="hero-note">
                Conformidade com as normas ISO 9001, ISO 14001 e ISO 45001.
              </p>

              <div className="hero-pillars" aria-hidden="true">
                <span className="hero-pillar hero-pillar-quality">
                  {renderIcon(areaIconPaths.sso)}
                  <small>Qualidade</small>
                </span>
                <span className="hero-pillar hero-pillar-environment">
                  {renderIcon(areaIconPaths.ambiente)}
                  <small>Meio Ambiente</small>
                </span>
                <span className="hero-pillar hero-pillar-safety">
                  {renderIcon(areaIconPaths.seguranca)}
                  <small>Saúde e Segurança</small>
                </span>
              </div>
            </div>

            <aside
              className={`hero-art ${heroScreenImageSrc ? "hero-art-photo" : ""}`}
              aria-label="Equipe Synergy EB Consultoria"
            >
              {heroScreenImageSrc ? (
                <div className="hero-photo">
                  <img alt="Equipe Synergy EB Consultoria analisando o sistema" src={heroScreenImageSrc} />
                </div>
              ) : (
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
                            <LogoMark />
                          </div>
                          <div className="hero-sidebar-item" />
                          <div className="hero-sidebar-item" />
                          <div className="hero-sidebar-item" />
                          <div className="hero-sidebar-item" />
                        </aside>

                        <div className="hero-screen-main">
                          <div className="hero-system-bar">
                            <strong className="hero-system-title">Sistema de Requisitos Legais</strong>
                          </div>

                          <div className="hero-system-preview" />

                          <div className="hero-system-panels">
                            <div className="hero-system-card">
                              <strong>Evidências</strong>
                              <span>
                                Espaço para a imagem do sistema com o registro de evidências e o status de conformidade.
                              </span>
                            </div>

                            <div className="hero-system-card">
                              <strong>Requisitos</strong>
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
              )}
            </aside>
          </div>
        </div>
      </section>

      <section className="services-section" id="servicos">
        <div className="container">
          <header className="services-header">
            <p className="kicker">O sistema Synergy EB</p>
            <h2 className="title-lg">Sua conformidade, nossa prioridade.</h2>
            <p className="lead">
              Um sistema desenvolvido para as necessidades da sua organização. Selecione uma área para conhecer os recursos, as funcionalidades e o suporte da Synergy EB Consultoria.
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
            <p className="kicker">Como funciona</p>
            <h2 className="title-lg">Do requisito à evidência, de ponta a ponta.</h2>
            <p className="lead">
              Da identificação dos requisitos ao lançamento de evidências e à avaliação o processo completo, sem retrabalho.
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
                  <span className="method-classic-screen-badge">Metodo Synergy EB</span>
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
              <p className="kicker">Vantagem competitiva</p>
              <h2 className="title-lg">Transforme a gestão de requisitos legais em vantagem competitiva.</h2>
              <p className="lead">
                Com o sistema da Synergy EB Consultoria, a conformidade legal deixa de ser um fardo e se torna um diferencial estratégico. Reduza riscos, otimize processos e foque no crescimento do seu negócio, sabendo que sua gestão de QMS-SSO está em mãos seguras e eficientes.
              </p>

              <p className="method-break-quote">
                “Entre em contato conosco hoje mesmo e descubra como podemos simplificar sua jornada rumo à excelência em conformidade!”
              </p>

              <div className="method-break-actions">
                <a className="method-break-button method-break-button-primary" href="#contato">
                  Entre em contato
                </a>
                <a className="method-break-button method-break-button-secondary" href="#servicos">
                  Ver funcionalidades
                </a>
              </div>
            </div>

            <div className="method-break-visual" aria-hidden="true">
              <div className="method-break-figure">
                <span className="method-break-shield" />
                <div className="method-break-card method-break-card-a">
                  <strong>Atualização mensal</strong>
                  <span>Novas legislações inseridas todo mês pela equipe técnica.</span>
                </div>
                <div className="method-break-card method-break-card-b">
                  <strong>Suporte técnico</strong>
                  <span>Avaliação pela sua equipe ou pela equipe técnica da Synergy EB.</span>
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
            <p className="kicker">Método Synergy EB</p>
            <h2 className="title-lg">Cada etapa conectada à sua conformidade legal.</h2>
            <p className="lead">
              Explore visualmente as etapas do sistema da identificação dos requisitos ao acompanhamento das evidências.
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
                    <span className="method-showcase-kicker">Metodo Synergy EB</span>
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
              <p className="kicker">Por que o sistema Synergy EB</p>
              <h2 className="title-lg">Funcionalidades essenciais para uma gestão completa.</h2>
              <p className="lead">
                Recursos pensados para que sua organização esteja sempre à frente em conformidade com menos burocracia e mais controle.
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
              <p className="kicker">Diferenciais</p>
              <h2 className="title-lg">Tudo para simplificar sua gestão de QMS-SSO.</h2>
              <p className="lead">
                Do lançamento de evidências à atualização mensal da legislação tudo em um sistema intuitivo e fácil de usar.
              </p>

              <div className="sectors-media">
                {sectorsImageSrc ? (
                  <img alt="Atuação da Synergy EB Consultoria" src={sectorsImageSrc} />
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

      <section className="section clients-section" id="clientes">
        <div className="container">
          <header className="clients-header-v2">
            <p className="kicker">Qualidade &amp; confiança</p>
            <h2 className="title-lg clients-title-v2">
              Nossos parceiros e <strong>clientes estratégicos</strong>
            </h2>
          </header>

          <div className="clients-layout">
            <article className="testimonial-card">
              <div className="testimonial-photo" aria-hidden="true">
                <div className="testimonial-photo-placeholder">
                  <span className="testimonial-photo-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="3.6" />
                      <path d="M4.5 20c1.2-3.6 4.2-5.6 7.5-5.6s6.3 2 7.5 5.6" />
                    </svg>
                  </span>
                  <span className="testimonial-photo-caption">Foto do cliente</span>
                </div>
                <span className="testimonial-photo-badge">{currentTestimonial.since}</span>
              </div>
              <div className="testimonial-copy">
                <div className="testimonial-stars" aria-hidden="true">★★★★★</div>
                <strong className="testimonial-name">{currentTestimonial.name}</strong>
                <span className="testimonial-role">{currentTestimonial.role}</span>
                <p className="testimonial-quote">“{currentTestimonial.quote}”</p>
                <div className="testimonial-footer">
                  <span className="testimonial-brand">Depoimento reservado</span>
                  <div className="testimonial-nav">
                    <button
                      aria-label="Depoimento anterior"
                      onClick={showPrevTestimonial}
                      type="button"
                    >
                      ‹
                    </button>
                    <button
                      aria-label="Próximo depoimento"
                      onClick={showNextTestimonial}
                      type="button"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <div className="clients-logos">
              <p className="clients-logos-kicker">Empresas atendidas</p>
              <div className="clients-logos-columns" aria-hidden="true">
                {[clientPlaceholders.slice(0, 4), clientPlaceholders.slice(4, 8)].map((column, colIndex) => (
                  <div className="clients-logos-col" key={colIndex}>
                    <div
                      className="clients-logos-track-v"
                      style={{ animationDelay: `${colIndex * -8}s` }}
                    >
                      {[...column, ...column].map((item, index) => (
                        <div className="client-logo-tile" key={`${item}-${index}`}>
                          <span>Logo</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contato">
        <div className="container">
          <header className="section-header contact-header">
            <p className="kicker">Fale com a Synergy EB Consultoria</p>
            <h2 className="title-lg">Entre em contato e simplifique sua conformidade.</h2>
          </header>

          <div className="contact-grid">
            <article className="contact-card">
              <span className="badge">Synergy EB Consultoria</span>
              <p className="lead">
                Gestão de requisitos legais de QMS-SSO com um sistema intuitivo e suporte especializado. Entre em contato e descubra como simplificar sua conformidade.
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <span>Telefone</span>
                  <strong>(21) 99999-9999</strong>
                </div>
                <div className="contact-item">
                  <span>E-mail</span>
                  <strong>contato@ebconsultoria.com.br</strong>
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
                <a className="button button-primary" href="mailto:contato@ebconsultoria.com.br">
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
            <span>Synergy EB Consultoria</span>
            <span>Sistema de gestão de requisitos legais QMS-SSO.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
