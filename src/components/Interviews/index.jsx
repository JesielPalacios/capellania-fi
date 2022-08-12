import { useQuery } from '@apollo/client'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import { useUser } from '../../core/hooks/useUser'
import { Main } from '../Dashboard/Components/Main'
import { Interview } from './components/Interview'
import { NewInterview } from '../NewInterview'
import { InterviewContainer, InterviewForm } from '../NewInterview/MainElements'
import { GET_INTERVIEWS } from './graphql-queries'
import styled from 'styled-components'

export const Interviews = () => {
  let { path, url } = useRouteMatch()
  const { sidebar } = useUser()
  const { data, loading, error } = useQuery(GET_INTERVIEWS)

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`
  console.log(data)
  return (
    <Switch>
      <Route exact path={path}>
        <Main title={'Entrevistas'} sidebar={sidebar}>
          <LinkRouter to={`${url}/crear-entrevista`}>
            <span>Crear una entrevista nueva</span>
          </LinkRouter>
          <InterviewContainer background="none">
            <InterviewForm>
              {data.interviews.map((dataInterview, index) => (
                <Interview key={index} {...dataInterview} />
              ))}
            </InterviewForm>
          </InterviewContainer>
        </Main>
      </Route>

      <Route path={`${path}/crear-entrevista`} component={NewInterview} />
    </Switch>
  )
}

const LinkRouter = styled(Link)`
  position: absolute;
  top: 30px;
  right: 46px;
  text-decoration: none;

  /* width: 165px; */
  height: 50px;
  width: 250px;
  background: #605bff;
  border-radius: 10px;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;

  /* span {
    margin: 0 auto;
  } */

  /*  */

  /* width: 123px; */
  /* height: 51px; */

  /* background: #ffffff; */
  /* border-radius: 10px; */
  background: #f0f0f0;

  border-radius: 10px;
  border: none;
  color: #000;

  :hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.14);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.14);

    background: #333;
    color: #fff;
  }
`
