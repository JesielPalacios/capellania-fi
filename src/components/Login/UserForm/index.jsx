import React from 'react'
import { useInputValue } from '../../../core/hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../../SubmitButton'

export const UserForm = ({ error, onSubmit, title, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value,
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input type='text' placeholder='Email' {...email} disabled={disabled} />
        <input
          type='password'
          placeholder='Password'
          {...password}
          disabled={disabled}
        />
        <SubmitButton type='submit'>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
