import styled from "styled-components";

export const Logo = styled.img`
  position: relative;
  width: 226px;
  height: 248px;
  left: 115px;
  margin-top: 0 auto;
  cursor: pointer;
`;

export const Welcome = styled.h2`
  position: absolute;
  width: 70px;
  height: 28px;
  left: 205px;
  margin-top: 0 auto;
  text-align: center;
  align-items: center;
`;

export const LoginCont = styled.div`
  position: relative;
  display: flex;
`;

export const LeftSide = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const EmailLabel = styled.label`
  position: absolute;
  width: 104px;
  height: 22px;
  left: 50px;
  top: 330px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  /* identical to box height */

  letter-spacing: -0.103101px;

  color: #030229;
`;

export const EmailInput = styled.input`
  position: absolute;
  width: 348px;
  height: 50px;
  left: 50px;
  top: 360px;

  background: #f7f7f8;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const ContrasenaLabel = styled.label`
  position: absolute;

  width: 71px;
  height: 22px;
  left: 50px;
  top: 399px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  /* identical to box height */

  letter-spacing: -0.103101px;

  color: #030229;
  margin-top: 25px;
`;

export const ContrasenaInput = styled.input`
  position: absolute;
  width: 348px;
  height: 50px;
  left: 50px;
  top: 454px;

  background: #f7f7f8;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const Remember = styled.input`
  position: absolute;
  width: 154px;
  height: 19px;
  left: 50px;
  top: 500px;
`;

export const ResetPassw = styled.a`
  position: absolute;
  width: 139px;
  height: 19px;
  left: 259px;
  top: 510px;
  color: #605bff;
`;

export const Enviar = styled.button`
  position: absolute;
  width: 100px;
  height: 40px;
  left: 166px;
  top: 560px;
  border-radius: 10px;
  border: 2px;
  background-color: #2a5784;
`;

export const RightSide = styled.div`
  background: #e5e9ec;
  right:0;
  position: relative;
  left: 25%;
  text-align: center;

`;

export const ImgWel = styled.img`
  width: 770px;
  height: 620px;
  left: 1190px;
  top: 214px;
  left: 25%;
`;
