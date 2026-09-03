import { useEffect, useState } from "react";
import { styles, brandLogoSrc, brandLogoColorSrc, heroScreenImageSrc } from "./Inicial";

const priorityFeatures = [
  {
    title: "Lançamento simplificado de evidências",
    description:
      "Diga adeus às múltiplas telas e etapas complexas. Com uma interface intuitiva e direta, você registra as evidências de conformidade de forma ágil, focando no que realmente importa.",
  },
  {
    title: "Condução intuitiva",
    description:
      "Nosso sistema guia você através do processo, tornando a gestão de requisitos legais uma tarefa descomplicada e eficiente, mesmo para usuários sem experiência prévia.",
  },
];

const coreFeatures = [
  {
    title: "Identificação precisa",
    description:
      "Realizamos a identificação dos requisitos legais associados ao escopo de negócio da sua organização, bem como dos aspectos ambientais e perigos de Saúde e Segurança Ocupacional (SSO) relevantes.",
  },
  {
    title: "Controle dinâmico",
    description:
      "Mantenha-se atualizado com o controle contínuo das revogações e alterações dos requisitos legais, garantindo que sua base de dados esteja sempre alinhada com a legislação vigente.",
  },
  {
    title: "Legislação na íntegra",
    description:
      "Tenha acesso facilitado à íntegra das legislações aplicáveis, diretamente no sistema, para consulta e referência sempre que necessário.",
  },
  {
    title: "Atualização mensal garantida",
    description:
      "Nossa equipe técnica realiza atualizações mensais dos requisitos legais, inserindo novas legislações aplicáveis e garantindo que você nunca perca uma mudança importante.",
  },
];

const evaluationOptions = [
  {
    title: "Equipe do cliente",
    description:
      "Sua própria equipe pode conduzir as avaliações, utilizando a ferramenta para registrar e monitorar a conformidade.",
  },
  {
    title: "Equipe técnica da Synergy EB",
    description:
      "Conte com a expertise dos nossos especialistas para realizar as avaliações, garantindo um olhar técnico e aprofundado sobre sua conformidade.",
  },
];

export default function Sistema() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="landing-shell">
      <style>{styles}</style>

      <nav className={`nav-fixed ${navScrolled ? "nav-scrolled" : ""}`} aria-label="Principal">
        <div className="container nav">
          <a className="brand" href="/" onClick={() => setMenuOpen(false)}>
            <span className="brand-logo-wrap">
              <img
                alt="Synergy EB Consultoria"
                className={navScrolled ? "brand-logo-color" : "brand-logo"}
                src={navScrolled ? brandLogoColorSrc : brandLogoSrc}
              />
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
              <a href="/#servicos" onClick={() => setMenuOpen(false)}>Nossos Serviços</a>
              <a href="/#metodo" onClick={() => setMenuOpen(false)}>Como funciona</a>
              <a href="/sistema.html" onClick={() => setMenuOpen(false)}>Sistema</a>
              <a href="/#atuacao" onClick={() => setMenuOpen(false)}>Diferenciais</a>
              <a href="/#clientes" onClick={() => setMenuOpen(false)}>Clientes</a>
            </div>

            <div className="nav-actions">
              <a className="nav-button nav-button-primary" href="/#contato" onClick={() => setMenuOpen(false)}>
                Fale conosco
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="section page-hero">
        <div className="container">
          <a className="page-back-link" href="/">
            ← Voltar para o site
          </a>

          <div className="page-hero-grid">
            <div className="page-hero-copy">
              <p className="kicker">Sistema Synergy EB</p>
              <h1 className="title-xl">
                Garanta a conformidade legal e otimize sua gestão com o Sistema Synergy EB
                Consultoria.
              </h1>
              <p className="lead">
                Em um cenário regulatório cada vez mais complexo, manter a conformidade com os
                requisitos legais de Qualidade, Meio Ambiente, Saúde e Segurança Ocupacional
                (QMS-SSO) é um desafio constante para as organizações. A Synergy EB Consultoria
                apresenta uma solução inovadora e intuitiva, projetada para simplificar a
                gestão desses requisitos e assegurar o atendimento às normas ABNT NBR ISO
                9001:2015, 14001:2015 e ISO 45001:2018.
              </p>
            </div>

            <div className="page-hero-media">
              <img alt="Sistema de gestão de requisitos legais Synergy EB" src={heroScreenImageSrc} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="page-section-header">
            <p className="kicker">Sua conformidade, nossa prioridade</p>
            <h2 className="title-lg">Um sistema desenvolvido para você.</h2>
            <p className="lead">
              Nosso sistema de gerenciamento de requisitos legais foi cuidadosamente
              desenvolvido para atender às necessidades específicas da sua organização,
              proporcionando uma ferramenta robusta e, acima de tudo, fácil de usar.
              Entendemos que o tempo é um recurso valioso, e por isso, eliminamos a burocracia
              e o retrabalho.
            </p>
          </header>

          <div className="policy-grid">
            {priorityFeatures.map((feature, index) => (
              <div className="policy-card" key={feature.title}>
                <span className="policy-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-blue">
        <div className="container">
          <header className="page-section-header">
            <p className="kicker">Funcionalidades essenciais</p>
            <h2 className="title-lg">Para uma gestão completa.</h2>
            <p className="lead">
              O sistema da Synergy EB Consultoria oferece um conjunto abrangente de
              funcionalidades para garantir que sua organização esteja sempre à frente em
              termos de conformidade.
            </p>
          </header>

          <div className="policy-grid">
            {coreFeatures.map((feature, index) => (
              <div className="policy-card" key={feature.title}>
                <span className="policy-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="page-section-header">
            <p className="kicker">Avaliação e suporte personalizado</p>
            <h2 className="title-lg">Do jeito que funciona para você.</h2>
            <p className="lead">
              A avaliação do atendimento aos requisitos legais pode ser realizada de duas
              formas, adaptando-se à sua preferência e capacidade interna:
            </p>
          </header>

          <div className="policy-grid">
            {evaluationOptions.map((option, index) => (
              <div className="policy-card" key={option.title}>
                <span className="policy-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </div>
            ))}
          </div>

          <div className="page-note" style={{ marginTop: 28 }}>
            <strong>Nota importante</strong>
            <p>
              Caso sua organização ainda não possua a identificação formal de aspectos
              ambientais e perigos de SSO, a Synergy EB Consultoria disponibilizará uma lista
              de verificação detalhada para auxiliar no enquadramento das suas atividades,
              garantindo que nenhum ponto crítico seja negligenciado.
            </p>
          </div>
        </div>
      </section>

      <section className="section page-cta-section">
        <div className="container">
          <h2 className="title-lg">
            Transforme a gestão de requisitos legais em vantagem competitiva.
          </h2>
          <p className="lead">
            Com o sistema da Synergy EB Consultoria, a conformidade legal deixa de ser um
            fardo e se torna um diferencial estratégico. Reduza riscos, otimize processos e
            foque no crescimento do seu negócio, sabendo que sua gestão de QMS-SSO está em
            mãos seguras e eficientes. Entre em contato conosco hoje mesmo e descubra como
            podemos simplificar sua jornada rumo à excelência em conformidade!
          </p>
          <div className="cta-row">
            <a className="button button-primary" href="/#contato">
              Fale conosco
            </a>
            <a className="button button-secondary" href="/#servicos">
              Conhecer os serviços
            </a>
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
