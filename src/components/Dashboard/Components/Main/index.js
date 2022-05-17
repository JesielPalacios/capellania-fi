import {
  MainContainer,
  NavigationBar,
  ProgressBar,
  SearchInput,
  SectionTittle
} from './MainElements'

export const Main = ({ sidebar }) => {
  return (
    <MainContainer id="main" sidebar={sidebar}>
      <SectionTittle>Registro de entrevista nueva</SectionTittle>
      <NavigationBar>
        <ProgressBar>
          <button>Información General</button>
          {/* <hr />| */}
          <button>Información Académica</button>
          {/* <hr />| */}
          <button>Seguimiento</button>
        </ProgressBar>
        <SearchInput />
      </NavigationBar>
      <div></div>
    </MainContainer>
  )
}
