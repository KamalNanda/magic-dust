import React from 'react' 
import './style.css' 
import Man2 from '../../assets/images/miner00.png'  
import wallpaper from '../../assets/images/wallpaper.png'  
import gem from '../../assets/images/gem.png'  
import gemplatform from '../../assets/images/gemplatform.png'
const Contact = () => {

	return(
        <div style={{position:'relative'}}>

		<div id="contact">
                {/**img class="wallpaper" src={gemplatform}  />**/}
                <div>
               	  <h1>CONTACT</h1>
            			<div class="form-cont">
                      <form>  
                          <input  type="text" placeholder="NAME" />
                          <input  type="text" placeholder="EMAIL" />
                          <textarea placeholder="I close my eyes, only for a moment but the moment’s gone..." ></textarea>
                          <button>SUBMIT; RESISTANCE IS FUTILE.</button>
                      </form>
                  </div>
      			      <img src={Man2} class="man22" style={{display:'block', width:'50%', margin:'100px auto 100px auto'}}/>
            			<div class="contact-wallpaper">
                            <div class="message">
                                <h1>DUST <br/>IS<br/> MAGIC</h1>
                            </div> 
                        </div>  
                        {/* <img class="gem" src={gem}  /> */}
            		</div>	
                <div class="gemplatform">
                  <img src={gemplatform}/>
                </div>
              </div>
        </div>
	)  
}
export default Contact