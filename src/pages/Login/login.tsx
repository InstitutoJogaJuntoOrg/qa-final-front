import { Login } from "../../components/login";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <img src={"../../../public/loginBanner.png"} alt="LoginImage" />
      <Login />
    </Container>
  );
};
