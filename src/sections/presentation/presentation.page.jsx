import { useInView } from "react-intersection-observer";

import { BsArrowDown } from "react-icons/bs";

import { Aside } from "..";
import {
  WrapperPresentation,
  ContentPresentation,
  ContentArrow,
} from "./styles";

export default function Presentation() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <WrapperPresentation>
      <Aside />
      <ContentPresentation ref={ref}>
        <div className={inView ? "animation" : ""}>
          <p>GUILHERME SANTOS</p>
          <span>CARINHO POR CADA LINHA DE CÓDIGO</span>
        </div>
        <ContentArrow>
          <BsArrowDown className={inView ? "animation" : ""} />
        </ContentArrow>
      </ContentPresentation>
    </WrapperPresentation>
  );
}
