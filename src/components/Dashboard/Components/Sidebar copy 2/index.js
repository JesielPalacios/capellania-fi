import { useRef, useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from '../../../../core/router/routes'
import './styles.css'

export const Sidebar = ({ showSidebar, sidebar }) => {
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
              <NavLink to={path}>
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

export const LogoImg = styled.img`
  margin-top: ${({ sidebar }) => (sidebar ? '5%' : '70%')};
  ${({ sidebar }) => (sidebar ? 'width: 150px;' : 'width: 50px;')}
  object-fit: cover;
  transition: all 0.25s ease;
  cursor: pointer;
  user-select: none;
`

export const ToggleButton = styled.button`
  border: unset;
  background: unset;
  position: absolute;
  ${({ sidebar }) => (sidebar ? 'right: 0;' : '')}
  cursor: pointer;
`

export const ToggleIcon = styled.i`
  color: #000;
  margin-top: 6px;
  margin-right: 6px;
  padding: ${({ sidebar }) => (sidebar ? '10px' : '5px')};
  ${({ sidebar }) => (sidebar ? 'margin-top: 0;' : '')}
  ${({ sidebar }) => (sidebar ? 'margin-right: 0;' : '')}
  border: 10px;
  /* min-width: 50px; */
  font-size: 28px;
  text-align: center;
  /* line-height: 60px; */
  transition: all 0.25s ease;
  background: none;
  :hover {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: rgb(0 0 0 / 10%) 0px 10px 20px,
      rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
    box-shadow: rgb(0 0 0 / 20%) 0px 10px 20px,
      rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
    /* box-shadow: #2a5784 0.5px 0px 10px 20px, #2a5784 0px 0px 0px 0.5px inset; */
    /* box-shadow: #2a5784 0.5px 0px 10px 5px, #2a5784 0px 0px 0px 0.5px inset; */
    /* box-shadow: rgb(42 87 132) 0.5px 0px 10px 20px,
      rgb(42 87 132) 0px 0px 0px 0.5px inset; */
    color: #2a5784;
  }
`
