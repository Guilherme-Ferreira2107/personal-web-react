import styled from "styled-components";

export const WrapperAbout = styled.section`
  width: 100%;
  padding: 80px 20px;

  @media (min-width: 768px) {
    padding: 80px 100px;
  }

  h1 {
    font-family: "Barlow Condensed", sans-serif;
    text-align: center;
    letter-spacing: 0.2rem;
    font-weight: 500;
    font-size: 2rem;
    color: white;
    margin-bottom: 40px;

    span {
      font-family: "Barlow Condensed", sans-serif;
      color: #0093e9;
    }
  }
`;

export const ContentAbout = styled.div`
  position: relative;
  display: flex;
  color: white;
  margin: auto;
  max-width: 900px;

  & div {
    width: 100%;
  }

  p,
  span {
    font-size: 1rem;
    font-weight: 300;
    position: relative;
    z-index: 2;

    @media (min-width: 465px) {
      font-size: 1.2rem;
    }

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  span {
    color: #0093e9;
  }

  &:before {
    content: "SOBRE";
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    margin: -5% 0 0 -20%;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 500;
    font-size: 10rem;
    color: rgba(55, 55, 55, 0.4);
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
      font-size: 18rem;
      margin: -5% 0 0 -5%;
    }

    @media (min-width: 976px) {
      font-size: 20rem;
    }
  }
`;

export const ContentImage = styled.div`
  text-align: right;
  display: none;
  z-index: 2;

  @media (min-width: 768px) {
    display: block;
  }

  img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
    transition: all 0.25s linear;

    @media (min-width: 768px) {
      width: 300px;
      height: 300px;
    }
  }
`;

export const ContentImageMobile = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;

  img {
    width: 140px !important;
    height: 140px !important;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
    transition: all 0.25s linear;

    @media (min-width: 465px) {
      width: 200px !important;
      height: 200px !important;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
