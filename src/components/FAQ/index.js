import React from 'react' 
import arrow from '../../assets/images/arrow-down.png'
import './style.css'  

const FAQComponent = (faq) => {
	const [isShown, setShown] = React.useState(false)
	return <div class="pink-box">
				<div class="faq-box">
				 	<strong style={{marginBottom:0}} className="d-flex align-items-center">
				 		 {faq.head} < img className={isShown ? 'arrow-down ms-auto' : 'ms-auto'} onClick={() => setShown(!isShown)} src={arrow} style={{cursor:'pointer',marginRight:'10px',marginBottom:0,width: '40px', height:'40px'}}/> 
				 	</strong>
				 	{
				 		isShown && <>
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
				 		</>
				 	}
				</div>  
			</div>  
}
const FAQ = () => {
	const faqs = [{head: 'What is the $DUST Token?', li: ['$DUST is a cryptocurrency that is currently available on two blockchains – WAX and Polygon.']},
		{head: 'How do you get $DUST?', li: ['$DUST is “mined” by chatting in $DUST enabled chat rooms.', 'Currently $DUST is enabled on Telegram and Discord.','For every message you send in a $DUST enabled chat room you earn 0.5 $DUST.'], p: ['The more active you are in a community, the more you are rewarded.']},
		{head: 'How do $DUST Miners work?', li: ['$DUST MINERS multiply your $DUST reward per message when you hodl them in your wallet.', 'Hold one $DUST MINER in your wallet you will now receive 1 $DUST for every message that you post!', 'Hold two $DUST MINERS and get 1.5 $DUST per message!!', 'Hold ten $DUST MINERS and get 5 $DUST per message!!!'], p: ['The best part – You do not have to do anything other than hold these cute little guys in your wallet to','be rewarded automatically whenever you chat in a $DUST enabled chat community.']},
		{head: 'What can i do with $DUST?', li: ['<strong>Spend it!</strong> More digital and physical items are going on sale for the $DUST community here on our website.','<strong>Sell it!</strong> There will be trading pairs for DUST soon on sites such as SushiSwap and QuickSwap.','<strong>HODL it!</strong> Magic DU$T is only 1 year old on the WAX blockchain and brand new on the Polygon blockchain.']}
	]
	return(
		<div id="faq">
			<h1 className="my-5">FAQ</h1>
			{
				faqs.map((faq, i) => {
					return <FAQComponent key={i} {...faq} />
				})
			}
			     
		</div>
	)
}
export default FAQ 

 
  




 
 