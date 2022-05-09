import styled from 'styled-components'

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
  position: relative;
  list-style: none;
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`
