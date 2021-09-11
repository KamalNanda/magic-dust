import React from 'react' 
import './style.css'  
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const Contact = () => {
 
	return(
        <div className="contact-container">
            <div className="gradient-bg"></div>
            <div className="contact-bg" ></div>
		          <div id="contact"> 
                <div>
               	  <h1>CONTACT</h1>
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
                            <div class="message">
                                <h1>DUST <br/>IS<br/> MAGIC</h1>
                            </div> 
                        </div>   
            		</div>	
              </div>
        </div>
	)  
}
export default Contact