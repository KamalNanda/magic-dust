import React from 'react' 
import './style.css' 
import Man2 from '../../assets/images/man23.png'  
import wallpaper from '../../assets/images/wallpaper.png'  
import gem from '../../assets/images/gem.png'  
import gemplatform from '../../assets/images/gemplatform.png'
const Contact = () => {

	return(
        <div style={{position:'relative'}}>

          <div class="gemplatform">
            <img src={gemplatform}/>
          </div>
		<div id="contact">
                {/**img class="wallpaper" src={gemplatform}  />**/}
         	<h1>CONTACT</h1>
			<div class="form-cont">
                <form> 
                    <div >All we are is dust in the wind, dust - in the wiiind...duuuust in the wind...</div>
                    <input  type="text" placeholder="NAME" />
                    <input  type="text" placeholder="EMAIL" />
                    <textarea placeholder="I close my eyes, only for a moment but the moment’s gone..." ></textarea>
                    <button>SUBMIT; RESISTANCE IS FUTILE.</button>
                </form>
            </div>
			<img src={Man2} class="man22" style={{display:'block', margin:'auto'}}/>
			<div class="contact-wallpaper">
                <div class="message">
                    <h1>DUST <br/>IS<br/> MAGIC</h1>
                </div> 
            </div>  
            {/* <img class="gem" src={gem}  /> */}
		</div>	
        </div>
	)  
}
export default Contact