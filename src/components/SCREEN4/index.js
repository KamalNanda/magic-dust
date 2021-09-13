import React from 'react' 
import Wrapper from './styled.js'  
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'  
import SocialButton from '../Common/CommunityButton'
const Screen = () => {
const socials = [{img:'/assets/images/discord.png', text: 'Discord'}, {img:'/assets/images/telegram.png', text: 'Telegram'}, {img:'/assets/images/twitter.png', text: 'Twitter'}, {img:'/assets/images/linkedin.png', text: 'Linkedin'}]
	return(<Wrapper>
		<div id="section-3">
         	<h1>FIND YOUR DUSTY FRIENDS</h1>
			<Row className="align-content-between justify-content-between">
				<Col lg={6} md={6} sm={12} className="sec-2-flex">
					<p>Want to host an official <br/>
			            <span>Magic $dust Mine</span>  in your  <br/>
			            Discord or Telegram community?  <br/>
						Tell us about  <br/>
						your community!
			        </p>
			        <a href="https://airtable.com/shryvECq1bYKXgiXI" target="_blank"><button className="gimme-btn">GIMME DUST!</button></a>
				</Col>
				<Col lg={6} md={6} sm={12} className="green-boxes align-content-between justify-content-between d-flex flex-column">
					{
						socials.map((social, i) => {
							return <SocialButton as="a" href={`https://www.${social.text}.${social.text === 'Telegram' ? 'org' : 'com'}`} target="_blank" >
				                <img src={social.img} alt={social.text} />
				                Magic Dust on {`${social.text}`} 
					        </SocialButton>
						})	
					} 
		        </Col>
			</Row> 
			<img src={process.env.PUBLIC_URL + '/assets/images/miner2.png'} style={{display:'block', margin:'auto'}}/>
		</div>	
	</Wrapper>)  
}
export default Screen