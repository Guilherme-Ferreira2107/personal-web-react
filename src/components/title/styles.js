import styled from "styled-components";

export const WrapperTitle = styled.div`
  min-height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;

  h1 {
    color: white;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    position: absolute;
    transition: all 0.75s linear;

    &.animation {
      animation-name: animationTitle;
      animation-duration: 0.75s;
      animation-timing-function: linear;

      @keyframes animationTitle {
        0% {
          opacity: 0;
          bottom: -20px;
        }
        100% {
          opacity: 1;
        }
      }
    }

    span {
      color: #0093e9;
    }
  }
`;
