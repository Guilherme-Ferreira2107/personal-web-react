import styled from "styled-components";
import { paletas } from "../../styled/theme";

export const WrapperContact = styled.section`
  width: 100%;
  padding: 80px 20px 20px;
  transition: all 0.25s linear;

  @media (min-width: 768px) {
    padding: 80px 100px 20px;
  }
`;

export const ContentContact = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  transition: all 0.25s linear;

  @media (min-width: 465px) {
    max-width: 900px;
    margin: auto;
    flex-direction: row;
  }

  & div {
    width: 100%;
    position: relative;
    z-index: 2;
    transition: all 1s linear;

    &.animation {
      animation: animateContact 1s linear;

      @keyframes animateContact {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
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

    @media (min-width: 768) {
      font-size: 1.5rem;
    }
  }

  span {
    color: ${paletas.BlueLight};
  }

  &:before {
    content: "CONTATO";
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    margin: -5% 0 0 -20%;
    font-weight: 500;
    font-size: 8rem;
    color: ${paletas.CinzaClaro};

    animation: animateBackgroundOne 120s infinite;

    @keyframes animateBackgroundOne {
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
      font-size: 14rem;
      margin: -5% 0 0 -5%;
    }

    @media (min-width: 976px) {
      font-size: 20rem;
    }
  }
`;

export const ContentThanks = styled.div`
  width: 100%;
  margin-bottom: 80px;

  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  small {
    font-size: 1.1rem;
  }
`;

export const ContentContacts = styled.div`
  width: 100%;
  text-align: right;

  svg {
    margin-bottom: -2px;
  }

  p,
  a,
  h4 {
    font-size: 1.5rem;
  }

  p,
  a {
    margin-bottom: 10px;
  }

  p em {
    font-size: 1rem;
  }

  a:hover {
    transition: all 0.25s linear;
    color: ${paletas.BlueLight};
  }
`;
