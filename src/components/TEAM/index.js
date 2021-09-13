import React from 'react' 
import Wrapper from './styled'
import SectionHeader from '../Common/SectionHeader'
import TeamPinkBox from './PinkBox'
let members = [{img: '/assets/images/team/1.png', name:'kurtybot'},{img: '/assets/images/team/2.png', name:'kurtybot'},{img: '/assets/images/team/3.png', name:'kurtybot'},{img: '/assets/images/team/4.png', name:'kurtybot'},{img: '/assets/images/team/5.png', name:'kurtybot'},{img: '/assets/images/team/6.png', name:'kurtybot'},{img: '/assets/images/team/7.png', name:'kurtybot'},{img: '/assets/images/team/8.png', name:'kurtybot'},{img: '/assets/images/team/9.png', name:'kurtybot'},{img: '/assets/images/team/10.png', name:'kurtybot'},{img: '/assets/images/team/11.png', name:'kurtybot'},{img: '/assets/images/team/12.png', name:'kurtybot'}]
const Team = () => {

	return(
		<Wrapper>
		<div id="team"> 
			<img class="man22" style={{display:'block', margin:'auto'}} src={'/assets/images/miner4.png'} />
			<SectionHeader className="my-5">
				TEAM
            </SectionHeader>
            <TeamPinkBox>
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
            </TeamPinkBox>
			<img class="man22 mt-5" className="d-block mx-auto" src={'/assets/images/miner0.png'} />
		</div>	
		</Wrapper>
	)  
}
export default Team