import { styled } from "styled-components";

export const ContainerRegister = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  .mobileImage {
        display: none;
    }
  @media screen and (max-width: 1100px) {
    .mobile {
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: ${(props) => props.theme.yellow};
    }
    flex-direction: column;

    align-items: center;
    .mobileImage {
        display: block;
        margin-top: 1rem;
      background-color: ${(props) => props.theme.yellow};
      align-items: center;
      display: flex;
      position: initial;
    }
  }
`;
export const ImageRegister = styled.div`
  padding: 0rem 2rem;
  h1 {
    margin-right: 15rem;
    margin-top: 9rem;
    width: 25rem;
    font-size: 4rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.yellow};

  img {
    margin-top: 6rem;
    position: absolute;
    margin-left: 25rem;
    width: 37%;
  }
  @media screen and (max-width: 1100px) {
    margin-top: 0rem;
    margin-left: 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .desktopImage {
      display: none;
    }
  }
`;
