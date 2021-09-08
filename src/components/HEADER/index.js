import React from 'react';
import './style.css';
import discord from "../../assets/images/discord.svg"
import twitter from "../../assets/images/twitter.svg"
import telegram from "../../assets/images/telegram.svg"
import logo from "../../assets/images/header-logo.png"
const MobileHeader = () => {
	const [isShown, setShown] = React.useState(false) 
	const [active, setActive] = React.useState('nav-home')
	React.useEffect(() =>{
		document.getElementById(active).classList.add('active')
	})
	const onLinkClick = (id) => {
		document.getElementById(active).classList.remove('active')
		document.getElementById(id).classList.add('active')
		setActive(id)
	}
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
					<li><a onClick={() => onLinkClick("nav-home")} id="nav-home" href="#home" class="active">Home</a></li>
			    <li><a onClick={() => onLinkClick("nav-section-1")} id="nav-section-1" href="#section-1">$Dust Token</a></li>
			    <li><a onClick={() => onLinkClick("nav-section-2")} id="nav-section-2" href="#section-2">Community</a></li> 
			    <li><a onClick={() => onLinkClick("nav-roadmap")} id="roadmap" href="#road-map">Roadmap</a></li>
			    <li><a onClick={() => onLinkClick("nav-faq")} id="nav-faq" href="#faq">FAQ</a></li>
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
	const [active, setActive] = React.useState('nav-home')
	React.useEffect(() =>{
		document.getElementById(active).classList.add('active')
	})
	const onLinkClick = (id) => {
		document.getElementById(active).classList.remove('active')
		document.getElementById(id).classList.add('active')
		setActive(id)
	} 
	return ( 
		<div class="header" id="header"> 
			<div className="header-logo-cont">
				<img class="header-logo" src={logo} alt="logo" /> 
			</div>
			 <ul>
					<li><a onClick={() => onLinkClick("nav-home")} id="nav-home" href="#home" class="active">Home</a></li>
					<li><a style={{color:"#91e01f"}}>|</a></li>
			    <li><a onClick={() => onLinkClick("nav-section-1")} id="nav-section-1" href="#section-1">$Dust Token</a></li>
			    <li><a style={{color:"#91e01f"}}>|</a></li>
			    <li><a onClick={() => onLinkClick("nav-section-2")} id="nav-section-2" href="#section-2">Community</a></li>
			    <li><a style={{color:"#91e01f"}}>|</a></li>
			    {/**<li><a onClick={() => onLinkClick("nav-section-3")} id="nav-section-3" href="#section-3">Community</a></li>
			    <li><a onClick={() => onLinkClick("nav-team")} id="nav-team" href="#team">Team</a></li>  **/}
			    <li><a onClick={() => onLinkClick("nav-roadmap")} id="nav-roadmap" href="#road-map">Roadmap</a></li>
			    <li><a style={{color:"#91e01f"}}>|</a></li>
			    <li><a onClick={() => onLinkClick("nav-faq")} id="nav-faq" href="#faq">FAQ</a></li>
			    <li><a style={{color:"#91e01f"}}>|</a></li>
			    <li><a onClick={() => onLinkClick("nav-contact")} id="nav-contact" href="#contact">Inventory</a></li>
			    {/**<li><a onClick={() => onLinkClick("nav-contact")} id="nav-contact" href="#footer">Contact</a></li>**/}
			</ul>
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
