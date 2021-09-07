import React from 'react' 
import './style.css'   
import gem1 from '../../assets/images/gem/1.png'
import gem2 from '../../assets/images/gem/2.png'
import gem3 from '../../assets/images/gem/3.png'
import gem4 from '../../assets/images/gem/4.png'
import gem5 from '../../assets/images/gem/5.png'
import Man2 from '../../assets/images/miner3.png' 
import trophy1 from '../../assets/images/trophies/1.png'
import trophy2 from '../../assets/images/trophies/2.png'
import trophy3 from '../../assets/images/trophies/3.png'
import trophy4 from '../../assets/images/trophies/4.png'
const Roadmap = () => {
	const upcomings = [{img: gem1, text: 'Mining Du$t on Polygon'},{img: gem2, text: 'Guild Mining'},{img: gem3, text: 'Breeding Miners'},{img: gem4, text: 'Derivative Miner Tools'},{img: gem5, text: 'Merch Store'},]
	const trophies = [{img: trophy1, text: '1 Trillion Du$t tokens minted on da WAX blockchain!', date: '08 / 2020'}, {img: trophy2, text: 'Magic Du$t Chat Mining Bot for Telegram DEPLOYED!!', date: '12 / 2020'}, {img: trophy3, text: 'First EVAR Du$t Token Multiplier NFT minted on WAX!!!', date: '12 / 2021'}, {img: trophy4, text: 'Magic Du$t chat mining bot for Discord debut!!!! ', date: '09 / 2021'}]
	return(<>
		<div id="roadmap"> 
			<h1 id="road-map">ROADMAP</h1>
			<h2>UPCOMING</h2>
			<div className="row justify-content-between"> 
				{
					upcomings.map((upcoming,i) =>{
						return <div key={i} className="d-flex flex-column align-items-center justify-content-center col-lg-2 col-md-2">
							<img src={upcoming.img} alt={`gem-${i}`} />
							<p>{upcoming.text}</p>
						</div>
					})
				} 
			</div>
			<h2>ACHIEVEMENTS</h2>
			<div className="row"> 
				{
					trophies.map((trophy,i) =>{
						return <div key={i} className="achievement d-flex flex-column align-items-center justify-content-center col-lg-3 col-md-3">
							<img src={trophy.img} alt={`gem-${i}`} />
							<p>{trophy.text}</p>
							<p className="date">{trophy.date}</p>
						</div>
					})
				} 
			</div>
			<img class="mt-5 man2" style={{display:'block', margin:'auto'}} src={Man2} />
		</div>	
	</>)  
}
export default Roadmap