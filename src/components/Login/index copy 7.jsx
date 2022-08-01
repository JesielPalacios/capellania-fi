import { LoginOutlined } from '@mui/icons-material'
import { useContext } from 'react'
import { Helmet } from 'react-helmet'
import Context from '../../core/context/UserContext'
// import Context from '../../core/context/UserContext'
import { LoginMutation } from '../../core/graphql/container/LoginMutation'
import { UserForm } from './UserForm'

export const Login = () => {
  // const { activateAuth } = useContext(Context)

  return (
    <>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const variables = { email: email.value, password: password.value }
            login({ variables }).then(({ data }) => {
              const { value } = data
              console.log(value)
              // activateAuth(value)
            })
          }

          const errorMsg =
            error && 'La contraseña no es correcta o el usuario no existe.'

          return (
            <div>
              <Helmet>
                <title>Petgram - Inicio de sesión</title>
                <meta
                  name='description'
                  content='A continuación, el formulario de inicio de sesión.'
                />
              </Helmet>

              <UserForm
                disabled={loading}
                error={errorMsg}
                title='Iniciar sesión'
                onSubmit={onSubmit}
              />
            </div>
          )
        }}
      </LoginMutation>
    </>
  )
}
