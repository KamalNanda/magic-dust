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
import FOOTER from './components/FOOTER'
import left from './assets/images/left-min.png'
import right from './assets/images/right-min.png'
function App() {
  return (
    <div className="App">
      <Header />
      <HERO />  
      <div id="group-div">
        <img src={left} id="left" />
        <img src={right} id="right" />
        <SCREEN2 />
        
        <SCREEN3 />
        <SCREEN4 />
        <ROADMAP />
        <FAQ /> 
        <div class="bottom-section">
          <div className="contact-bg" ></div>
          <div className="gradient-bg"></div>
          <TEAM />
           <CONTACT />
         </div>
      </div>
      <FOOTER />
      <a id="arrow"  href="#home"><img src={arrow}/></a>
    </div>
  );
}

export default App;
