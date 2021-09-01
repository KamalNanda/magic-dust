import React from 'react'
import './style.css'
import discord from "../../assets/images/discord.svg"
import twitter from "../../assets/images/twitter.svg"
import telegram from "../../assets/images/telegram.svg"

function Footer(){
	return <div className="footer">
		<p>Copyright 2021 Magic Dust Inc. All Rights Reserved so fuck off.</p>
		<div className="footer-flex">
			<img onClick={() => window.open('https://www.discord.com')} src={discord}  alt={"discord"} />
			<img onClick={() => window.open('https://www.telegram.org')} src={telegram} alt={"telegram"} />
			<img onClick={() => window.open('https://www.twitter.com')} src={twitter}  alt={"twitter"} />
		</div>
	</div>
}
export default Footer