import React from 'react'  
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'  
import Wrapper from './styled.js'
import PinkBox from './PinkBox'

const Screen = () => {
	const list1=['When you hodl a Magic Du$t Miner in your NFT wallet every chat, like, emoji and so on is rewarded with Du$t!','Magic Du$t Miners are NFTs that multiply the Du$t you collect. ']
	const list2=['Du$t is a pretty sweet ERC-20 token based on the Wax and Polygon blockchains. ','Each Magic Du$t Miner you hold will further multiply your $Du$t rewards!  ','You can mine $Dust by chatting in any NFT community on Discord that hosts a Magic Du$t Miner Bot.','Only 11,111 Miners exist, but there’s no limit to how many Miners you can hold in a single wallet. ']
	
	return(<Wrapper>
			<img src={'/assets/images/CAVE CIELING FRONT.png'} className="cieling" /> 
		<div id="section-1"> 
				<Row>
					<Col lg={12}>
						<PinkBox>
							<h1>Magic Du$t Miners are hardworking NFTs that mine Du$t Tokens for you when you chat in the Magic Dust Discord Community</h1>
						</PinkBox>		
					</Col>
					{
						list1.map((l, i) => {
							return <Col className="my-3" lg={6} md={6} sm={12}>
										<PinkBox key={i} > 
											<div className="d-flex align-items-center"><img src={'/assets/images/heart.png'} className="heart"/><p>{l}</p></div>
										</PinkBox>
									</Col>
						})
					}
					<Col className=" my-3" lg={12} md={12} sm={12}>
						<img className="token-img" style={{width:'100%'}} src={'/assets/images/s2-left.png'} alt="s2l" />
					</Col>  
					{
						list2.map((l, i) => {
							return <Col className="mb-3" lg={6} md={6} sm={12}>
										<PinkBox key={i} > 
											<div className="d-flex align-items-center"><img src={'/assets/images/heart.png'} className="heart"/><p>{l}</p></div>
										</PinkBox>
									</Col>
						})
					}
					
				</Row> 

		</div>
	</Wrapper>)
}
export default Screen