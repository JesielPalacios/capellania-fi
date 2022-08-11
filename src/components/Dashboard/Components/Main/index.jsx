import {
  MainContainer,
  SectionTittle
} from '../../../NewInterview/MainElements'

export const Main = ({ children, sidebar, title }) => {
  return (
    <MainContainer id="main" sidebar={sidebar}>
      <div>
        <SectionTittle>{title}</SectionTittle>
        {/* <button>Hola</button> */}
      </div>{' '}
      {children}
    </MainContainer>
  )
}
