import React from 'react';
import './App.css';
import Header from './components/HEADER'
import HERO from './components/HERO'
import SCREEN2 from './components/SCREEN2'
import SCREEN3 from './components/SCREEN3'
import SCREEN4 from './components/SCREEN4'
import TEAM from './components/TEAM'
import ROADMAP from './components/ROADMAP'
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQ from './components/FAQ' 
import arrow from './assets/images/arrow.png'
import CONTACT from './components/CONTACT'
import FOOTER from './components/FOOTER' 
import left from './assets/images/left-miners.png'
import right from './assets/images/right-miners.png'
import cavebg from './assets/images/CAVE BACKGROUND.png'
import cavebig from './assets/images/CAVE BACKGROUND BiG.png'
import Miner8 from './assets/images/miner8.png'
import Miner6 from './assets/images/miner6.png'
import Miner9 from './assets/images/miner9.png'  
import Miner10 from './assets/images/miner7.png'  
import Miner5 from './assets/images/miner5.png' 
import gemplatform from './assets/images/bottom-gems.png'
function App() {
  return (
    <div className="App">
     {/** <img src={Miner5} id="Miner5" />
      <img src={Miner8} id="Miner8" /> 
      <img src={Miner9} id="Miner6" /> 
      <img src={Miner6} id="Miner9" />
      <img src={Miner10} id="Miner10" />**/}
      <Header />
      <HERO />  
      <div id="group-div">
        <img src={left} id="left" />
        <img src={right} id="right" />
        <SCREEN2 /> 
        <SCREEN3 />
        <div style={{position:'relative',overflowX:'hidden'}}>
          <img src={cavebg} id="cavebg" />
            <div style={{position:'relative'}}>
              <div  style={{position:'relative', zIndex: 2, overflowX:'hidden'}}>
                <SCREEN4 /> 
              </div>
              <div style={{position:'relative'}}>
                <img src={cavebig} id="cavebig" />
                <div style={{position:'relative', zIndex: 2}}>
                  <ROADMAP /> 
                  <FAQ /> 
                  <TEAM /> 
                </div>
              </div>
            </div>
          </div> 
             <CONTACT /> 
                <div class="gemplatform" id="gemplatform">
                  <img src={gemplatform}/>
                  
                </div>
      <FOOTER />
      </div>
      <a id="arrow"  href="#home"><img src={arrow}/></a>
    </div>
  );
}

export default App;
