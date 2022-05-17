import styled from 'styled-components'

export const MainContainer = styled.section`
  margin-left: ${({ sidebar }) => (sidebar ? '240px' : '80px')};
  transition: all 500ms ease 0s;
  display: flex;
  flex-direction: column;
  /*
  div {
    width: 100%;
    flex: 1;
    background: #fff;
    border: 1px solid #000;
  } */
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

export const NavigationBar = styled.div`
  position: absolute;
  width: 90%;
  height: 45px;
  left: 248px;
  left: 30px;
  top: 99px;
  display: flex;
  justify-content: space-between;
`

export const ProgressBar = styled.div`
  width: 476px;
  width: 628.594px;
  height: 45px;

  button {
    width: 200px;
    height: 80%;
    background: unset;
    cursor: pointer;
    border-radius: 10px;
    border: none;
  }
  button:first-child {
    background: #ffffff;
    border: 1px solid #d6d6d7;
    box-shadow: 0px 4px 4px rgba(240, 240, 241, 0.25);
    border-radius: 10px;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  background: #f0f0f1;
  border-radius: 10px;
`

export const SearchInput = styled.input`
  border-radius: 10px;
`
