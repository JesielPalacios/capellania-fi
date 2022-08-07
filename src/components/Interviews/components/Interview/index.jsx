import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Interview = ({
  _id,
  idInterview,
  topic,
  topicDescription,
  actionsDescription,
  referralDepartment,
  userCreate,
  userUpdate,
  __typename
}) => {
  // console.log(props)

  return (
    <InterviewContainer>
      <ul>
        {/* <li>{_id}</li> */}
        {/* <li>{idInterview}</li> */}
        <li>Tema: {topic}</li>
        <li>Descripción: {topicDescription}</li>
        <li>Acciones: {actionsDescription}</li>
        <li>Departamento de remisión: {referralDepartment}</li>
        {/* <li>{userCreate}</li> */}
        {/* <li>{userUpdate}</li> */}
        {/* <li>{__typename}</li> */}
      </ul>

      <Link to={`/entrevista/${idInterview}`}>Ver detalles</Link>
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
