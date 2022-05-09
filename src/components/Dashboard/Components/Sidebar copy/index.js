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
    <div>
      <SidebarContainer sidebar={sidebar}>
        <List>
          <Item>
            <Link to="/">
              <b></b>
              <b></b>
              <span class="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span class="tittle">Usuarios</span>
            </Link>
          </Item>
          <Item>
            <Link to="new-user">
              <b></b>
              <b></b>
              <span class="icon">
                <ion-icon name="person-add-outline"></ion-icon>
              </span>
              <span class="tittle">Crear usuario</span>
            </Link>
          </Item>
          <Item>
            <Link to="login">
              <b></b>
              <b></b>
              <span class="icon">
                <ion-icon name="log-in-outline"></ion-icon>
              </span>
              <span class="tittle">Iniciar sessión</span>
            </Link>
          </Item>
          <Item>
            <Link to="logout">
              <b></b>
              <b></b>
              <span class="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span class="tittle">Cerrar sessión</span>
            </Link>
          </Item>
        </List>
      </SidebarContainer>

      <ToggleBtn className="toggle" onClick={showSidebar}>
        {sidebar ? (
          <IconClose>
            <ion-icon name="close-outline" class="close"></ion-icon>
          </IconClose>
        ) : (
          <IconOpen>
            <ion-icon name="menu-outline" class="open"></ion-icon>
          </IconOpen>
        )}
      </ToggleBtn>
    </div>
  )
}
