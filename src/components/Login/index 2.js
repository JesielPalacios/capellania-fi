import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../../assets/img/logo-unac-yellow.png";
import imgWel from "../../assets/img/Illustration.png";
import {
  ContrasenaInput,
  ContrasenaLabel,
  EmailInput,
  EmailLabel,
  Enviar,
  ImgWel,
  LeftSide,
  LoginCont,
  Logo,
  Remember,
  ResetPassw,
  RightSide,
  Welcome,
} from "./ElementIndex2";
import { useLocation } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [navigate] = useLocation();

  const Submit = (l) => {
    l.preventDefault();
    // alert(`${username}, ${password}`)
  };

  return (
    <LoginCont>
      <LeftSide>
        <Logo src={LogoImg} />
        <Welcome>Log in</Welcome>
        <form onSubmit={Submit}>
          <EmailLabel for="email">Email Address</EmailLabel>
          <EmailInput
            placeholder=" example@gmail.com"
            type="username"
            onChange={(l) => setUsername(l.target.value)}
            value={username}
            id="email"
          />
          <ContrasenaLabel for="passw">Password</ContrasenaLabel>
          <ContrasenaInput
            placeholder=" • • • • • • •"
            type="password"
            onChange={(l) => setPassword(l.target.value)}
            value={password}
            id="passw"
          />
          <Enviar>Entrar</Enviar>
          <Remember>
            <label>
              <input type="checkbox" />
              Recordar contraseña
            </label>
          </Remember>
          <ResetPassw>¿Reset Password?</ResetPassw>
        </form>
      </LeftSide>
      <RightSide>
        <ImgWel className="center" src={imgWel} />
      </RightSide>
    </LoginCont>
  );
};
