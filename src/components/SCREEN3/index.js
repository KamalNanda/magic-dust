import React from 'react' 
import Wrapper from './styled.js' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'  
const Screen = () => { 

	return(<Wrapper>
		<div id="section-2">
			{/** <img src={Man} /> **/}
			<Row className="align-items-end">
				<Col lg={4} md={4} sm={12}>
					<img src={process.env.PUBLIC_URL +'/assets/images/Group 383.png'} />
				</Col> 
				<Col lg={8} md={8} sm={12}>
					<div style={{position:'relative'}}>
						<img className="miner-dialogue" src={process.env.PUBLIC_URL +'/assets/images/dialogue.png'} />
					</div>
			        <p>Some of the biggest NFT<br/>
						 communities are mining $dust<br/>
						 on Discord + Telegram . . .
					</p>
				</Col>
			</Row>
            <div class="games-flex">
				<img className="mt-3" src={process.env.PUBLIC_URL +'/assets/images/partners/btc.png'} /> 
				<img className="mt-3" src={process.env.PUBLIC_URL +'/assets/images/partners/nw.png'} /> 
				<img className="mt-3" src={process.env.PUBLIC_URL +'/assets/images/partners/aw.png'} /> 
            </div>  
			<img src={process.env.PUBLIC_URL +'/assets/images/miner1.png'} />
		</div>	
	</Wrapper>)  
}
export default Screen