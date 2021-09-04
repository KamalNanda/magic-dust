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
import Miner8 from './assets/images/miner8.png'
import Miner6 from './assets/images/miner6.png'
import Miner9 from './assets/images/miner9.png'  
import Miner10 from './assets/images/miner7.png'  
import Miner5 from './assets/images/miner5.png' 
function App() {
  return (
    <div className="App">
      <img src={Miner5} id="Miner5" />
      <img src={Miner8} id="Miner8" /> 
      <img src={Miner9} id="Miner6" /> 
      <img src={Miner6} id="Miner9" />
      <img src={Miner10} id="Miner10" />
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
          <TEAM />
        <div class="bottom-section">
          <div className="contact-bg" ></div>
          <div className="gradient-bg"></div>
           <CONTACT />
         </div>
      </div>
      <FOOTER />
      <a id="arrow"  href="#home"><img src={arrow}/></a>
    </div>
  );
}

export default App;
