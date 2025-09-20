"use client";

import loadable from "@loadable/component";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";

import { WrapperPortfolio, ContentPortfolio } from "./styles";

import logoBatalhaDev from "@/assets/bdev-example.webp";
import logoHelppy from "@/assets/hellpy-example.png";
import virta from "@/assets/virta-example.webp";
import printSilk from "@/assets/print-silk.webp";
import printAd from "@/assets/print-ad-promessas.webp";
import printDiagnostiquei from "@/assets/print-diagnostiquei.webp";
import printM3 from "@/assets/print-m3.webp";

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
      logo: printM3,
      title: "M3 Digital Solutions",
      description:
        "Site para captação de usuários interessados em estampas personalizadas.",
      url: "https://silkestampa.vercel.app/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: printDiagnostiquei,
      title: "Diagnostiquei",
      description:
        "Aplicação que ajuda pessoas a identificarem sintomas mentais.",
      url: "https://diagnostiquei.com/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: printAd,
      title: "Assembléia de Deus - Promessas",
      description:
        "WebSite para captação de pessoas com necessidades espirituais.",
      url: "https://ad-promessas-zs.vercel.app/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: printSilk,
      title: "SilkEstampa",
      description:
        "Site para captação de usuários interessados em estampas personalizadas.",
      url: "https://silkestampa.vercel.app/",
      link: "VISITAR PÁGINA",
    },
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
      logo: virta,
      title: "MONITORAMENTO VIRTA",
      description:
        "Aplicativo mobile para monitoramento de notícias em tempo real.",
      url: "https://play.google.com/store/apps/details?id=br.com.grupovirta.monitoramento",
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
