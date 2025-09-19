// import { useEffect } from "react";
// import { Timeline } from "animejs";
import { useInView } from "react-intersection-observer";
import { BsArrowDown } from "react-icons/bs";

import {
  WrapperPresentation,
  ContentPresentation,
  ContentArrow,
} from "./styles";
import Aside from "../Aside";

export function Presentation() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  // useEffect(() => {
  //   const textWrapper = document.querySelector(".ml12") as HTMLElement | null;

  //   if (textWrapper && textWrapper.textContent) {
  //     textWrapper.innerHTML = textWrapper.textContent.replace(
  //       /\S/g,
  //       "<span class='letter'>$&</span>"
  //     );

  //     anime.timeline({ loop: false }).add({
  //       targets: ".ml12 .letter",
  //       translateX: [40, 0],
  //       translateZ: 0,
  //       opacity: [0, 1],
  //       easing: "easeOutExpo",
  //       duration: 1200,
  //       delay: (_el, i) => 500 + 30 * i,
  //     });
  //   }
  // }, []);

  return (
    <WrapperPresentation>
      <Aside />

      <ContentPresentation ref={ref}>
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, idx) => (
            <li key={idx}></li>
          ))}
        </ul>

        <div className={inView ? "animation" : ""}>
          <p>GUILHERME SANTOS</p>
          <span className="ml12 pr-12">CARINHO POR CADA LINHA DE CÓDIGO</span>
        </div>

        <ContentArrow>
          <a href="#about">
            <BsArrowDown className={inView ? "animation" : ""} />
          </a>
        </ContentArrow>
      </ContentPresentation>
    </WrapperPresentation>
  );
}
