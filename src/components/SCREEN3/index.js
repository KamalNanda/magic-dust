import React from 'react' 
import './style.css'
import Man from '../../assets/images/screen3man.png' 
import Man2 from '../../assets/images/miner1.png' 
import aw from '../../assets/images/partners/aw.png' 
import topps from '../../assets/images/partners/topps.png' 
import bayc from '../../assets/images/partners/bayc.png' 
import nw from '../../assets/images/partners/nw.png'  
import btc from '../../assets/images/partners/btc.png' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Group from '../../assets/images/Group 383.png'
import dialogue from '../../assets/images/dialogue.png'
const Screen = () => { 

	return(<div style={{position:"relative"}}>
		<div id="section-2">
			{/** <img src={Man} /> **/}
			<Row className="align-items-end">
				<Col lg={4} md={4} sm={12}>
					<img src={Group} />
				</Col> 
				<Col lg={8} md={8} sm={12}>
					<div style={{position:'relative'}}>
						<img className="miner-dialogue" src={dialogue} />
					</div>
			        <p>Some of the biggest NFT<br/>
						 communities are mining $dust<br/>
						 on Discord + Telegram . . .
					</p>
				</Col>
			</Row>
            <div class="games-flex" style={{marginTop:'100px'}}>
				<img className="mt-3" src={btc} /> 
				<img className="mt-3" src={nw} /> 
				<img className="mt-3" src={aw} /> 
            </div> 
			{/**<p>$dust flows
	            like magic<br/>
	            while communities<br/>
	            form, interact
	            and grow!
            </p>**/}
			<img src={Man2} />
		</div>	
	</div>)  
}
export default Screen