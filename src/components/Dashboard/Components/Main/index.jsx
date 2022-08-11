import {
  Header,
  MainContainer,
  SectionTittle
} from '../../../NewInterview/MainElements'

export const Main = ({ children, sidebar, title }) => {
  return (
    <MainContainer id="main" sidebar={sidebar}>
      <Header>
        <SectionTittle>{title}</SectionTittle>
        {/* <button>Hola</button> */}
      </Header>{' '}
      {children}
    </MainContainer>
  )
}
