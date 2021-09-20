import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.svg';

const Nav = styled.div`
  background-color: #fff;
  padding: 40px 80px;
  display: flex;
  justify-content: space-between;
`;

const Navlink = styled.div`
  display: flex;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;
`;

const Header = () => (
  <Nav>
    <Router>
      <Link to="/"><img src={logo} alt="" /></Link>
      <Navlink>
        <Menu>
          <a href="#0">Search</a>
          <a href="#how-it-works">How it works?</a>
          <a href="#about">About</a>
        </Menu>
      </Navlink>
    </Router>
  </Nav>
);

export default Header;
