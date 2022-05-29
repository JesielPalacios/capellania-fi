import { useRef, useState, useEffect } from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

import { routes } from '../../../../core/router/routes'
import { LogoImg, ToggleButton, ToggleIcon } from './SidebarElements'
import './styles.css'

export const Sidebar = ({ showSidebar, sidebar }) => {
  let { url } = useRouteMatch()

  let itemList = useRef()
  let list = useRef()

  const resetItems = () => {
    for (let index = 0; index < list.current.children.length; index++) {
      list.current.children[index].className = 'list'
    }
  }
  const currentItem = (index) => {
    resetItems()

    list.current.children[index].children[2].offsetParent.className =
      'list active'
  }

  useEffect(() => {
    let currentlink

    for (let i = 0; i < list.current.children.length; i++) {
      for (let j = 0; j < list.current.children[i].children.length; j++) {
        currentlink = list.current.children[i].children[2]
      }
      if (currentlink.className === 'active')
        currentlink.offsetParent.className = 'list active'
    }
  }, [])

  return (
    <>
      <div className={sidebar ? 'navigation active' : 'navigation'}>
        <ToggleButton sidebar={sidebar} onClick={showSidebar}>
          <ToggleIcon
            sidebar={sidebar}
            className={sidebar ? 'bx bx-menu-alt-right' : 'bx bx-menu'}
          />
        </ToggleButton>
        <LogoImg
          src="img/logo-unac.png"
          sidebar={sidebar}
          onClick={showSidebar}
        />
        <ul ref={list}>
          {routes.map(({ label, icon, path }, index) => (
            <li
              key={index}
              ref={itemList}
              className="list"
              onClick={() => currentItem(index)}
            >
              <b></b>
              <b></b>
              {/* <NavLink to={path}> */}
              <NavLink to={(`${url}`, path)}>
                <span className="icon">
                  <ion-icon name={icon}></ion-icon>
                </span>
                <span className="tittle">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
