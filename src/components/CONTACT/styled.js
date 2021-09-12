import styled from 'styled-components'

const Wrapper = styled.div`
#contact h1{
	font-style: normal;
	font-weight: 900;
	font-size: 150px;
    transform: scaleX(1.5) scaleY(1.25);
	line-height: 150%; 
	text-align: center; 
    top: -100px;
    position: relative;
    margin-top: 200px;
	color: #92FF07; 
    text-shadow:
   -2px -2px 0 #FF06D7,  
    2px -2px 0 #FF06D7,
    -2px 2px 0 #FF06D7,
     2px 2px 0 #FF06D7;  
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
} 
.contact-container{
    position:relative;
    z-index:-9;
    overflow:hidden;
    padding-bottom:200px
}
#contact{ 
	position: relative;
    width: 100%; 
    z-index: 1;
    /*background-size: contain;*/
    overflow: hidden !important; 
}
#contact  form{ 
	width: 50%;
    position: relative;
    top: -75px;
    margin: auto;   
} 
.form-cont div, 
#contact  input, 
#contact  textarea{
    width: 100%;
     color: #F36EFF;
     border: 6px solid #F36EFF;
     border-radius: 6px;
     margin-bottom: 40px;
     padding: 30px 60px;
     background-color: #650C85;
     font-size: 1.5rem;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
}

#contact input:focus::placeholder {
  color: transparent;
}
#contact textarea:focus::placeholder {
  color: transparent;
}
#contact  form h1{
    color: #92FF07; 
    font-size: 200px;
    transform: scaleX(2) scaleY(1.5);
    text-align: center;
    text-shadow:
        -2px -2px 0 #F36EFF,  
        2px -2px 0 #F36EFF,
        -2px 2px 0 #F36EFF,
        2px 2px 0 #F36EFF;
    margin-bottom: 40px;
}
#contact  
::placeholder {
  color: #F36EFF;
}
#contact  form button{
    background-color: #92FF07;
    color: #F36EFF;
    border: 6px solid #F36EFF;
    border-radius: 6px;
    width: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
    font-size: 3rem;
    font-weight: 900;
    padding: 0px 30px;
}
#contact  textarea{
    height: 300px;
}
.contact-wallpaper{
    width: 100%; 
    z-index:  1;
     /*top: -500px;  */
} 
.contact-wallpaper img{
    width: 100%;
    transform: scaleY(1.2);
}
#contact .man22{
    margin-bottom: 100px;
}

@media (max-width:  1760px){
    #contact h1{
        font-size: 120px !important;/*
        transform: scale(1);*/
    }
    #contact .man22{
        width: 60%;
    }
    .gem, .message{
        /*display: none;*/
    }
    #contact  form button{ 
        font-size: 1.25rem; 
        padding: 10px;
    }
    #contact  textarea{
        height: 150px;
    }
    .form-cont div, 
    #contact  input, 
    #contact  textarea{  
         margin-bottom: 40px;
         padding: 10px 30px; 
         font-size: 1rem;
    }
}
@media (max-width: 1280px){
    #contact h1{
        font-size: 120px !important;
        transform: scale(1);
    } 
    #contact .man22{
        width: 30% !important;
    } 
} 
@media (max-width:  786px){
    #contact h1,
    .message h1,
    #roadmap h1,
    #faq h1,
    #team h1{
        font-size: 80px !important;
    transform: scale(1);
    }
    #contact img{
        width: 100%;
    }
    #contact .man22{
        width: 80% !important;
    } 
    /*.gem, .message{
        display: none;
    }*/
    img.gem {
        width: 100% !important;
        bottom: 0;
        transform: scaleX(1) !important;
    } 
}
`
export default Wrapper