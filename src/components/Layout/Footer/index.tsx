import { WrapperFooter } from "./styles";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <WrapperFooter>
      <p>
        Copyright ©{currentYear} Todos os direitos reservados | Desenvolvedor
        Fullstack Javascript
        <a
          href="https://www.linkedin.com/in/guifsantos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GUILHERME SANTOS
        </a>
      </p>
    </WrapperFooter>
  );
};
