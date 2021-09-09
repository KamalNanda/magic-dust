import React from 'react' 
import './style.css' 
import Man2 from '../../assets/images/wood.png'  
import wallpaper from '../../assets/images/wallpaper.png'  
import gem from '../../assets/images/gem.png'  
import gemplatform from '../../assets/images/bottom-gems.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const Contact = () => {
 
	return(
        <div style={{position:'relative', zIndex:'-9'}}>
            <div className="gradient-bg"></div>

		<div id="contact">
    
                {/**img class="wallpaper" src={gemplatform}  />**/}
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
      			      <img src={Man2} class="man22" style={{display:'block', width:'50%', margin:'100px auto 100px auto'}}/>
            			<div class="contact-wallpaper">
                            <div class="message">
                                <h1>DUST <br/>IS<br/> MAGIC</h1>
                            </div> 
                        </div>  
                        {/* <img class="gem" src={gem}  /> */}
            		</div>	
              </div>
        </div>
	)  
}
export default Contact