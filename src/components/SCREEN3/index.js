import React from 'react' 
import './style.css'
import Man from '../../assets/images/screen3man.png' 
import Man2 from '../../assets/images/man22.png' 
import sf from '../../assets/images/sf.png' 
import aw from '../../assets/images/aw.png' 
import gpk from '../../assets/images/gpk.png'  
const Screen = () => { 

	return(<div style={{position:"relative"}}>
		<div id="section-2">
			{/** <img src={Man} /> **/}
	        <p>Some of the biggest NFT<br/>
				 communities are mining <span>$dust </span><br/>
				 on Discord + Telegram . . .
			</p>
            <div class="games-flex">
				<img src={sf} /> 
				<img src={gpk} /> 
				<img src={aw} /> 
            </div>
			<h1><span>$dust</span> flows<br/>
	            like <span>magic</span><br/>
	            while <span>communities</span><br/>
	            form, <span>interact</span><br/>
	            and <span>grow!</span>
            </h1>
			<img src={Man2} />
		</div>	
	</div>)  
}
export default Screen