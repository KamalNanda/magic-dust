
import styled from 'styled-components' 

const SocialButton = styled.button`
	background: rgba(17, 240, 12, 0.63);
    border: 8px solid #92FF07;
    display: flex;
    cursor: pointer;
    align-items: center; 
    font-size: 36px;
    text-align: center;
    border-radius: 6px;
    padding: 15px 20px;
    width: 100%;  
    color: #FBF5E3;
    margin: 0 auto;  
    img{
	    width: 60px;
	    margin-right: 20px;
	}
	@media (max-width : 1760px){   
        font-size: 32px; 
        padding: 10px 20px; 
        width: 100%; 
        
        img{
	        width: 40px;
	        margin-right: 20px;
    	} 
	}
	@media (max-width : 1280px){  
        font-size: 24px; 
        padding: 10px ; 
        width: 100%;  
    	border-width: 6px;
    	img{
	        width: 30px;
	        margin-right: 10px;
	    } 
	} 	
    @media (max-width : 1160px){  
        font-size: 20px; 
        padding: 8px ; 
        width: 100%;  
        border-width: 4px;
        img{
            width: 25px;
            margin-right: 10px;
        } 
    }   
	@media (max-width: 768px) { 
        width: 90% !important;
        padding: 10px 10px  ;
        font-size: 28px;
        margin-bottom: 40px; 
        img{
            width: 40px
        }
	}
`
export default SocialButton