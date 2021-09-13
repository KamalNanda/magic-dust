import styled from 'styled-components'

const Wrapper = styled.div`
	
#roadmap {
    margin: auto;
  margin-top: 200px; 
    width: 50%;
    overflow: hidden ;
}   
#roadmap h2{
    font-size: 60px;
    text-align: center;
    transform: scaleX(2) scaleY(1.25); 
    margin: 40px auto;
    color: #FFF200;
      text-shadow:
   -2px -2px 0 #FF06D7,  
    2px -2px 0 #FF06D7,
    -2px 2px 0 #FF06D7,
     2px 2px 0 #FF06D7;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
}   
#roadmap p{ 
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
}     
@media (max-width:  1760px){ 
    #roadmap img.man2, #section-3 > img{
        width: 50%;
    } 
    #roadmap h1, #faq > h1, #team > h1{
        font-size: 120px;
    } 
     
}
@media (max-width:  1280px){ 
    #roadmap img.man2, #section-3 > img{
        width: 50%;
    }  
    #roadmap h2{
        font-size:40px
    }
} 
@media (max-width:  786px){ 
    #roadmap img.man2, #section-3 > img{
        width: 60%;
    }   
    #roadmap > img{
        width: 90%;
        margin:auto
    }
    #roadmap{
        width: 100%;
        margin-top:60px;
        margin-bottom: 60px
    }
    #roadmap h2{
        font-size: 60px; 
        transform: scaleX(1) scaleY(1.01); 
        margin: 40px auto; 
          text-shadow:
       -2px -2px 0 #FF06D7,  
        2px -2px 0 #FF06D7,
        -2px 2px 0 #FF06D7,
         2px 2px 0 #FF06D7;
    }    
}   
`
export default Wrapper