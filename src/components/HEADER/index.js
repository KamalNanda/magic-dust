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
			<img alt="ham" onClick={toggleDropDown} id="ham" src={isShown ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/1200px-VisualEditor_-_Icon_-_Close_-_white.svg.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"} />
			{
				isShown && <ul>
			    <li><a href="#home" class="active">HOME</a></li>
			    <li><a href="#section-1">Miners</a></li>
			    <li><a href="#section-2">$Dust Token</a></li>
			    <li><a href="#section-3">Community</a></li>
			    <li><a href="#roadmap">Roadmap</a></li> 
			    <li><a href="#faq">FAQ</a></li>
			    <li><a href="#contact">CONTACT</a></li>
			    <li> 
					<div class="social-holder">
						<img src={discord}  alt={"discord"} />
						<img src={telegram} alt={"telegram"} />
						<img src={twitter}  alt={"twitter"} />
					</div>
			    </li>
			</ul>
			}
		</div> 
  	);
}

const DesktopHeader = () => {
	return ( 
		<div class="header"> 
			<img src={logo} alt="logo" />
			<ul>
			    <li><a href="#home" class="active">HOME</a></li>
			    <li><a href="#section-1">Miners</a></li>
			    <li><a href="#section-2">$Dust Token</a></li>
			    <li><a href="#section-3">Community</a></li>
			    <li><a href="#roadmap">Roadmap</a></li> 
			    <li><a href="#faq">FAQ</a></li>
			    <li><a href="#contact">CONTACT</a></li>
			</ul>
			<div class="social-holder">
					<img src={discord}  alt={"discord"} />
					<img src={telegram} alt={"telegram"} />
					<img src={twitter}  alt={"twitter"} />
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
