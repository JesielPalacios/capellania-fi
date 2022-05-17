import {
  Field,
  FieldForm,
  FieldWrapper,
  InterviewForm,
  LabelForm,
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
      <InterviewForm>
        {fields.map(({ field, placeholder }, index) => {
          return (
            <FieldWrapper key={index}>
              <LabelForm htmlFor={field}>{field}</LabelForm>
              <FieldForm id={field} placeholder={placeholder} />
            </FieldWrapper>
          )
        })}
      </InterviewForm>
    </MainContainer>
  )
}

export const fields = [
  {
    field: 'Nombres',
    placeholder: 'Nombres completos'
  },
  {
    field: 'Apellidos',
    placeholder: 'Apellidos completos'
  },
  {
    field: 'Correo electrónico personal',
    placeholder: 'Su email aquí'
  },
  {
    field: 'Número de teléfono',
    placeholder: 'Su número aquí'
  }
]
