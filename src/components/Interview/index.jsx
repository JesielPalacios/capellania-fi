import { useQuery } from '@apollo/client'
import { useParams, useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Main } from '../Dashboard/Components/Main'
import { useUser } from '../../core/hooks/useUser'
import { GET_INTERVIEW } from '../Interviews/graphql-queries'
import { useEffect } from 'react'

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

  // let { interview } = data
  // let {
  //   _id,
  //   idInterview,
  //   topic,
  //   topicDescription,
  //   actionsDescription,
  //   referralDepartment,
  //   createdAt,
  //   updatedAt,
  //   userCreate,
  //   userUpdate,
  //   __typename
  // } = interview

  // // const fecha = createdAt.slice(0, 10)
  let dia, mes, anio

  const setData = async () => {
    anio = await data.interview.createdAt.slice(0, 4)
    mes = await data.interview.createdAt.slice(6, 7)
    dia = await data.interview.createdAt.slice(9, 10)
  }

  useEffect(() => {
    setData()
  }, [setData])

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  return (
    <Main title={`Entrevista #${interviewId}`} sidebar={sidebar}>
      <InterviewContainer>
        Fecha de creación: {data.interview.createdAt.slice(0, 4)} - {mes} -{' '}
        {anio}
        <br />
      </InterviewContainer>
    </Main>
  )
}

export const InterviewContainer = styled.div`
  margin: 30px;
  padding: 30px;
  width: 100%;
  height: 100%;
  /* border: 1px solid #00800088; */
  line-height: 33px;
`
