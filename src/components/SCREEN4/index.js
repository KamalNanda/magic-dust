import React from 'react' 
import './style.css'
import discord from '../../assets/images/discord.png' 
import twitter from '../../assets/images/twitter.png' 
import telegram from '../../assets/images/telegram.png' 
import linkedin from '../../assets/images/linkedin.png' 
import Man2 from '../../assets/images/man22.png'  
const Screen = () => {

	return(
		<div id="section-3">
         	<h1>FIND YOUR DUSTY FRIENDS</h1>
			<div class="social-flex">
				<div>
					<p>Want to host an official <br/>
			            <span>Magic $dust Mine</span>  in your  <br/>
			            Discord or Telegram community?  <br/>
						Tell us about  <br/>
						your community!
			        </p>
			        <button>GIMME DUST!</button>
				</div>
				<div class="pink-boxes">
	            	<div class="green-box">  
		                <img onClick={() => window.open('https://www.discord.com')} src={discord} />
		                Magic Dust on Discord
		            </div>
		            <div class="green-box"> 
		                <img onClick={() => window.open('https://www.telegram.com')} src={telegram} />
		                Magic Dust on Telegram
		            </div>
		            <div class="green-box"> 
		                <img onClick={() => window.open('https://www.twitter.com')} src={twitter} />
		                Magic Dust on Twitter
		            </div> 
		            <div class="green-box"> 
		                <img src={linkedin} />
		                Magic Dust on LinkedIn
		            </div> 
		        </div>
			</div> 
			<img src={Man2} style={{display:'block', margin:'auto'}}/>
		</div>	
	)  
}
export default Screen