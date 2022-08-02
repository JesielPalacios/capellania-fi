import { gql, useMutation } from '@apollo/client'
import { useContext } from 'react'
import styled from 'styled-components'
import Context from '../../core/context/UserContext'
import { useInputValue } from '../../core/hooks/useInputValue'
import logo from '../../img/logo.png'
import { loginInfo } from '../NewInterview/data'
import {
  FieldForm,
  FieldWrapper,
  LabelForm
} from '../NewInterview/MainElements'

const LOGIN = gql`
  mutation userLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      value
    }
  }
`

export const Login = () => {
  const { activateAuth } = useContext(Context)
  const [login, { data, loading, error }] = useMutation(LOGIN)
  const email = useInputValue('')
  const password = useInputValue('')

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  const handleSubmit = (event) => {
    event.preventDefault()

    email.value = 'correo@correo.com'
    password.value = 'Pt@707C3Kf@^'
    login({ variables: { email: email.value, password: password.value } }).then(
      ({ data }) => {
        const { value } = data.login
        activateAuth(value)
      }
    )
    email.value = 'correo@correo.com'
    password.value = 'Pt@707C3Kf@^'
  }

  return (
    <LoginContainer>
      <Section flex={2} background="#FFFFFF">
        <form onSubmit={handleSubmit}>
          <img src={logo} alt="" srcset="" />

          <h1>¡Hola!</h1>
          <h2>Bienvenido a su dashboard</h2>
          {/* <input
            // type='email'
            placeholder="Email"
            {...email}
            onChange={(e) => email.onChang(e)}
          />
          <input
            type="password"
            placeholder="Password"
            {...password}
            onChange={(e) => password.onChang(e)}
          /> */}

          <div>
            {loginInfo.map(
              ({ field, placeholder, large, type, fill, height }, index) => {
                return (
                  <FieldWrapper key={index} large={large} fill={fill}>
                    <LabelForm htmlFor={field}>{field}</LabelForm>
                    <FieldForm
                      id={field}
                      placeholder={placeholder}
                      type={type}
                      height={height}
                    />
                  </FieldWrapper>
                )
              }
            )}
          </div>

          <input type="submit" />
        </form>
      </Section>
      <Section flex={6} background="#FAFAFA">
        Aquí va la imagen
      </Section>
    </LoginContainer>
  )
}

export const LoginContainer = styled.div`
  height: 100vh;
  /* min-height: 1024px; */
  display: flex;
  background: #fafafa;

  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 50px;

    gap: 30px;
  }

  img {
    width: 226px;
    width: 306px;
    /* height: 248px; */
  }

  h1 {
    font-family: 'Sacramento';
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 35px;
    /* identical to box height */

    color: #000000;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 14px;
  }

  input[type='submit'] {
    width: 448px;
    height: 1112px;
  }
`

const Wrapper = styled.div``

const Section = styled.section`
  background: ${({ background }) => (background ? background : '#000000')};
  ${({ flex }) => (flex ? `flex: ${flex}` : '')}
`
