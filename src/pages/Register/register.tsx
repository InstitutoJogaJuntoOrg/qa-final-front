import { RegisterForm } from "../../components/register";
import { ContainerRegister, ImageRegister } from "./styles";

export const Register = () => {
    

  return (
    <ContainerRegister>
      <ImageRegister>
        <h1 className="desktopImage">Cadastre um produto</h1>
        <img
          className="desktopImage"
          src="../../../public/products.png"
          alt=""
        />
      </ImageRegister>
      <div className="mobile">
        <img
          className="mobileImage"
          src="../../../public/registerMobileBanner.png"
          alt=""
        />
      </div>
      <RegisterForm />
    </ContainerRegister>
  );
};
