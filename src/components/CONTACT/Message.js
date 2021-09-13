
import styled from 'styled-components'
const Message = styled.h2` 
  display: block;  
  margin: 100px auto 100px auto; 
  color: #FFF200 !important;
  line-height: 100%; 
  position:relative;
  text-align: center;
  font-weight: 900;
  letter-spacing: 10px;
  // transform: scaleX(2.0) scaleY(1.75) !important;
  text-shadow:
      -2px -2px 0 #FF06D7,  
      2px -2px 0 #FF06D7,
      -2px 2px 0 #FF06D7,
      2px 2px 0 #FF06D7;
  font-size: 300px;

  filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.8));
  @media (max-width: 1280px){  
    line-height: 200px !important;
    font-size: 200px;
    margin-top: 50px;
  }
  @media (max-width: 1024px){   
    line-height: 150px !important; 
    margin-top: 50px;
  }

  @media (max-width:  786px){ 
    font-size: 80px !important;
    transform: scale(1);
  }
`
export default Message