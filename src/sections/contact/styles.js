import styled from "styled-components";

export const WrapperContact = styled.section`
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

export const ContentContact = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  color: white;

  @media (min-width: 465px) {
    max-width: 900px;
    margin: auto;
    flex-direction: row;
  }

  & div {
    width: 100%;
  }

  p,
  span {
    font-family: "Barlow Condensed", sans-serif;
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
    color: #0093e9;
  }
`;

export const ContentThanks = styled.div`
  width: 100%;
  margin-bottom: 20px;

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
  h4 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 10px;
  }

  p em {
    font-size: 1rem;
  }

  a:hover {
    transition: all 0.25s linear;

    color: #0093e9;
  }
`;
