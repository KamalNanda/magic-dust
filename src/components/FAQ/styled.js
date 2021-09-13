import styled from 'styled-components'
import arrow from './arrow-down.png'
const Wrapper = styled.div`
 
.accordion-button::after { 
    background-image: url(${arrow}); 
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
}
.accordion-button:not(.collapsed)::after {
    background-image: url(${arrow});
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
    transform: rotate(
-180deg);
}
.accordion-header,.accordion-flush .accordion-item,.accordion-button {
    background: transparent;
}
.accordion-item{
    border: 6px solid #FF06D7 !important;
    margin-bottom: 40px !important;
    background: #8806C9 !important;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
    border-radius: 6px !important; 
}
#faq  h2 > button > strong{
	color: white !important;  
}
.accordion-button:not(.collapsed) { 
    background-color: transparent; 
	color: white !important; 
     box-shadow: unset; 
}
#faq{
    width: 50%;
    margin: auto;
    overflow: hidden !important;
    } 	
.faq-box strong{
	font-size: 40px;
}
.faq-box li, .faq-box p{
    font-family: 'Emtype Foundry Regular';
	font-size: 1rem;
	margin-left: 40px;
	color: white;
	font-weight: 400;
	margin-bottom: 10px;
}
.faq-box li strong{
    font-family: 'Emtype Foundry';
	font-weight: 900;
	font-size: 1.25rem;
}
.faq-box img{
	border-radius: 100%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@media (max-width:  1780px){  
	#faq img{
		width: 100%;
	}
	#faq .pink-box{
		/*width: 60% !important;*/
	}
}
@media (max-width:  1280px){ 
	.faq-box strong{
		font-size: 30px;
	}
	.faq-box li, .faq-box p, .faq-box li strong{
		font-size: 20px;
		line-height: 1;
	} 
	#faq .pink-box{
		padding: 10px 20px;
		/*width: 70% !important;*/
	} 
}
@media (max-width:  786px){ 
 #team > img.man22{
 	width: 90%;
 	margin:auto
 }
#faq, #team {
		width: 90% !important;
	} #contact form {
		width: 90% !important;
	}

.faq-box strong{
	font-size: 40px;
} 
.faq-box li, .faq-box p{ 
	font-size: 1.2rem; 
	font-weight: 400;
	margin-left: 20px; 
}
}
`
export default Wrapper