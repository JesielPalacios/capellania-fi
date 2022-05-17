import React from "react";

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
          {/* <Remember type="checkbox">Recordar contraseña</Remember> */}
          <ResetPassw>¿Reset Password?</ResetPassw>
        </form>
      </LeftSide>
      <RightSide>
        <ImgWel src={imgWel}/>
      </RightSide>
    </LoginCont>
  );
};

// const Logo = styled.img`
//   position: relative;
//   width: 226px;
//   height: 248px;
//   left: 115px;
//   top: 84px;
//   cursor: pointer;
// `;

// const Welcome = styled.h2`
//   width: 70px;
//   height: 28px;
//   left: 189px;
//   top: 332px;
// `;

// const LoginCont = styled.div``;

// const LeftSide = styled.div`
//   border-radius: 2px;
//   box-shadow: 100%;
// `;

// const EmailLabel = styled.label`
//   position: absolute;
//   width: 104px;
//   height: 22px;
//   left: 50px;
//   top: 527px;

//   font-family: "Nunito";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 27px;
//   /* identical to box height */

//   letter-spacing: -0.103101px;

//   color: #030229;
// `;

// const EmailInput = styled.input`
//   position: absolute;
//   width: 348px;
//   height: 50px;
//   left: 50px;
//   top: 557px;

//   background: rgba(255, 255, 255, 0.47);
//   border: 2px solid #ad3c40;
//   box-sizing: border-box;
//   border-radius: 10px;

//   margin-top: 5px;
// `;

// const ContrasenaLabel = styled.label`
//   position: absolute;
//   /* Contraseña */

//   /* position: absolute; */
//   width: 71px;
//   height: 22px;
//   left: 50px;
//   top: 627px;

//   font-family: "Nunito";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 21px;
//   /* identical to box height */

//   letter-spacing: -0.103101px;

//   color: #030229;
//   margin-top: 25px;
// `;

// const ContrasenaInput = styled.input`
//   position: absolute;
//   width: 348px;
//   height: 50px;
//   left: 50px;
//   top: 657px;

//   background: rgba(255, 255, 255, 0.47);
//   border: 2px solid #ffffff;
//   box-sizing: border-box;
//   border-radius: 10px;

//   margin-top: 5px;
// `;

// const Enviar = styled.button`
//   position: absolute;
//   width: 123px;
//   height: 51px;
//   left: 169px;
//   top: 782px;
// `;
// const Remember = styled.div`
//   position: absolute;
//   width: 154px;
//   height: 19px;
//   left: 50px;
//   top: 732px;
// `;

// const RightSide = styled.div``;
