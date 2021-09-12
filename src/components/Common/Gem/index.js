import styled from 'styled-components'

const StyledGem = styled.div`
	img{
	    width: 100%; 
	    margin: 0 auto 20px 0;
	} 
	p{
	    font-weight: 900;
	    font-size: 32px;
	    line-height: 80%;
	    color: #FBF5E3;
	    font-family: "Emtype Foundry Regular";
	}
	.date{
	    color: #FCCF1E !important;
	    letter-spacing: 0.03em !important;
	}
	@media (max-width:  1760px){ 
	    p{
	        font-size: 28px;
	    }
	}
`
const GemComponent = ({upcoming, key}) => {
	return <StyledGem>
				<img src={upcoming.img} alt={`gem-${key}`} />
				<p>{upcoming.text}</p>
			</StyledGem>
}
export default GemComponent