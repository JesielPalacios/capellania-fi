import { useContext, useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'
import styled from 'styled-components'
import { Context } from '../../core/context/UserContext'
import { useInputValue } from '../../core/hooks/useInputValue'
import { loginInfo } from '../NewInterview/data'
import {
  FieldForm,
  FieldWrapper,
  LabelForm
} from '../NewInterview/MainElements'
import logo from '../../img/logo.png'
import featured_login from '../../img/featured_login.svg'
import { useHistory } from 'react-router-dom'
import { LOGIN } from '../../core/graphql/queries/loginQuery'
import Swal from 'sweetalert2'

export const Login = () => {
  const history = useHistory()
  const { activateAuth, isAuth } = useContext(Context)
  let [login, { data, loading, error }] = useMutation(LOGIN)
  const email = useInputValue('')
  const password = useInputValue('')
  // const email = useInputValue('luis.angel@capellaniaunacc.com')
  // const password = useInputValue('Pt@707C3Kf@^')

  const handleSubmit = (event) => {
    event.preventDefault()

    // email.value = 'correo@correo.com'
    // password.value = 'Pt@707C3Kf@^'
    login({ variables: { email: email.value, password: password.value } }).then(
      ({ data }) => {
        const { value } = data.login
        activateAuth(value)
      }
    )
    // error = false
  }

  let nameRef

  if (loading) return 'Conectando...'
  if (error)
    return `Submission error! ${error.message}, reinicie la página e ingrese sus credenciales correctas. Esta vista se está desarrollando aún, gracias por su comprensión.`
  // if (error) {
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     // text: 'Something went wrong!',
  //     text: `Submission error! ${error.message}`
  //     // footer: '<a href="">Why do I have this issue?</a>'
  //   })
  // }

  data &&
    Swal.fire(
      '!Bienvenido señor usuario!',
      'Se ha logueado exitosamente!',
      'success'
    )

  return (
    <LoginContainer>
      <Section flex={2} background="#FFFFFF">
        <form onSubmit={handleSubmit}>
          <LogoImg src={logo} alt="logo" onClick={() => history.push('/')} />

          <h1>Capellanía UNAC</h1>
          <h2>Bienvenido a su dashboard</h2>

          {/* {console.log(error)} */}

          <div>
            {loginInfo.map(
              (
                { field, placeholder, large, type, fill, height, name },
                index
              ) => {
                if (name === 'email') nameRef = email
                else if (name === 'password') nameRef = password

                return (
                  <FieldWrapper key={index} large={large} fill={fill}>
                    <LabelForm htmlFor={field}>{field}</LabelForm>
                    <FieldForm
                      id={field}
                      placeholder={placeholder}
                      type={type}
                      height={height}
                      {...nameRef}
                    />
                  </FieldWrapper>
                )
              }
            )}
            <div className="opciones">
              <div className="checkbox">
                <input type="checkbox" id="checkbox" />
                <LabelForm htmlFor="checkbox"> Recordar contraseña</LabelForm>
              </div>
              <div>
                <span>¿Reiniciar contraseña?</span>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Iniciar sesión"
            // disabled={error}
          />
        </form>
      </Section>
      <Section flex={6} background="#FAFAFA">
        <FeaturedLogin>
          <img src={featured_login} alt="featured_login" />
        </FeaturedLogin>
      </Section>
    </LoginContainer>
  )
}

export const LoginContainer = styled.div`
  /* height: 100vh; */
  /* min-height: 1024px; */
  display: flex;
  background: #fafafa;
  position: relative;

  form {
    .opciones {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      /* identical to box height */

      /* Primary */

      color: #605bff;
    }

    span {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      /* identical to box height */

      /* Primary */

      color: #605bff;
    }

    .checkbox {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      /* identical to box height */

      /* Text */

      color: #030229;
    }
    /* margin: 0 auto; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    justify-content: space-around;
    justify-content: space-between;
    justify-content: space-evenly;
    align-items: center;
    /* position: relative; */
    overflow: hidden;
    /* padding: 50px; */

    /* gap: 30px; */
    min-height: 90vh;
    height: 1024px;
    height: 100vh;
    /* height: 1366px; */
  }

  h1 {
    font-family: 'Sacramento';
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    font-size: 41px;
    line-height: 35px;
    /* identical to box height */

    color: #000000;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    /* width: 100%; */
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 14px;
  }

  input[type='submit'] {
    width: 123px;
    height: 51px;

    /* background: #ffffff; */
    /* border-radius: 10px; */
    background: #f0f0f0;

    border-radius: 10px;
    border: none;

    :hover {
      box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.14);
      box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.14);

      background: #333;
      color: #fff;
    }

    input[type='checkbox'] {
    }
  }
`

const Section = styled.section`
  background: ${({ background }) => (background ? background : '#000000')};
  ${({ flex }) => (flex ? `flex: ${flex}` : '')}/* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; */
  /* padding: 50px; */

  /* #featuredLogin {
    width: 100%;
    background: green;
  } */
`

export const LogoImg = styled.img`
  width: 226px;
  width: 306px;
  width: 189px;
  /* height: 248px; */
  cursor: pointer;

  :hover {
    background: rgba(47, 128, 237, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`

export const FeaturedLogin = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  /* width: auto; */

  /* width: 702px; */
  /* height: 653.17px; */
  /* left: 1290px; */
  /* top: 214px; */

  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
  /* position: absolute; */
  margin: 0 auto;

  /* padding: 50px; */

  img {
    height: 90%;
    margin-top: -20px;
  }
`
