import perfil from "../../assets/images/perfil_1.png";
import {
  WrapperAbout,
  ContentAbout,
  ContentImage,
  ContentImageMobile,
} from "./styles";

const About = () => {
  return (
    <WrapperAbout id="about">
      <h1>
        SOBRE <span>MIM</span>
      </h1>
      <ContentImageMobile>
        <img src={perfil} alt="Guilherme Santos" />
      </ContentImageMobile>
      <ContentAbout>
        <div>
          <p>
            Olá, prazer em conhecer você!
            <br />
            <br />
            Me chamo Guilherme e sou desenvolvedor web
            <br />
            <span>
              {"["}React.js, React Native, Next.js, Angular, Node.js{"]"}
            </span>
            <br />
            <br />
            Desde 2017, venho estudando e aplicando todo o conhecimento
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
        <ContentImage>
          <img src={perfil} alt="Guilherme Santos" />
        </ContentImage>
      </ContentAbout>
    </WrapperAbout>
  );
}

export default About;