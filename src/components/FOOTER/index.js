import React from 'react'
import './style.css'
import discord from "../../assets/images/discord.svg"
import twitter from "../../assets/images/twitter.svg"
import telegram from "../../assets/images/telegram.svg"

function Footer(){
	return <div className="footer">
		<div className="footer-flex">
			<img onClick={() => window.open('https://discord.gg/U358VVND')} src={discord}  alt={"discord"} />
			<img onClick={() => window.open('https://t.me/joinchat/DOuJ0Mgk9rAxNDgx')} src={telegram} alt={"telegram"} />
			<img onClick={() => window.open('https://twitter.com/dustismagic?s=20')} src={twitter}  alt={"twitter"} />
		</div>
		<p>Copyright 2021 Magic Dust Inc. All Rights Reserved so fuck off.</p>
	</div>
}
export default Footer
