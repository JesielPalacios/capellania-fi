// import { Table, TableBody, TableHead } from "@mui/material";
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

// datos_quemados "
// const data = [
//   { id: 1, personaje: "Naruto", anime: "Naruto", genero: "Hombre" },
//   { id: 2, personaje: "Goku", anime: "Dragon Ball", genero: "Hombre" },
//   { id: 3, personaje: "Keshin Himura", anime: "One Piece", genero: "Hombre" },
//   { id: 4, personaje: "Seto Kaibe", anime: "¡Yu-Gi-Oh!", genero: "Hombre" },
//   { id: 5, personaje: "Natsu", anime: "Fairy Tail", genero: "Hombre" },
// ];"

export const Interviews = () => {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();
  const { sidebar } = useUser();
  let { interviewId } = useParams();
  // datos_quemados"
  //  let state = {
  //   data: data,
  // };"

  return (
    <Switch>
      <Route exact path={path}>
        <Main title={"Entrevistas"} sidebar={sidebar}>
          {/* <h2>Entrevistas</h2> */}
          <Crear>
            <Link to={`${url}/crear-entrevista`}>
              Crear una entrevista nueva
            </Link>
          </Crear>
          {/* <h3>A continuación una lista de todas las entrevistas.</h3> */}

          <Card>
            <Area>
              <Img src="../../src/assets/img/FotoX.png" alt="beneficiario" />
              <Content>
                <h3>
                  Pedro
                </h3>
                <h4>35 años</h4>
                <h4>3214567890</h4>
                <h4>Ing. Sistemas</h4>
                <h5>Problemas academicos</h5>
                <p>
                  No se como ser mas dedicado al estudio....
                </p>
              </Content>
            </Area>
            <div>
              <Action>Ver mas</Action>
            </div>
          </Card>

          {/* <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>E-mail</th>
                <th>Numero Telefonico</th>
                <th>Genero</th>
                <th>actions</th>
              </tr>
            </thead>
            <Body>
              <tr>
                <td>1</td>
                <td>Naruto</td>
                <td>Naruto</td>
                <td>3214567890</td>
                <td>Hombre</td>
                <td>
                  <select>
                    <option>. . .</option>
                    <option>Edit</option>
                    <option>Delete</option>
                  </select>
                </td>
              </tr>
            </Body>
            {/* <tbody class="datos_quemados">
              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.personaje}</td>
                  <td>{elemento.anime}</td>
                  <td>{elemento.genero}</td>
                  <td>
                    <select>
                      <option>Edit</option>
                      <option>Delete</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody> */}
          {/* </Table> */}
          {/* <ul>
            <li>
              <Link to={`${url}/1`}>Bla bla bla</Link>
            </li>
            <li>
              <Link to={`${url}/2`}>Bla bla bla</Link>
            </li>
            <li>
              <Link to={`${url}/3`}>Bla bla bla</Link>
            </li>
          </ul> */}
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
