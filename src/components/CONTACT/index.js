import React from 'react'  
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SectionHeader from '../Common/SectionHeader'
import Wrapper from './styled.js'
import styled from 'styled-components'
const Message = styled.h2` 
  display: block;  
  margin: 100px auto 100px auto; 
  color: #FFF200 !important;
  line-height: 100%; 
  position:relative;
  text-align: center;
  font-weight: 900;
  letter-spacing: 10px;
  // transform: scaleX(2.0) scaleY(1.75) !important;
  text-shadow:
      -2px -2px 0 #FF06D7,  
      2px -2px 0 #FF06D7,
      -2px 2px 0 #FF06D7,
      2px 2px 0 #FF06D7;
  font-size: 300px;

  @media (max-width: 1280px){  
    line-height: 200px !important;
    font-size: 200px;
    margin-top: 50px;
  }
  @media (max-width: 1024px){   
    line-height: 150px !important; 
    margin-top: 50px;
  }

  @media (max-width:  786px){ 
    font-size: 80px !important;
    transform: scale(1);
  }
`
const Contact = () => {
 
	return(
      <Wrapper>
        <div className="contact-container">
            <div className="gradient-bg"></div>
            <div className="contact-bg" ></div>
		          <div id="contact"> 
                <div>
               	  <SectionHeader primary>CONTACT</SectionHeader>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> 
                      <Form.Control type="text" placeholder="NAME"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> 
                      <Form.Control type="email" placeholder="EMAIL"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"> 
                      <Form.Control as="textarea" rows={3}  placeholder="I close my eyes, only for a moment but the moment’s gone..." />
                    </Form.Group>
                    <Button >SUBMIT; RESISTANCE IS FUTILE.</Button >
                  </Form> 
      			      <img src={process.env.PUBLIC_URL + '/assets/images/wood.png'} class="man22" style={{display:'block', width:'50%', margin:'100px auto 100px auto'}}/>
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