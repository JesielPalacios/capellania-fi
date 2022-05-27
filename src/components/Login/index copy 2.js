import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useUser from "../../core/hooks/useUser";

import { ContrasenaInput, ContrasenaLabel, EmailInput, EmailLabel, Enviar, ImgWel, LeftSide, LoginCont, Logo, RightSide, Welcome } from "./styles";
import imgwel from '../../assets/img/Illustration.png'
import logo from '../../assets/img/logo-unac.png'

export const Login = ({ onLogin }) => {
  const history = useHistory();
  const [username, setUsername] = useState(`${process.env.REACT_APP_TEST_USR}`);
  const [password, setPassword] = useState(
    `${process.env.REACT_APP_TEST_PASS}`
  );

  const { login, isLogged, loadingUser, errorLogin } = useUser();

  useEffect(() => {
    if (isLogged) history.push("/dashboard");
    onLogin && onLogin();
  }, [isLogged, history, onLogin]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ username: username, password: password });
  };

  return (
    <LoginCont>
      {loadingUser && "Iniciando sesión"}
      <LeftSide>
        <Logo src={logo} />
        <Welcome>Bienvenido</Welcome>
        <form onSubmit={handleSubmit}>
          <EmailLabel htmlFor="username">Username</EmailLabel>
          <EmailInput
            type="text"
            id="username"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Ingrese el username aquí"
          />

          <ContrasenaLabel htmlFor="password">Password</ContrasenaLabel>
          <ContrasenaInput
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Ingrese la contraseña aquí"
          />

          <Enviar type="submit" value="Iniciar sesión">Log in</Enviar>
        </form>
      </LeftSide>
      <RightSide>
        <ImgWel src={imgwel} />

      </RightSide>

      {errorLogin && <strong>Las credenciales son inválidas</strong>}
    </LoginCont>
  );
};
