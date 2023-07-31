import { useForm } from "react-hook-form";
import {
  Button,
  FormContainer,
  Register,
  DontHaveAccount,
  ErrorContainer,
} from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleIcon } from "../icons/social/google";
import { FacebookIcon } from "../icons/social/facebook";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import TextField from "@mui/material/TextField";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const loginFormSchema = z.object({
  email: z
    .string({
      errorMap: () => {
        return { message: "Digite um e-mail válido" };
      },
    })
    .email(),
  password: z.string({
    errorMap: () => {
      return { message: "Senha inválida" };
    },
  }),
});

type LoginFormInputs = z.infer<typeof loginFormSchema>;

export const Login = () => {
  const [msgAlert, setMsgAlert] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleForm = (data: LoginFormInputs) => {
    Axios.post("http://localhost:3300/login", {
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        if (
          response.status === 200 &&
          response.data.msg === "Usuário logado com sucesso!"
        ) {
          setMsgAlert("logado com sucesso");
          setTimeout(() => {
            setMsgAlert("");
          }, 3000);
          localStorage.setItem("auth", "true");
          localStorage.setItem("jwt", response.data.token);
          const userData = response.data.user.email;
          localStorage.setItem("user", JSON.stringify(userData));
          console.log(userData);
          navigate("/products");
        } else if (
          response.status === 200 &&
          response.data.msg === "Senha incorreta"
        ) {
          setMsgAlert("senha incorreta");
          setTimeout(() => {
            setMsgAlert("");
          }, 3000);
        } else if (
          response.status === 200 &&
          response.data.msg === "Usuário não registrado!"
        ) {
          setMsgAlert("Usuário não registrado!");
          setTimeout(() => {
            setMsgAlert("");
          }, 3000);

          console.log("Resposta inesperada do servidor:", response);
        }
      })
      .catch((error) => {
        alert(`${error} Usuario ou senha invalida`);
      });
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit(handleForm)}>
        <label>Faça login</label>

        <TextField
          type="text"
          placeholder="Digite seu e-mail"
          {...register("email")}
          error={!!errors.email?.message}
          helperText={errors.email?.message}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            <p className="inputLabel">Senha</p>
          </InputLabel>
          <OutlinedInput
            {...register("password")}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <ErrorContainer>
          <span className="error">{msgAlert}</span>
        </ErrorContainer>

        <Button>Iniciar sessão</Button>
        <Register>
          <label>Ou cadastre-se com</label>
          <div>
            <button>
              <GoogleIcon />
              Entrar com o Google
            </button>
            <button>
              <FacebookIcon />
              Entrar com o Facebook
            </button>
          </div>
        </Register>
        <DontHaveAccount>
          <span>Não possui uma conta?</span>
          <span className="register">
            <Link to={"/register"}>Clique aqui e registre-se</Link>
          </span>
        </DontHaveAccount>
      </FormContainer>
    </>
  );
};
