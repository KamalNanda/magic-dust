import React from 'react' 
import './style.css' 
import Man from '../../assets/images/man-half.png' 
import Man2 from '../../assets/images/man22-wider.png'  
let teamLi = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const Team = () => {

	return(
		<div id="team"> 
			<h1>
				TEAM
            </h1>
            <div class="pink-box">
	            <div class="team-grid">
	            	{
	            		teamLi.map((t, i) => {
	            			return <div>
	            				<img src={Man} />
	            			</div>
	            		})
	            	}
	            </div>
            </div>
			<img style={{display:'block', margin:'auto'}} src={Man2} />
		</div>	
	)  
}
export default Team