import React from "react";
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

export const Login = () => {
  return (
    <LoginCont>
      <LeftSide>
        <Logo src={LogoImg} />
        <Welcome>Log in</Welcome>
        <form>
          <EmailLabel for="email">Email Address</EmailLabel>
          <EmailInput
            placeholder=" example@gmail.com"
            type="email"
            id="email"
          />
          <ContrasenaLabel for="passw">Password</ContrasenaLabel>
          <ContrasenaInput
            placeholder=" • • • • • • •"
            type="password"
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
