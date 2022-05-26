import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useUser from '../../core/hooks/useUser'

export const Login = ({ onLogin }) => {
  const history = useHistory()
  const [username, setUsername] = useState(`${process.env.REACT_APP_TEST_USR}`)
  const [password, setPassword] = useState(`${process.env.REACT_APP_TEST_PASS}`)

  const { login, isLogged, loadingUser, errorLogin } = useUser()

  useEffect(() => {
    if (isLogged) history.push('/dashboard')
    onLogin && onLogin()
  }, [isLogged, history, onLogin])

  const handleSubmit = (event) => {
    event.preventDefault()
    login({ username: username, password: password })
  }

  return (
    <div>
      {loadingUser && 'Iniciando sesión'}

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          id="username"
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Ingrese el username aquí"
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Ingrese la contraseña aquí"
        />

        <input type="submit" value="Iniciar sesión" />
      </form>

      {errorLogin && <strong>Las credenciales son inválidas</strong>}
    </div>
  )
}
