import styled from "styled-components";
import { paletas } from "../../styled/theme";

export const WrapperHeader = styled.section`
  width: 100%;
  height: 80px;
  transition: all 0.25s linear;
  background-color: transparent;
  position: fixed;
  z-index: 99;

  &.scroll-active {
    z-index: 99;

    @media (min-width: 768px) {
      background-color: ${paletas.Grafite};
      box-shadow: 0 0 35px rgb(0 0 0 / 10%);

      animation: showHeader 0.25s;
    }

    @keyframes showHeader {
      from {
        top: -150px;
      }
      to {
        top: 0px;
      }
    }
  }
`;

export const NavbarDesktop = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 30px;
  }
`;

export const NavbarHeader = styled.div`
  opacity: 0;

  &.scroll-active {
    opacity: 1;
    color: ${paletas.White50};
  }
`;

export const NavbarCollapse = styled.div`
  display: flex;
  justify-content: flex-end;

  &.scroll-active {
    transition: all 0.25s linear;

    a {
      color: ${paletas.White50};
      transition: all 0.25s linear;

      &:hover {
        color: ${paletas.White};
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin: 4px 16px;

    a {
      color: ${paletas.White50};
      transition: all 0.25s linear;

      &:hover {
        color: ${paletas.White};
      }
    }

    button {
      cursor: pointer;
      background: none;
      border: none;
    }
  }
`;

export const NavbarMobile = styled.nav`
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.25s linear;
  z-index: 6;

  button {
    margin: 20px 20px 0 0;
    transition: all 0.25s linear;
    border: none;
    color: ${paletas.White50};
    background-color: ${paletas.Black};
    padding: 8px;
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
      background-color: ${paletas.Grafite};
    }

    svg {
      transition: all 0.25s linear;
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    transition: all 0.25s linear;
    display: none;
  }
`;

export const NavbarCollapseMobile = styled.div`
  position: relative;
  z-index: 7;
  background-color: ${paletas.GrafiteDark};
  border-radius: 0.25rem;
  padding: 10px 20px;
  width: calc(100vw - 100px);
  height: 100vh;

  animation: animateAboutText 0.25s linear;

  @keyframes animateAboutText {
    0% {
      width: 0vw;
      height: 0vh;
    }
    100% {
      width: calc(100vw - 100px);
      height: 100vh;
    }
  }

  ul {
    list-style: none;
  }

  li {
    padding: 12px 4px;

    &:first-child {
      margin-bottom: 20px;
      border-bottom: 1px solid ${paletas.White50};
    }

    a {
      color: ${paletas.White};
    }

    button {
      background: none;
      border: 1px solid;
    }
  }

  & .onClose {
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;

    button {
      margin: 10px 0 0;
    }
  }
`;
