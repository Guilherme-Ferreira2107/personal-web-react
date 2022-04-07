import { RiMapPin2Line, RiMailOpenLine } from "react-icons/ri";
import { FiSmartphone } from "react-icons/fi";

import {
  WrapperContact,
  ContentContact,
  ContentThanks,
  ContentContacts,
} from "./styles";

const Contact = () => {
  return (
    <WrapperContact id="contacts">
      <h1>
        ENTRE EM <span>CONTATO</span>
      </h1>
      <ContentContact>
        <ContentThanks>
          <p>
            Me esforço para ser criativo, busco criar a melhor comunicação com a
            minha equipe. Muito bem, sei que acabamos de nos conhecer, mas já
            tenho um bom pressentimento.
          </p>
          <small>
            Obrigado pela visita, e para me conhecer melhor, por favor, entre em
            contato. Ou melhor ainda, vamos marcar para tomar um café virtual. É
            por conta da casa!
          </small>
        </ContentThanks>
        <ContentContacts>
          <h4>Retornarei o contato em até 24 horas.</h4>
          <p>
            <em>Contact us and we'll get back to you within 24 hours.</em>
          </p>
          <p>
            São Paulo, SP <RiMapPin2Line />
          </p>
          <p>
            <a
              href="https://api.whatsapp.com/send?phone=5511986701058"
              target="_blank"
              rel="noopener noreferrer"
            >
              +55 11 98670-1058 <FiSmartphone />
            </a>
          </p>
          <p>
            <a
              href="mailto:guilhermerferreira2107@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              guilhermeferreira2107@gmail.com <RiMailOpenLine />
            </a>
          </p>
        </ContentContacts>
      </ContentContact>
    </WrapperContact>
  );
};

export default Contact;
