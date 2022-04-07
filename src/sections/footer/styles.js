import styled from "styled-components";

export const WrapperFooter = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color: rgba(10, 10, 10, 0.9);

  a {
    color: #0093e9;
    margin: 0 10px;
    text-decoration: underline;
    transition: all 0.2s linear;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.5);
    margin: 20px 0;
  }
`;
