import React, { Component } from 'react';
// import styled from 'styled-components';
import { Router, Link } from "@reach/router"
import { render } from 'react-dom';

import Work from './pages/work';
import Lab from './pages/lab';
import About from './pages/about'

import Cyber from './projects/cyber'

import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Work path='/' />
          <Lab path='lab' />
          <About path='about' /> 

          <Cyber path='cyber' />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
