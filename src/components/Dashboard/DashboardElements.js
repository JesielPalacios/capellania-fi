import styled from 'styled-components'

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: ${(sidebar) => (sidebar ? '200px' : '0')} auto;

  width: 100%;
  height: 100vh;
`
