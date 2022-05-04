import { SidebarContainer } from './SidebarElements'

export const Sidebar = ({ showSidebar }) => {
  return (
    <SidebarContainer id="aside" onClick={showSidebar}>
      Sidebar
    </SidebarContainer>
  )
}
