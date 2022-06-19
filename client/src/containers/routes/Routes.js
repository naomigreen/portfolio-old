import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Contact from '../pages/Contact';
import Demo from '../pages/Demo';
import Fonts from '../../assets/fonts/fonts';
import Footer from '../../components/footer/Footer';
import Home from '../pages/Home';
import Work from '../pages/Work';

const Routes = () => (
  <Main>
    <Fonts />
    <Company>Codes Green Ltd</Company>
    <Router>
      <Nav>
        <Link activeClassName='active-link' exact to='/'>
          Home
        </Link>
        <Link activeClassName='active-link' to='/work'>
          Work
        </Link>
        <Link activeClassName='active-link' to='/demo'>
          Demo
        </Link>
        <Link activeClassName='active-link' to='/contact'>
          Contact
        </Link>
      </Nav>
      <Route path='/work' component={Work} />
      <Route path='/demo' component={Demo} />
      <Route path='/contact' component={Contact} />
      <Route exact path='/' component={Home} />
    </Router>
    <Footer />
  </Main>
);

const Main = styled.div`
  position: relative;
  margin: 0 auto;
  color: #fff;
  z-index: 4;
  background: #091d2087;
  top: 300px;
  width: 100%;
  max-width: 900px;
  min-height: 700px;
  overflow-x: hidden;
  padding: 20px 30px;

  @media (max-width: 425px) {
    padding: 20px 7px;
  }
`;
const Nav = styled.div`
  width: 350px;
  max-width: 95%;
  margin: 60px auto 30px;
  position: relative;
  .active-link {
    background: #0625258c;
  }
`;

const Link = styled(NavLink)`
  transition: all 0.8s ease;
  font-size: 14px;
  font-weight: 900;
  text-align: center;
  display: inline-block;
  width: 25%;
  padding: 10px 0;
  color: #61e3de;
  background: #0ce7e73d;
  box-shadow: inset 0px 0px 7px 1px rgba(14, 46, 53, 0.52);
  border-color: #0b2322;
  text-decoration: none;
  z-index: 3;
  position: relative;
  :hover {
    background: #0625258c;
  }
`;

const Company = styled.h2`
  margin-top: 40px;
  font-family: octuple_maxregular, Arial, sans-serif;
  text-align: center;
  font-size: 40px;
  background: -webkit-linear-gradient(#00cecc, #286d0d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 425px) {
    font-size: 26px;
  }
`;

export default Routes;
