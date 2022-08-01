import { useRouteMatch, Link, Switch, Route, useParams } from 'react-router-dom'
import useUser from '../../core/hooks/useUser'
import { Main } from '../Dashboard/Components/Main'
import { NewInterview } from '../NewInterview'

export const Interviews = () => {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch()
  const { sidebar } = useUser()
  let { interviewId } = useParams()

  return (
    <Switch>
      <Route exact path={path}>
        <Main title={'Entrevistas'} sidebar={sidebar}>
          <h2>Entrevistas</h2>
          <ul>
            <li>
              <Link to={`${url}/crear-entrevista`}>
                Crear una entrevista nueva
              </Link>
            </li>
          </ul>
          <h3>A continuación una lista de todas las entrevistas.</h3>
          <ul>
            <li>
              <Link to={`${url}/1`}>Bla bla bla</Link>
            </li>
            <li>
              <Link to={`${url}/2`}>Bla bla bla</Link>
            </li>
            <li>
              <Link to={`${url}/3`}>Bla bla bla</Link>
            </li>
          </ul>
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
  )
}
