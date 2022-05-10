import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

export const App = () => {
  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)

  let itemList = useRef()
  let list = useRef()

  const currentItem = () => {
    sidebar
      ? (itemList.current.className = 'list active') && showSidebar()
      : (itemList.current.className = 'list ') && showSidebar()
  }
  return (
    <>
      <div className={sidebar ? 'navigation active' : 'navigation'}>
        <ul ref={list}>
          {console.log(list)}
          {routes.map(({ label, icon, path }, index) => (
            <li
              key={index}
              ref={itemList}
              className="list"
              onClick={currentItem}
            >
              <b></b>
              <b></b>
              <NavLink
                to={path}
                // activeStyle={{
                //   background: '#f0eff5',
                //   color: '#333'
                // }}
              >
                <span className="icon">
                  <ion-icon name={icon}></ion-icon>
                </span>
                <span className="tittle">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="toggle" onClick={showSidebar}>
        {sidebar ? (
          <ion-icon name="close-outline" className="close"></ion-icon>
        ) : (
          <ion-icon name="menu-outline" className="open"></ion-icon>
        )}
      </div>
    </>
  )
}

const routes = [
  {
    label: 'Usuarios',
    icon: 'people-outline',
    path: '/',
    notification: 0
  },
  {
    label: 'Crear usuario',
    icon: 'person-add-outline',
    path: '/statistics',
    notification: 3
  },
  {
    label: 'Iniciar sessión',
    icon: 'log-in-outline',
    path: '/customers',
    notification: 0
  },
  {
    label: 'Cerrar sessión',
    icon: 'log-out-outline',
    path: '/diagrams',
    notification: 1
  }
]
