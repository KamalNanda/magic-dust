import styled from 'styled-components'
const Wrapper = styled.div`
    left: 0;
    overflow: hidden ;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 9999999999999999;
        box-shadow: 2px 0px 30px black;
	.header{
        padding: 20px 0px ;
    height: 7vh;
        background-color:#8706c8;
        display: flex;   
        align-items: center;
        justify-content: space-between;
}  
.header-logo-cont{
    width: 25%;  
}
.green-seperator{
    color:#91e01f;
}
.header-logo{ 
    width: 60%;
    display: block;
    margin-left: 15%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); 
} 
.header .social-holder{
    width: 25%; 
    padding-left: 12%;
    margin-right: 2%;
    display: flex;
    justify-content: space-evenly;
}
#mobile-nav .social-holder{
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr); 
}
#mobile-nav .header-logo{
    width: 240px
}
.header .social-holder img,
#mobile-nav .social-holder img{ 
    cursor: pointer;
    margin: auto;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.header ul{
    width: 40% ;
    margin: auto;
    display: flex;
    justify-content: space-between; 
} 
#mobile-nav ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#mobile-nav ul{
    align-items: flex-start;
    align-self: flex-start; 
    flex-direction: column;
}
.header ul li { 
    font-size: 2px ;
}
.header ul li,
#mobile-nav ul li {
    list-style: none;  
    text-shadow:  0px 1px 1px rgba(0, 0, 0, 0.15);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: fit-content; 
}
#mobile-nav ul li{
    border: none ;
    text-align: left ; 
    margin: 10px 0 ;
    font-size: 37px ; 
}
.header ul li a,
#mobile-nav ul li a{
    text-decoration: none;
    color: #91e01f    ; 
    /*margin: 0 15px;*/
    font-size: 32px ; 
    position: relative;
    /* border-radius: 20px; */
    text-shadow:  0px 1px 1px rgba(0, 0, 0, 0.15);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}  
#mobile-nav ul li a{
    margin: 20px 0 ; 
}
#mobile-nav{
    background-color:#8706c8;
    padding: 10px 20px; 
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
}  
#mobile-nav img{
    width: 40px;
} 
.header ul li a:hover,
.header ul li a.active{  
    border-bottom: 2px solid #91e01f;  
}
@media (max-width: 1800px){
    .header ul li a,
    #mobile-nav ul li a{
        font-size: 28px  ;        
    } 
}
@media (max-width: 1660px) { 
    .header ul li a{
        font-size: 0.9rem;  
    }
    .social-holder img{
        width: 30px;
    }
    .img-flex p{ 
        font-size: 32px  ; 
    }
}
@media (max-width: 1440px) { 
    .header .social-holder{  
        top: 5px  ;
    }
    .header ul li a{
        font-size: 0.9rem ;  
    }
    .social-holder img{
        width: 25px;
    }
}
@media (max-width: 1280px) { 
    .header .social-holder{ 
        right: 50px;
        top: 5px;
        padding-left: 12%;
        margin-right: 2%;
    }
    .header ul li a{
        font-size: 0.75rem;  
    }
    .social-holder img{
        width: 25px;
    }
}
@media (max-width: 996px) { 
    .header img{
        width: 150px;
    }
    .header .social-holder{ 
        right: 50px;
        top: 5px ;
    }
    .header ul li a{
        font-size: 0.65rem ;
        padding: 1px 1px; 
        margin: 0 0px;
    }
    .social-holder img{
        width: 20px;
    }
}
@media (max-width: 768px){
    .header, 
    .header ul{
        display: none;
        flex-direction: column;
        align-items: flex-start ;
        text-align: left;
    }
    .header ul li{
        border: none ;
    }
    .header,
.green-seperator{
        display: none;
    }
    #mobile-nav{
        display: flex; 
    }
    .social-holder img {
        margin-right: 20px ;
    }
    .header-logo{   
        margin-left: 0; 
    } 
} 

`
export default Wrapper