import { Item, SidebarContainer } from './SidebarElements'
import './styles.css'

export const Sidebar = ({ showSidebar, sidebar }) => {
  // const [sidebar, setSidebar] = useState(true)

  // const showSidebar = () => setSidebar(!sidebar)
  return (
    <SidebarContainer id="aside" onClick={showSidebar}>
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
  )
}
