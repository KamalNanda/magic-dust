
import React from 'react' 
import './style.css'      
import Row from 'react-bootstrap/Row'
import SectionHeader from '../Common/SectionHeader'
import Col from 'react-bootstrap/Col'
const Roadmap = () => {
	const upcomings = [{img: process.env.PUBLIC_URL +'/assets/images/gem/1.png', text: 'Mining Du$t on Polygon'},{img: process.env.PUBLIC_URL +'/assets/images/gem/2.png', text: 'Guild Mining'},{img: process.env.PUBLIC_URL +'/assets/images/gem/3.png', text: 'Breeding Miners'},{img: process.env.PUBLIC_URL +'/assets/images/gem/4.png', text: 'Derivative Miner Tools'},{img: process.env.PUBLIC_URL +'/assets/images/gem/5.png', text: 'Merch Store'},]
	const trophies = [{img: process.env.PUBLIC_URL +'/assets/images/trophies/1.png', text: '1 Trillion Du$t tokens minted on da WAX blockchain!', date: '08 / 2020'}, {img: process.env.PUBLIC_URL +'/assets/images/trophies/2.png', text: 'Magic Du$t Chat Mining Bot for Telegram DEPLOYED!!', date: '12 / 2020'}, {img: process.env.PUBLIC_URL +'/assets/images/trophies/3.png', text: 'First EVAR Du$t Token Multiplier NFT minted on WAX!!!', date: '12 / 2021'}, {img: process.env.PUBLIC_URL +'/assets/images/trophies/4.png', text: 'Magic Du$t chat mining bot for Discord debut!!!! ', date: '09 / 2021'}]
	return(<>
		<div id="roadmap"> 
			<SectionHeader>ROADMAP</SectionHeader>
			<h2>UPCOMING</h2>
			<Row className="justify-content-between"> 
				{
					upcomings.map((upcoming,i) =>{
						return <Col lg={2} md={2} key={i} className="d-flex align-items-center justify-content-between flex-column">
							<img src={upcoming.img} alt={`gem-${i}`} />
							<p>{upcoming.text}</p>
						</Col>
					})
				}  
			</Row>
			<h2>ACHIEVEMENTS</h2>
			<Row> 
				{
					trophies.map((trophy,i) =>{
						return <Col lg={3} md={3} key={i} className="achievement d-flex flex-column align-items-center justify-content-between">
							<img className="mt-3" src={trophy.img} alt={`gem-${i}`} />
							<div>
								<p>{trophy.text}</p>
								<p className="date">{trophy.date}</p>
							</div>
						</Col>
					})
				} 
			</Row>
			<img class="mt-5 man2" className="d-block mx-auto" src={process.env.PUBLIC_URL +'/assets/images/miner3.png'} />
		</div>	
	</>)  
}
export default Roadmap