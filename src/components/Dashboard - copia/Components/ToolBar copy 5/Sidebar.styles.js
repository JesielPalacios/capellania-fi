import styled from 'styled-components'

export const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 50px;
    /* background: #11101d; */
    background: #ffffff;
    /* padding: 6px 14px; */
    padding: 6px 7px;
    /* padding: 6px 0px; */
    /* z-index: 99; */
    transition: all 0.5s ease;
  }
  .sidebar.open {
    width: 200px;
  }
  .sidebar .logo-details {
    height: 116px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .sidebar .logo-details .logo {
    /* height: 90px; */
    width: 100%;
  }
  /* .sidebar .logo-details .icon { */
  .sidebar .logo-details img {
    opacity: 0;
    transition: all 0.5s ease;
    width: 100%;
  }
  /* .sidebar .logo-details .logo_name {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s ease;
  } */
  /* .sidebar.open .logo-details .icon, */
  /* .sidebar.open .logo-details .logo_name { */
  .sidebar.open .logo-details img {
    opacity: 1;
  }
  .sidebar .logo-details #btn {
    position: absolute;
    top: 10%;
    right: 0;
    transform: translateY(-50%);
    font-size: 22px;
    transition: all 0.4s ease;
    font-size: 23px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .sidebar.open .logo-details #btn {
    text-align: right;
  }
  .sidebar i {
    color: #fff;
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
  }

  .sidebar.open .nav-list {
    margin-top: -13px;
    height: 100%;
    padding-left: 5px;
    transition: all 0.4s ease;
  }
  .sidebar .nav-list {
    margin-top: -84px;
    height: 100%;
    padding-left: 5px;
    transition: all 0.4s ease;
  }

  /* -------------------------------- */
  /* .sidebar .nav-list li a::before {
    content: 'sdvsdvsd';
    position: relative;
    top: -30px;
    right: 5px;
    width: 30px;
    height: 30px;
    background: #4187f6;
    border-radius: 50%;
    box-shadow: 15px 15px 0 #fff;
    z-index: 99;
  } */
  /* -------------------------------- */

  .sidebar li {
    position: relative;
    margin: 8px 0;
    list-style: none;
  }
  .sidebar li .tooltip {
    position: absolute;
    top: -20px;
    left: calc(100% + 7.3px);
    z-index: 3;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
  }
  .sidebar li:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    top: 50%;
    transform: translateY(-50%);
    color: #000;
  }
  .sidebar.open li .tooltip {
    display: none;
  }
  .sidebar input {
    font-size: 15px;
    color: #fff;
    font-weight: 400;
    outline: none;
    height: 50px;
    width: 100%;
    width: 50px;
    border: none;
    border-radius: 12px;
    transition: all 0.5s ease;
    background: #1d1b31;
  }
  .sidebar.open input {
    padding: 0 20px 0 50px;
    width: 60%;
  }
  .sidebar .bx-search {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 22px;
    background: #1d1b31;
    color: #fff;
  }
  .sidebar.open .bx-search:hover {
    background: #1d1b31;
    color: #fff;
    cursor: unset;
  }
  .sidebar .bx-search:hover {
    background: #fff;
    color: #11101d;
    cursor: pointer;
  }
  .sidebar li a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: #11101d;
  }
  .sidebar li a:hover {
    background: #fff;
  }
  .sidebar li a .links_name {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
  }
  .sidebar.open li a .links_name {
    opacity: 1;
    pointer-events: auto;
  }
  .sidebar li a.active .links_name,
  .sidebar li a.active i {
    //Cambia el color del enlace activo.
    color: #000;
  }
  .sidebar li a:hover .links_name,
  .sidebar li a:hover i {
    transition: all 0.5s ease;
    color: #11101d;
  }
  .sidebar li i {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 12px;
  }

  /* .home-section {
    position: relative;
    background: #e4e9f7;
    min-height: 100vh;
    top: 0;
    left: 78px;
    width: calc(100% - 78px);
    transition: all 0.5s ease;
    z-index: 2;
  }
  .sidebar.open ~ .home-section {
    left: 250px;
    width: calc(100% - 250px);
  }
  .home-section .text {
    display: inline-block;
    color: #11101d;
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
  }
  @media (max-width: 420px) {
    .sidebar li .tooltip {
      display: none;
    }
  } */
`
