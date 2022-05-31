import useUser from '../../core/hooks/useUser'
import { Main } from '../Dashboard/Components/Main'

export const Dashboard = () => {
  const { sidebar } = useUser()

  return (
    <Main title={'Dashboard'} sidebar={sidebar}>
      Dashboard
    </Main>
  )
}
