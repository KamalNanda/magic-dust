import styled from 'styled-components'
import PinkBoxBase from '../Common/PinkBox' 

const PinkBox = styled(PinkBoxBase)`
    padding: 10px 20px;
    width: 100%; 
    margin: auto;
    display: flex ; 
    height:100%;
    align-items: center ;
    margin-bottom: 20px; 
	h1{
	    text-align: center;  
	    line-height: 45px; 
	    font-size:45px; 
	    color: #FFF200;
	    text-shadow:
	   -2px -2px 0 #650C85,  
	    2px -2px 0 #650C85,
	    -2px 2px 0 #650C85,
	     2px 2px 0 #650C85; 
	}
	p{
	    font-size: 20px;
	    line-height: 1; 
	    color: #FBF5E3;
	    letter-spacing: 2px; 
	    margin-bottom: 0;
	    font-weight: 900;
	    font-size: 25px;
	    line-height: 125%; 
	    color: #FBF5E3; 
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	    width: calc(100% - 50px);
	} 
	img{
	    width: 50px;
	    margin-right: 10px;
	    height: 50px;
	} 
	.heart{
	    width: 45px;
	    height: 54px;
	}
	@media (max-width : 1780px){
		.d-flex p{
        	font-size: 20px;
    	}
	}
	@media (max-width: 1660px){
		.d-flex p{
        	font-size: 20px;
    	}
	    h1{
	        font-size: 32px;
	    }  
	}
	media (max-width: 1360px){
        padding: 5px 10px;
    	h1{
	        font-size: 30px;
	        line-height: 30px;
   		}  
	} 
	@media (max-width : 1280px){ 
        padding: 5px 10px;
        h1{
		    text-align: center;  
		    line-height: 28px; 
		    font-size:28px;  
		}
		.d-flex{
	        margin-bottom: 10px;
	    }
	    .d-flex p{
	        font-size: 18px;
	    }
    }
	@media (max-width: 1024px){ 
	    .d-flex p{
	        font-size: 14px;
	    } 
	}

`
export default PinkBox