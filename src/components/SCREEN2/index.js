import React from 'react' 
import './style.css'
import Miner from '../../assets/images/miner-box.png'
import REDX from '../../assets/images/red-x.png'
import Cieling from '../../assets/images/CAVE CIELING FRONT.png'
import Group from '../../assets/images/Group 383.png'
import box from '../../assets/images/Group 388.png'
import plus from '../../assets/images/+.png'
import equal from '../../assets/images/=.png'
import Discord from '../../assets/images/DiscordScreen.png'
const Screen = () => {

	return(
		<div id="section-1">
			<img src={Cieling} class="cieling" />
			<div class="pink-box pink-flex">
				<div>
					<h1>MAGIC DUST MINERS <br/>help you mine $dust</h1>
					<h4>$dust is an ERC-721 token you can mine by chatting in any NFT community on Discord that hosts a Magic Dust Miner Bot.<br/><br/>Magic Dust Miner NFTs are a generative collection of 10,000 dust-crazed Miners. Hodl them in your wallet to multiply your $dust reward when you chat.</h4>
				</div>
				<img src={Discord} alt="discord-screen" />
			</div>
			<div class="pink-box">
				<img src={Group} id="group"/>
				<div class='row'>
					<img src={REDX} alt="red-x" />
					<img src={equal} className="add-white" />
					<p>Without Miners you can only mine chat $DUST <br/>
					at the standard algorithmically generated rate.</p>
				</div>
				<div class='row'>
					<img src={Miner} alt="miner-1" />
					<img src={equal} className="add-white" />
					<p>But with just 1 Magic Dust Miner NFTs in your <br/>
						wallet you can mine 1x $DUST for every message<br/>
						you send in approved NFT Discord communities.
						</p>
				</div>
				<div class='row'>
					<img src={Miner} alt="miner-5" />
					<img src={plus} className="add-white" />
					<img src={Miner} alt="miner-6" />
					<img src={equal} className="add-white" />
					<p>AAAAND you can mine even more $DUST when you hold<br/>
						2 Magic Dust Miner NFTs!</p>   
				</div>
				<div class='row'>
					<img src={Miner} alt="miner-2" />
					<img src={plus} className="add-white" />
					<img src={Miner} alt="miner-3" />
					<img src={plus} className="add-white" />
					<img src={Miner} alt="miner-4" />
					<img src={equal} className="add-white" />
					<p>AAAAAAAAND can you mine even more $DUST <br/>
						when you hold 3 Magic Dust Miner NFTs!!! </p>
				</div> 
			</div>  
		</div>
	)
}
export default Screen