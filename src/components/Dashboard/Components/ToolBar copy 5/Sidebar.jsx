import { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useUser } from '../../../../core/hooks/{useUser}'
import { routes } from '../../../../core/router/routes'
// import { {useUser} } from '../../../core/hooks/User/{useUser}'
// import { routes } from '../../../core/router/routes'
import { HamburguerMenuIcon } from './components/HamburguerMenuIcon'
import { Profile } from './components/Profile'
import './Sidebar.styles.css'

export const Sidebar = ({ onLogin }) => {
  // const history = useHistory()
  // const { isLogged, logout } = useUser()

  // useEffect(() => {
  //   if (!isLogged) history.push('/login')
  //   onLogin && onLogin()
  // }, [isLogged, history, onLogin])

  const handleClick = (e) => {
    e.preventDefault()
    // logout()
  }

  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className={sidebar ? 'sidebar' : 'sidebar open'}>
      <div className="logo-details">
        {/* <i className="bx bxl-c-plus-plus icon"></i> */}
        {/* <div className="logo_name">
              Taller <br /> Vehicular
            </div> */}
        <div className="logo">
          <img src="img/logo.png" alt="" />
        </div>
        {/* <i className="bx bx-menu" id="btn" onClick={showSidebar}></i> */}
        <HamburguerMenuIcon showSidebar={showSidebar} />
      </div>
      <ul className="nav-list">
        <>
          <li
            onClick={() => {
              if (sidebar) showSidebar()
            }}
          >
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>
          {routes.map(({ path, title, icon }, index) => {
            return (
              <>
                {title === 'Cerrar sesión' ? (
                  <li key={index}>
                    <NavLink to={path} onClick={handleClick}>
                      <i className={icon}></i>
                      <span className="links_name">{title}</span>
                    </NavLink>
                    <span className="tooltip">{title}</span>
                  </li>
                ) : (
                  <li key={index}>
                    <NavLink
                      to={path}
                      activeStyle={{
                        background: '#fff'
                      }}
                    >
                      <i className={icon}></i>
                      <span className="links_name">{title}</span>
                      <span className="tooltip">{title}</span>
                    </NavLink>
                  </li>
                )}
              </>
            )
          })}
        </>
        {/* {isLogged ? (
        ) : (
          <li>
            <NavLink
              to="/login"
              activeStyle={{
                background: '#fff'
              }}
            >
              <i className="bx bx-log-in-circle"></i>
              <span className="links_name">Iniciar sesión</span>
              <span className="tooltip">Iniciar sesión</span>
            </NavLink>
          </li>
        )} */}
        {/* {isLogged ? Profile : ''} */}
      </ul>
    </div>
  )
}
