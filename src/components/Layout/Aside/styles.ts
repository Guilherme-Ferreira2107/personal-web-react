import { paletas } from "@/styles/theme";
import styled from "styled-components";

export const WrapperAside = styled.aside`
  position: relative;
  z-index: 10;
  width: 70px;
  height: 100vh;
  min-height: 600px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 376px) {
    width: 100px;
  }
`;

export const ContentNamePanel = styled.div`
  & div {
    margin-top: 120px;
    margin-left: -90px;
    width: 250px;
    transform: rotate(-90deg);

    p {
      font-size: 1.4rem;
      letter-spacing: 0.15rem;
    }

    strong {
      font-size: 2rem;
    }

    span {
      font-size: 0.8rem;
    }

    @media (min-width: 376px) {
      margin-left: -80px;
    }
  }
`;

export const ContentSocialMedia = styled.div`
  text-align: center;
`;

export const VerticalDivisor = styled.div`
  height: 50px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-bottom: 10px;
    height: 30px;
    width: 1px;
    background-color: ${paletas.White20};
  }
`;

export const SocialList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    margin: 10px 0;

    a {
      transition: all 0.25s linear;
      filter: grayscale(1);
      opacity: 0.4;

      &:hover {
        opacity: 1;
      }
    }
  }

  .icon-social-media {
    width: 32px;
    height: 32px;
    margin-top: 0;
    animation: animation-icons 1.5s ease-out;
  }

  @keyframes animation-icons {
    0% {
      margin-top: 30px;
    }
    100% {
      margin-top: 0;
    }
  }
`;
