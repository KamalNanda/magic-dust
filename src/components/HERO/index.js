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
import DIVIDER from '../DIVIDER'  
const Hero = () => { 
  return (<>   
    <section id="home">
        <img src={Arrow} alt="arrow" id="green-arrow" />
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
                        <p>
                            Magic Dust Miner NFTs are
                            a generative art collection of 10,000 unique Miners 
                            that mine $dust tokens for you when you chat in $dust enabled communities on Discord.
                        </p>
                         
                        <div 
                            onClick={() => window.open("https://discord.gg/U358VVND")}
                            class="collect-btn"
                            type="button"  
                          >JOIN DISCORD</div> 
                    </div>
                    <div class="animation-box">
                        <img id="mario-img" alt="mario" src={mario} />
                    </div>
                </div>   
                <div class="img-flex">  
                    <h1>10,000 $DUST MINER NFTs</h1>
                    <img src={shadow} alt="shadow" />
                    <p>Coming Soon! Coming Soon! Coming Soon!</p>
                </div> 
            </div>
        </div>
    </section>
      <DIVIDER />
  </>);
}
 
export default Hero;
