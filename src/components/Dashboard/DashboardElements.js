import styled from 'styled-components'

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ sidebar }) => (sidebar ? '200px' : '80px')} auto;

  /* ${({ sidebar }) =>
    sidebar
      ? 'grid-template-columns: 200px auto; '
      : 'grid-template-columns: 80px auto;'} */

  width: 100%;
  /* height: 100vh; */
  min-height: 100vh;
  background: #f7f7f8;
`
