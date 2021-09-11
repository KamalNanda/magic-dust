import React from 'react'
import './style.css' 

function Footer(){
	return <div id="footer" className="footer">
		<div className="clo udy"></div>
		<p>Copyright 2021 Magic Dust Inc. All Rights Reserved.</p>
		<div className="footer-flex">
			<a href="https://www.discord.com" target="_blank">
				<img src={process.env.PUBLIC_URL+  'assets/images/discord.svg'}  alt={"discord"} />
			</a>
			<a href="https://www.telegram.org" target="_blank">
				<img src={process.env.PUBLIC_URL+  'assets/images/telegram.svg'} alt={"telegram"} />
			</a>
			<a href="https://www.twitter.com" target="_blank">
				<img src={process.env.PUBLIC_URL+  'assets/images/twitter.svg'}  alt={"twitter"} />
			</a>
			
			
			
		</div>
	</div>
}
export default Footer