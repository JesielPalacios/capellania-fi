import styled from "styled-components";

export const Crear = styled.button`
  border-radius: 5px;
  background-color: rgb(96, 91, 255);
  position: absolute;
  width: 215px;
  height: 33px;
  left: 200px;
  top: 20px;

  :hover {
    background-color: rgb(129, 126, 220);
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Card = styled.div`
  width: 350px;
  height: 350px;
  position: relative;
  font-family: "Poppins", sans-serif;
  border-radius: 4px;
  background: white;

  :hover {
    background-color: white;
    box-shadow: 0 4px 5px 0 black;
  }
`;

export const Area = styled.div`
  margin: 30px;
  padding: 10px;
  position: absolute;
`;

export const Img = styled.img`
  border-radius: 55px;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 170px;
  border: 2px solid white;
`;

export const Content = styled.div`
  position: absolute;

  top: 0;
  h3 {
    margin: 10px 0px;
    font-weight: 900;
    font-size: 20;
  
  }

  h4 {
    margin-top: 1px;
  }

  h5{
    margin-top: 10px;
  }

  p {
    margin-top: 15px;
  }
`;

export const Action = styled.button`
  position: absolute;
  color: #1976d2;
  background: white;
  size: small;
  margin: 10px;
  padding: 2px;
  bottom: 0;
  border: 1px;
  border-radius: 2px;
  cursor: pointer;

  :hover {
    background: lightblue;
  }
`;

// export const Body = styled.tbody`
//   background-color: white;
//   cursor: pointer;
//   border: 1px solid black;
//   border-radius: 20px;
//   grid: 3px;
//   text-align: center;
//   /* margin: 10px 10px; */

//   :hover {
//     background-color: lightgray;
//     box-shadow: 0 4px 5px 0 black;
//   }
// `;
