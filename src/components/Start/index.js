import useUser from '../../core/hooks/useUser'
import { Main } from '../Dashboard/Components/Main'

export const Start = () => {
  const { sidebar } = useUser()

  return (
    <Main title={'Start'} sidebar={sidebar}>
      Start
    </Main>
  )
}
