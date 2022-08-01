import { gql, useMutation } from '@apollo/client'
import { useInputValue } from '../../core/hooks/useInputValue'

const LOGIN = gql`
  mutation userLogin($email: String, $password: String) {
    login(email: $email, password: $password) {
      value
    }
  }
`

export const Login = () => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()

    email.setValue('')
    password.setValue('')

    onSubmit({
      email: email.value,
      password: password.value,
    })

    return (
      <form onSubmit={handleSubmit}>
        <input
          type='email'
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
        <input type='submit'>Enviar</input>
      </form>
    )
  }
}
