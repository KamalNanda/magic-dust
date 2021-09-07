import React from 'react' 
import './style.css'
import discord from '../../assets/images/discord.png' 
import twitter from '../../assets/images/twitter.png' 
import telegram from '../../assets/images/telegram.png' 
import linkedin from '../../assets/images/linkedin.png' 
import Man2 from '../../assets/images/miner2.png'  
const Screen = () => {
const socials = [{img: discord, text: 'Discord'}, {img: telegram, text: 'Telegram'}, {img: twitter, text: 'Twitter'}, {img: linkedin, text: 'Linkedin'}]
	return(<>
		<div id="section-3">
         	<h1>FIND YOUR DUSTY FRIENDS</h1>
			<div class="social-flex">
				<div className="sec-2-flex">
					<p>Want to host an official <br/>
			            <span>Magic $dust Mine</span>  in your  <br/>
			            Discord or Telegram community?  <br/>
						Tell us about  <br/>
						your community!
			        </p>
			        <button>GIMME DUST!</button>
				</div>
				<div class="green-boxes">
					{
						socials.map((social, i) => {
							return <div onClick={() => window.open(`https://www.${social.text}.${social.text === 'Telegram' ? 'org' : 'com'}`)} class="green-box">  
				                <img src={social.img} alt={social.text} />
				                Magic Dust on {`${social.text}`}
				            </div>
						})	
					} 
		        </div>
			</div> 
			<img src={Man2} style={{display:'block', margin:'auto'}}/>
		</div>	
	</>)  
}
export default Screen