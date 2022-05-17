import styled from 'styled-components'

export const MainContainer = styled.section`
  margin-left: ${({ sidebar }) => (sidebar ? '240px' : '80px')};
  transition: all 500ms ease 0s;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    flex: 1;
    background: #fff;
    border: 1px solid #000;
  }
  position: relative;
`

export const SectionTittle = styled.h1`
  position: absolute;
  width: 318px;
  height: 33px;
  left: 248px;
  left: 30px;
  top: 40px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
`
