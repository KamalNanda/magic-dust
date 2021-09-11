import React from 'react' 
import './style.css'
import PinkBox from '../Common/PinkBox' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
const Screen = () => {
	const list1=['When you hodl a Magic Du$t Miner in your NFT wallet every chat, like, emoji and so on is rewarded with Du$t!','Magic Du$t Miners are NFTs that multiply the Du$t you collect. ']
	const list2=['Du$t is a pretty sweet ERC-20 token based on the Wax and Polygon blockchains. ','Each Magic Du$t Miner you hold will further multiply your $Du$t rewards!  ','You can mine $Dust by chatting in any NFT community on Discord that hosts a Magic Du$t Miner Bot.','Only 11,111 Miners exist, but there’s no limit to how many Miners you can hold in a single wallet. ']
	
	return(<div style={{position:'relative'}}>
			<img src={process.env.PUBLIC_URL +'/assets/images/CAVE CIELING FRONT.png'} class="cieling" /> 
		<div id="section-1"> 
				<Row>
					<Col lg={12}>
						<div className="pink-box">
							<h1>Magic Du$t Miners are hardworking NFTs that mine Du$t Tokens for you when you chat in the Magic Dust Discord Community</h1>
						</div>		
					</Col>
					{
						list1.map((l, i) => {
							return <Col lg={6} md={6} sm={12}>
										<PinkBox key={i} > 
											<div class="d-flex"><img src={process.env.PUBLIC_URL +'/assets/images/heart.png'} className="heart"/><p>{l}</p></div>
										</PinkBox>
									</Col>
						})
					}
					<Row className="justify-content-between align-items-center">
						<Col lg={8} md={8} sm={12}>
							<img style={{width:'100%'}} src={process.env.PUBLIC_URL +'/assets/images/s2-left.png'} alt="s2l" />
						</Col>
						<Col lg={4} md={4} sm={12}>
							<img style={{width:'100%'}} src={process.env.PUBLIC_URL +'/assets/images/s2-right.png'} alt="s2r" />
						</Col>
					</Row>
					{
						list2.map((l, i) => {
							return <Col lg={6} md={6} sm={12}>
										<PinkBox key={i} > 
											<div class="d-flex"><img src={process.env.PUBLIC_URL +'/assets/images/heart.png'} className="heart"/><p>{l}</p></div>
										</PinkBox>
									</Col>
						})
					}
					
				</Row> 

		</div>
	</div>)
}
export default Screen