import React from 'react' 
import './style.css'
import Miner from '../../assets/images/miner-box.png'
import REDX from '../../assets/images/red-x.png'
import Group from '../../assets/images/Group 383.png'
import box from '../../assets/images/Group 388.png'
const Screen = () => {

	return(
		<div id="section-1">
			{/**<div class="pink-box">
				<img src={Group} id="group"/>
				<div class='row'>
					<img src={REDX} alt="red-x" />
					<p>x [token logo]</p>
				</div>
				<div class='row'>
					<img src={Miner} alt="miner-1" />
					<p>= 1 $Dust award per chat</p>
				</div>
				<div class='row'>
					<img src={Miner} alt="miner-5" />
					<img src={Miner} alt="miner-6" />
					<p>= 2 $Dust award per chat</p>   
				</div>
				<div class='row'>
					<img src={Miner} alt="miner-2" />
					<img src={Miner} alt="miner-3" />
					<img src={Miner} alt="miner-4" />
					<p>= 3 $Dust award per chat</p>
				</div>
				<h2>And so on...</h2>
			</div>  **/}
			<img class="sec-box" src={box}/>
		</div>
	)
}
export default Screen