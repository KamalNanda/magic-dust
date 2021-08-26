import React from 'react';
import './style.css';
import mountainBack from '../../assets/images/mountains_behind.png'
import mountainFront from '../../assets/images/mountains_front.png'
import moon from '../../assets/images/moon.png'
import cave from '../../assets/images/cave.png'
import heroLogo from '../../assets/images/hero-logo.png'
import shadow from '../../assets/images/yellow-shadow.png'
import mario from '../../assets/images/mario.png'
import star from '../../assets/images/star.png'
import minersGrid from '../../assets/images/miners.png'
import man from '../../assets/images/man_2.png'
const Hero = () => {
  const [miners, setMiners] = React.useState(0)
  const [isConnected, setConnected] = React.useState(false)
  const [loading, setloading] = React.useState(false)
  const [isMinersPopupShown, setMinersPopupShown] = React.useState(false)
  const minusFunction = () => { 
    if(miners !== 0){
        setMiners(miners - 1)
    }  

  }
  const plusFunction = () => {
    if(miners !== 20){
        setMiners(miners + 1)
    }  
  }
  const connectWallet = (e) => {
    e.preventDefault()
    setloading(true)
    setTimeout(() =>{ 
      setloading(false) 
      setMinersPopupShown(true)
      document.getElementById('mario-img').src=man
    }, 2000)
  }
  return (<> 
  {
    loading ? <div id="loader" >
        <img src={"https://media2.giphy.com/media/LFhufPNdTmlKynSCu5/giphy.gif?cid=790b761110173f73e2c2aeff46c86ba2308e2fcd3582a889&rid=giphy.gif&ct=s"} alt="loading" />
    </div> : <></>
  }
  {
    isMinersPopupShown 
      ? <div id="minted-popup">
          <div class="minted-popup">
              <p onClick={() => setMinersPopupShown(false)} id="close">X</p>
              <h1>CONGRATULATIONS DUSTY FRIEND!</h1> 
              <img src={minersGrid} alt="miners"/>
              <p>HODL YOUR MINER IN YOUR WALLET WHEN CHATTING ON ACTIVE $DUST COMMUNITIES 
               ON DISCORD AND TELEGRAM TO EARN $DUST WITH EVERY CHAT!</p>
          </div>
      </div> 
      : <></>
  }
    
    
    <section id="home">
        <div class="section-bg">
            <img src={mountainFront} id="mountains_front"  alt={"mountainFront"}/>
            <img src={cave} id="cave" alt={"cave"}/>
            <img src={mountainBack} id="mountains_behind"  alt={"mountainBack"}/>
            <img src={moon} id="moon"  alt={"moon"}/>  
        </div>
         <div class="hero-flex"> 
            <div class="magic-dust">   
                <img src={heroLogo}  alt={"heroLogo"}/>
            </div> 
            <div id="explore-popup"> 
                {/**<div class="info-box">
                  <h2>MAGIC DUST</h2>
                  <p>$DUST is “mined” by chatting in 
                    $DUST enabled chat rooms 
                    on Telegram and Discord. 
                    For every message you send 
                    in a $DUSTy chat room 
                    you earn 0.5 $DUST. 
                  </p> 
                </div>**/}
                                 <div class="miners-box">
                    <div class="miners-box-left">
                        <h3>MINT UP TO 20!</h3>
                        <form onSubmit={(e) => connectWallet(e)}>
                            <div class="miner-input-box">
                                <h3>
                                    <span onClick={minusFunction} class="minus"><i>-</i></span>
                                    <input 
                                        required 
                                        onChange={(e) => setMiners(e.target.value)}
                                        type="number" 
                                        value={miners} 
                                        max="20" 
                                    />
                                    <span onClick={plusFunction} class="plus"><i>+</i></span></h3>
                                <div id="miners-container"></div>
                            </div>
                            {
                              !isConnected  
                                ? <div 
                                    class="collect-btn"
                                    type="button" 
                                    onClick={() => setConnected(true)}
                                  >CONNECT WALLET!</div> 
                                : <div 
                                    class="collect-btn" 
                                    onClick={(e) => connectWallet(e)} 
                                    type="submit"  
                                  >MINT MINERS!</div>
                            } 
                                                         
                        </form>
                    </div>
                    <div class="animation-box">
                        <img id="mario-img" alt="mario" src={mario} />
                    </div>
                </div> 
                                 {/**<div class="info-box">
                  <h2>MAGIC DUST</h2>
                  <p>$DUST is “mined” by chatting in 
                    $DUST enabled chat rooms 
                    on Telegram and Discord. 
                    For every message you send 
                    in a $DUSTy chat room 
                    you earn 0.5 $DUST. 
                  </p> 
                </div>**/}

            </div>
            <div class="img-flex"> 
                <h1>9,810 / 10,000  MINERS</h1>
                <img src={shadow} alt="shadow" />
                <p>Badass $Dust Miners ALGORITHMICALLY GENERATED from 25 RUGGED AF features. </p>
            </div> 
        </div>
    </section>
  </>);
}

export default Hero;
