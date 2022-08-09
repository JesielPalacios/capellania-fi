import { useQuery } from '@apollo/client'
import {
  GET_INTERVIEW,
  GET_INTERVIEWS
} from '../../components/Interviews/graphql-queries'

export const useInterviews = () => {
  const interview = useQuery(GET_INTERVIEW)
  const interviews = useQuery(GET_INTERVIEWS)

  const value = {
    interview,
    interviews
  }

  return value
}
