import React from 'react'
import './style.css' 

const SectionHeader = (props) => {
	return <h1 className={`section-header ${props.className}`}>{props.children}</h1>
}
export default SectionHeader 