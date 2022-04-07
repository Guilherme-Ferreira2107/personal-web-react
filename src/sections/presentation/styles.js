import styled from "styled-components";

export const WrapperPresentation = styled.section`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  justify-content: space-between;
`;

export const ContentPresentation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  background-color: #0093e9;
  background-image: linear-gradient(
    160deg,
    #0093e9 0%,
    #1560bd 50%,
    #041e42 100%
  );

  & div {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    position: relative;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 500;
    font-size: 3rem;
    color: #07398050;
    letter-spacing: 0.4rem;
    line-height: 2.5rem;

    @media (min-width: 465px) {
      font-size: 6rem;
      letter-spacing: 0.2rem;
      line-height: 4.22rem;
    }

    @media (min-width: 768px) {
      font-size: 10rem;
      letter-spacing: 0.2rem;
      line-height: 7.05rem;
    }
  }

  span {
    font-family: "Barlow Condensed", sans-serif;
    color: white;
    font-weight: 300;
    margin-top: 4px;
    margin-right: 10px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      margin-right: 150px;
      margin-bottom: 6px;
      width: 30px;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.5);
    }

    font-size: 0.75rem;

    @media (min-width: 465px) {
      font-size: 1rem;

      &:before {
        margin-right: 200px;
        margin-bottom: 8px;
      }
    }
  }
`;

export const ContentArrow = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 20px 20px 0;

  svg {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.2);
  }
`;
