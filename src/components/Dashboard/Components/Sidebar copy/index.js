import {
  IconClose,
  IconOpen,
  Item,
  Link,
  List,
  SidebarContainer,
  ToggleBtn
} from './SidebarElements'

export const Sidebar = ({ showSidebar, sidebar }) => {
  // const [sidebar, setSidebar] = useState(true)

  // const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <SidebarContainer sidebar={sidebar}>
        <ul>
          <li className="list active">
            <b></b>
            <b></b>
            <a href="#">
              <span className="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span className="tittle">Usuarios</span>
            </a>
          </li>
          <li className="list">
            <b></b>
            <b></b>
            <a href="#">
              <span className="icon">
                <ion-icon name="person-add-outline"></ion-icon>
              </span>
              <span className="tittle">Crear usuario</span>
            </a>
          </li>
          <li className="list">
            <b></b>
            <b></b>
            <a href="#">
              <span className="icon">
                <ion-icon name="log-in-outline"></ion-icon>
              </span>
              <span className="tittle">Iniciar sessión</span>
            </a>
          </li>
          <li className="list">
            <b></b>
            <b></b>
            <a href="#">
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="tittle">Cerrar sessión</span>
            </a>
          </li>
        </ul>
      </SidebarContainer>

      <ToggleBtn className="toggle" onClick={showSidebar}>
        {sidebar ? (
          <IconClose>
            <ion-icon name="close-outline" className="close"></ion-icon>
          </IconClose>
        ) : (
          <IconOpen>
            <ion-icon name="menu-outline" className="open"></ion-icon>
          </IconOpen>
        )}
      </ToggleBtn>
    </>
  )
}
