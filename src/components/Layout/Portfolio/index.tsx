"use client";

import loadable from "@loadable/component";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";

import { WrapperPortfolio, ContentPortfolio } from "./styles";

import logoBatalhaDev from "@/assets/bdev-example.webp";
import logoHelppy from "@/assets/hellpy-example.png";
import proTrader from "@/assets/ptrader-example.webp";
import virta from "@/assets/virta-example.webp";
import logoGdat from "@/assets/gdat-all.webp";
import logoDryve from "@/assets/dryve-example.webp";
import logoVieiraGally from "@/assets/portfolio-vieira-gally.webp";

const TitleComponent = loadable(() => import("@/components/UI/Title"));

interface PortfolioItem {
  logo: StaticImageData;
  title: string;
  description: string;
  url: string;
  link: string;
}

export function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const portfolios: PortfolioItem[] = [
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
    {
      logo: logoVieiraGally,
      title: "Vieira Gally Advogados",
      description: "Single page sob medida para uma agência de advocacia.",
      url: "https://nextjs-vieira-gally.vercel.app/",
      link: "VISITAR PÁGINA",
    },
  ];

  return (
    <WrapperPortfolio id="portfolio">
      <TitleComponent title="MEU" titleSpan="PORTFÓLIO" />
      <ContentPortfolio ref={ref}>
        {portfolios.map((item, idx) => (
          <div
            key={idx}
            className={`${inView ? "animation" : ""} ${
              inView ? `animation-${idx}` : ""
            }`}
          >
            <a href={item.url} target="_blank" rel="noreferrer">
              <Image
                src={item.logo}
                alt={item.title}
                width={320}
                height={200}
                className="portfolio-logo"
                priority={false}
              />
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span className="link-page">{item.link}</span>
              </div>
            </a>
          </div>
        ))}
      </ContentPortfolio>
    </WrapperPortfolio>
  );
}
