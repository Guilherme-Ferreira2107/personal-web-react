import moment from "moment";

import { WrapperFooter } from "./styles";

const Footer = () => {
  const currentYear = moment().format("YYYY");

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
}

export default Footer;