import React from 'react';
import './style.css';
import discord from "../../assets/images/discord.svg"
import twitter from "../../assets/images/twitter.svg"
import telegram from "../../assets/images/telegram.svg"
import logo from "../../assets/images/header-logo.png"
const MobileHeader = () => {
	const [isShown, setShown] = React.useState(false)
	const [active, setActive] = React.useState('nav-home')
	// React.useEffect(() =>{
	// 	document.getElementById(active).classList.add('active')
	// })
	// const onLinkClick = (id) => {
	// 	document.getElementById(active).classList.remove('active')
	// 	document.getElementById(id).classList.add('active')
	// 	setActive(id)
	// }
	const toggleDropDown = () => {
		setShown(!isShown)
	}
	return ( 
		<div id="mobile-nav">
			<img alt="ham" onClick={toggleDropDown} id="ham" src={isShown ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/1200px-VisualEditor_-_Icon_-_Close_-_white.svg.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"} />
			{
				isShown && <ul>
			    {/* <li><a onClick={() => onLinkClick("nav-home")} id="nav-home" href="#home" class="active">HOME</a></li>
			    <li><a onClick={() => onLinkClick("nav-section-1")} id="nav-section-1" href="#section-1">Miners</a></li>
			    <li><a onClick={() => onLinkClick("nav-section-2")} id="nav-section-2" href="#section-2">$Dust Token</a></li>
			    <li><a onClick={() => onLinkClick("nav-section-3")} id="nav-section-3" href="#section-3">Community</a></li>
			    <li><a onClick={() => onLinkClick("nav-team")} id="nav-team" href="#team">Team</a></li> 
			    <li><a onClick={() => onLinkClick("nav-roadmap")} id="nav-roadmap" href="#roadmap">Roadmap</a></li> 
			    <li><a onClick={() => onLinkClick("nav-faq")} id="nav-faq" href="#faq">FAQ</a></li>
			    <li><a onClick={() => onLinkClick("nav-contact")} id="nav-contact" href="#contact">CONTACT</a></li> */}
			    <li> 
					<div class="social-holder">
						<img onClick={() => window.open('https://www.discord.com')} src={discord}  alt={"discord"} />
						<img onClick={() => window.open('https://www.telegram.org')} src={telegram} alt={"telegram"} />
						<img onClick={() => window.open('https://www.twitter.com')} src={twitter}  alt={"twitter"} />
					</div>
			    </li>
			</ul>
			}
		</div> 
  	);
}

const DesktopHeader = () => {
	const [active, setActive] = React.useState('nav-home')
	// React.useEffect(() =>{
	// 	document.getElementById(active).classList.add('active')
	// })
	// const onLinkClick = (id) => {
	// 	document.getElementById(active).classList.remove('active')
	// 	document.getElementById(id).classList.add('active')
	// 	setActive(id)
	// } 
	return ( 
		<div class="header" id="header"> 
			<img class="header-logo" src={logo} alt="logo" />
			{/* <ul>
			    <li><a onClick={() => onLinkClick("nav-home")} id="nav-home" href="#home" class="active">HOME</a></li>
			    <li><a onClick={() => onLinkClick("nav-section-1")} id="nav-section-1" href="#section-1">Miners</a></li>
			    <li><a onClick={() => onLinkClick("nav-section-2")} id="nav-section-2" href="#section-2">$Dust Token</a></li>
			    <li><a onClick={() => onLinkClick("nav-section-3")} id="nav-section-3" href="#section-3">Community</a></li>
			    <li><a onClick={() => onLinkClick("nav-team")} id="nav-team" href="#team">Team</a></li> 
			    <li><a onClick={() => onLinkClick("nav-roadmap")} id="nav-roadmap" href="#roadmap">Roadmap</a></li> 
			    <li><a onClick={() => onLinkClick("nav-faq")} id="nav-faq" href="#faq">FAQ</a></li>
			    <li><a onClick={() => onLinkClick("nav-contact")} id="nav-contact" href="#contact">CONTACT</a></li>
			</ul> */}
			<div class="social-holder">
						<img onClick={() => window.open('https://www.discord.com')} src={discord}  alt={"discord"} />
						<img onClick={() => window.open('https://www.telegram.org')} src={telegram} alt={"telegram"} />
						<img onClick={() => window.open('https://www.twitter.com')} src={twitter}  alt={"twitter"} />
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
