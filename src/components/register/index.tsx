import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, FormContainer, ContainerRegisterInputs } from "./styles";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ErrorContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import React from "react";

const RegisterFormSchema = z
  .object({
    email: z
      .string({
        errorMap: () => {
          return { message: "Digite um e-mail válido" };
        },
      })
      .email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais",
  });

type RegisterFormInputs = z.infer<typeof RegisterFormSchema>;

export const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(RegisterFormSchema),
  });
  const [msgAlert, setMsgAlert] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  console.log(errors);
  const handleForm = (data: RegisterFormInputs) => {
    Axios.post("http://localhost:3300/register", {
      email: data.email,
      password: data.password,
    }).then((response) => {
      if (
        response.status === 200 &&
        response.data.msg === "Usuário cadastrado com sucesso"
      ) {
        const msgErr = response.data.msg;
        console.log("INV");
        console.log(msgErr)
        setMsgAlert("Usuário cadastrado com sucesso");
        setTimeout(() => {
          setMsgAlert("");
          navigate("/");
          reset();
        }, 3000); // oculta o Alert após 3 segundos
      } else {
        const msg = response.data.msg;
        console.log("INV2");
        setMsgAlert(msg);
        console.log(response); // limpa o formulário apenas quando o cadastro for bem-sucedido
        setTimeout(() => {
          setMsgAlert("");
        }, 3000); // oculta o Alert após 3 segundos
      }
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleForm)}>
      <h1>Criar conta</h1>
      <ContainerRegisterInputs>
        <div>
          <FormControl variant="outlined" sx={{ m: 1, width: "30ch" }}>
            <TextField
              type="text"
              placeholder="Digite seu e-mail"
              {...register("email")}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          </FormControl>
        </div>
        <div>
          <FormControl
            className="notInerit"
            variant="outlined"
            sx={{ m: 1, width: "30ch" }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              <p className="inputLabel">Senha</p>
            </InputLabel>
            <OutlinedInput
              {...register("password")}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
            />
          </FormControl>
        </div>
        <div>
          <FormControl variant="outlined" sx={{ m: 1, width: "30ch" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              <p className="inputLabel">Confirme sua senha</p>
            </InputLabel>
            <OutlinedInput
              {...register("confirmPassword")}
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

            <ErrorContainer>
              <span className="error">{errors.confirmPassword?.message}</span>
              {msgAlert === "Usuário cadastrado com sucesso" ? (
                <span className="sucess">{msgAlert}</span>
              ) : (
                <span className="error">{msgAlert}</span>
              )}
            </ErrorContainer>
          </FormControl>
        </div>
      </ContainerRegisterInputs>
      <Button type="submit">Criar conta</Button>
      <span>
        Ja tem uma conta? <Link to={"/"}>Entrar</Link>
      </span>
    </FormContainer>
  );
};
