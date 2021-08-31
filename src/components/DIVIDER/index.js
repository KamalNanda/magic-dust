import React from 'react'
import './style.css' 
import man1 from '../../assets/images/miners/1.png'
import man2 from '../../assets/images/miners/2.png'
import man3 from '../../assets/images/miners/3.png'
import man4 from '../../assets/images/miners/4.png'
import man5 from '../../assets/images/miners/5.png'
import man6 from '../../assets/images/miners/6.png'
import man7 from '../../assets/images/miners/7.png'
import man8 from '../../assets/images/miners/8.png'
import man9 from '../../assets/images/miners/9.png'
import man10 from '../../assets/images/miners/10.png' 
const Divider = () => {
	return <div id="divider" class="Divider">
		{/**<img src={Miners} /> **/} 
		<div>
			<img src={man1} alt="man1" />
		</div>
		<div>
			<img src={man2} alt="man2" />
		</div>
		<div>
			<img src={man3} alt="man3" />
		</div>
		<div>
			<img src={man4} alt="man4" /> 
		</div>
		<div>
			<img src={man5} alt="man5" />
		</div>
		<div>
			<img src={man6} alt="man6" />
		</div>
		<div>
			<img src={man7} alt="man7" /> 
		</div>
		<div>
			<img src={man8} alt="man8" />
		</div>
		<div>
			<img src={man9} alt="man9" />
		</div>
		<div>
			<img src={man10} alt="man10" />
		</div>
	</div>
}
export default Divider