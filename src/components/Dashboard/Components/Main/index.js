import {
  FieldForm,
  FieldWrapper,
  InterviewContainer,
  InterviewForm,
  LabelForm,
  MainContainer,
  NavigationBar,
  ProgressBar,
  SearchInput,
  SectionTittle,
  SelectForm,
  SelectFormed
} from './MainElements'
import searchSvg from '../../../../assets/svg/Search.svg'
import { DDD } from './index copy'
import Select from 'react-select'

const ShowInput = (select, field, options, placeholder) => {
  if (select) {
    return (
      // <SelectForm id={field}>
      //   {options.map((option, index) => {
      //     console.log(option, index)
      //     return (
      //       <option value={option} key={index}>
      //         {option}
      //       </option>
      //     )
      //   })}
      // </SelectForm>
      <SelectFormed
        id={field}
        options={options}
        defaultValue={options[0]}
        // value={{ value: 'hhh', label: 'Escriba para buscar' }}
        isClearable={true}
        placeholder='Escriba para buscar'
      />
    )
  } else {
    return <FieldForm id={field} placeholder={placeholder} />
  }
}

export const Main = ({ sidebar }) => {
  return (
    <MainContainer id="main" sidebar={sidebar}>
      <SectionTittle>Registro de entrevista nueva</SectionTittle>

      <NavigationBar>
        {/* <ProgressBar>
          <button>Información General</button>
          <div />
          <button>Información Académica</button>
          <div />
          <button>Seguimiento</button>
        </ProgressBar> */}
        <div>
          <SearchInput placeholder="Buscar usuario" />
          <img src={searchSvg} alt="icon search" />
        </div>
      </NavigationBar>

      <InterviewContainer>
        <InterviewForm>
          {fields.map(
            (
              { field, placeholder, select, options, large },
              index,
              fieldItem
            ) => {
              return (
                <FieldWrapper key={index} large={large}>
                  <LabelForm htmlFor={field}>{field}</LabelForm>
                  {ShowInput(select, field, options, placeholder)}
                </FieldWrapper>
              )
            }
          )}
        </InterviewForm>
        {/* <DDD /> */}
      </InterviewContainer>
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
    placeholder: 'example@correo.com'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Tipo de documento',
    placeholder: 'Tipo de documento de identidad',
    select: true,
    large: true,
    // options: [
    //   'Cédula de ciudadanía - C.C.',
    //   'Número de documento de identidad - NIT',
    //   'Registro civil',
    //   'Cédula de extranjería',
    //   'Pasaporte',
    //   'Visa'
    // ]
    options: [
      {
        value: 'Cédula de ciudadanía - C.C.',
        label: 'Cédula de ciudadanía - C.C.'
      },
      {
        value: 'Número de documento de identidad - NIT',
        label: 'Número de documento de identidad - NIT'
      },
      { value: 'Cédula de extranjería', label: 'Cédula de extranjería' },
      { value: 'Pasaporte', label: 'Pasaporte' },
      { value: 'Visa', label: 'Visa' }
    ]
  },
  {
    field: 'Tipo de documento',
    placeholder: 'Tipo de documento de identidad',
    select: true,
    options: [
      'Cédula de ciudadanía - C.C.',
      'Número de documento de identidad - NIT'
    ]
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111'
  }
]
