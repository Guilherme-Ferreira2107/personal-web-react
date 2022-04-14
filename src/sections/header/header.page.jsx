import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { WiMoonAltWaxingCrescent1, WiDaySunny } from "react-icons/wi";
import { paletas } from "../../styled/theme";

import {
  WrapperHeader,
  NavbarDesktop,
  NavbarHeader,
  NavbarCollapse,
  NavbarMobile,
  NavbarCollapseMobile,
} from "./styles";

export default function Header({ toggleTheme, isDarkTheme }) {
  const [offset, setOffset] = useState(0);
  const [classScroll, setClassScroll] = useState("");
  const [toogleMenu, setToogleMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setClassScroll(offset > 0 ? "scroll-active" : "");
  }, [offset]);

  const applyChanges = () => {
    toggleTheme();
    setToogleMenu(false);
  };

  return (
    <WrapperHeader className={classScroll}>
      <NavbarDesktop>
        <NavbarHeader className={classScroll}>
          <a href="#TOP">FULLSTACK DEVELOPER</a>
        </NavbarHeader>
        <NavbarCollapse className={classScroll}>
          <ul>
            <li>
              <a href="#about">SOBRE</a>
            </li>
            <li>
              <a href="#portfolio">PORTFÓLIO</a>
            </li>
            <li>
              <a href="#contacts">CONTATOS</a>
            </li>
            <li>
              <button onClick={toggleTheme}>
                {isDarkTheme ? (
                  <span aria-label="Light mode" role="img">
                    <WiDaySunny size={20} color="yellow" />
                  </span>
                ) : (
                  <span aria-label="Dark mode" role="img">
                    <WiMoonAltWaxingCrescent1 size={20} color={paletas.White} />
                  </span>
                )}
              </button>
            </li>
          </ul>
        </NavbarCollapse>
      </NavbarDesktop>

      <NavbarMobile>
        {toogleMenu ? (
          <NavbarCollapseMobile className={classScroll}>
            <div className="onClose">
              <button
                aria-label="Close menu"
                onClick={() => setToogleMenu(!toogleMenu)}
              >
                <AiOutlineClose color="white" />
              </button>
            </div>
            <ul>
              <li>
                <a onClick={() => setToogleMenu(false)} href="#TOP">
                  FULLSTACK DEVELOPER
                </a>
              </li>
              <li>
                <a onClick={() => setToogleMenu(false)} href="#about">
                  SOBRE
                </a>
              </li>
              <li>
                <a onClick={() => setToogleMenu(false)} href="#portfolio">
                  PORTFÓLIO
                </a>
              </li>
              <li>
                <a onClick={() => setToogleMenu(false)} href="#contacts">
                  CONTATOS
                </a>
              </li>
              <li>
                <button onClick={applyChanges}>
                  TEMA: {isDarkTheme ? "DARK" : "LIGHT"}
                </button>
              </li>
            </ul>
          </NavbarCollapseMobile>
        ) : (
          <button aria-label="Menu" onClick={() => setToogleMenu(!toogleMenu)}>
            <AiOutlineMenu />
          </button>
        )}
      </NavbarMobile>
    </WrapperHeader>
  );
}
