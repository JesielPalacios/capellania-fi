import styled from 'styled-components'
import LogoImg from '../../assets/img/logo.png'
import GoBackImg from '../../assets/img/goBack.png'
import Img1 from '../../assets/img/img1.png'
import Img2 from '../../assets/img/img2.png'
import InstagramImg from '../../assets/img/instagram.png'
import FacebookImg from '../../assets/img/facebook.png'
import TwitterImg from '../../assets/img/twitter.png'
import Tanjiro_Kamado from '../../assets/img/Tanjiro_Kamado.png'

export const Login = () => {
  return (
    <LoginContainer>
      <Section>
        <div>
          <Logo src={LogoImg} />
          {/* <Title>
            <Anime>anime</Anime>
            <Yabu>yabu.</Yabu>
          </Title> */}
          <Title width="129px" height="26px" left="83px" top="30px">
            <Anime>anime</Anime>
            <Yabu>yabu.</Yabu>
          </Title>
          <GoBack src={GoBackImg} />
        </div>

        <Main>
          <Image1 src={Img1} />
          {/* <Image2 src={Img2} /> */}
          <Texto>ひさしぶり!</Texto>
          <Texto2>¡Hola, te extrañamos!</Texto2>

          <Form>
            <EmailLabel for="email">Email</EmailLabel>
            <EmailInput type="email" id="email" placeholder="usuario@" />

            <ContrasenaLabel for="contrasena">Contraseña</ContrasenaLabel>
            <ContrasenaInput
              type="password"
              id="contrasena"
              placeholder="• • • • • • •"
            />

            <ForgetPassword>¿Olvidó la contraseña?</ForgetPassword>
            <LoginButton type="submit" value="Acceder" />
          </Form>

          <Registro1>
            <hr />
            <span>Regístrate también con</span>
            <hr />
          </Registro1>

          <WrapperSocialNetworks>
            <SocialNetworks src={InstagramImg} />
            <SocialNetworks src={FacebookImg} />
            <SocialNetworks src={TwitterImg} />
          </WrapperSocialNetworks>

          <Registro2>
            <WantSigUp>Quieres registrarte? </WantSigUp>
            <ToSigUp>Regístrate</ToSigUp>
          </Registro2>
        </Main>
      </Section>

      <Section background="#3e1149">
        <Wrapper>
          <Elipse />
          <FeaturedImg src={Tanjiro_Kamado} />
          <Title
            // width="628.21px"
            height="125px"
            // left="766px"
            // left="99px"
            // top="752px"
            // top="757px"
            // top="715px"
            top="690px"
            fontSize="80.1282px"
            lineHeight="94px"
          >
            <Anime>anime</Anime>
            <Yabu>yabu.</Yabu>
          </Title>
        </Wrapper>
        <TextRightSide>
          <TextRight>
            Ver anime en línea en HD, subtitulado o doblado,
          </TextRight>
          <TextRight>en tu celular o computadora.</TextRight>
          <TextRight>¡Animeyabu, tu portal de anime en línea!</TextRight>
        </TextRightSide>

        <MenuSlider>
          <MenuButton></MenuButton>
          <MenuButton></MenuButton>
          <MenuButton></MenuButton>
        </MenuSlider>
      </Section>
    </LoginContainer>
  )
}

export const LoginContainer = styled.div`
  height: 100vh;
  min-height: 1024px;
  display: flex;
`

export const Section = styled.div`
  flex: 1;
  background: ${({ background }) => (background ? background : '#000000')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

export const WrapperLogo = styled.div`
  width: 200px;
`

export const Logo = styled.img`
  position: absolute;
  width: 46px;
  height: 46px;
  left: 23px;
  top: 19px;
  cursor: pointer;
`

export const Title = styled.div`
  display: flex;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '22px')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '26px')};
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.065em;

  position: absolute;

  ${({ width }) => {
    if (width) {
      return `width: ${width};`
    }
  }}
  ${({ height }) => {
    if (height) {
      return `height: ${height};`
    }
  }}
  ${({ left }) => {
    if (left) {
      return `left: ${left};`
    }
  }}
  ${({ top }) => {
    if (top) {
      return `top: ${top};`
    }
  }} /* width: ${({ width }) => (width ? width : '129px')}; */
  /* height: ${({ height }) => (height ? height : '26px')}; */
  /* left: ${({ left }) => (left ? left : '83px')}; */
  /* top: ${({ top }) => (top ? top : '30px')}; */
`

export const Anime = styled.div`
  color: #ffffff;
  cursor: pointer;
`

export const Yabu = styled.div`
  color: #ca38ed;
  cursor: pointer;
`

export const GoBack = styled.img`
  /* Group */

  /* position: absolute;
  left: 4.17%;
  right: 93.88%;
  top: 8.69%;
  bottom: 88.57%; */

  /* transform: rotate(90deg); */

  position: absolute;
  height: 28.00002288818362px;
  width: 28.1560916900635px;
  /* left: 60.000030517578125px; */
  left: 27.000030517578125px;

  top: 89px;
  border-radius: 0px;
  cursor: pointer;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  align-items: center;
  justify-content: flex-end;
`
export const Image1 = styled.img`
  /* position: absolute; */
  width: 277px;
  height: 136px;
  left: 206px;
  top: 135px;
  margin-bottom: 5px;
  /* background: url(pack2779.png); */
`

// export const Image2 = styled.img`
//   /* ひさしぶり! */

//   position: absolute;
//   width: 258px;
//   height: 40px;
//   left: 219px;
//   top: 276px;

//   /* font-family: 'Poppins';
//   font-style: normal;
//   font-weight: 900;
//   font-size: 36.5385px;
//   line-height: 55px;
//   text-align: center;
//   letter-spacing: 0.065em; */

//   color: #ffffff;
// `

export const Texto = styled.span`
  /* ひさしぶり! */

  /* position: absolute; */
  width: 258px;
  height: 40px;
  left: 219px;
  top: 276px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  font-size: 36.5385px;
  line-height: 55px;
  text-align: center;
  letter-spacing: 0.065em;

  color: #ffffff;

  margin-bottom: 25px;
`

export const Texto2 = styled.span`
  /* ¡Hola, te extrañamos! */

  /* position: absolute; */
  width: 260px;
  height: 20px;
  left: 216px;
  top: 339px;

  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.065em;

  color: #ffffff;

  margin-bottom: 38px;
`

export const Form = styled.form`
  /* Group 113 */

  /* position: absolute; */
  width: 343px;
  /* height: 426px; */
  left: 181px;
  top: 397px;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  /* align-items: center; */
  margin-bottom: 43px;

  input::placeholder {
    /* color: blue; */
    /* font-size: 1.5em; */
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;

    color: #d8d5d9;
    margin-left: 14.03%;
  }

  input {
    padding: 0 20px;
  }
`

export const EmailLabel = styled.label`
  /* Email */

  width: 38px;
  height: 21px;
  left: 182px;
  top: 397px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: -0.103101px;

  color: #ffffff;
`

export const EmailInput = styled.input`
  /* bg */

  /* position: absolute; */
  /* position: relative; */
  width: 343px;
  height: 60px;
  /* left: 181px; */
  /* bottom: 546px; */

  /* left: 178px; */
  left: 182px;
  bottom: 130px;

  background: rgba(255, 255, 255, 0.47);
  border: 2px solid #ad3c40;
  box-sizing: border-box;
  border-radius: 10px;

  margin-top: 5px;
`

export const ContrasenaLabel = styled.label`
  /* Contraseña */

  /* position: absolute; */
  width: 82px;
  height: 21px;
  left: 182px;
  top: 503px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: -0.103101px;

  color: #ffffff;
  margin-top: 25px;
`

export const ContrasenaInput = styled.input`
  /* bg */

  /* position: absolute; */
  width: 343px;
  height: 60px;
  /* left: 181px; */
  /* bottom: 440px; */
  left: 182px;
  bottom: 117px;

  background: rgba(255, 255, 255, 0.47);
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;

  margin-top: 5px;
`

export const ForgetPassword = styled.div`
  /* ¿Olvido la contraseña? */

  /* position: absolute; */
  width: 158px;
  height: 21px;
  /* left: 361px; */
  /* left: 100%; */
  top: 591px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.103101px;

  color: #e487fb;

  margin-left: 185px;
  margin-top: 7px;
`
export const LoginButton = styled.input`
  /* bg */

  width: 338px;
  height: 60px;
  left: 183px;
  bottom: 336px;

  background: #e487fb;
  border-radius: 10px;

  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 17px;
  text-align: center;

  color: #3e1149;

  margin: 0 auto;
  margin-top: 16px;
`

export const Registro1 = styled.div`
  /* Regístrate también con */

  /* position: absolute;
    width: 163px;
    height: 21px;
    left: 272px;
    top: 731px; */

  /* Group 112 */

  /* position: absolute; */
  width: 342px;
  height: 21px;
  left: 181px;
  top: 731px;
  /* top: 565px; */
  /* top: 832px; */

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.103101px;

  color: #ffffff;

  display: flex;
  align-items: center;

  span {
    /* margin: 0 20px; */
    margin: 0 11px;
  }
  hr {
    /* position: absolute; */
    width: 80px;
    height: 0px;
    left: 181px;
    top: 741px;

    border: 2px solid #ffffff;
  }

  margin-bottom: 20px;
`

export const WrapperSocialNetworks = styled.div`
  /* Group 100 */

  /* position: absolute; */
  width: 51px;
  width: 239px;
  height: 51px;
  left: 235px;
  top: 772px;

  display: flex;
  justify-content: space-between;

  margin-bottom: 41px;
`
export const SocialNetworks = styled.img`
  cursor: pointer;
`

export const Registro2 = styled.div`
  /* Quieres registrarte? Registrate */

  /* position: absolute; */
  width: 286px;
  height: 23px;
  left: 205px;
  top: 864px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.065em;

  color: #ffffff;
`

export const WantSigUp = styled.span`
  color: #ffffff;
`

export const ToSigUp = styled.span`
  color: #ca38ed;
`

export const Wrapper = styled.div`
  position: relative;
  margin-top: -389px;
  /* margin-top: -300px; */
  margin-top: 20px;
`

export const Elipse = styled.div`
  transition: all 500ms ease 0s;
  background: linear-gradient(rgb(47, 184, 255) 0%, rgb(158, 236, 217) 100%);
  border-radius: 50%;
  width: 548px;
  height: 548px;
  left: 78px;
  top: 63px;
  background: #e487fb;
`

export const FeaturedImg = styled.img`
  /* ddkkrta-d3d6161c-7370-4ec7-a1e0-6a051999be0f 1 */

  width: 622px;
  height: 625px;
  left: 800px;
  /* left: 81px; */
  /* top: 127px; */
  left: -5px;
  top: 78px;

  /* background: url(ddkkrta-d3d6161c-7370-4ec7-a1e0-6a051999be0f.png); */
  position: absolute;
`

export const TextRightSide = styled.div`
  /* Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora. ¡Animeyabu, tu portal de anime en línea! */

  /* position: absolute; */
  width: 463px;
  height: 68px;
  left: 851px;
  top: 853px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #ffffff;
  margin-top: 276px;
  margin-top: 249px;
`

export const TextRight = styled.span`
  /* ddkkrta-d3d6161c-7370-4ec7-a1e0-6a051999be0f 1 */

  /* background: url(ddkkrta-d3d6161c-7370-4ec7-a1e0-6a051999be0f.png); */

  /* Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora. ¡Animeyabu, tu portal de anime en línea! */

  /* position: absolute; */
  width: 463px;
  height: 68px;
  left: 851px;
  top: 853px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #ffffff;
`

export const MenuSlider = styled.div`
  /* position: absolute; */
  /* width: 131px;
  height: 6px;
  left: 1017px;
  top: 944px; */
  width: 131px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 23px;

  div:first-child {
    background: #c4c4c4;
  }
`

export const MenuButton = styled.div`
  /* width: 131px;
  height: 6px;
  left: 1017px;
  top: 944px; */

  /* Rectangle 11 */

  /* position: absolute; */
  width: 39px;
  height: 6px;
  left: 1017px;
  top: 944px;

  background: rgba(196, 196, 196, 0.48);
  /* background: #c4c4c466; */

  :hover {
    background: #c4c4c4;
  }

  border-radius: 53px;
  cursor: pointer;
`
