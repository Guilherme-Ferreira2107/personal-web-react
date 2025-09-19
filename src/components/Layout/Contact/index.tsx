import loadable from "@loadable/component";
import { useInView } from "react-intersection-observer";
import { RiMapPin2Line, RiMailOpenLine } from "react-icons/ri";
import { FiSmartphone } from "react-icons/fi";

import {
  WrapperContact,
  ContentContact,
  ContentThanks,
  ContentContacts,
} from "./styles";

const TitleComponent = loadable(() => import("@/components/UI/Title"));

export const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <WrapperContact id="contacts">
      <TitleComponent title="ENTRE" titleSpan="EM CONTATO" />
      <ContentContact ref={ref}>
        <ContentThanks className={inView ? "animation" : ""}>
          <p>
            Me esforço para ser criativo e busco criar a melhor comunicação com
            a minha equipe. <br />
            Uau, sei que acabamos de nos conhecer, mas já tenho um bom
            pressentimento.
          </p>
          <small>
            Obrigado pela visita, e para me conhecer melhor, por favor, entre em
            contato comigo. Ou melhor ainda, vamos marcar para tomar um café
            virtual. <br />É por conta da casa!
          </small>
        </ContentThanks>
        <ContentContacts className={inView ? "animation" : ""}>
          <h4>Retornarei o contato em até 24 horas.</h4>
          <p>
            <em>Contact us and we will get back to you within 24 hours.</em>
          </p>
          <br />
          <p>
            São Paulo, SP <RiMapPin2Line />
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=5511986701058"
            target="_blank"
            rel="noopener noreferrer"
          >
            +55 11 98670-1058 <FiSmartphone />
          </a>

          <a
            href="mailto:guilhermerferreira2107@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            guilhermeferreira2107@gmail.com <RiMailOpenLine />
          </a>
        </ContentContacts>
      </ContentContact>
    </WrapperContact>
  );
};
