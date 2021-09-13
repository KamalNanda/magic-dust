
import styled from 'styled-components'

const StyledTrophy = styled.div`
	img{
	    width: 100%; 
	    margin: 0 auto 20px 0;
	} 
	p{
	    font-family: "Emtype Foundry Regular";
	    color: #FBF5E3;
	    margin: 0 auto;
	    font-size: 26px;
	    line-height: 37px; 
	}
	.date{
	    color: #FCCF1E !important;
	    letter-spacing: 0.03em !important;
	}
	@media (max-width:  786px){ 
	    img{
	        width: 50%;
	        margin: 15px auto;
	        display:block
	    }
	    p{
	        width: 70%;
			font-size: 32px;
	        margin: 0 auto;
	    }
	}   
`
const TrophyComponent = ({trophy, key}) => {
	return <StyledTrophy>
		<img className="mt-3" src={trophy.img} alt={`gem-${key}`} />
		<div>
			<p>{trophy.text}</p>
			<p className="date">{trophy.date}</p>
		</div> 
	</StyledTrophy>
}
export default TrophyComponent