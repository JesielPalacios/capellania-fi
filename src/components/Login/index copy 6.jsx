import { gql, useMutation } from '@apollo/client'
import { useContext } from 'react'
import Context from '../../core/context/UserContext'
import { useInputValue } from '../../core/hooks/useInputValue'

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
    <form onSubmit={handleSubmit}>
      <input
        // type='email'
        placeholder='Email'
        {...email}
        onChange={(e) => email.onChang(e)}
      />
      <input
        type='password'
        placeholder='Password'
        {...password}
        onChange={(e) => password.onChang(e)}
      />
      <input type='submit' />
    </form>
  )
}
