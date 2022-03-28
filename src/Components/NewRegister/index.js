import Input from "../Input";
import "./styles.css";
import * as React from "react";
import Button from "../Button";

function NewRegister() {
  return (
    <div className="left-container">
      <div className="content-container">
        <Input
          label="Nome"
          name="Nome"
          backgroundColor="#E8E8E8"
          borderRadius={5}
          padding="17px 20px"
          type="text"
          placeholder="Fulano"
          fontSize={16}
        />

        <Input
          label="Sobrenome"
          name="Sobrenome"
          backgroundColor="#E8E8E8"
          borderRadius={5}
          padding="17px 20px"
          type="text"
          placeholder="Pereira"
          fontSize={16}
        />
      </div>

      <div>
        <Input
          label="E-mail"
          name="E-mail"
          backgroundColor="#E8E8E8"
          borderRadius={5}
          padding="17px 115px 17px 20px"
          type="e-mail"
          placeholder="seu.email@email.com"
          fontSize={16}
          width="100%"
        />
      </div>

      <div className="content-container">
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

        <Input
          label="Confirmar Senha"
          name="Confirmar Senha"
          backgroundColor="#E8E8E8"
          borderRadius={5}
          padding="17px 20px"
          type="password"
          placeholder="**********"
          fontSize={16}
        />
      </div>

      <div className="button">
        <Button
          backgroundColor="#04C35C"
          padding="17px 243px"
          borderRadius={5}
          fontSize={16}
          width="100%"
        >
          Cadastrar
        </Button>
      </div>
    </div>
  );
}

export default NewRegister;
