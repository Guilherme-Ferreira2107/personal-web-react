import { paletas } from "@/styles/theme";
import styled from "styled-components";

export const WrapperFooter = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: center;

  a {
    color: ${paletas.BlueLight};
    margin: 0 10px;
    text-decoration: underline;
    transition: all 0.2s linear;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  p {
    margin: 20px 0;
  }
`;
