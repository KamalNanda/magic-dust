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
import CONTACT from './components/CONTACT'
import FOOTER from './components/FOOTER'  



function App() {
  const handleScroll = React.useCallback(() => {
    const moon = document.getElementById('moon')
    const mountains_behind = document.getElementById('mountains_behind')
    const mountains_front = document.getElementById('mountains_front')
    const value = window.scrollY
    if (moon) {
      moon.style.top = value * 1.05 + 'px'
    }
    if (mountains_behind) {
      mountains_behind.style.top = value * 0.5 + 'px'
    }
    if (mountains_front) {
      mountains_front.style.top = value * 0 + 'px'
    }
  }, [])
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    } 
  }, []) 
  return (
    <div className="App">
     {/** <img src={Miner5} id="Miner5" />
      <img src={Miner8} id="Miner8" /> 
      <img src={Miner9} id="Miner6" /> 
      <img src={Miner6} id="Miner9" />
      <img src={Miner10} id="Miner10" />**/}
      <Header />
      <HERO />   
        <img src={ '/assets/images/left-miners.png'} id="left" />
        <img src={ '/assets/images/right-miners.png'} id="right" />
        <SCREEN2 /> 
        <SCREEN3 />
        <div className="bg-container">
            <img src={ '/assets/images/CAVE BACKGROUND.png'} id="cavebg" />
          <SCREEN4 /> 
          <ROADMAP /> 
        </div>
        <div className="bg-container">
            <img src={ '/assets/images/CAVE BACKGROUND BIG.png'} id="cavebig" />
        <FAQ /> 
        <TEAM /> 
        </div> 
        <CONTACT /> 
        <div class="gemplatform" id="gemplatform">
          <img src={process.env.PUBLIC_URL+  'assets/images/gem-only.png'}/>
        </div>
        <FOOTER /> 
        {/**<div style={{position:'relative',overflowX:'hidden'}}>
          <img src={ 'cavebg.png'} id="cavebg" />
            <div style={{position:'relative'}}>
              <div  style={{position:'relative', zIndex: 2, overflowX:'hidden'}}>
                <SCREEN4 /> 
              </div>
              <div style={{position:'relative'}}>
                
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
                  <img src={process.env.PUBLIC_URL+  'gemplatform.png'}/>
                  
                </div>
            <div className="contact-bg" ></div>
      <FOOTER /> **/} 
      <a id="arrow"  href="#home"><img src={'/assets/images/arrow.png'}/></a>
    </div>
  );
}

export default App;
