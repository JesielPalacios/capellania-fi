import { useQuery } from '@apollo/client'
import { useRouteMatch, Link, Switch, Route, useParams } from 'react-router-dom'
import { GET_INTERVIEWS } from '../../core/graphql/queries/interviewsQueries'
import { useUser } from '../../core/hooks/useUser'
import { Main } from '../Dashboard/Components/Main'
import { NewInterview } from '../NewInterview'
import { InterviewContainer, InterviewForm } from '../NewInterview/MainElements'
import { Interview } from './components/Interview'

export const Interviews = () => {
  let { path, url } = useRouteMatch()
  const { sidebar } = useUser()
  const { data, loading, error } = useQuery(GET_INTERVIEWS)

  let { interviewId } = useParams()

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  return (
    <Switch>
      <Route exact path={path}>
        <Main title={'Entrevistas'} sidebar={sidebar}>
          <Link to={`${url}/crear-entrevista`}>Crear una entrevista nueva</Link>
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
          <InterviewContainer background="none">
            <InterviewForm>
              {data.interviews.map((dataInterview, index) => (
                <Interview key={index} {...dataInterview} />
              ))}
            </InterviewForm>
          </InterviewContainer>
        </Main>
      </Route>

      {/* Interviews Router */}
      <Route path={`${path}/crear-entrevista`}>
        <NewInterview />
      </Route>

      <Route path={`${path}/:interviewId`}>
        <Main title={`Entrevista #${interviewId}`} sidebar={sidebar}>
          <h2>Entrevista #{interviewId}</h2>
          {/* Create a componnet here for the intervie profile page  */}
        </Main>
      </Route>
    </Switch>
  )
}
