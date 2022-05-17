import styled from 'styled-components'

export const MainContainer = styled.section`
  margin-left: ${({ sidebar }) => (sidebar ? '240px' : '80px')};
  transition: all 500ms ease 0s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  top: 30px;
  top: 20px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
`

export const NavigationBar = styled.div`
  position: absolute;
  width: 95%;
  height: 45px;
  height: 56px;
  left: 248px;
  left: 30px;
  top: 99px;
  top: 89px;
  top: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    position: absolute;
    right: 20px;
    top: 22px;
  }
`

export const ProgressBar = styled.div`
  width: 476px;
  width: 628.594px;

  display: flex;
  /* justify-content: space-around; */
  justify-content: center;
  align-items: center;
  background: #fff;
  background: #f0f0f1;
  border-radius: 10px;
  height: 100%;
  flex-wrap: wrap;
  gap: 12px;
  gap: 15px;

  button {
    width: 200px;
    width: 180px;
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

  div {
    width: 2.5px;
    height: 75%;
    background: #d6d6d7;
    border-radius: 50px;
    border-radius: 42.797px;
  }
`

export const SearchInput = styled.input`
  background: #ffffff;
  border-radius: 10px;
  border: none;
  height: 45px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  /* Text */
  color: #030229;

  opacity: 0.7;
  padding: 15px;
`

export const InterviewForm = styled.form`
  /* position: absolute; */
  width: 1162px;
  width: 95%;
  height: 75%;
  left: 248px;
  left: 6%;
  padding: 30px;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 130px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`

export const FieldWrapper = styled.div`
  width: 238px;
  height: 80px;
  left: 278px;
  top: 204px;
  position: relative;
`

export const LabelForm = styled.label``

export const FieldForm = styled.input`
  border: unset;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 37.5%;
  bottom: 0%;

  /* position: absolute;
  left: 8.4%;
  right: 4.62%;
  top: 58.75%;
  bottom: 22.5%; */

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  /* Text */

  color: #030229;

  opacity: 0.7;

  background: #e5e9ec;

  padding: 10px;
  border-radius: 10px;
`
