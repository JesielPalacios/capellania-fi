import styled from 'styled-components'
import Select from 'react-select'
import { NavLink as NavLinkRouter } from 'react-router-dom'

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
  } */
  /* border: 1px solid #000; */
  position: relative;
  overflow: hidden;
`

export const Header = styled.div`
  width: 100%;
  width: auto;
  height: 50px;
  border: 5px;
  /* border: 1px solid #00800088; */
  position: absolute;
  top: 40px;
  top: 30px;
  top: 20px;
  left: 248px;
  left: 30px;
`

export const SectionTittle = styled.h1`
  /* width: 318px; */
  /* height: 33px; */

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
  overflow: hidden;
  /* overflow-x: scroll; */

  /* button {
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

  */
  div {
    width: 2.5px;
    height: 75%;
    background: #d6d6d7;
    border-radius: 50px;
    border-radius: 42.797px;
  }
`

export const Session = styled(NavLinkRouter)`
  width: 200px;
  width: 180px;
  height: 80%;
  background: unset;
  border-radius: 10px;
  border: none;

  /* &.active { */
  &[aria-current] {
    background: #ffffff;
    border: 1px solid #d6d6d7;
    box-shadow: 0px 4px 4px rgba(240, 240, 241, 0.25);
    border-radius: 10px;
    font-weight: 800;
    transition: all 0.5s ease;
  }

  transition: all 0.5s ease;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  color: #030229;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: rgba(240, 240, 241, 0.25);

    border: 1px solid #d6d6d7;
    box-shadow: 0px 4px 4px rgba(240, 240, 241, 0.25);
    border-radius: 10px;
    font-weight: 800;
    transition: all 0.5s ease;
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

export const InterviewContainer = styled.div`
  width: 1162px;
  width: 100%;
  width: 95%;
  height: 75%;
  left: 248px;
  left: 6%;
  padding: 30px;
  background: #ffffff;
  ${({ background }) =>
    background ? `background: ${background};` : 'background: #ffffff;'}
  border-radius: 10px;
  margin-top: 130px;
  overflow: hidden;
`

export const InterviewForm = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  /* justify-content: flex-start; */
  flex-wrap: wrap;
  gap: 12px;
  /* gap: 30px; */

  /* display: grid; */
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-template-rows: auto; */
  /* grid-auto-rows: minmax(100px, auto); */

  /* grid-gap: 30px; */
  /* grid-auto-rows: minmax(100px, auto); */

  /* grid-template-areas: 'row1  row1 row1 row1'; */
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 12px;
    /* width: 8px; */
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  font-size: 4px important!;
`

export const FieldWrapper = styled.div`
  /* width: 238px; */
  width: ${({ large }) => (large ? '506px' : '238px')};
  width: ${({ large }) => (large ? '476px' : '238px')};
  width: ${({ large }) => (large ? '488px' : '238px')};
  /* height: 80px; */
  /* height: 100px; */
  /* height: 78px; */
  height: ${({ height }) => (height ? `${height}` : '78px;')};
  /* left: 278px; */
  /* top: 204px; */
  position: relative;
  /* border: 1px solid aqua; */

  ${({ fill }) => (fill ? 'opacity: 0;' : '')}
`

export const LabelForm = styled.label``

export const FieldForm = styled.input`
  border: unset;
  /* position: absolute; */
  /* left: 0%; */
  /* right: 0%; */
  /* top: 37.5%; */
  /* bottom: 0%; */

  /* position: absolute;
  left: 8.4%;
  right: 4.62%;
  top: 58.75%;
  bottom: 22.5%; */

  width: 100%;

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
  margin-top: 5px;
  border-radius: 10px;

  :focus {
    background: white;
  }
`

export const SelectForm = styled.select`
  border: unset;
  /* position: absolute; */
  /* left: 0%; */
  /* right: 0%; */
  /* top: 37.5%; */
  /* bottom: 0%; */

  /* position: absolute;
  left: 8.4%;
  right: 4.62%;
  top: 58.75%;
  bottom: 22.5%; */

  width: 100%;

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
  margin-top: 5px;
  border-radius: 10px;
`

export const SelectFormed = styled(Select)`
  /* border: none;
    border: unset;
  width: 100%;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  Text

  color: #030229;

  opacity: 0.7;

  background: #e5e9ec;

  padding: 10px;
  margin-top: 5px;
  border-radius: 10px; */

  /* height: 5px; */
  .Select__control {
    /* --------------------------------------------------- */
    /* height: 40px; */
    /* width: 100%; */
    border: 1px solid #a1a1a1;
    border-radius: 0;
    cursor: pointer;

    /* display: inline; */
  }

  .Select__control:hover {
    border-color: #a1a1a1;
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: #3c3d3e;
  }
`

export const InputDateForm = styled.input`
  border: none;
  border: unset;
  width: 100%;

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
  margin-top: 5px;
  border-radius: 10px;

  height: 5px;
`

export const NavigationButtons = styled.div`
  position: absolute;
  /* width: 506px; */
  height: 45px;
  /* left: 874px; */
  /* top: 795px; */

  bottom: 30px;
  bottom: 10px;
  right: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavigationButton = styled(NavLinkRouter)`
  width: 238px;
  height: 45px;
  left: 1142px;
  top: 795px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: ${({ color }) => (color ? color : '#fff')};
  ${({ color }) => (color ? '' : 'background: #605bff;')}
  /* ${({ color }) =>
    color
      ? `opacity: 0.1; border: 1px solid #605BFF;`
      : 'background: #605bff;'} */
  ${({ color }) =>
    color
      ? 'border: 2.5px solid rgb(96 91 255 / 10%);'
      : 'background: #605bff;'}
  border-radius: 10px;

  :hover {
    border: 2.5px solid #605bff;
    transition: all 0.2s ease;
  }
  /* transition: all 0.5s ease; */

  margin-left: 10px;
  text-decoration: none;
`
