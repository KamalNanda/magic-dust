import React from 'react'  
import './style.css'  
import Accordion from 'react-bootstrap/Accordion'
import SectionHeader from '../Common/SectionHeader'
const FAQComponent = (props) => { 
	const {faq, key, number} = props 
	return   <Accordion.Item eventKey={number} className="faq-box">
			    <Accordion.Header>
				 	<strong style={{marginBottom:0}} className="d-flex align-items-center">
				 		 {faq.head} 
				 	</strong>
				 </Accordion.Header>
			    <Accordion.Body>
	      			<ul>
				 		{
				 			faq.li.map((l, j) => {
				 				return <li  dangerouslySetInnerHTML={ { __html: l } } key={j}></li>
				 			})
				 		}
				 	</ul> 
				 	{
			 			faq.p?.map((p, i) => {
			 				return <p key={i}>{p}</p>
			 			})
			 		}
			    </Accordion.Body>
			  </Accordion.Item>  
}
const FAQ = () => {
	const faqs = [{head: 'What is the $DUST Token?', li: ['$DUST is a cryptocurrency that is currently available on two blockchains – WAX and Polygon.']},
		{head: 'How do you get $DUST?', li: ['$DUST is “mined” by chatting in $DUST enabled chat rooms.', 'Currently $DUST is enabled on Telegram and Discord.','For every message you send in a $DUST enabled chat room you earn 0.5 $DUST.'], p: ['The more active you are in a community, the more you are rewarded.']},
		{head: 'How do $DUST Miners work?', li: ['$DUST MINERS multiply your $DUST reward per message when you hodl them in your wallet.', 'Hold one $DUST MINER in your wallet you will now receive 1 $DUST for every message that you post!', 'Hold two $DUST MINERS and get 1.5 $DUST per message!!', 'Hold ten $DUST MINERS and get 5 $DUST per message!!!'], p: ['The best part – You do not have to do anything other than hold these cute little guys in your wallet to','be rewarded automatically whenever you chat in a $DUST enabled chat community.']},
		{head: 'What can i do with $DUST?', li: ['<strong>Spend it!</strong> More digital and physical items are going on sale for the $DUST community here on our website.','<strong>Sell it!</strong> There will be trading pairs for DUST soon on sites such as SushiSwap and QuickSwap.','<strong>HODL it!</strong> Magic DU$T is only 1 year old on the WAX blockchain and brand new on the Polygon blockchain.']}
	]
	return(
		<div id="faq">
			<SectionHeader className="my-5">FAQ</SectionHeader>
			<Accordion flush>
			{
				faqs.map((faq, index) => { 
					return <FAQComponent key={index} number={index} faq={faq} />
				})
			}
			</Accordion> 
		</div>
	)
}
export default FAQ 

 
  




 
 