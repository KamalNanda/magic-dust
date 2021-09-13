import React from 'react';
import Wrapper from './styled.js'
const SocialLinks = () => {
	return <div class="social-holder">
						<img onClick={() => window.open('https://discord.gg/U358VVND')} src={'/assets/images/discord.svg'}  alt={"discord"} />
						<img onClick={() => window.open('https://t.me/joinchat/DOuJ0Mgk9rAxNDgx')} src={'/assets/images/telegram.svg'} alt={"telegram"} />
						<img onClick={() => window.open('https://twitter.com/dustismagic?s=20')} src={'/assets/images/twitter.svg'}  alt={"twitter"} />
					</div>
}
const NavLinks = ({active, onLinkClick}) => {
	return <ul>
					<li><a onClick={() => onLinkClick("nav-home")} id="nav-home" href="#home" className={active === 'nav-home'? 'active' : ''}>Home</a></li>
					<li className="green-seperator"><a>|</a></li>
			    <li><a onClick={() => onLinkClick("nav-section-1")} id="nav-section-1" href="#section-1"  className={active === 'nav-section-1'? 'active' : ''}>$Dust Token</a></li>
			    <li className="green-seperator"><a>|</a></li>
			    <li><a onClick={() => onLinkClick("nav-section-2")} id="nav-section-2" href="#section-3"  className={active === 'nav-section-2'? 'active' : ''}>Community</a></li>
			    <li className="green-seperator"><a>|</a></li> 
			    <li><a onClick={() => onLinkClick("nav-roadmap")} id="nav-roadmap" href="#roadmap"  className={active === 'nav-roadmap'? 'active' : ''}>Roadmap</a></li>
			    <li className="green-seperator"><a>|</a></li>
			    <li><a onClick={() => onLinkClick("nav-faq")} id="nav-faq" href="#faq"  className={active === 'nav-faq'? 'active' : ''}>FAQ</a></li>
			    <li className="green-seperator"><a>|</a></li>
			    <li><a onClick={() => onLinkClick("nav-contact")} id="nav-contact" href="#contact"  className={active === 'nav-contact'? 'active' : ''}>Inventory</a></li> 
			</ul>
}
const MobileHeader = ({active, onLinkClick}) => {
	const [isShown, setShown] = React.useState(false)  
	const toggleDropDown = () => {
		setShown(!isShown)
	}
	return ( 
		<div id="mobile-nav">
			<div style={{width:'100%'}} class="d-flex justify-content-between align-items-center">
				<img style={{width:'160px'}} class="header-logo" src={'/assets/images/header-logo.png'} alt="logo" /> 
				<img alt="ham" onClick={toggleDropDown} id="ham" src={isShown ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/1200px-VisualEditor_-_Icon_-_Close_-_white.svg.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"} />
			</div>
			
			{
				isShown && <><NavLinks  active={active} onLinkClick={onLinkClick} /> <ul><li><SocialLinks /></li></ul> </>
			}
			
		</div> 
  	);
}

const DesktopHeader = ({active, onLinkClick}) => {  
	return ( 
		<div class="header" id="header"> 
			<div className="header-logo-cont">
				<img class="header-logo" src={'/assets/images/header-logo.png'} alt="logo" /> 
			</div>
			 <NavLinks  active={active} onLinkClick={onLinkClick} />
			<SocialLinks />
		</div> 
  	);
}
const Header = () => {
	const [active, setActive] = React.useState('nav-home')
	const onLinkClick = (id) => { 
		setActive(id)
	} 
  return (
    <Wrapper>
		<DesktopHeader active={active} onLinkClick={(id) => onLinkClick(id)} />
		<MobileHeader active={active} onLinkClick={(id) => onLinkClick(id)} />
    </Wrapper>
  );
}

export default Header;
