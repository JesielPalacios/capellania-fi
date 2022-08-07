import {
  useRouteMatch,
  useParams,
  Redirect,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { useUser } from '../../core/hooks/useUser'

// Components
import { Main } from '../Dashboard/Components/Main'

// Styles
import {
  FieldForm,
  FieldWrapper,
  InterviewContainer,
  InterviewForm,
  LabelForm,
  MainContainer,
  NavigationBar,
  NavigationButton,
  NavigationButtons,
  ProgressBar,
  SearchInput,
  SectionTittle,
  SelectForm,
  SelectFormed,
  Session
} from './MainElements'

import searchSvg from '../../assets/svg/Search.svg'
import { academicInfo, fields, trackingInfo } from './data'
import { Context } from '../../core/context/UserContext'
import { useContext } from 'react'

const ShowInput = (select, field, options, placeholder, type, height) => {
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
    return (
      <FieldForm
        id={field}
        placeholder={placeholder}
        type={type}
        height={height}
      />
    )
  }
}

export const NewInterview = () => {
  let match,
    { path, url } = useRouteMatch()
  const { sidebar } = useContext(Context)
  const { interviewStep } = useParams()
  // const interviewStep = useParams()
  let flag

  return (
    <Main title={'Registro de entrevista nueva'} sidebar={sidebar}>
      <NavigationBar>
        <ProgressBar>
          {/* <button>Información General</button>
          <div />
          <button>Información Académica</button>
          <div />
          <button>Seguimiento</button> */}
          <Session to={`${url}/informacion-general`}>
            Información General
          </Session>
          <div />
          <Session to={`${url}/informacion-academica`}>
            Información Académica
          </Session>
          <div />
          <Session to={`${url}/seguimiento`}>Seguimiento de entrevista</Session>
        </ProgressBar>
        <div>
          <SearchInput placeholder="Buscar usuario" />
          <img src={searchSvg} alt="icon search" />
        </div>
      </NavigationBar>

      <InterviewContainer>
        <InterviewForm>
          <Switch>
            <Route exact path={path}>
              <Redirect to={`${path}/informacion-general`} />
            </Route>

            <Route path={`${path}/informacion-general`}>
              {fields.map(
                (
                  { field, placeholder, select, options, large, type, fill },
                  index,
                  fieldItem
                ) => {
                  return (
                    <FieldWrapper key={index} large={large} fill={fill}>
                      {(flag = false)}
                      <LabelForm htmlFor={field}>{field}</LabelForm>
                      {ShowInput(select, field, options, placeholder, type)}
                    </FieldWrapper>
                  )
                }
              )}
            </Route>

            <Route path={`${path}/informacion-academica`}>
              {/* {console.log(match)} */}
              {/* {(flag = true)} */}
              {academicInfo.map(
                (
                  { field, placeholder, select, options, large, type, fill },
                  index,
                  fieldItem
                ) => {
                  return (
                    <FieldWrapper key={index} large={large} fill={fill}>
                      {(flag = false)}
                      <LabelForm htmlFor={field}>{field}</LabelForm>
                      {ShowInput(select, field, options, placeholder, type)}
                    </FieldWrapper>
                  )
                }
              )}
            </Route>

            <Route path={`${path}/seguimiento`}>
              {/* {(flag = true)} */}
              {trackingInfo.map(
                (
                  {
                    field,
                    placeholder,
                    select,
                    options,
                    large,
                    type,
                    fill,
                    height
                  },
                  index,
                  fieldItem
                ) => {
                  return (
                    <FieldWrapper
                      key={index}
                      large={large}
                      fill={fill}
                      height={height}
                    >
                      {(flag = false)}
                      <LabelForm htmlFor={field}>{field}</LabelForm>
                      {ShowInput(
                        select,
                        field,
                        options,
                        placeholder,
                        type,
                        height
                      )}
                    </FieldWrapper>
                  )
                }
              )}
            </Route>
          </Switch>
        </InterviewForm>

        <NavigationButtons>
          <NavigationButton to="/entrevistas" color="#605bff">
            Cancelar nuevo registro
          </NavigationButton>
          {flag ? (
            ''
          ) : (
            <NavigationButton to="/entrevistas">Paso anterior</NavigationButton>
          )}
          <NavigationButton to="/entrevistas">Siguiente paso</NavigationButton>
        </NavigationButtons>
      </InterviewContainer>
    </Main>
  )
}
