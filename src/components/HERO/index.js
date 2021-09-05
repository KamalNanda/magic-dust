import React from 'react';
import './style.css';
import mountainBack from '../../assets/images/mountains_behind.png'
import mountainFront from '../../assets/images/mountains_front.png'
import moon from '../../assets/images/moon.png'
import cave from '../../assets/images/cave.png'
import heroLogo from '../../assets/images/hero-logo.png'
import shadow from '../../assets/images/yellow-shadow.png'
import Arrow from '../../assets/images/Group.png'
import mario from '../../assets/images/mario.png'
import star from '../../assets/images/star.png'
import DIVIDER from '../DIVIDER'
import minersGrid from '../../assets/images/miners.png'
import man from '../../assets/images/man_2.png'
const Hero = () => {
  const [miners, setMiners] = React.useState(1)
  const [isConnected, setConnected] = React.useState(false)
  const [loading, setloading] = React.useState(false)
  const [isMinersPopupShown, setMinersPopupShown] = React.useState(false)
  const minusFunction = () => { 
    if(miners !== 1){
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
                <div class="miners-box">
                    <div class="miners-box-left">
                        <div>
                            <p>MINTING IS {loading ? 'UNDERWAY' : 'LIVE'}!<br/></p>
                            {
                                loading 
                                    ? <p style={{lineHeight: '1px'}}><span>
                                        Transactions may take several minutes, do not disconnect your wallet until you can received confirmation.
                                    </span></p>
                                    : <p><strong> LIMIT 10 PER WALLET</strong></p>

                            }
                        </div>
                        {
                            !loading && <form onSubmit={(e) => connectWallet(e)}>
                                <div class="miner-input-box">
                                    <h3>
                                        <span onClick={minusFunction} class="minus"><b>-</b></span>
                                        <input 
                                            required 
                                            onChange={(e) => setMiners(e.target.value)}
                                            type="number" 
                                            value={miners} 
                                            max="20" 
                                        />
                                        <span onClick={plusFunction} class="plus"><b>+</b></span></h3>
                                    <div id="miners-container"></div>
                                </div>                      
                            </form> 
                          }
                        
                        {
                          !isConnected  
                            ? <div 
                                class="collect-btn "
                                type="button"  
                                onClick={() => setConnected(true)}
                              >CONNECT WALLET</div> 
                            : <div 
                                class="collect-btn" 
                                onClick={(e) => connectWallet(e)} 
                                type="submit"  
                              >MINT MINERS!</div>
                        } 
                        <p className="connected-status"><span>Wallet is{isConnected ? '' : ' not'} connected</span></p>
                    </div>
                    <div class="animation-box">
                        <img id="mario-img" alt="mario" src={mario} />
                    </div>
                </div>    
                <div class="img-flex">  
                    <h1>9,810/11,111 MINERS LEFT</h1>
                    <img src={shadow} alt="shadow" />
                    <p>Badass $Dust Miners ALGORITHMICALLY GENERATED from 25 RUGGED AF features.</p>
                </div> 
            </div>
        </div>
      <DIVIDER />
    </section>
  </>);
}
 
export default Hero;
