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
import plus from '../../assets/images/+.png'
import equal from '../../assets/images/=.png'
import arrow from '../../assets/images/arrow-curve.png'
import Discord from '../../assets/images/DiscordScreen.png' 
const Screen = () => {
	const lists = ["Du$t is a token you can mine by chatting in any NFT community on Discord that hosts a Magic Du$t Miner Bot.", "The more you chat the more Du$t you collect.", "Magic Du$t Miners are NFTs that multiply the Du$t you collect.", "Only 11,111 Miners exist, but there’s no limit to how many Miners you can hold in a single wallet. ", "Each Magic Du$t Miner you hold will further multiply your $Du$t rewards!  " ]
	const minersList = [{img: [Lineup1] , text: 'Without Miners you can only mine chat $DUST <br/>at the standard algorithmically generated rate.'}, 
		{img: [Lineup1] , text: 'But with just 1 Magic Dust Miner NFTs in your <br/>wallet you can mine 1x $DUST for every message<br/>you send in approved NFT Discord communities.'},
		{img: [Lineup1, plus, Lineup2], text: 'AAAAND you can mine even more $DUST when you hold<br/>2 Magic Dust Miner NFTs!'},
		{img: [Lineup1, plus, Lineup2, plus, Lineup3], text: 'AAAAAAAAND can you mine even more $DUST <br/>when you hold 3 Magic Dust Miner NFTs!!! '}
	]
	return(<div style={{position:'relative'}}>
			<img src={Cieling} class="cieling" /> 
		<div id="section-1">
				<img src={Group} id="mob-miner" />
				<PinkBox> 
					<img src={Group} id="group"/>
					{
						minersList.map((mine, i) => {
							return <div key={i} class='d-flex align-items-center'>
										{
											mine.img.map((img, j) =>{
												return <img key={j} alt={`miner-${i}-${j}`} src={img} className={ img == plus ? 'add-white' : ''} />
											})
										}
										<img src={equal} className="add-white" /> 
										<p  dangerouslySetInnerHTML={ { __html: mine.text } }></p>
									</div> 
						})
					} 
				</PinkBox> 
			<div className="pink-boxes-discord">   
				<div className="pink-boxes-grid">
					<div className="pink-box">
						<h1>Magic Du$t Miners help you mine Du$t Tokens</h1>
					</div>
					{
						lists.map((l, i) => {
							return <PinkBox key={i} >
								{/**<img src={arrow} id={`arrow-${i}`} className="arrow-curve"/>**/}
								<ul>
									<li>{l}</li>
								</ul>
							</PinkBox>
						})
					}
				</div>
				<img className="discord-wall" src={Discord} alt="discord-screen" />
			</div>
		</div>
	</div>)
}
export default Screen