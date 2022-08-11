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
  console.log(createdAt)

  let [hour, minutes, seconds, month, day, year] = [
    createdAt.getHours(),
    createdAt.getMinutes(),
    createdAt.getSeconds(),
    createdAt.getMonth(),
    createdAt.getDate(),
    createdAt.getFullYear()
  ]

  if (day >= 31) {
    day = 1
    month = month + 1
  }
  if (month >= 12) month = 1

  const showTopic = (thisTopic) => {
    switch (thisTopic) {
      case 'Academico_Universitario':
        return 'Académico - Universitario'
      case 'Problemas_y_o_conflictos_familiares':
        return 'Problemas y/o conflictos familiares'
      case 'Auxilio_matricula':
        return 'Auxilio matricula'
      case 'Auxilio_manutencion':
        return 'Auxilio manutención'
      case 'Auxilio_plan_de_trabajo':
        return 'Auxilio plan de trabajo'
      case 'Bautismo_por_primera_vez_en_la_IASD':
        return 'Bautismo por primera vez en la IASD'
      case 'Bautismo_por_segunda_vez_en_la_IASD':
        return 'Bautismo por segunda vez en la IASD'
      case 'Toma_de_profesion_de_posesion_en_la_IASD':
        return 'Toma de profesión de posesión en la IASD'
      case 'Toma_de_estudios_biblicos_para_bautismo_en_la_IASD':
        return 'Toma de estudios bíblicos para bautismo en la IASD'
      case 'Desercion_de_la_IASD':
        return 'Deserción de la IASD'
      case 'Salud':
        return 'Salud'
      case 'Deportes':
        return 'Deportes'
      case 'Clubes_adventistas':
        return 'Clubes adventistas'
      case 'Especiales_de_cantos_musicas_conciertos':
        return 'Especiales de cantos, músicas, conciertos'
      case 'Ministerios_Adventistas':
        return 'Ministerios Adventistas'
      case 'Violacion':
        return 'Violacion'

      default:
        return 'Academico_Universitario'
    }
  }

  // // Usando métodos internos
  // let start = new Date()
  // let timeAgo = createdAt.getTime() - start.getTime() // tiempo transcurrido en milisegundos
  // console.log(timeAgo)
  return (
    <InterviewContainer>
      <div>
        <ul>
          {/* <li>{idInterview}</li> */}
          <span>
            Fecha: {day} - {month + 1} - {year}
          </span>
          <li>
            Tema:{' '}
            {showTopic(topic).length > 38
              ? showTopic(topic).slice(0, 38) + '...'
              : showTopic(topic)}
          </li>
          <li>Descripción: {topicDescription.slice(0, 38) + '...'}</li>
          {/* <li>Departamento de remisión: {referralDepartment}</li> */}
        </ul>

        <Link to={`/entrevista/${idInterview}`}>Ver detalles</Link>
        {/* <Link to={`${path}/${idInterview}`}>Ver detalles</Link> */}
        {/* <Link to={`${path.slice(0, 11)}/${idInterview}`}>Ver detalles</Link> */}
      </div>
      <img
        // src="https://www.clipartmax.com/middle/m2H7Z5N4i8m2m2H7_user-filled-person-shape-free-icon-user-filled-person-shape-free-icon/"
        // src="https://www.clipartmax.com/png/middle/373-3732073_user-filled-person-shape-free-icon-user-filled-person-shape-free-icon.png"
        src="https://flyclipart.com/thumb2/download-person-free-vector-png-137844.png"
        alt="img user fill"
      />
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

  padding: 15px;
  /* position: relative; */
  display: flex;
  /* align-items: center; */
  justify-content: center;

  ul {
    list-style: none;
  }

  span {
    color: #00000099;
  }

  div {
    width: 70%;
    height: 100%;
  }

  img {
    /* position: absolute; */
    /* width: 90px; */

    width: 30%;
    border-radius: 50%;
  }
`

// jueves sala 2
// viernes 8 a 9
