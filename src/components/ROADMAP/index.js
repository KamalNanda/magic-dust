import React from 'react' 
import './style.css'  
import note from '../../assets/images/note.png'
import Man2 from '../../assets/images/miner3.png' 
const Roadmap = () => {
	const p1 = [{date: '08/2020', title:'1 Trillion Du$t tokens minted on the WAX blockchain'},{date: '12/2020', title:'Magic Du$t Chat Mining Bot for Telegram implemented'},{date: '12/2020', title:'First NFT Du$t Multiplier minted on WAX'},{date: '06/2021', title:'Magic Du$t chat mining bot for Discord implemented '}]
	const p2 = [{date: 'Coming Soon', title:'Mining Du$t on Polygon'},{date: 'Coming Soon', title:'Guild Mining'},{date: 'Coming Soon', title:'Breeding Miners'},{date: 'Coming Soon', title:'Derivative Miner Tools'},{date: 'Coming Soon', title:'Merch Store'}]
	return(<>
		<div id="roadmap"> 
			<h1>ROADMAP</h1>
			 <div className="roadmap-grid roadmap-grid-4">
			 	{
			 		p1.map((road, i) =>{
			 			return <div key={i} className="roadmap">
			 				<img id={`note-${i}`} src={note} className="roadmap-bg" />
			 				<p>{road.date}</p>
			 				<h2>{road.title}</h2>
			 			</div>
			 		})
			 	}
			 </div>
			 <div className="roadmap-grid roadmap-grid-5">
			 	{
			 		p2.map((road, i) =>{
			 			return <div key={i} className="roadmap">
			 				<img id={`note-${i}`} src={note} className="roadmap-bg" />
			 				<p>{road.date}</p>
			 				<h3>{road.title}</h3>
			 			</div>
			 		})
			 	}
			 </div>
			<img class="man2" style={{display:'block', margin:'auto'}} src={Man2} />
		</div>	
	</>)  
}
export default Roadmap