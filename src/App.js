import React from 'react';
import './App.css';
import Header from './components/HEADER'
import HERO from './components/HERO'
import SCREEN2 from './components/SCREEN2'
import SCREEN3 from './components/SCREEN3'
import SCREEN4 from './components/SCREEN4'
import TEAM from './components/TEAM'
import ROADMAP from './components/ROADMAP'
import FAQ from './components/FAQ' 
import arrow from './assets/images/arrow.png'
import CONTACT from './components/CONTACT'
import left from './assets/images/left.png'
import right from './assets/images/right.png'
function App() {
  return (
    <div className="App">
      <Header />
      <HERO /> 
      <div id="group-div">
        <img src={left} id="left" />
        <img src={right} id="right" />
        
        <SCREEN3 />
        <SCREEN4 />
        <TEAM />
        <ROADMAP />
        <FAQ />
      <CONTACT />
      </div>
      <a id="arrow"  href="#home"><img src={arrow}/></a>
    </div>
  );
}

export default App;
