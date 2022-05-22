import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";
import useUser from "../../core/hooks/useUser";
import { useEffect } from "react/cjs/react.development";

export const Login = () => {
  const [username, setUsername] = useState("Anthony");
  const [password, setPassword] = useState("asasd$123");
  const history = useHistory();
  const { login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) history.push("/dashboard");
  }, [isLogged,history]);

  const Submit = (e) => {
    e.preventDefault();
    login({ username, password });
    // alert(`${username}, ${password}`)
    // navigate('/')
  };

  return (
    <LoginCont>
      <LeftSide>
        <Logo src={LogoImg} />
        <Welcome>Log in</Welcome>
        <form onSubmit={Submit}>
          <EmailLabel htmlFor="email">Email Address</EmailLabel>
          <EmailInput
            placeholder=" example@gmail.com"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            id="email"
          />
          <ContrasenaLabel htmlFor="passw">Password</ContrasenaLabel>
          <ContrasenaInput
            placeholder=" • • • • • • •"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
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
