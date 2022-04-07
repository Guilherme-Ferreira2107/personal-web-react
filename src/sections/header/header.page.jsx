import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import {
  WrapperHeader,
  NavbarDesktop,
  NavbarHeader,
  NavbarCollapse,
  NavbarMobile,
  NavbarCollapseMobile,
} from "./styles";

export default function Header() {
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
          </ul>
        </NavbarCollapse>
      </NavbarDesktop>

      <NavbarMobile>
        {toogleMenu ? (
          <NavbarCollapseMobile className={classScroll}>
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
            </ul>
          </NavbarCollapseMobile>
        ) : (
          <button onClick={() => setToogleMenu(!toogleMenu)}>
            <AiOutlineMenu />
          </button>
        )}
      </NavbarMobile>
    </WrapperHeader>
  );
}
