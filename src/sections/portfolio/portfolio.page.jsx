import loadable from "@loadable/component";
import { useInView } from "react-intersection-observer";

import { WrapperPortfolio, ContentPortfolio, ContentImage } from "./styles";

import logoBatalhaDev from "../../assets/images/bdev-example.png";
import logoHelppy from "../../assets/images/hellpy-example.png";
import proTrader from "../../assets/images/ptrader-example.png";
import virta from "../../assets/images/virta-example.png";
import logoGdat from "../../assets/images/gdat-all.png";
import logoDryve from "../../assets/images/dryve-example.png";

const TitleComponent = loadable(() =>
  import("../../components/title/title.components")
);

export default function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const portfolios = [
    {
      logo: logoBatalhaDev,
      title: "BATALHA DEV",
      description: "Batalha Dev é um jogo feito para amantes da lógica.",
      url: "https://www.batalhadev.com.br/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: logoHelppy,
      title: "HELPPY",
      description:
        "Landing Page que profissionaliza redes digitais e ajuda a vender mais na internet.",
      url: "https://www.helppy.com.br/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: proTrader,
      title: "PRO TRADER INVESTING",
      description:
        "Aplicação web que gerencia e realiza rápidos cálculos para investidores do mercado de Opções Binárias.",
      url: "https://app-protrader.herokuapp.com/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: virta,
      title: "MONITORAMENTO VIRTA",
      description:
        "Aplicativo mobile para monitoramento de notícias em tempo real.",
      url: "https://play.google.com/store/apps/details?id=br.com.grupovirta.monitoramento",
      link: "VISITAR PÁGINA",
    },
    {
      logo: logoGdat,
      title: "ASSISTÊNCIA WEB",
      description: "Aplicação simplificada para controle e gestão de estoque.",
      url: "https://gdat.surge.sh/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: logoDryve,
      title: "DRYVE",
      description: "Challenger Dryve. Desafio proposto pela Dryve.",
      url: "https://dryve-challenge.surge.sh/",
      link: "VISITAR PÁGINA",
    },
  ];

  return (
    <WrapperPortfolio id="portfolio">
      <TitleComponent title="MEU" titleSpan="PORTFÓLIO" />
      <ContentPortfolio ref={ref}>
        {portfolios.map((item, idx) => (
          <div key={idx} className={inView ? "animation" : ""}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <img
                src={item.logo}
                alt={item.title}
                aria-labelledby={item.title}
                loading="lazy"
              />
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a
                  className="link-page"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.link}
                </a>
              </div>
            </a>
          </div>
        ))}
      </ContentPortfolio>
    </WrapperPortfolio>
  );
}
