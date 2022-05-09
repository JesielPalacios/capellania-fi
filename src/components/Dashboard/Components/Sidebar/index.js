import { Item, SidebarContainer } from './SidebarElements'
import './styles.css'

export const Sidebar = ({ showSidebar, sidebar }) => {
  // const [sidebar, setSidebar] = useState(true)

  // const showSidebar = () => setSidebar(!sidebar)

  return (
    <div>
      <SidebarContainer id="aside" sidebar={sidebar}>
        <div class="navigation">
          <ul>
            <li class="list active">
              <b></b>
              <b></b>
              <a href="#">
                <span class="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span class="tittle">Usuarios</span>
              </a>
            </li>
            <li class="list">
              <b></b>
              <b></b>
              <a href="#">
                <span class="icon">
                  <ion-icon name="person-add-outline"></ion-icon>
                </span>
                <span class="tittle">Crear usuario</span>
              </a>
            </li>
            <li class="list">
              <b></b>
              <b></b>
              <a href="#">
                <span class="icon">
                  <ion-icon name="log-in-outline"></ion-icon>
                </span>
                <span class="tittle">Iniciar sessión</span>
              </a>
            </li>
            <li class="list">
              <b></b>
              <b></b>
              <a href="#">
                <span class="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span class="tittle">Cerrar sessión</span>
              </a>
            </li>
          </ul>
        </div>
      </SidebarContainer>

      <div className="toggle" onClick={showSidebar}>
        <ion-icon name="menu-outline" class="open"></ion-icon>
        <ion-icon name="close-outline" class="close"></ion-icon>
      </div>
    </div>
  )
}
