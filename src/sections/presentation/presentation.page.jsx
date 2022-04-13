import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
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

  useEffect(() => {
    const textWrapper = document.querySelector(".ml12");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".ml12 .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i,
    });
  }, []);

  return (
    <WrapperPresentation>
      <Aside />
      <ContentPresentation ref={ref}>
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className={inView ? "animation" : ""}>
          <p>GUILHERME SANTOS</p>
          <span className="ml12">CARINHO POR CADA LINHA DE CÓDIGO</span>
        </div>
        <ContentArrow>
          <BsArrowDown className={inView ? "animation" : ""} />
        </ContentArrow>
      </ContentPresentation>
    </WrapperPresentation>
  );
}
