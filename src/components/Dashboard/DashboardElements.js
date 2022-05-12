import styled from 'styled-components'

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ sidebar }) => (sidebar ? '300px' : '70px')} auto !important;

  /* ${({ sidebar }) =>
    sidebar
      ? 'grid-template-columns: 200px auto; '
      : 'grid-template-columns: 80px auto;'} */

  width: 100%;
  /* height: 100vh; */
  min-height: 100vh;
  background: #f7f7f8;
  /* position: relative; */

  /* transition: width 0.3s; */
  /* overflow-x: hidden; */
`
