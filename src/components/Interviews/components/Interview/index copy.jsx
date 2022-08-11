import {
  useRouteMatch,
  Link,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import useUser from "../../core/hooks/useUser";
import { Main } from "../Dashboard/Components/Main";
import { NewInterview } from "../NewInterview";

import { Action, Area, Card, Content, Crear, Img } from "./Interview.styles";

export const Interviews = ({
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
  let { path, url } = useRouteMatch();
  const { sidebar } = useUser();
  let { interviewId } = useParams();

  return (
    <Switch>
      <Route exact path={path}>
        <Main title={"Entrevistas"} sidebar={sidebar}>
          <Crear>
            <Link to={`${url}/crear-entrevista`}>
              Crear una entrevista nueva
            </Link>
          </Crear>
          <Card>
            <Area>
              <Img src="../../src/assets/img/FotoX.png" alt="beneficiario" />
              <Content>
                <h3>
                  {topic}
                </h3>
                <h4>35 años</h4>
                <h4>3214567890</h4>
                <h4>{referralDepartment}</h4>
                <h5>{actionsDescription}</h5>
                <p>
                 {topicDescription}
                </p>
              </Content>
            </Area>
            <div>
              <Action to={`/entrevista/${idInterview}`}>Ver mas</Action>
            </div>
          </Card>
        </Main>
      </Route>

      {/* Interviews Router */}
      <Route path={`${path}/crear-entrevista`}>
        <NewInterview />
      </Route>

      <Route path={`${path}/:interviewId`}>
        <Main title={`Entrevista #${interviewId}`} sidebar={sidebar}>
          {/* {console.log(interviewId)} */}
          <h2>Entrevista #{interviewId}</h2>
          {/* Create a componnet here for the intervie profile page  */}
        </Main>
      </Route>
    </Switch>
  );
};
