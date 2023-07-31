import { styled } from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  align-content: center;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => props.theme.white};
  @media screen and (max-width: 940px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: block;
  }
  @media screen and (max-width: 1600px) {
    img {
      width: 50%;
    }
  }
  @media screen and (max-width: 850px) {
    img {
      width: 10%;
    }
  }
  @media screen and (max-width: 940px) {
    img {
      margin-top: 1rem;
      width: 90%;
    }
  }
`;
