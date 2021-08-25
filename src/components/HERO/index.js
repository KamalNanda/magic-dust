import React from 'react';
import './style.css';
import mountainBack from '../../assets/images/mountains_behind.png'
import mountainFront from '../../assets/images/mountains_front.png'
import moon from '../../assets/images/moon.png'
import cave from '../../assets/images/cave.png'
import heroLogo from '../../assets/images/hero-logo.png'
import shadow from '../../assets/images/yellow-shadow.png'
import mario from '../../assets/images/mario.png'
const Hero = () => {
  const [miners, setMiners] = React.useState(0)
  const minusFunction = () => {

  }
  const plusFunction = () => {
    
  }
  const connectWallet = () => {
    
  }
  return (
    <section id="home">
        <div class="section-bg">
            <img src={mountainFront} id="mountains_front" />
            <img src={cave} id="cave"/>
            <img src={mountainBack} id="mountains_behind" />
            <img src={moon} id="moon" />  
        </div>
         <div class="hero-flex"> 
            <div class="magic-dust">   
                <img src={heroLogo} />
            </div> 
            <div id="explore-popup"> 
                <div class="info-box">
                  <h2>MAGIC DUST</h2>
                  <p>$DUST is “mined” by chatting in 
                    $DUST enabled chat rooms 
                    on Telegram and Discord. 
                    For every message you send 
                    in a $DUSTy chat room 
                    you earn 0.5 $DUST. 
                  </p> 
                </div>
                <div class="miners-box">
                    <div class="miners-box-left">
                        <h3>MINT UP TO 20!</h3>
                        <form action="#" name="minersForm" onsubmit="mintMiners(); return false ">
                            <div class="miner-input-box">
                                <h3>
                                    <span onClick={minusFunction} class="minus">-</span>
                                    <input 
                                        required 
                                        onChange={(e) => setMiners(e.target.value)}
                                        type="number" 
                                        value={miners} 
                                        max="20" 
                                    />
                                    <span onClick={plusFunction} class="plus">+</span></h3>
                                <div id="miners-container"></div>
                            </div> 
                            <button onClick={connectWallet} type="button" id="connect-btn">CONNECT WALLET!</button>
                            <button style={{display:'none'}} type="submit" id="mint-btn">MINT MINERS!</button>
                        </form>
                    </div>
                    <div class="animation-box">
                        <img id="mario-img" src={mario} />
                    </div>
                </div> 
                <div class="info-box">
                  <h2>MAGIC DUST</h2>
                  <p>$DUST is “mined” by chatting in 
                    $DUST enabled chat rooms 
                    on Telegram and Discord. 
                    For every message you send 
                    in a $DUSTy chat room 
                    you earn 0.5 $DUST. 
                  </p> 
                </div>

            </div>
            <div class="img-flex"> 
                <h1>10,000  MINERS</h1>
                <img src={shadow} />
                <p>Badass $Dust Miners ALGORITHMICALLY GENERATED from 25 RUGGED AF features. </p>
            </div> 
        </div>
    </section>
  );
}

export default Hero;
