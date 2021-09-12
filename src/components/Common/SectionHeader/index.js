import React from 'react'
import styled from 'styled-components' 

const SectionHeader = styled.h1`
	font-size: 150px;
    text-align: center;
    transform: scaleX(2) scaleY(1.25);
    width: 100%;
    margin: 0 auto;
    color: ${props => props.primary ? '#92FF07' : '#FFF200'};
      text-shadow:
   -2px -2px 0 #FF06D7,  
    2px -2px 0 #FF06D7,
    -2px 2px 0 #FF06D7,
     2px 2px 0 #FF06D7;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8)); 
	@media (max-width:  1280px){  
        font-size: 100px;
	} 
	@media (max-width:  1760px){   
        font-size: 120px; 	
	}
`

export default SectionHeader 