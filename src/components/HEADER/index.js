import React from 'react';
import './style.css';
import discord from "../../assets/images/discord.svg"
import twitter from "../../assets/images/twitter.svg"
import telegram from "../../assets/images/telegram.svg"
import logo from "../../assets/images/header-logo.png"
const MobileHeader = () => { 
	return ( 
		<div id="mobile-nav">
			<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
				<img style={{width:'160px'}} class="header-logo" src={logo} alt="logo" />  
					<span></span>
			</div> 
		</div> 
  	);
}

const DesktopHeader = () => { 
	return ( 
		<div class="header" id="header"> 
			<img class="header-logo" src={logo} alt="logo" /> 
			<div class="social-holder">
						<img onClick={() => window.open('https://discord.gg/U358VVND')} src={discord}  alt={"discord"} />
						<img onClick={() => window.open('https://t.me/joinchat/DOuJ0Mgk9rAxNDgx')} src={telegram} alt={"telegram"} />
						<img onClick={() => window.open('https://twitter.com/dustismagic?s=20')} src={twitter}  alt={"twitter"} />
			</div>
		</div> 
  	);
}
const Header = () => {
  return (
    <>
		<DesktopHeader />
		<MobileHeader />
    </>
  );
}

export default Header;
