"use client";

import loadable from "@loadable/component";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import perfil from "@/assets/perfil_1.png";

import {
  WrapperAbout,
  ContentAbout,
  ContentImage,
  ContentImageMobile,
} from "./styles";

const TitleComponent = loadable(() => import("../../UI/Title"));

export const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <WrapperAbout id="about">
      <TitleComponent title="SOBRE" titleSpan="MIM" />

      {/* versão mobile */}
      <ContentImageMobile>
        <Image
          src={perfil}
          alt="Guilherme Santos"
          className="perfil-image"
          width={220}
          height={220}
          priority={false}
        />
      </ContentImageMobile>

      <ContentAbout ref={ref}>
        <div>
          <p className={inView ? "animation" : ""}>
            Olá, prazer em conhecer você!
            <br />
            <br />
            Me chamo Guilherme e sou desenvolvedor web e mobile
            <br />
            <span>
              {"["}ReactJS/NextJs, React Native, Angular 8+, NodeJS/NestJS{"]"}
            </span>
            <br />
            <br />
            Desde 2012, venho estudando e aplicando todo o conhecimento
            <br />
            adquirido em construções de aplicações web e mobile no meu
            cotidiano.
            <br />
            <br />
            Trago comigo não apenas as experiências de grandes <br />
            projetos e seus mais diversos segmentos, mas também <br />
            carinho por cada linha de código.
          </p>
        </div>

        {/* versão desktop */}
        <ContentImage>
          <Image
            src={perfil}
            alt="Guilherme Santos"
            className="perfil-image"
            width={280}
            height={280}
            priority={false}
          />
        </ContentImage>
      </ContentAbout>
    </WrapperAbout>
  );
};
