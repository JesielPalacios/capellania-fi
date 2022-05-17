import {
  InterviewForm,
  MainContainer,
  NavigationBar,
  ProgressBar,
  SearchInput,
  SectionTittle
} from './MainElements'
import searchSvg from '../../../../assets/svg/Search.svg'

export const Main = ({ sidebar }) => {
  return (
    <MainContainer id="main" sidebar={sidebar}>
      <SectionTittle>Registro de entrevista nueva</SectionTittle>
      <NavigationBar>
        <ProgressBar>
          <button>Información General</button>
          <div />
          <button>Información Académica</button>
          <div />
          <button>Seguimiento</button>
        </ProgressBar>
        <div>
          <SearchInput placeholder="Buscar usuario" />
          <img src={searchSvg} alt="icon search" />
          {/* <img src="../../../../assets/svg/Search.svg" alt="" /> */}
        </div>{' '}
      </NavigationBar>
      <InterviewForm></InterviewForm>
    </MainContainer>
  )
}
