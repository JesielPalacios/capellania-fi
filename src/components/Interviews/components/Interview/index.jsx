import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Interview = ({
  _id,
  idInterview,
  topic,
  topicDescription,
  actionsDescription,
  referralDepartment,
  createdAt,
  updatedAt,
  userCreate,
  userUpdate,
  __typename
}) => {
  let { path, url } = useRouteMatch()

  createdAt = new Date(createdAt)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const [month, day, year] = [
    createdAt.getMonth(),
    createdAt.getDate(),
    createdAt.getFullYear()
  ]
  const [hour, minutes, seconds] = [
    createdAt.getHours(),
    createdAt.getMinutes(),
    createdAt.getSeconds()
  ]

  // Usando métodos internos
  let start = new Date()
  let timeAgo = createdAt.getTime() - start.getTime()  // tiempo transcurrido en milisegundos
  console.log(timeAgo)
  return (
    <InterviewContainer>
      <ul>
        {/* <li>{_id}</li> */}
        {/* <li>{idInterview}</li> */}
        Fecha: {day+1} - {month+1} - {year}
        <li>Tema: {topic}</li>
        <li>Descripción: {topicDescription}</li>
        <li>Acciones: {actionsDescription}</li>
        <li>Departamento de remisión: {referralDepartment}</li>
        {/* <li>{userCreate}</li> */}
        {/* <li>{userUpdate}</li> */}
        {/* <li>{__typename}</li> */}
      </ul>

      <Link to={`/entrevista/${idInterview}`}>Ver detalles</Link>
      {/* <Link to={`${path}/${idInterview}`}>Ver detalles</Link> */}
      {/* <Link to={`${path.slice(0, 11)}/${idInterview}`}>Ver detalles</Link> */}
    </InterviewContainer>
  )
}

export const InterviewContainer = styled.div`
  background: rgba(47, 128, 237, 0.1);
  border-radius: 14px;
  width: 344px;
  width: 323px;
  height: 165px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`

// jueves sala 2
// viernes 8 a 9
