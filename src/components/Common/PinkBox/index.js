import React from 'react'
import './style.css'

const PinkBox = (props) => {

	return(
		<div className='pink-box'>
			{
				props.children
			}
		</div>
	)
}
export default PinkBox