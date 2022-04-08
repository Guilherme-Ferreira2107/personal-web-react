import { useInView } from "react-intersection-observer";

import { WrapperTitle } from "./styles";

const TitleComponent = ({ title, titleSpan }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <WrapperTitle ref={ref}>
      <h1 className={inView ? "animation" : ""}>
        {title} <span>{titleSpan}</span>
      </h1>
    </WrapperTitle>
  );
};

export default TitleComponent;
