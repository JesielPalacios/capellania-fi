import styled from 'styled-components'
import { Link as NavLinkRouter } from 'react-router-dom'

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0px;
  bottom: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-sizing: initial;
  border-left: 5px solid #4d5bf9;
  background: #4d5bf9;
  transition: width 0.3s;
  overflow-x: hidden;

  ${({ sidebar }) => (sidebar ? 'width: 300px;' : 'width: 70px;')}

  ion-icon {
    position: absolute;
    color: #fff;
    font-size: 34px;
    display: none;
  }
`

export const List = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 5px;
  padding-top: 40px;
`

export const Item = styled.li`
`

export const Link = styled(NavLinkRouter)`
position: relative;
list-style: none;
width: 100%;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;

  &[aria-current] {
    background: #f0eff5;
    color: #333;
  }
`

export const ToggleBtn = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #4d5bf9;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconClose = styled.i`
  ${({ sidebar }) => (sidebar ? 'display: block;' : 'display: none;')}
`

export const IconOpen = styled.i`
  ${({ sidebar }) => (sidebar ? 'display: none;' : 'display: block;')}
`
