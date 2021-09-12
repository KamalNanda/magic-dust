import React from 'react';
import './style.css';  
import DIVIDER from '../DIVIDER' 

const generateStars = () => {
    let count = 500; 
    let i = 0
    while( i< count){
        let star = document.createElement('i')
        let x = Math.floor(Math.random() * window.innerWidth )
        let y = Math.floor(Math.random() * window.innerHeight )
        let duration = Math.random() * 10
        let size = Math.random() * 2
        star.style.left = x+'px'
        star.style.animationDuration = 1+duration+'s'
        star.style.animationDelay = duration+'s'
        star.style.top = y+'px'
        star.style.width = 1+size+'px'
        star.style.height = 1+size+'px'
        document.getElementById('home').appendChild(star)
        i++
    }
}

const Hero = () => {
    React.useEffect(() => {
        // generateStars()
    }, [])
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
      document.getElementById('mario-img').src= process.env.PUBLIC_URL + '/assets/images/man.png'
    }, 2000)
  }
  return (<>   
  {
    isMinersPopupShown 
      ? <div id="minted-popup">
          <div class="minted-popup">
              <p onClick={() => setMinersPopupShown(false)} id="close">X</p>
              <h1>CONGRATULATIONS DUSTY FRIEND!</h1> 
              <img src={process.env.PUBLIC_URL + '/assets/images/miners.png'} alt="miners"/>
              <div class="row"> 
                <p className="col-md-8">HODL YOUR MINER IN YOUR WALLET WHEN CHATTING ON ACTIVE $DUST COMMUNITIES 
                ON DISCORD AND TELEGRAM TO EARN $DUST WITH EVERY CHAT!</p>  
                <div class="col-md-4"><img src={process.env.PUBLIC_URL + '/assets/images/fomo.png'} /></div>
              </div> 
          </div>
      </div> 
      : <></>
  }
    
    
    <section id="home">
       
        <div class="section-bg">
            <img src={process.env.PUBLIC_URL + 'assets/images/mountains_front.png'} id="mountains_front"  alt={"mountainFront"}/>
            <img src={process.env.PUBLIC_URL + 'assets/images/cave.png'} id="cave" alt={"cave"}/>
            <img src={process.env.PUBLIC_URL + 'assets/images/mountains_behind.png'} id="mountains_behind"  alt={"mountainBack"}/>
            <img src={process.env.PUBLIC_URL + 'assets/images/moon.png'} id="moon"  alt={"moon"}/>  
        </div> 
   
        <div class="hero-flex"> 
            <div class="magic-dust">   
                <img src={process.env.PUBLIC_URL + 'assets/images/hero-logo.png'}  alt={"heroLogo"}/>
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
                                        <button type="button" onClick={minusFunction} class="minus">-</button>
                                        <input 
                                            required 
                                            onChange={(e) => setMiners(e.target.value)}
                                            type="number" 
                                            value={miners} 
                                            max="20" 
                                        />
                                        <button type="button" onClick={plusFunction} class="plus">+</button></h3>
                                    <div id="miners-container"></div>
                                </div>                      
                            </form> 
                          }
                        
                        {
                          !isConnected  
                            ? <button 
                                class="collect-btn "
                                type="button"  
                                onClick={() => setConnected(true)}
                              >CONNECT WALLET</button> 
                            : <button 
                                class="collect-btn" 
                                onClick={(e) => connectWallet(e)} 
                                type="submit"  
                              >MINT MINERS!</button>
                        } 
                        <p className="connected-status"><span>Wallet is{isConnected ? '' : ' not'} connected</span></p>
                    </div>
                    <div class="animation-box">
                        <img id="mario-img" alt="mario" src={loading ? process.env.PUBLIC_URL + 'assets/images/mystery.gif' : process.env.PUBLIC_URL + 'assets/images/mario.png'} />
                    </div>
                </div>    
                <div class="img-flex">  
                    <h1>9,810/11,111 MINERS LEFT</h1>
                    <img src={process.env.PUBLIC_URL + 'assets/images/yellow-shadow.png'} alt="shadow" />
                    <p>Badass $Dust Miners ALGORITHMICALLY GENERATED from 25 RUGGED AF features.</p>
                </div> 
            </div>
        </div>
      <DIVIDER />
    </section>
  </>);
}
 
export default Hero;
