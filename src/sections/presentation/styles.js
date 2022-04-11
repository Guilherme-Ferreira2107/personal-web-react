import styled from "styled-components";

export const WrapperPresentation = styled.section`
  width: 100%;
  height: calc(100% - 80px);
  min-height: 600px;
  display: flex;
  justify-content: space-between;
`;

export const ContentPresentation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  background-color: #0093e9;
  background-image: linear-gradient(
    160deg,
    #0093e9 0%,
    #1560bd 50%,
    #041e42 100%
  );

  & div {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &.animation {
      animation-name: animationSubTitle;
      animation-duration: 1s;
      animation-timing-function: linear;

      @keyframes animationSubTitle {
        0% {
          opacity: 0;
          margin-top: -150px;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }

  p {
    position: relative;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 500;
    font-size: 3rem;
    color: #07398050;
    letter-spacing: 0.4rem;
    line-height: 2.5rem;

    @media (min-width: 465px) {
      font-size: 6rem;
      letter-spacing: 0.2rem;
      line-height: 4.22rem;
    }

    @media (min-width: 768px) {
      font-size: 10rem;
      letter-spacing: 0.2rem;
      line-height: 7.15rem;
    }
  }

  span {
    color: white;
    font-weight: 300;
    position: relative;
    font-size: 0.75rem;

    @media (min-width: 465px) {
      font-size: 1rem;
    }
  }
`;

export const ContentArrow = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 20px 20px 0;

  .animation {
    animation-name: animationArrow;
    animation-duration: 2s;
    animation-timing-function: linear;

    @keyframes animationArrow {
      0% {
        opacity: 0;
        margin-bottom: 140px;
      }
      100% {
        opacity: 1;
      }
    }
  }

  svg {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.2);
  }
`;
