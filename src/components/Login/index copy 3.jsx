{
  /* <Helmet>
      <title>Formulario de inicio de sesion</title>
      <meta
        name='description'
        content='A continuación el formulario de registro de usuatrios.'
      />
    </Helmet>

    {loadingUser && 'Iniciando sesión'}

    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Nombre de usuario</label>
      <input
        type='text'
        id='username'
        onChange={(event) => setUsername(event.target.value)}
        placeholder='Ingrese el username aquí'
      />

      <label htmlFor='password'>Contraseña</label>
      <input
        type='password'
        id='password'
        onChange={(event) => setPassword(event.target.value)}
        placeholder='Ingrese la contraseña aquí'
      />

      <input type='submit' value='Iniciar sesión' />
    </form>

    {errorLogin && <strong>Las credenciales son inválidas</strong>} */
}

import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useUser } from '../../core/hooks/useUser'
import { LoginMutation } from '../../core/graphql/container/LoginMutation'

export const Login = () => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  const onSubmit = ({ email, password }) => {
    const variables = { email, password }
    login({ variables }).then(({ data }) => {
      const { value } = data
      activateAuth(login)
    })
  }

  const errorMsg =
    error && 'La contraseña no es correcta o el usuario no existe.'

  return (
    <LoginMutation>
      {(login, { data, loading, error }) => {
        return (
          <div>
            <Helmet>
              <title>Petgram - Inicio de sesión</title>
              <meta
                name="description"
                content="A continuación, el formulario de inicio de sesión."
              />
            </Helmet>

            <Form
              disabled={loading}
              error={errorMsg}
              title="Iniciar sesión"
              onSubmit={onSubmit}
            ></Form>
          </div>
        )
      }}
    </LoginMutation>
  )
}
