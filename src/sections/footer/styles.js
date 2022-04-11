import styled from "styled-components";
import { paletas } from "../../styled/theme";

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
    color: ${paletas.White50};
    margin: 20px 0;
  }
`;
