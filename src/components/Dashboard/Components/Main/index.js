import { MainContainer } from './MainElements'

export const Main = ({ sidebar }) => {
  return (
    <MainContainer id="main" sidebar={sidebar}>
      valor: {sidebar.toString()}
    </MainContainer>
  )
}
