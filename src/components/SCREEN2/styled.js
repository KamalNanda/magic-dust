import styled from 'styled-components'

const Wrapper = styled.div`
	position:relative;
	#section-1{
        position: relative;
        padding-top: 200px ;
        width: 60%;
        z-index: 1;

        margin: auto;
        /*overflow: hidden !important;*/ 
    }
    img.token-img{

        filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.8));
    }
    .cieling{
        position: absolute;
        width: 100%; 
        top: -10px; 
        z-index: -1;
        /*transform: scaleY(1.65) ;*/
        transform-origin: 100% 0%;
    }  
    .m-show{
        display: none;
    }
    @media(max-width: 768px){
        .m-show{
            display: block;
        }
        .m-hide{
            display: none !important;
        }
        .m-rev{
            flex-direction: column-reverse;
        }
    } 
       
@media (max-width: 1660px){ 
    #group{
        right: -150px;
        width: 50%;
        bottom: 00px;
    }
} 
@media(max-width: 786px){ 
    #roadmap{
        width: 100% !important;
    }
}     

#section-1{
 
    display: flex;
    flex-direction: column;
    height: 100%;
    align-content: space-between;
    justify-content: space-between; 
}
@media (max-width : 768px){
    #section-2 p, #section-2 p span{
        width: 90% !important;
        font-size: 60px !important;
        line-height:  80px !important;
    }
    #section-2 h1,
    #section-2 h1 span{
        font-size: 100px !important;
    } 
    .pink-box h2{
        font-size: 60px;
    }
}
#group{
    width: 60%;
    position: absolute; 
    top: -100px;
    z-index: 1111111111111111;
    right: -230px;
}
@media (max-width: 1880px){
    #group{
        position: absolute; 
        bottom: -100px;
        width: 15px;
        right: -25px;
    }

}
@media (max-width:  768px){
    #group{
        /*display: none;*/
        position: relative !important;
        top: unset !important;
        bottom: unset !important ;
        margin: 40px auto;
    }
}
.sec-2-col{
    height:100%;
    alignContent:space-between;
    justifyContent:space-between;
    position:relative
}
@media (max-width : 1780px){
    #section-1{
        padding-top: 150px;
    }
    #group{
        right: -100px;
        width: 50%;
        bottom: -50px;
    }
    #section-2 p, #section-2 p span{
        width: 90% !important;
        font-size: 60px !important;
        line-height:  80px !important;
    }
    #section-2 h1,
    #section-2 h1 span{
        font-size: 100px !important;
    }
    .add-white{ 
        margin: 0 5px ;
        width: 12px !important;
    }  
}
@media(max-width: 1660px){ 
    #group{
        right: -100px;
        width: 55%;
        bottom: -20px;
    }
    #section-1 .pink-box{
        padding: 10px;
    }
    .add-white{ 
        margin: 0 5px ;
        width: 12px !important;
    } 
    .circle-arrow{
        width: 45px !important;
        height: 45px !important;
    }       

}
@media (max-width : 1280px){
    #section-1{
        padding-top:100px;
    } 
    #group{
        right: -100px;
        width: 50%;
        top: -50px;
    }  
} 
@media (max-width: 1024px){  
    #group{
        position: absolute; 
        bottom: -30px;
        width: 50% !important;
        right: -105px;
    }
}
#mob-miner{
    display: none;
}
@media (max-width: 760px){
    #section-1{
        padding-top:100px ;
        width: 80%;
    } 
    #section-1 > div > div.my-3.col-lg-12.col-md-12.col-sm-12{
        display: none
    }
    .d-flex p{
        font-size: 20px
    }
} 
@media (max-width: 475px){
    #section-1{ 
        width: 90%;
    } 
    #section-1 > div.pink-box, .discord-wall,
    #faq .pink-box{
        width: 90% !important;
    }
} 
`
export default Wrapper