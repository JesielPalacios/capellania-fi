import { MainContainer, SectionTittle } from '../Interview/MainElements'

export const Main = ({ children, sidebar, title }) => {
  return (
    <MainContainer id="main" sidebar={sidebar}>
      <SectionTittle>{title}</SectionTittle>
      {children}
    </MainContainer>
  )
}
