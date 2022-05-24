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

const ShowInput = (select, field, options, placeholder, type) => {
  const customStyles = {
    control: () => ({
      // none of react-select's styles are passed to <Control />
      // width: 200
      border: 'none',
      // border: 'unset',
      // width: '100%',
      height: '45px',

      fontFamily: 'Nunito',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '19px',

      color: '#030229',

      opacity: '0.7',

      background: '#e5e9ec',

      padding: '5px',
      marginTop: '5px',
      borderRadius: '10px'

      // ':hover': {
      //   cursor: 'pointer'
      // }

      // height: '500px'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'

      return { ...provided, opacity, transition }
    }
  }

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
        placeholder="Escriba para buscar"
        styles={customStyles}
      />
    )
  } else {
    return <FieldForm id={field} placeholder={placeholder} type={type} />
  }
}

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
        </div>
      </NavigationBar>

      <InterviewContainer>
        <InterviewForm>
          {fields.map(
            (
              { field, placeholder, select, options, large, type },
              index,
              fieldItem
            ) => {
              return (
                <FieldWrapper key={index} large={large}>
                  <LabelForm htmlFor={field}>{field}</LabelForm>
                  {ShowInput(select, field, options, placeholder, type)}
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
    placeholder: 'Nombres completos',
    type: 'text'
  },
  {
    field: 'Apellidos',
    placeholder: 'Apellidos completos',
    type: 'text'
  },
  {
    field: 'Correo electrónico personal',
    placeholder: 'ejemplo@correo.com',
    type: 'mail'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111',
    type: 'text'
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
  // {
  //   field: 'Tipo de documento',
  //   placeholder: 'Tipo de documento de identidad',
  //   select: true,
  //   options: [
  //     'Cédula de ciudadanía - C.C.',
  //     'Número de documento de identidad - NIT'
  //   ]
  // },
  {
    field: 'Número de identificación',
    placeholder: 'De diez (10) dígitos como mínimo',
    type: 'text'
  },
  {
    field: 'Fecha de nacimiento',
    placeholder: '--/--/----',
    type: 'date'
  },
  {
    field: 'Sexo',
    placeholder: 'Seleccione el sexo aquí',
    select: true,
    options: [
      {
        value: 'Masculino',
        label: 'Masculino'
      },
      {
        value: 'Femenino',
        label: 'Femenino'
      },
      {
        value: 'No binario',
        label: 'No binario'
      }
    ]
  },
  {
    field: 'Dirección de residencia',
    placeholder: 'Aquí la residencia / domicilio',
    large: true
  },
  {
    field: 'Estado civil',
    placeholder: 'Seleccione el estado civil',
    select: true,
    options: [
      {
        value: 'Soltero',
        label: 'Soltero'
      },
      {
        value: 'Casado',
        label: 'Casado'
      },
      {
        value: 'Unión libre',
        label: 'Unión libre'
      }
    ]
  },
  {
    field: 'Estrato social',
    placeholder: 'Seleccione el estrato',
    select: true,
    options: [
      {
        value: '1',
        label: '1'
      },
      {
        value: '2',
        label: '2,'
      },
      {
        value: '3',
        label: '3'
      },
      {
        value: '4',
        label: '4'
      },
      {
        value: '5',
        label: '5'
      },
      {
        value: '6',
        label: '6'
      }
    ]
  },
  {
    field: 'Religión',
    placeholder: 'Seleccione la religión',
    select: true,
    options: [
      {
        value: 'Cristiano',
        label: 'Cristiano'
      },
      {
        value: 'Católico',
        label: 'Católico'
      },
      {
        value: 'Ateo',
        label: 'Ateo'
      },
      {
        value: 'Otra denominación',
        label: 'Otra denominación'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  }
]
