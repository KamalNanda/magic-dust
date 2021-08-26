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
					<h2>PHASE 1</h2>
					<div class="phase-boxes">
						<div class="phase-box">Launch Magic $Dust </div>
						<div class="phase-box">XX / XXXX</div> 
						<div class="phase-box">Launch $dust Token </div>
						<div class="phase-box">XX / XXXX</div>
						<div class="phase-box">Launch Chat Mining  </div>
						<div class="phase-box">XX / XXXX</div>
						<div class="phase-box">LLaunch Nifty Wizards Game  </div>
						<div class="phase-box">XX / XXXX</div>
						<div class="phase-box">Launch Dusty Miners NFTs      </div>
						<div class="phase-box">XX / XXXX</div>
					</div>
				</div>
				<div class="map-phase">
					<h2>PHASE 2</h2>
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