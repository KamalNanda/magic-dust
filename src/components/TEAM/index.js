import React from 'react' 
import './style.css'  
import Man2 from '../../assets/images/miner0.png'  
import miner4 from '../../assets/images/miner4.png' 
import member1 from '../../assets/images/team/1.png'
import member2 from '../../assets/images/team/2.png'
import member3 from '../../assets/images/team/3.png'
import member4 from '../../assets/images/team/4.png'
import member5 from '../../assets/images/team/5.png'
import member6 from '../../assets/images/team/6.png'
import member7 from '../../assets/images/team/7.png'
import member8 from '../../assets/images/team/8.png'
import member9 from '../../assets/images/team/9.png'
import member10 from '../../assets/images/team/10.png'
import member11 from '../../assets/images/team/11.png'
import member12 from '../../assets/images/team/12.png'
let members = [{img: member1, name:'kurtybot'},{img: member2, name:'kurtybot'},{img: member3, name:'kurtybot'},{img: member4, name:'kurtybot'},{img: member5, name:'kurtybot'},{img: member6, name:'kurtybot'},{img: member7, name:'kurtybot'},{img: member8, name:'kurtybot'},{img: member9, name:'kurtybot'},{img: member10, name:'kurtybot'},{img: member11, name:'kurtybot'},{img: member12, name:'kurtybot'}]
const Team = () => {

	return(
		<div id="team"> 
			<img class="man22" style={{display:'block', margin:'auto'}} src={miner4} />
			<h1 className="my-5">
				TEAM
            </h1>
            <div class="pink-box">
	            <div class="team-grid">
	            	{
	            		members.map((member, i) => {
	            			return <div class="team-member">
		            			<div class="member">
		            				<img src={member.img} />
		            			</div>
	            				<p>@{member.name}</p>
	            			</div>
	            		})
	            	}
	            </div>
            </div>
			<img class="man22 mt-5" style={{display:'block', margin:'auto'}} src={Man2} />
		</div>	
	)  
}
export default Team