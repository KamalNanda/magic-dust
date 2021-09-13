import styled from 'styled-components'

const Wrapper = styled.div`
	
#section-3 h1{
    color: #92FF07;
    font-size: 100px;
    text-align: center;
    font-weight: 900; 
    transform: scaleX(1.1);
    font-family: 'Fontsphere';;
    margin: 80px auto;
    text-shadow:
   -2px -2px 0 #000,  
    2px -2px 0 #000,
    -2px 2px 0 #000,
     2px 2px 0 #000;
}
#section-3 a{
    text-decoration: none;
}
#section-3{
    width: 50%;
    margin: auto;
    overflow: hidden !important;
}
#section-3 > img{
    margin: 80px auto;
    /*width: 40%;*/
} 
 
.social-flex{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    /*width: 70%;*/
    margin: auto; 
}
#section-3 p{
    color: #FBF5E3;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;  
    line-height: 80px;
    width: 100%;
    margin: auto;
    font-size:53px; 
} 
#section-3 .gimme-btn{
    font-size: 50px;
    color: #FBF5E3;
    font-weight: 900;
    background: rgba(17, 240, 12, 0.63);
border: 8px solid #92FF07;
    border-radius: 6px;
    display: block;
    padding: 00px 50px;
    width: 80%;
    margin: 20px auto 0 auto;
}
#section-3 p span{
    font-size:53px;
    color: #ECE000; 
} 
@media (max-width : 1760px){ 
    #section-3 h1{
        font-size: 100px;
    }
    #section-3 p,
    #section-3 p span{ 
        line-height: 60px; 
        font-size:40px; 
    } 
    #section-3 .gimme-btn{
        font-size: 32px;  
        padding: 10px 20px; 
        margin: 20px auto 0 auto;
    }
}
@media (max-width : 1440px){  
    #section-3 p,
    #section-3 p span{ 
        line-height: 40px; 
        font-size:32px; 
    } 
    #section-3 .gimme-btn{
        font-size: 26px;  
        border-width: 4px;
        padding: 0 10px; 
        margin: 20px auto 0 auto;
    } 
}
@media (max-width : 1280px){ 
    #section-3 h1{
        font-size: 80px;
    } 
    #section-3 p,
    #section-3 p span{ 
        line-height: 50px; 
        font-size:28px; 
    } 
    #section-3 .gimme-btn{
        font-size: 26px;  
        border-width: 6px;
        padding: 0 10px; 
        margin: 20px auto 0 auto;
    } 
}
@media (max-width : 1160px){ 
    #section-3 h1{
        font-size: 80px;
    } 
    #section-3 p,
    #section-3 p span{ 
        line-height: 40px; 
        font-size:24px; 
    } 
    #section-3 .gimme-btn{
        font-size: 23px;  
        border-width: 4px;
        padding: 0 10px; 
        margin: 20px auto 0 auto;
    } 
}
@media (max-width: 768px) { 
    #section-3 h1{
        font-size: 50px !important;
    }
    #section-3 {
        width: 90% !important; 
    }
    #section-3 .gimme-btn{ 
        border-width: 4px;
        width:90%;
        padding: 10px 10px  ;
        font-size: 28px;
        margin: 20px auto 0 auto;
    }
    #section-3 p,
    #section-3 p span{ 
        line-height: 60px; 
        font-size:32px; 
    }  
    #section-3 > div > div.sec-2-flex.col-lg-6.col-md-6.col-sm-12{
        margin-bottom: 40px
    }
    #section-3 > div.row{
        flex-direction: column-reverse
    }
    #section-3 > img{
        width: 90%;
        margin:auto
    }
}
`
export default Wrapper