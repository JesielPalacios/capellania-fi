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

export const Navigation = styled.div`
  position: fixed;
  top: 0px;
  /* left: 20px; */
  bottom: 0px;
  width: 70px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-sizing: initial;
  border-left: 5px solid #4d5bf9;
  background: #4d5bf9;
  transition: width 0.3s;
  overflow-x: hidden;
  /* box-shadow: 10px 0 0 #fff;*/ 

  .active{
    width: 300px;
  }
`

// export const List = styled.ul`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   padding-left: 5px;
//   padding-top: 40px;
// `

// export const Item = styled.li`
//   position: relative;
//   list-style: none;
//   width: 100%;
//   border-top-left-radius: 20px;
//   border-bottom-left-radius: 20px;
//   ${({ sidebar }) => (sidebar ? 'background: #fff;' : '')}

//   b:nth-child(1) {
//     position: absolute;
//     top: -20px;
//     height: 20px;
//     width: 100%;
//     background: #fff;
//     display: none;
//   }

//   b:nth-child(1) {
//     position: absolute;
//     top: -20px;
//     height: 20px;
//     width: 100%;
//     background: #fff;
//     display: none;
//   }

//   b:nth-child(2) {
//     position: absolute;
//     bottom: -20px;
//     height: 20px;
//     width: 100%;
//     background: #fff;
//     display: none;
//   }

//   b:nth-child(2)::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     border-top-right-radius: 20px;
//     background: #4d5bf9;
//   }

//   /* ${({ sidebar }) => (sidebar ? 'background: #fff;' : '')} */
// `
