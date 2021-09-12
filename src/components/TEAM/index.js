import React from 'react' 
import Wrapper from './styled'
import SectionHeader from '../Common/SectionHeader'
import PinkBoxBase from '../Common/PinkBox'
import styled from 'styled-components'
const TeamPinkBox = styled(PinkBoxBase)`
	padding-top: 40px;
	padding-bottom: 40px;
	background: #650C85;
	border: 6px solid #F36EFF !important;
	@media (max-width:  1360px){   
		padding: 0; 
	}
`

let members = [{img: process.env.PUBLIC_URL + '/assets/images/team/1.png', name:'kurtybot'},{img: process.env.PUBLIC_URL + '/assets/images/team/2.png', name:'kurtybot'},{img: process.env.PUBLIC_URL + '/assets/images/team/3.png', name:'kurtybot'},{img: process.env.PUBLIC_URL + '/assets/images/team/4.png', name:'kurtybot'},{img: process.env.PUBLIC_URL + '/assets/images/team/5.png', name:'kurtybot'},{img: process.env.PUBLIC_URL + '/assets/images/team/6.png', name:'kurtybot'},{img: process.env.PUBLIC_URL + '/assets/images/team/7.png', name:'kurtybot'},{img: process.env.PUBLIC_URL + '/assets/images/team/8.png', name:'kurtybot'},{img: process.env.PUBLIC_URL + '/assets/images/team/9.png', name:'kurtybot'},{img: process.env.PUBLIC_URL + '/assets/images/team/10.png', name:'kurtybot'},{img: process.env.PUBLIC_URL + '/assets/images/team/11.png', name:'kurtybot'},{img: process.env.PUBLIC_URL + '/assets/images/team/12.png', name:'kurtybot'}]
const Team = () => {

	return(
		<Wrapper>
		<div id="team"> 
			<img class="man22" style={{display:'block', margin:'auto'}} src={process.env.PUBLIC_URL + '/assets/images/miner4.png'} />
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
			<img class="man22 mt-5" className="d-block mx-auto" src={process.env.PUBLIC_URL + '/assets/images/miner0.png'} />
		</div>	
		</Wrapper>
	)  
}
export default Team