import { MainContainer } from './MainElements'

export const Main = ({ sidebar }) => {
  console.log(sidebar)
  return <MainContainer id="main">valor: {sidebar}</MainContainer>
}
