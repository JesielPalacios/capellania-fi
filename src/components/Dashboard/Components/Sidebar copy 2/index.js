import { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../../../core/router/routes'
import './styles.css'

export const Sidebar = ({ showSidebar, sidebar }) => {
  let itemList = useRef()
  let list = useRef()
  let currentItemList

  const currentItem = (index) => {
    console.clear()
    console.log(index)
    // console.log(list)
    // console.log(list.current)
    // console.log(list.current.children)
    // console.log(list.current.childNodes)
    // console.log(list.current.children[index])

    // Position of the anchor element
    // console.log(list.current.children[index].children[2])
    // console.log(list.current.children[index].children[2].offsetParent)

    for (let index = 0; index < list.current.children.length; index++) {
      list.current.children[index].className = 'list'
    }

    list.current.children[index].children[2].offsetParent.className =
      'list active'
  }

  useEffect(() => {
    console.clear()

    for (let i = 0; i < list.current.children.length; i++) {
      console.log('Anchor number: ', i+1);
      // console.log(list.current.children[i])
      // console.log(list.current.children[i].children)
      for (let j = 0; j < list.current.children[i].children.length; j++) {
        // console.log(list.current.children[i].children[j])
        // console.log(list.current.children[i].children[j].className)
        
        console.log(list.current.children[i].children[2])
        // currentItemList = list.current.children[i].children[2]
        // if (
          //   list.current.children[index].children[indexj].className = 'a.activee'
          // ) {
        //   console.log(list.current.children[index].children[indexj])
        // }
      }
    }

    // console.log(currentItemList)

    // Imprime la clase de
    // console.log(list.current.children[index].className)
  }, [])

  return (
    <>
      <div className={sidebar ? 'navigation active' : 'navigation'}>
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

      <div className="toggle" onClick={showSidebar}>
        <ion-icon name="close-outline" className="close"></ion-icon>
        <ion-icon name="menu-outline" className="open"></ion-icon>
      </div>
    </>
  )
}
