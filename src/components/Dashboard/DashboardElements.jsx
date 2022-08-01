import styled from 'styled-components'

export const DashboardContainer = styled.div`
  display: grid;
  /* grid-template-columns: ${({ sidebar }) =>
    sidebar ? '300px' : '70px'} auto !important; */

  /* grid-template-columns: ${({ sidebar }) =>
    sidebar ? '300px' : '70px'} fit-content !important; */

  grid-template-columns: ${({ sidebar }) => (sidebar ? '300px' : '70px')} ${({
      sidebar
    }) =>
      sidebar ? 'auto + calc(100% - 300px) ' : 'auto + calc(100% - 130px) '};

  /* ${({ sidebar }) =>
    sidebar
      ? 'grid-template-columns: 200px auto; '
      : 'grid-template-columns: 80px auto;'} */

  width: 100%;
  /* height: 100vh; */
  height: 100vh;
  /* background: #f7f7f8; */
  background: #e5e9ec;
  /* position: relative; */

  /* transition: width 0.3s; */
  /* overflow-x: hidden; */
`
