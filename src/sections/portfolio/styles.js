import styled from "styled-components";
import { paletas } from "../../styled/theme";

export const WrapperPortfolio = styled.section`
  width: 100%;
  padding: 80px 20px;

  @media (min-width: 768px) {
    padding: 80px 100px;
  }
`;

export const ContentPortfolio = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1100px;

  & > div {
    position: relative;
    padding: 40px 20px 80px;
    transition: all 1s linear;
    z-index: 2;
    text-align: center;
    object-fit: cover;
    overflow: hidden;
    background: ${paletas.Black};

    &:hover {
      transition: all 0.15s linear;

      h4 {
        transform: scale(1);
        transition: all 0.15s linear;
      }

      img {
        transform: scale(1.1);
        filter: grayscale(0) brightness(0.25) blur(0px);
      }

      .link-page {
        transition: all 0.15s linear;
        margin-bottom: 0px;
      }
    }

    &.animation {
      animation-name: animatePortfolio;
      animation-duration: 3s;
      animation-iteration-count: linear;

      @keyframes animatePortfolio {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }

    @media (min-width: 465px) {
      width: calc(100% / 2);
    }

    h4 {
      position: relative;
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 4px;
      color: ${paletas.White};
      margin: 10px 0 30px;
      transform: scale(0.9);
    }

    p {
      font-size: 1rem;
      font-weight: 300;
      color: ${paletas.White};
      margin: 10px 0;
      letter-spacing: 2px;
    }

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: -1;
      transition: all 0.25s linear;
      filter: grayscale(1) brightness(0.05) blur(2px);
    }

    .link-page {
      position: absolute;
      right: 0;
      bottom: 0;
      margin-bottom: -60px;
      padding: 10px;
      color: ${paletas.BlueLight};
      background: ${paletas.White};
      font-weight: bold;
      transition: all 0.15s linear;
    }
  }

  &:before {
    content: "PORTFÓLIO";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    margin: 100% 0 0 -20%;
    font-weight: 500;
    font-size: 4rem;
    color: ${paletas.Grafite};
    animation-name: animateBackground;
    animation-duration: 90s;
    animation-iteration-count: infinite;

    @keyframes animateBackground {
      0% {
        left: 0px;
      }
      50% {
        left: -600px;
      }
      100% {
        left: 0px;
      }
    }

    @media (min-width: 768px) {
      font-size: 10rem;
      margin: -5% 0 0 -5%;
    }

    @media (min-width: 976px) {
      font-size: 16rem;
    }
  }

  &:after {
    content: "PORTFÓLIO";
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    margin: -50% 0 0 -20%;
    font-weight: 500;
    font-size: 4rem;
    color: ${paletas.Grafite};
    animation-name: animateBackgroundTwo;
    animation-duration: 90s;
    animation-iteration-count: infinite;

    @keyframes animateBackgroundTwo {
      0% {
        left: -600px;
      }
      50% {
        left: 0px;
      }
      100% {
        left: -600px;
      }
    }

    @media (min-width: 768px) {
      font-size: 10rem;
      margin: -5% 0 0 -5%;
    }

    @media (min-width: 976px) {
      font-size: 16rem;
    }
  }
`;

export const ContentImage = styled.div`
  position: relative;
  z-index: 2;
  min-height: 200px;
  overflow: hidden;
  object-fit: cover;
  transition: all 0.15s linear;

  img {
    width: 100%;
    transition: all 0.15s linear;

    &:hover {
      transform: scale(1.05);
    }

    @media (min-width: 768px) {
      max-height: initial;
    }
  }
`;
