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
        return 'Académico - Universitario'
    }
  }

  const showReferralDepartment = (thisTopic) => {
    switch (thisTopic) {
      case 'No_necesita_remision':
        return 'No necesita remisión'
      case 'Centro_de_Psicologia':
        return 'Centro de Psicología'
      case 'Centro_de_Pediatria':
        return 'Centro de Pediatría'
      case 'Respectivo_decano_de_la_facultad':
        return 'Respectivo decano de la facultad'
      case 'Pastor':
        return 'Pastor'

      default:
        return 'No necesita remisión'
    }
  }

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`
  if (!data) return 'No hay nada...'

  return (
    <Main
      title={`Entrevista - ID: ${interviewId}`}
      sidebar={sidebar}
      style={{ color: '#5B93FF' }}
    >
      <InterviewContainer>
        <div style={{ 'margin-top': '20px', 'margin-bottom': '10px' }}>
          <span style={{ color: '#5B93FF' }}>Fecha de creación:</span>{' '}
          {data.interview.createdAt.slice(9, 10)} -{' '}
          {data.interview.createdAt.slice(6, 7)} -{' '}
          {data.interview.createdAt.slice(0, 4)}
        </div>
        <div
          className="scroll-y"
          // style={{ 'margin-top': '30px' }}
        >
          <div className="top">
            <h2>Tipo problemática / tema</h2>
            {/* {data.interview.topic} */}
            <div> {showTopic(data.interview.topic)} </div>
          </div>
          <div className="top">
            <h2>Descripción de la problemática</h2>
            <div className="scroll-y-400px">
              <div>{data.interview.topicDescription}</div>
            </div>
          </div>
          <div className="top">
            <h2>Acciones a tomar</h2>
            <div className="scroll-y-400px">
              <div>
                {data.interview.actionsDescription}
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                debitis officia quam, ratione labore quae distinctio ipsam,
                minus explicabo eveniet perferendis, assumenda aut! At animi
                laudantium earum ipsam aliquam dignissimos accusantium tenetur
                laboriosam expedita. Illo rem quas laboriosam pariatur?
                Reprehenderit quaerat quod rem repellendus nam aut, perferendis
                labore. Maxime nihil earum odit sed libero maiores, ea
                architecto aliquam est tempora et error dicta vel in sequi ipsum
                quas sint velit corrupti! Neque quo culpa necessitatibus itaque
                laboriosam voluptatum molestiae unde veritatis quos, beatae
                asperiores tempora pariatur alias at ut perspiciatis a
                exercitationem? Nesciunt vitae error doloribus eligendi
                voluptatem, quod fuga eius totam minus at accusamus sequi
                laudantium, porro quos nulla. Autem, debitis totam? Quis
                nesciunt voluptatum id assumenda et modi laborum provident
                voluptates illo quo quae, quisquam sed adipisci vero vel atque
                praesentium soluta nisi, rem sequi delectus recusandae rerum
                perspiciatis! Maiores quas odit magnam deleniti dolor eius vero
                ex beatae assumenda debitis temporibus ipsam culpa numquam
                minima corporis consequatur sit dolorum repellendus, accusamus
                officiis doloribus cupiditate. Aliquam molestias placeat
                cupiditate laboriosam laborum natus odit, fugit cum iste
                blanditiis alias voluptatibus ab, aut accusantium officiis! Non
                ea eius quam modi maxime. Magni, ab itaque tempore officiis
                ullam ipsam. Earum,voluptatem. */}
                {/* acaascasc */}
              </div>
            </div>
          </div>
          <div className="top">
            <h2>Departamento de referencia</h2>
            <div className="scroll-y-400px">
              {/* <div>{data.interview.referralDepartment}</div> */}
              <div>
                {showReferralDepartment(data.interview.referralDepartment)}
              </div>
            </div>
          </div>
        </div>
      </InterviewContainer>
    </Main>
  )
}

export const InterviewContainer = styled.div`
  margin: 30px;
  padding: 30px;
  width: 100%;
  /* width: 95%; */
  height: 100%;
  /* height: 100vh !important; */
  /* border: 1px solid #00800088; */
  line-height: 20px;

  /* margin: 10px; */

  div {
    padding: 5px;
  }

  h2 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-weight: 700;
    font-size: 16px;
    font-size: 20px;
    line-height: 22px;

    /* Text */

    color: #030229;
    color: #5b93ff;
  }

  h3 {
    color: #5b93ff;
  }

  .top {
    margin-top: 40px;
  }

  .scroll-y {
    overflow-y: scroll;
    height: 90%;
    /* height: 400px; */
    /* margin-top: 30px; */
  }
  .scroll-y-400px {
    overflow-y: scroll;
    max-height: 200px;
    margin-top: 5px;
  }
`
