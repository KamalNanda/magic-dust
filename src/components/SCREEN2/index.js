import React from 'react' 
import './style.css'
import PinkBox from '../Common/PinkBox'
import Lineup1 from '../../assets/images/lineup1.png'
import Lineup2 from '../../assets/images/lineup2.png'
import Lineup3 from '../../assets/images/lineup3.png'
import REDX from '../../assets/images/red-x.png'
import Cieling from '../../assets/images/CAVE CIELING FRONT.png'
import Group from '../../assets/images/Group 383.png'
import box from '../../assets/images/Group 388.png'
import coin from '../../assets/images/coin.png'
import plus from '../../assets/images/+.png'
import equal from '../../assets/images/=.png'
import arrow from '../../assets/images/pink-arrow.png'
import heart from '../../assets/images/heart.png'
import Discord from '../../assets/images/DiscordScreen.png' 
import DiscordMobile from '../../assets/images/discord-mobile.png' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Screen = () => {
	const lists = ["Du$t is a token you can mine by chatting in any NFT community on Discord that hosts a Magic Du$t Miner Bot.", "The more you chat the more Du$t you collect.", "Magic Du$t Miners are NFTs that multiply the Du$t you collect." ]
	const lists2 = ["Only 11,111 Miners exist, but there’s no limit to how many Miners you can hold in a single wallet. ", "Each Magic Du$t Miner you hold will further multiply your $Du$t rewards!"]
	const minersList = [[Lineup1] , [Lineup1, plus, Lineup2], [Lineup1, plus, Lineup2, plus, Lineup3] ]
	return(<div style={{position:'relative'}}>
			<img src={Cieling} class="cieling" /> 
		<div id="section-1"> 
				<Row>
					<Col lg={5} md={5} sm={12}> 
						<div className="pink-boxes-grid">
							<div className="pink-box">
								<h1>Magic Du$t Miners help you mine Du$t Tokens</h1>
							</div>
							{
								lists.map((l, i) => {
									return <PinkBox key={i} > 
											<div class="d-flex"><img src={arrow} className="circle-arrow"/><p>{l}</p></div>
									</PinkBox>
								})
							}
							<div className="m-show">
								{
									lists2.map((l, i) => {
										return <PinkBox key={i} > 
												<div class="d-flex"><img src={arrow} className="circle-arrow"/><p>{l}</p></div>
										</PinkBox>
									})
								}
							</div>
						</div> 
					</Col> 
					<Col lg={7} md={7} sm={12} className="sec-2-col">
						<img src={Group} id="group"/>
							<PinkBox> 
							{
								minersList.map((mine, i) => {
									return <div key={i} class='d-flex my-2 align-items-center'>
												{
													mine.map((img, j) =>{
														return <img key={j} alt={`miner-${i}-${j}`} src={img} className={ img == plus ? 'add-white' : 'pink-box-img'} />
													})
												}
												<img src={equal} className="add-white" />  
												{
													mine.map((img, j) =>{
														if(img == plus) return <></>
														else return <img className="mx-1 coin" key={j} alt={`coin-${j}`}  src={coin} />
													})
												}
											</div> 
								})
							} 
						</PinkBox> 
						<div className="m-hide pink-boxes-grid" style={{position:'relative', zIndex:'-1'}}>
							{
								lists2.map((l, i) => {
									return <PinkBox key={i} > 
											<div class="d-flex"><img src={heart} className="circle-arrow"/><p>{l}</p></div>
									</PinkBox>
								})
							}
						</div>
					</Col>
				</Row>
				<img src={Discord} className="m-hide mx-auto my-5 discord-wall" />
				<img src={DiscordMobile} className="m-show mx-auto my-5 discord-wall" />

		</div>
	</div>)
}
export default Screen