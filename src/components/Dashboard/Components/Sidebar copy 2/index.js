import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../../../core/router/routes'
import './styles.css'

export const Sidebar = ({ showSidebar, sidebar }) => {
  let itemList = useRef()
  let list = useRef()

  const currentItem = (index) => {
    // for (let index = 0; index < list.current.children.length; index++) {
    //   list.current.children[index].className = 'list'
    // }
    // if (list.current.children[index].className === 'list') {
    //   list.current.children[index].className = 'list active'
    // } else {
    //   list.current.children[index].className = 'list'
    // }
    for (let index = 0; index < list.current.children.length; index++) {
      // console.log(list.current.children[index].children)
      for (
        let indexj = 0;
        indexj < list.current.children[index].children.length;
        indexj++
      ) {
        // if (
        //   list.current.children[index].children[indexj].className = 'a.activee'
        // ) {
        //   console.log(list.current.children[index].children[indexj])
        // }
        // console.log(list.current.children[index].children[indexj].className)
      }
    }
    
    // Imprime la clase de 
    // console.log(list.current.children[index].className)
  }

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
