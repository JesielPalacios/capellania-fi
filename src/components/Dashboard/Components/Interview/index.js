import { useRouteMatch, Route, Switch, useParams, Link } from 'react-router-dom'

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
  SelectFormed,
  Session
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
      fontSize: '11px',
      lineHeight: '19px',

      color: '#030229',

      opacity: '0.7',

      background: '#e5e9ec',

      padding: '5px',
      marginTop: '5px',
      borderRadius: '10px',
      display: 'flex'

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

export const Main = ({ children, sidebar, title }) => {
  return (
    <MainContainer id="main" sidebar={sidebar}>
      <SectionTittle>{title}</SectionTittle>
      {children}
    </MainContainer>
  )
}
export const Interviews = ({ sidebar }) => {
  let { path, url } = useRouteMatch()

  return (
    <Main title={'Entrevistas'} sidebar={sidebar}>
      {/* <SectionTittle>{title}</SectionTittle>
      <Link to={`${url}/crear-entrevista`}>Crear entrevista nueva</Link>
      <Link to="/interviews/crear-entrevista">Crear entrevista nueva</Link>
      <br />
      <br />
      <br />
    Aquí las entrevistas */}
      <Link to="/interviews/crear-entrevista">Crear entrevista nueva</Link>
      <ul>
        <li>
          <Link to={`${url}/informacion-general`}>Información general</Link>
        </li>
        <li>
          <Link to={`${url}/informacion-academica`}>Información académica</Link>
        </li>
        <li>
          <Link to={`${url}/seguimiento`}>Seguimiento</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </Main>
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
    large: false,
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
        value: 'Tarjeta de identidad - NIT',
        label: 'Tarjeta de identidad - NIT'
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

export const NewInterview = ({ sidebar }) => {
  return (
    <Main title={'Registro de entrevista nueva'} sidebar={sidebar}>
      <link to="/interviews">Cancelar</link>
      {/* <link to="/entrevistas">Cancelar</link> */}

      <NavigationBar>
        <ProgressBar>
          {/* <button>Información General</button>
          <div />
          <button>Información Académica</button>
          <div />
          <button>Seguimiento</button> */}
          <Session to="/  ">Información General</Session>
          <div />
          <Session to="/info-academica">Información Académica</Session>
          <div />
          <Session to="/seguimiento">Seguimiento</Session>
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
    </Main>
  )
}

function Topic() {
  let { topicId } = useParams()

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  )
}
