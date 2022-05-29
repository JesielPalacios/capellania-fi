import styled from 'styled-components';

export const HamburguerMenuIcon = ({ showSidebar }) => {
  return (
    <Wrapper>
      <input type="checkbox" id="btn-menu" onClick={showSidebar} />
      <label htmlFor="btn-menu" className="lbl-menu">
        <span id="spn1"></span>
        <span id="spn2"></span>
        <span id="spn3"></span>
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 15px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #173f7e;
  /* box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5); */
  box-shadow: -1px 1px 0px 0px rgb(0 0 0 / 50%);
  border-radius: 5px;
  z-index: 1;
  transition: all 400ms ease;
  cursor: pointer;

  .lbl-menu {
    width: 50px;
    height: 40px;
    position: relative;
    top: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .lbl-menu #spn1,
  #spn2,
  #spn3 {
    position: absolute;
    content: '';
    background: #4187f6;
    width: 30px;
    height: 7px;
    border-radius: 5px;
    transition: all 400ms ease;
  }

  #spn2 {
    top: 11px;
  }

  #spn3 {
    top: 22px;
  }

  #btn-menu {
    display: none;
  }

  #btn-menu:checked ~ .lbl-menu #spn1 {
    transform: rotate(140deg);
    top: 10px;
    background: #ff4d89;
  }

  #btn-menu:checked ~ .lbl-menu #spn2 {
    opacity: 0;
  }

  #btn-menu:checked ~ .lbl-menu #spn3 {
    transform: rotate(-140deg);
    top: 10px;
    background: #ff4d89;
  }
`;
