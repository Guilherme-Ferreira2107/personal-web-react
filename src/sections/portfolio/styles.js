import styled from "styled-components";

export const WrapperPortfolio = styled.section`
  width: 100%;
  padding: 80px 20px;

  @media (min-width: 768px) {
    padding: 80px 100px;
  }

  h1 {
    text-align: center;
    letter-spacing: 0.2rem;
    font-weight: 500;
    font-size: 2rem;
    color: white;
    margin-bottom: 40px;

    span {
      color: #0093e9;
    }
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
    margin: 20px auto;
    padding: 10px;

    @media (min-width: 465px) {
      width: calc(100% / 2);
      min-width: 300px;
      max-width: 310px;
    }

    @media (min-width: 774px) {
      width: calc(100% / 3);
      min-width: 300px;
      max-width: 310px;
    }

    h4 {
      font-size: 1rem;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.5);
      margin: 10px 0;
    }

    p {
      font-size: 1.25rem;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      margin: 10px 0;
    }

    .link-page {
      color: #0093e9;
      font-weight: bold;
      opacity: 0.8;
      transition: all 0.15s linear;

      &:hover {
        opacity: 1;
        text-decoration: underline;
      }
    }
  }

  &:before {
    content: "PORTFÓLIO";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    margin: 100% 0 0 -20%;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 500;
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.1);
    animation-name: animateBackground;
    animation-duration: 90s;
    animation-iteration-count: infinite;

    @keyframes animateBackground {
      0% {
        left: 0px;
      }
      50% {
        left: -200px;
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
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 500;
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.1);
    animation-name: animateBackground;
    animation-duration: 90s;
    animation-iteration-count: infinite;

    @keyframes animateBackground {
      0% {
        left: -200px;
      }
      50% {
        left: 0px;
      }
      100% {
        left: -200px;
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
  transition: all 0.25s linear;
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }

  img {
    width: 100%;
    transition: all 0.25s linear;

    &:hover {
      transform: scale(1.1);
    }

    @media (min-width: 768px) {
      max-height: initial;
    }
  }
`;
