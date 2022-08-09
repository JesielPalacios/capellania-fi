import { useQuery } from '@apollo/client'
import { useParams, useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Main } from '../Dashboard/Components/Main'
import { useUser } from '../../core/hooks/useUser'
import { GET_INTERVIEW } from '../Interviews/graphql-queries'

export const Interview = () => {
  const { sidebar } = useUser()
  let { path, url } = useRouteMatch()
  let { interviewId } = useParams()
  console.log(interviewId)

  const { data, loading, error } = useQuery(GET_INTERVIEW, {
    // pollInterval: 2000,
    // variables: { interviewId: interviewId }
    variables: { idInterview: interviewId }
    // variables: { interviewId: '3b7c28a0-114d-11ed-950c-3de3b7805b14' }
  })
  console.log('data')
  console.log(data)

  return (
    <Main title={`Entrevista #${interviewId}`} sidebar={sidebar}>
      <h2>Entrevista #{interviewId}</h2>
      Create a componnet here for the interview profile page
    </Main>
  )
}
