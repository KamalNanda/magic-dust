import React from 'react' 
import './style.css'
import Lineup1 from '../../assets/images/lineup1.png'
import Lineup2 from '../../assets/images/lineup2.png'
import Lineup3 from '../../assets/images/lineup3.png'
import REDX from '../../assets/images/red-x.png'
import Cieling from '../../assets/images/CAVE CIELING FRONT.png'
import Group from '../../assets/images/Group 383.png'
import box from '../../assets/images/Group 388.png'
import plus from '../../assets/images/+.png'
import equal from '../../assets/images/=.png'
import arrow from '../../assets/images/arrow-curve.png'
import Discord from '../../assets/images/DiscordScreen.png'
import Miner5 from '../../assets/images/miner5.png'
const Screen = () => {
	const lists = ["Du$t is a token you can mine by chatting in any NFT community on Discord that hosts a Magic Du$t Miner Bot.", "The more you chat the more Du$t you collect.", "Magic Du$t Miners are NFTs that multiply the Du$t you collect.", "Only 11,111 Miners exist, but there’s no limit to how many Miners you can hold in a single wallet. ", "Each Magic Du$t Miner you hold will further multiply your $Du$t rewards!  " ]
	return(
		<div id="section-1">
			<img src={Miner5} id="Miner5" />
			<img src={Cieling} class="cieling" />
			{/**<div class="pink-box pink-flex">
				<div>
					<h1>MAGIC DUST MINERS <br/>help you mine $dust</h1>
					<h4>$dust is an ERC-721 token you can mine by chatting in any NFT community on Discord that hosts a Magic Dust Miner Bot.<br/><br/>Magic Dust Miner NFTs are a generative collection of 10,000 dust-crazed Miners. Hodl them in your wallet to multiply your $dust reward when you chat.</h4>
				</div>
				<img src={Discord} alt="discord-screen" />
			</div> **/}
				<img src={Group} id="mob-miner" />
			<div class="pink-box">
				<img src={Group} id="group"/>
				<div class='row'>
					<img src={Lineup1} alt="red-x" />
					<img src={equal} className="add-white" />
					<p>Without Miners you can only mine chat $DUST <br/>
					at the standard algorithmically generated rate.</p>
				</div>
				<div class='row'>
					<img src={Lineup1} alt="miner-1" />
					<img src={equal} className="add-white" />
					<p>But with just 1 Magic Dust Miner NFTs in your <br/>
						wallet you can mine 1x $DUST for every message<br/>
						you send in approved NFT Discord communities.
						</p>
				</div>
				<div class='row'>
					<img src={Lineup1} alt="miner-5" />
					<img src={plus} className="add-white" />
					<img src={Lineup2} alt="miner-6" />
					<img src={equal} className="add-white" />
					<p>AAAAND you can mine even more $DUST when you hold<br/>
						2 Magic Dust Miner NFTs!</p>   
				</div>
				<div class='row'>
					<img src={Lineup1} alt="miner-2" />
					<img src={plus} className="add-white" />
					<img src={Lineup2} alt="miner-3" />
					<img src={plus} className="add-white" />
					<img src={Lineup3} alt="miner-4" />
					<img src={equal} className="add-white" />
					<p>AAAAAAAAND can you mine even more $DUST <br/>
						when you hold 3 Magic Dust Miner NFTs!!! </p>
				</div> 
			</div>  
			<div className="pink-boxes-discord">
				<div className="pink-boxes-grid">
					<div className="pink-box">
						<h1>Magic Du$t Miners help you mine Du$t Tokens</h1>
					</div>
					{
						lists.map((l, i) => {
							return <div key={i} className="pink-box">
								<img src={arrow} id={`arrow-${i}`} className="arrow-curve"/>
								<ul>
									<li>{l}</li>
								</ul>
							</div>
						})
					}
				</div>
				<img className="discord-wall" src={Discord} alt="discord-screen" />
			</div>
		</div>
	)
}
export default Screen