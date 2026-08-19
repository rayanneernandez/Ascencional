import { useState } from "react";
import { styles, brandLogoSrc, historyImageSrc, historyStats } from "./Inicial";

const fullHistoryParagraphs = [
  "Com uma trajetória consolidada de 10 anos de experiência no mercado, a Synergy EB Consultoria destaca-se pela excelência na prestação de serviços especializados, com foco em Qualidade, Saúde, Segurança Ocupacional e Meio Ambiente (QHSE). Fundada no Rio de Janeiro em outubro de 2016, a organização foi estruturada para atender às crescentes demandas por soluções integradas e sustentáveis em diversos ramos de atuação.",
  "Ao longo de sua história, a Synergy EB Consultoria construiu uma reputação sólida baseada no compromisso com a segurança, a conformidade legal e a melhoria contínua. Com o passar dos anos, a experiência de uma década permitiu a expansão do portfólio, incorporando soluções avançadas em Meio Ambiente, Qualidade e Governança ESG.",
  "A sede no Rio de Janeiro posicionou a empresa estrategicamente para atender grandes players do mercado, oferecendo consultoria especializada em sistemas de gestão como a ISO 45001 (Saúde e Segurança), ISO 14001 (Meio Ambiente) e ISO 9001 (Qualidade). A evolução dos serviços acompanhou as tendências do mercado e as novas exigências regulatórias, culminando na criação de serviços especializados como o PEOTRAM e a Estratégia de Governança ESG.",
  "Consolidou-se como uma parceira estratégica para organizações que buscam transformar desafios de gestão em diferenciais competitivos, oferecendo não apenas o atendimento às exigências regulatórias, mas também o impulsionamento da performance e da sustentabilidade dos negócios de seus clientes.",
];

export default function QuemSomos() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="landing-shell">
      <style>{styles}</style>

      <nav className="nav-fixed" aria-label="Principal">
        <div className="container nav">
          <a className="brand" href="/" onClick={() => setMenuOpen(false)}>
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
              <a href="/#servicos" onClick={() => setMenuOpen(false)}>O sistema</a>
              <a href="/#metodo" onClick={() => setMenuOpen(false)}>Como funciona</a>
              <a href="/#peotram" onClick={() => setMenuOpen(false)}>Vantagens</a>
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
          <p className="kicker">Quem somos</p>
          <h1 className="title-xl">Uma década de excelência em QHSE, PEOTRAM e ESG.</h1>
          <p className="lead">
            Conheça a trajetória da Synergy EB Consultoria: como nascemos, o que nos trouxe até
            aqui e o compromisso que sustenta cada projeto que entregamos.
          </p>
        </div>
      </section>

      <section className="section history-section">
        <div className="container">
          <div className="history-layout">
            <div className="history-media">
              {historyImageSrc ? (
                <img alt="Synergy EB Consultoria" src={historyImageSrc} />
              ) : (
                <div className="history-media-ph" aria-hidden="true">
                  <strong>Imagem reservada</strong>
                </div>
              )}
            </div>

            <div className="history-copy">
              {fullHistoryParagraphs.map((paragraph, index) => (
                <p className="lead" key={index}>
                  {paragraph}
                </p>
              ))}

              <div className="history-stats">
                {historyStats.map((stat) => (
                  <div className="history-stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section page-cta-section">
        <div className="container">
          <h2 className="title-lg">Pronto para elevar a gestão de QHSE da sua empresa?</h2>
          <p className="lead">
            Fale com a nossa equipe e descubra como a Synergy EB Consultoria pode preparar sua
            operação para o PEOTRAM, a Governança ESG e as principais normas ISO.
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
