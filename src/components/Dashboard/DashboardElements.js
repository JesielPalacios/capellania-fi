import styled from 'styled-components'

export const DashboardContainer = styled.div`
  display: grid;
  /* grid-template-columns: ${(sidebar) =>
    sidebar ? '200px' : '400px'} auto; */

  ${({ sidebar }) =>
    sidebar
      ? 'grid-template-columns: 200px auto; '
      : 'grid-template-columns: 400px auto;'}

  /* grid-template-columns: ${({ sidebar }) =>
    sidebar ? '200px' : '400px'} auto; */

  width: 100%;
  height: 100vh;
`
