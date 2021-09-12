import React from 'react'  
import PinkBoxBase from '../Common/PinkBox' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import styled from 'styled-components'
import Wrapper from './styled.js'
const PinkBox = styled(PinkBoxBase)`
    padding: 20px;
    width: 100%; 
    margin: auto;
    display: flex ; 
    align-items: center ;
    margin-bottom: 20px; 
	h1{
	    text-align: center;  
	    line-height: 45px; 
	    font-size:45px; 
	    color: #FFF200;
	    text-shadow:
	   -2px -2px 0 #650C85,  
	    2px -2px 0 #650C85,
	    -2px 2px 0 #650C85,
	     2px 2px 0 #650C85; 
	}
	p{
	    font-size: 20px;
	    line-height: 1; 
	    color: #FBF5E3;
	    letter-spacing: 0px; 
	    margin-bottom: 0;
	    font-weight: 900;
	    font-size: 25px;
	    line-height: 125%; 
	    color: #FBF5E3; 
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	    width: calc(100% - 50px);
	} 
	img{
	    width: 50px;
	    margin-right: 10px;
	    height: 50px;
	} 
	.heart{
	    width: 45px;
	    height: 54px;
	}
	@media (max-width : 1780px){
		.d-flex p{
        	font-size: 20px;
    	}
	}
	@media (max-width: 1660px){
		.d-flex p{
        	font-size: 18px;
    	}
	    h1{
	        font-size: 32px;
	    }  
	}
	media (max-width: 1360px){
        padding: 10px;
    	h1{
	        font-size: 30px;
	        line-height: 30px;
   		}  
	} 
	@media (max-width : 1280px){ 
        padding: 10px;
        h1{
		    text-align: center;  
		    line-height: 28px; 
		    font-size:28px;  
		}
		.d-flex{
	        margin-bottom: 10px;
	    }
	    .d-flex p{
	        font-size: 14px;
	    }
    }
	@media (max-width: 1024px){ 
	    .d-flex p{
	        font-size: 14px;
	    } 
	}

`

const Screen = () => {
	const list1=['When you hodl a Magic Du$t Miner in your NFT wallet every chat, like, emoji and so on is rewarded with Du$t!','Magic Du$t Miners are NFTs that multiply the Du$t you collect. ']
	const list2=['Du$t is a pretty sweet ERC-20 token based on the Wax and Polygon blockchains. ','Each Magic Du$t Miner you hold will further multiply your $Du$t rewards!  ','You can mine $Dust by chatting in any NFT community on Discord that hosts a Magic Du$t Miner Bot.','Only 11,111 Miners exist, but there’s no limit to how many Miners you can hold in a single wallet. ']
	
	return(<Wrapper>
			<img src={process.env.PUBLIC_URL +'/assets/images/CAVE CIELING FRONT.png'} class="cieling" /> 
		<div id="section-1"> 
				<Row>
					<Col lg={12}>
						<PinkBox>
							<h1>Magic Du$t Miners are hardworking NFTs that mine Du$t Tokens for you when you chat in the Magic Dust Discord Community</h1>
						</PinkBox>		
					</Col>
					{
						list1.map((l, i) => {
							return <Col lg={6} md={6} sm={12}>
										<PinkBox key={i} > 
											<div class="d-flex align-items-center"><img src={process.env.PUBLIC_URL +'/assets/images/heart.png'} className="heart"/><p>{l}</p></div>
										</PinkBox>
									</Col>
						})
					}
					<Row className="justify-content-between align-items-center my-3">
						<Col lg={12} md={12} sm={12}>
							<img style={{width:'100%'}} src={process.env.PUBLIC_URL +'/assets/images/s2-left.png'} alt="s2l" />
						</Col> 
					</Row>
					{
						list2.map((l, i) => {
							return <Col lg={6} md={6} sm={12}>
										<PinkBox key={i} > 
											<div class="d-flex align-items-center"><img src={process.env.PUBLIC_URL +'/assets/images/heart.png'} className="heart"/><p>{l}</p></div>
										</PinkBox>
									</Col>
						})
					}
					
				</Row> 

		</div>
	</Wrapper>)
}
export default Screen