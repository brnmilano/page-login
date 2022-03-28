import Button from "../Button";
import Input from "../Input";
import "./styles.css";
import GoogleIcon from "./Images/google-icon.png";
import * as React from "react";

function RightLogin() {
  return (
    <div className="right-container">
      <div className="title-container">
        <p>Bem vindo de volta</p>

        <h1>Faça login na sua conta</h1>
      </div>

      <div className="middle-content">
        <div className="content-container">
          <Input
            label="Email"
            name="Email"
            backgroundColor="#E8E8E8"
            borderRadius={5}
            padding="17px 20px"
            type="e-mail"
            placeholder="seu.email@email.com"
            fontSize={16}
          />

          <Input
            label="Senha"
            name="Senha"
            backgroundColor="#E8E8E8"
            borderRadius={5}
            padding="17px 20px"
            type="password"
            placeholder="**********"
            fontSize={16}
          />
        </div>

        <div className="links-container">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>

          <a href="/forgot-password">Esqueceu sua senha?</a>
        </div>
      </div>

      <div className="content-container">
        <Button
          backgroundColor="#04C35C"
          padding={17}
          borderRadius={5}
          fontSize={16}
        >
          Entrar
        </Button>

        <Button
          className="google-icon"
          backgroundColor="#1A202C"
          padding={17}
          borderRadius={5}
          fontSize={16}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={15}
        >
          <img src={GoogleIcon} alt="Google Icon" />
          Ou faça login com o Google
        </Button>
      </div>

      <div className="register-container">
        <p>
          Não tem uma conta? <a href="/register">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}

export default RightLogin;
