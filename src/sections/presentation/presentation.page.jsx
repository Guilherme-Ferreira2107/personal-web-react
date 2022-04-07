import { BsArrowDown } from "react-icons/bs";

import { Aside } from "..";
import {
  WrapperPresentation,
  ContentPresentation,
  ContentArrow,
} from "./styles";

export default function Presentation() {
  return (
    <WrapperPresentation>
      <Aside />
      <ContentPresentation>
        <div>
          <p>GUILHERME SANTOS</p>
          <span>CARINHO POR CADA LINHA DE CÓDIGO</span>
        </div>
        <ContentArrow>
          <BsArrowDown />
        </ContentArrow>
      </ContentPresentation>
    </WrapperPresentation>
  );
}
