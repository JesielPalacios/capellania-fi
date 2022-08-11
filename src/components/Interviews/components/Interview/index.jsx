import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Action, Area, Card, Content, Img } from "./Interview.styles copy";

export const Interview = ({
  _id,
  idInterview,
  topic,
  topicDescription,
  actionsDescription,
  referralDepartment,
  userCreate,
  userUpdate,
  __typename,
}) => {
  let { path, url } = useRouteMatch();

  return (
    <Card>
      <Area>
        <Img src="../../src/assets/img/FotoX.png" alt="beneficiario" />
        <Content>
          <h3>{topic}</h3>
          <h4>35 años</h4>
          <h4>3214567890</h4>
          <h4>{referralDepartment}</h4>
          <h5>{actionsDescription}</h5>
          <p>{topicDescription}</p>
        </Content>
      </Area>
      <div>
        <Action to={`/entrevista/${idInterview}`}>Ver mas</Action>
      </div>
    </Card>

    // <InterviewContainer>
    //   <ul>
    //     {/* <li>{_id}</li> */}
    //     {/* <li>{idInterview}</li> */}
    //     <li>Tema: {topic}</li>
    //     <li>Descripción: {topicDescription}</li>
    //     <li>Acciones: {actionsDescription}</li>
    //     <li>Departamento de remisión: {referralDepartment}</li>
    //     {/* <li>{userCreate}</li> */}
    //     {/* <li>{userUpdate}</li> */}
    //     {/* <li>{__typename}</li> */}
    //   </ul>

    //   <Link to={`/entrevista/${idInterview}`}>Ver detalles</Link>
    //   {/* <Link to={`${path}/${idInterview}`}>Ver detalles</Link> */}
    //   {/* <Link to={`${path.slice(0, 11)}/${idInterview}`}>Ver detalles</Link> */}
    // </InterviewContainer>
  );
};

// export const InterviewContainer = styled.div`
//   background: rgba(47, 128, 237, 0.1);
//   border-radius: 14px;
//   width: 344px;
//   width: 323px;
//   height: 165px;

//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
// `;

// jueves sala 2
// viernes 8 a 9
