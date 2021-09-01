import React from 'react' 
import './style.css' 
import Man from '../../assets/images/man-half.png' 
import Man2 from '../../assets/images/man23.png'   
let teamLi = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const Roadmap = () => {

	return(
		<div id="roadmap"> 
			<h1>ROADMAP</h1>
			<div class="map-container">
				<div class="map-phase">
					<h2>PHASE 1 - WAX Blockchain</h2>
					<div class="phase-boxes">
						<div class="phase-box">IT DUST tokens minted on the WAX blockchain</div>
						<div class="phase-box">08 / 2020</div> 
						<div class="phase-box">DUST Chat Mining Bot for Telegram implemented </div>
						<div class="phase-box">12 / 2020</div>
						<div class="phase-box">First DUST transaction on WAX</div>
						<div class="phase-box">12 / 2020</div>
						<div class="phase-box">First DUST NFT Multiplier is minted on WAX</div>
						<div class="phase-box">12 / 2020</div>
						<div class="phase-box">DUST Enhancer went live </div>
						<div class="phase-box">12 / 2020</div>
						<div class="phase-box">First DUST distribution halving</div>
						<div class="phase-box">04 / 2021</div>
						<div class="phase-box">DUST chat mining bot for Discord implemented  </div>
						<div class="phase-box">05 / 2021</div>
					</div>
				</div>
				<div class="map-phase">
					<h2>PHASE 2 - Ethereum Blockchain</h2>
					<div class="phase-boxes">
						<div class="phase-box">Breeding Miners</div>
						<div class="phase-box">(coming soon)</div>
						<div class="phase-box">Guild Mining</div>
						<div class="phase-box">(coming soon)</div>
						<div class="phase-box">Mining Polygon token </div>
						<div class="phase-box">(coming soon)</div>
						<div class="phase-box">Du$t Market</div>
						<div class="phase-box">(coming soon)</div>
						<div class="phase-box">Merch Store </div>
						<div class="phase-box">(coming soon)</div>
						<div class="phase-box">Mining Polygon token </div>
						<div class="phase-box">(coming soon)</div>
						<div class="phase-box">Moooooon $dust</div> 
						<div class="phase-box">(coming soon)</div>
					</div>
				</div> 
			</div>
			<img style={{display:'block', margin:'auto'}} src={Man2} />
		</div>	
	)  
}
export default Roadmap