import { useQuery } from '@apollo/client'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import { useUser } from '../../core/hooks/useUser'
import { Main } from '../Dashboard/Components/Main'
import { Interview } from './components/Interview'
import { NewInterview } from '../NewInterview'
import { InterviewContainer, InterviewForm } from '../NewInterview/MainElements'
import { GET_INTERVIEWS } from './graphql-queries'
import { Card } from './components/Interview/Interview.styles copy'

export const Interviews = () => {
  let { path, url } = useRouteMatch()
  const { sidebar } = useUser()
  const { data, loading, error } = useQuery(GET_INTERVIEWS)

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  return (
    <Switch>
      <Route exact path={path}>
        <Main title={'Entrevistas'} sidebar={sidebar}>
          <Link to={`${url}/crear-entrevista`}>Crear una entrevista nueva</Link>
          <InterviewContainer background="none">
            <Card>
              {data.interviews.map((dataInterview, index) => (
                <Interview key={index} {...dataInterview} />
              ))}
            </Card>
          </InterviewContainer>
        </Main>
      </Route>

      <Route path={`${path}/crear-entrevista`} component={NewInterview} />
    </Switch>
  )
}
