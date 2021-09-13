import React from 'react'   
import Button from 'react-bootstrap/Button'
import SectionHeader from '../Common/SectionHeader'
import Wrapper from './styled.js'
import Message from './Message'
const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setemail] = React.useState('')
	return(
      <Wrapper>
        <div className="contact-container">
            <div className="gradient-bg"></div>
            <div className="contact-bg" ></div>
		          <div id="contact"> 
                <div>
               	  <SectionHeader primary>CONTACT</SectionHeader>
                  <form> 
                      <input type="text"  defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder="NAME"/> 
                      <input type="email" defaultValue={email} onChange={(e) => setemail(e.target.value)}  placeholder="EMAIL"/> 
                      <textarea  className="mb-3" rows={3}  placeholder="I close my eyes, only for a moment but the moment’s gone..." ></textarea>
                    
                    <Button >SUBMIT; RESISTANCE IS FUTILE.</Button >
                  </form> 
      			      <img src={'/assets/images/wood.png'} class="contact-miner" />
            			<div class="contact-wallpaper">
                            <Message>
                                DUST <br/>IS<br/> MAGIC
                            </Message> 
                        </div>   
            		</div>	
              </div>
        </div>
      </Wrapper>
	)  
}
export default Contact