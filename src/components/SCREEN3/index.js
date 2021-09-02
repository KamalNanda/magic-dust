import React from 'react' 
import './style.css'
import Man from '../../assets/images/screen3man.png' 
import Man2 from '../../assets/images/miner1.png' 
import aw from '../../assets/images/partners/aw.png' 
import topps from '../../assets/images/partners/topps.png' 
import bayc from '../../assets/images/partners/bayc.png' 
import nw from '../../assets/images/partners/nw.png'  
import btc from '../../assets/images/partners/btc.png' 
const Screen = () => { 

	return(<div style={{position:"relative"}}>
		<div id="section-2">
			{/** <img src={Man} /> **/}
	        <p>Some of the biggest NFT<br/>
				 communities are mining $dust<br/>
				 on Discord + Telegram . . .
			</p>
            <div class="games-flex" style={{marginTop:'100px'}}>
				<img src={btc} /> 
				<img src={aw} /> 
				<img src={nw} /> 
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