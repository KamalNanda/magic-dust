import React from 'react';
import './style.css';
import discord from "../../assets/images/discord.svg"
import twitter from "../../assets/images/twitter.svg"
import telegram from "../../assets/images/telegram.svg"
import logo from "../../assets/images/header-logo.png"
const MobileHeader = () => {
	const [isShown, setShown] = React.useState(false) 
	const toggleDropDown = () => {
		setShown(!isShown)
	}
	return ( 
		<div id="mobile-nav">
			<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
				<img style={{width:'160px'}} class="header-logo" src={logo} alt="logo" /> 
				<img alt="ham" onClick={toggleDropDown} id="ham" src={isShown ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/1200px-VisualEditor_-_Icon_-_Close_-_white.svg.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"} />
			</div>
			
			{
				isShown && <ul> 
			    <li> 
					<div class="social-holder">
						<img onClick={() => window.open('https://discord.gg/U358VVND')} src={discord}  alt={"discord"} />
						<img onClick={() => window.open('https://t.me/joinchat/DOuJ0Mgk9rAxNDgx')} src={telegram} alt={"telegram"} />
						<img onClick={() => window.open('https://twitter.com/dustismagic?s=20')} src={twitter}  alt={"twitter"} />
					</div>
			    </li>
			</ul>
			}
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
