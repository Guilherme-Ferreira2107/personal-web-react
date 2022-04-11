import styled from "styled-components";

export const WrapperHeader = styled.section`
  width: 100%;
  height: 80px;
  transition: all 0.25s linear;
  background-color: transparent;
  position: fixed;
  z-index: 10;

  &.scroll-active {
    z-index: 5;

    @media (min-width: 768px) {
      background-color: rgba(50, 50, 50, 0.95);
      box-shadow: 0 0 35px rgb(0 0 0 / 10%);

      animation-name: showHeader;
      animation-duration: 0.25s;
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

  .openMenu {
    display: block;
  }

  .closeMenu {
    display: none;
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
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const NavbarCollapse = styled.div`
  display: flex;
  justify-content: flex-end;

  &.scroll-active {
    transition: all 0.25s linear;
    a {
      color: rgba(255, 255, 255, 0.5);
      transition: all 0.25s linear;

      &:hover {
        color: rgba(255, 255, 255, 1);
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
      color: rgba(255, 255, 255, 0.5);
      transition: all 0.25s linear;

      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
`;

export const NavbarMobile = styled.nav`
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px 20px 0 0;
  transition: all 0.25s linear;
  z-index: 6;

  button {
    transition: all 0.25s linear;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(0, 0, 0, 0.2);
    padding: 8px;
    border-radius: 0.25rem;
    cursor: pointer;
    /* animation-name: showButton; */
    animation-duration: 0.15s;

    :hover {
      background-color: rgba(0, 0, 0, 0.75);
    }

    svg {
      transition: all 0.25s linear;
      font-size: 20px;
    }

    @keyframes showButton {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
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
  background-color: rgba(55, 55, 55, 1);
  border-radius: 0.25rem;
  padding: 10px 20px;
  /* animation-name: showMenu; */
  animation-duration: 0.15s;

  @keyframes showMenu {
    from {
      margin-top: -100px;
      margin-right: -50px;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      margin-top: 0px;
      margin-right: 0px;
      transform: scale3d(1, 1, 1);
    }
  }

  ul {
    list-style: none;
  }

  li {
    padding: 12px 4px;

    &:first-child {
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    a {
      color: white;
    }
  }
`;
