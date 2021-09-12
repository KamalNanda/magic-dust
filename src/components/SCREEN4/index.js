import React from 'react' 
import './style.css'  
const Screen = () => {
const socials = [{img: process.env.PUBLIC_URL + '/assets/images/discord.png', text: 'Discord'}, {img: process.env.PUBLIC_URL + '/assets/images/telegram.png', text: 'Telegram'}, {img: process.env.PUBLIC_URL + '/assets/images/twitter.png', text: 'Twitter'}, {img: process.env.PUBLIC_URL + '/assets/images/linkedin.png', text: 'Linkedin'}]
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
			        <button className="gimme-btn">GIMME DUST!</button>
				</div>
				<div class="green-boxes">
					{
						socials.map((social, i) => {
							return <a href={`https://www.${social.text}.${social.text === 'Telegram' ? 'org' : 'com'}`} target="_blank" ><button class="green-box">  
				                <img src={social.img} alt={social.text} />
				                Magic Dust on {`${social.text}`}
				            </button></a>
						})	
					} 
		        </div>
			</div> 
			<img src={process.env.PUBLIC_URL + '/assets/images/miner2.png'} style={{display:'block', margin:'auto'}}/>
		</div>	
	</>)  
}
export default Screen