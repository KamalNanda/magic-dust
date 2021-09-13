import React from 'react' 
import styled from 'styled-components'

const FooterWrapper = styled.div` 
 	padding: 50px;
 	background: #fff;
 	position: relative;
 	color: #000 ; 
 	height: auto;
 	display: flex;
 	flex-direction: column;
 	align-items: center;
 	justify-content: space-evenly;
 	z-index: 9999999; 
	 .footer-flex{
	 	display: grid;
	 	grid-template-columns: repeat(3, 1fr);
	 	align-items: center;
	 	grid-gap: 20px;
	 	width: fit-content;
	 	margin: auto;
	 	margin-bottom: 20px;
	 }
	 .footer-flex img{
	 	width: 60px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
	 }
 	p{ 
	font-size: 25px;
	line-height: 100%; 
	text-align: center;
	letter-spacing: 0.05em;

 	}
	@media(max-width:  768px){
	 	padding: 20px;
		img{
			width: 40px;
		} 
		p{
			font-size: 18px;
		} 
}
`

function Footer(){
	return <FooterWrapper> 
		<p>Copyright 2021 Magic Dust Inc. All Rights Reserved.</p>
		<div className="footer-flex">
			<a href="https://www.discord.com" target="_blank">
				<img src={'assets/images/discord.svg'}  alt={"discord"} />
			</a>
			<a href="https://www.telegram.org" target="_blank">
				<img src={'assets/images/telegram.svg'} alt={"telegram"} />
			</a>
			<a href="https://www.twitter.com" target="_blank">
				<img src={'assets/images/twitter.svg'}  alt={"twitter"} />
			</a>
			
			
			
		</div>
	</FooterWrapper>
}
export default Footer