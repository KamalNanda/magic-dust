import styled from 'styled-components'

const Wrapper = styled.div`
section{  
    margin: auto;
    /*height: 93vh; */
    display: flex;
    align-items: center;
    background: #2b1055; 
    flex-direction: column;
    position: relative;
    /*padding-top: 7vh;*/
    z-index: 2222;
    width: 100%;
    overflow: hidden;
}
#home i{
    position: absolute;
    background: white;
    border-radius: 50px;
    z-index: 1;
    animation: animate linear infinite;
} 
.hero-flex{
    display: flex; 
    width: 50%;  
    top: 0;
    padding-top: 20px;
    padding-bottom: 30px;
    z-index: 999;
    align-items: center; 
    flex-direction: column;
} 
#loader{
    width: 100%;
    height: 100vh; 
    position: absolute;
    flex-direction: column;
    align-items: center;
    z-index: 99999999999999;
    display: flex;
    justify-content: center; 
    background-color: rgba(0, 0, 0, 0.452);
}
#close{
    position: absolute;
    top: 20px;
    cursor: pointer;
    color: #FF06D7;
    right: 30px;
    font-weight: 600;
    color: rgb(27, 23, 23);
    font-size: 36px;
}   
.connected-status{
    position: absolute;
    bottom: 5px;
}
.connected-status span{
    font-size: 20px ;
    font-family: Emtype Foundry Regular;
}
#minted-popup{
    position: absolute;
    width: 100%;
    height: 100vh; 
    flex-direction: column;
    background-color: #00000000;
    align-items: center;
    display: flex;
    z-index: 9999999999999999999;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.452); 
}
.minted-popup .col-md-4 img{
    width: 100%;
    cursor: pointer;
}
.minted-popup{
    width: 60%;
    position: relative;
    z-index: 9999999999999999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /*top: 50px;*/
    min-height: 500px;
    background-color: #872EB1;
    border: 6px solid #FF06D7;
    border-radius: 6px;
    padding: 20px 50px;  
}
.minted-popup img{
    width: 80%;
    margin: 20px auto;
    display: block;
}
.minted-popup h1{
    color: #FF06D7;
    font-size: 40px;
    text-align: center;
    display: block; 
}
.minted-popup p{ 
    color: #FF06D7;
    font-size: 28px;
    text-align: center;
    display: block;
    margin: auto;
    text-align: right;
}  
.section-bg{
    position: absolute;
    top: 0;
    width: 100%;
    height: 90vh; 
    display: flex;
    align-items: center;
    justify-content: center;
    overflow:hidden; 
}
.section-bg img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    height: 100%; 
    pointer-events: none;
}
#moon{
    mix-blend-mode: screen;
    z-index: 1;
}
#mountains_front{
    z-index: 3; 
}
#mountains_behind{
    z-index: 2;
}
#cave{
    z-index: 4; 
    width: 80%;
    margin: 0 10%;
    height: auto;
    bottom: 3vh;
    top: unset;
}
.miners-box{
    display: grid;
    justify-content: space-between;
    background-color: #872EB1DB;
    grid-template-columns: 6fr 4fr;
    grid-gap: 20px; 
    width:90%;
    /*max-height: 50vh;*/
    min-height: 40vh;
    margin: auto;
    position: relative;
    /*align-items: center;*/
    top: -5px;
    padding: 40px 40px;   
    border: 6px solid #FF06D7; 
    border-radius: 6px;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
}
.miners-box p{ 
    font-size:2rem;
    text-align: center; 
    letter-spacing: 2px;
    color: #92FF07;
    margin: 0 ;
    padding: 0 ;
filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.8));
    line-height: 1;
}
.miners-box p strong{
    font-size: 2rem;    
    margin: 0 ;
    padding: 0 ;
    font-weight: 400;
    font-family: Emtype Foundry Regular;
}
.miners-box-left p span{
    line-height: 1 ;
}
.miners-box h3{
    margin: 0; 
    font-size:2rem;
    text-align: center; 
    letter-spacing: 5px;
    color: #92FF07
}
.animation-box img{
    width: 80%; 
    position: relative ;
}
.animation-box{
    background-color: #c1c5fe;
    height: 100%;
    display: flex;
    width: 100%; 
    flex-direction: column;
    align-items: center;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    justify-content: center;
    border: 6px solid #FF06D7;
    border-radius: 6px
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
.miner-input-box{ 
    /*padding: 10px;*/
    /*min-height: 90px;*/
}
.miner-input-box h3{
    color: #17F16E; 
    width: fit-content; 
    text-align: center; 
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
    margin: 0 auto;
} 
.minus, .plus{
    cursor: pointer; 
    border-radius: 100% ;  
    color: #17F16E;
    display: flex;
    flex-direction: column;
    font-weight: 900; 
    align-items: center;
    justify-content: center; 
    width: 50px;
    background: none;
    height: 50px;
    border: 3px solid #92FF07; 
} 
.miner-input-box input{
    width:60px; 
    background:white;
    font-size: 1.75rem;
    border:6px solid #92FF07;
    font-weight: 700;
    color: #000;
    margin: 0 20px;
    text-align: center;
} 
 .collect-btn{
    /*background-color: #872eb1a8 ;*/
    background-color: #92FF07 ; 
    border: 6px solid #FF06D7  ;
    border-radius: 6px  ;
    color: #FF06D7;    
    text-align: center;
    width: 100%;
    font-weight: 700;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-top:20px ;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size:1.5rem;
    letter-spacing: 5px;
    webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
} 
.img-flex{   
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    position: relative;
}
.img-flex img{
    position: absolute;
    z-index: -1;
    top: -20px;
    width: 100%; 
    transform: scaleX(2.25);
}
.img-flex p{
    color: #92FF07;
    font-size: 36px;
    text-align: center; 
    font-weight: 900;  
    line-height: 1;
    margin: 0;
    padding: 0;
    text-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
}
.img-flex h1{  
    margin: 0;
    padding: 0;
    color: #FF06D7;
    line-height: 1;
    letter-spacing: 12px;  
    font-family: 'Emtype Foundry Regular';
    text-shadow: 0 0 3px #00ACEE, 0 0 5px #00ACEE;    
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    font-weight: normal; 
    text-align: center;
        font-size: 3.5rem;
    letter-spacing: 0.1em;   
    color: #F9F900; 
    text-shadow:
        -2px -2px 0 #FF13ED,  
        2px -2px 0 #FF13ED,
        -2px 2px 0 #FF13ED,
        2px 2px 0 #FF13ED;
}
#explore-popup{
    display: grid;
    grid-template-columns: 1fr; 
    width: 100%;
    position: relative; 
    z-index: 1;
} 
.magic-dust{
    position: relative;
    width: 100%;
    width: 100%;
    transform: scaleY(0.8); 
    z-index: 2;
    top: 15px;
    /*top: 50px;*/
}   
.magic-dust img{
    width: 100%;
    height: auto; 
    margin: auto;
    display: block;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.miners-box-left{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    justify-content: space-evenly;
} 
@media (max-width: 1860px){
    #explore-popup{
        /*width: 50%;*/
    } 
    .miner-input-box{
        margin-bottom: 0;
    }
    .miners-box{
        padding: 30px ;
    }  
}
@media (max-width: 1760px){ 
    .miners-box{
        padding: 30px ;
    }
    .img-flex p{
    font-size: 1.25rem ;
    }
    .minted-popup p{  
        font-size: 20px; 
    }  
    .animation-box img{
        /*width: 100%;*/
        width: unset;
        max-width: 250px ;
        position: relative ;
    }
     .collect-btn{ 
        /*border: 4px solid #92FF07 ;   */
        padding: 0.05rem 0.1rem  ;
        font-size:1.25rem ;
        min-width: 300px;
        /*letter-spacing: 0px;*/
    }
}
@media (max-width: 1660px){ 
    .minted-popup{
        padding: 20px; 
    }
    .minted-popup > img{
        margin: 0  ;
    }
    .miners-box{
        padding: 30px ;
    }
    .miners-box-left>h3{
        font-size: 2.0rem ;
    } 
     .collect-btn{ 
        /*border: 4px solid #92FF07 ;   */
        padding: 0.05 0.1rem  ;
        font-size:1.25rem ;
        min-width: 300px;
        /*letter-spacing: 0px;*/
    }
    .miner-input-box{
        margin-bottom: 0;
    }
    .miners-box{
        padding: 30px ;
    }
    .miners-box p{ 
        margin-top: 10px;
        font-size:1.5rem;
        text-align: center; 
        letter-spacing: 2px;
        color: #92FF07
    }
    .miners-box p strong{
        font-size:1.5rem;

    }
    .animation-box img{
        /*width: 100%;*/
        width: unset;
        max-width: 200px ;
        position: relative ;
    }
    .magic-dust {
        width: 100%; 
    }
    .img-flex h1{
        font-size: 3rem;
        text-shadow:
        -2px -2px 0 #FF13ED,  
        2px -2px 0 #FF13ED,
        -2px 2px 0 #FF13ED,
        2px 2px 0 #FF13ED;
    }
    .img-flex img{
        width: 120%;
    } 
    .plus, .minus{ 
        width: 40px;
        height: 40px;   
        font-size: 1.5rem;

    } 
    .miner-input-box input{
        width:60px;  
        font-size: 1.5rem;
        border:6px solid #92FF07; 
        margin: 20px; 
    } 
    .img-flex h1{
        font-size: 2.5rem ;
    } 
} 
@media (max-width:  1440px){ 
    .img-flex p{
        font-size: 1.15rem ;
    }
}

@media (max-width: 1360px){
    .miners-box{
        padding: 15px 20px ;
    }
     .collect-btn{  
        border-width: 4px ;
        border-radius: 6px  ; 
        margin-top:0rem ; 
        padding: 0.15rem 0.5rem;
        font-size:0.95rem ; 
        /*letter-spacing: 5px;*/
    } 
    .minus, .plus{ 
        width: 40px;
        height: 40px;
        border: 2px solid #92FF07;
        border-radius: 100px; 
        font-size: 30px;
    } 
    .miner-input-box input{
        width:60px;  
        font-size: 1.25rem ;
        border:6px solid #92FF07;  
        margin: 10px 20px ; 
    }
}
@media (max-width:  1280px){
    .minted-popup{
        min-height: 400px;
    }
    .minted-popup h1{
        font-size: 40px ;
    }
    .minted-popup p{
        font-size: 24px ;
    }  
    .miners-box p strong{
        font-size: 1rem;
    }
    #green-arrow{ 
        left: 30px;
        top: 30px;
        width: 27%;
    }
    .miners-box{
        padding: 40px ;
    }
    .miners-box p{ 
        margin-top: 10px;
        font-size:1.5rem;
        text-align: center; 
        letter-spacing: 2px;
        color: #92FF07
    }
    .miners-box-left>h3{
        font-size: 1.5rem  ;
    } 
    .minus, .plus{ 
        font-size: 1.0rem; 
        width: 30px;
        height: 30px; 

    }
    .miner-input-box input{
        width:40px;  
        font-size: 1.25rem;
        border:4px solid #92FF07; 
        margin: 5px 20px; 
    }
     .collect-btn{ 
        /*border: 4px solid #92FF07 ;   */
        padding: 0.1rem  ;
        font-size:1.15rem;
        min-width: 200px;
        letter-spacing: 0px;
    }
    .animation-box img{
        /*width: 100%;*/
        width: unset;
        max-width: 150px ;
        position: relative ;
    }
        .miner-input-box{
            margin-bottom: 0;
        } 
        .img-flex p{ 
            font-size: 26px ; 
        }
        .miners-box-left h3{
            font-size: 2rem;
        } 
    .animation-box img{
        width: 100%;
        max-width: 250px;
        position: relative ;
    } 

    .img-flex h1{   
            font-size: 2.25rem ;
            margin-top: 0;
        text-align: center;  
        text-shadow:
            -2px -2px 0 #FF13ED,  
            2px -2px 0 #FF13ED,
            -2px 2px 0 #FF13ED,
            2px 2px 0 #FF13ED;
    } 
    .img-flex p{
        font-size: 1.05rem ;
    }
    .img-flex img{
        width: 100%;
    }
     .collect-btn{  
        padding: 2px 10px;
        font-size:1rem; 
    }
    .info-box h2, .miner-input-box input{  
        font-size: 32px;   
    }
    .info-box{  
        font-size: 20px;
        line-height: 100%;  
    }
    .minted-popup p{  
        font-size: 17px ; 
    }  
    .connected-status{ 
        font-size: 18px ; 
    }
    .connected-status span{
        font-size: 18px ; 
    }
}
@media (max-width: 1180px){
    .miners-box{
        /*width: fit-content;*/

    } 
    .minted-popup p{  
        font-size: 15px ; 
    }  
        .img-flex h1{
        font-size: 2.25rem ;
    text-shadow:
        -2px -2px 0 #FF13ED,  
        2px -2px 0 #FF13ED,
        -2px 2px 0 #FF13ED,
        2px 2px 0 #FF13ED;
    }
    .img-flex p{
        font-size: .95rem ;
    }
    .miners-box p{ 
        margin-top: 10px;
        font-size:1rem;
        text-align: center; 
        letter-spacing: 2px;
        color: #92FF07
    } 
    .miner-input-box{
        margin-bottom: 0;
    }
    .miners-box, .info-box{
        padding: 20px ;
        /*height: 250px; */
    }
    .miners-box-left h3{
        font-size: 1.5rem ;
    }
    .animation-box img{
        width: 90% ;
        /*height: 100px;*/
    }
    .magic-dust{
        /*width:90%;*/ 
    }
    .img-flex h1{
        font-size: 30px;
    }
    .img-flex img{
        width: 100%;
    }
     .collect-btn{  
        padding: 0px ; 
        font-size:0.75rem 
    }
    .info-box h2, .miner-input-box input{  
        font-size: 32px;   
    }
    .miner-input-box h3 {
        margin: 10px auto;
    }
    .info-box{  
        font-size: 20px;
        line-height: 100%;  
    }
    .connected-status{ 
        font-size: 16px ; 
    }
    .connected-status span{
        font-size: 16px ; 
    }
}
@media(max-width:  1024px){
    #explore-popup, .magic-dust{
        /*width: 55% ;*/
    }
    #green-arrow{ 
        left: 30px;
        top: 40px;
        width: 27%;
    }
    .img-flex h1{   
            font-size: 1.5rem ;
            margin-top: 0;
        text-align: center;  
        text-shadow:
            -2px -2px 0 #FF13ED,  
            2px -2px 0 #FF13ED,
            -2px 2px 0 #FF13ED,
            2px 2px 0 #FF13ED;
    }
    .miners-box p{ 
        margin-top: 10px;
        font-size:0.8rem;
        text-align: center; 
        letter-spacing: 5px;
        color: #92FF07
    }
    .miners-box p strong{
        font-size: 0.8rem;
    }
     .collect-btn{  
        padding: 5px  ; 
        font-size:0.95rem ; 
        border-width: 4px;
    }
    .img-flex p{
        font-size: 0.75rem ;
    }
    .animation-box img{
        width: 100%;
        /*max-width: 150px ;*/
        position: relative ;
    }
    .miners-box-left h3{
        font-size: 1rem ;
    }
    .miners-box-left .collect-btn{
        font-size: 0.95rem ;
        padding: 5px;
    }
    .connected-status{ 
        font-size: 15px ; 
         letter-spacing: 1px;
    }
    .connected-status span{
        font-size: 15px ; 
        letter-spacing: 1px;       
    }
}
@media (max-width: 786px){
    section{
        margin-top: 0;
        padding: 10px;
    }
    #cave, #moon{
        display: none;
    }
    #collect{
        display: none;
    }
    #explore-popup > div.miners-box > div.miners-box-left > form,
    .miner-input-box h3{
        width: 100%;
    } 
    .miners-box p{  
        font-size:1.25rem; 
    }
    .miners-box,
    #explore-popup{
        grid-template-columns: 1fr;
    }
    .miners-box{
        display: flex;
        flex-direction: column-reverse; 
    }
    .magic-dust{
        top: unset;
        width: 100%; 
    }
    .magic-dust img{
        width: 100%;
    }
    .hero-flex{
        justify-content: unset;
    }  
    .minted-popup{
        padding: 20px;
        width: 90%;
    }
    .minted-popup h1{
        font-size: 32px ;
        margin: 0;
    }
    .minted-popup p{
        font-size: 16px ;
        margin: 0;
    } 
    .minted-popup img{
        width: 100%;
    }
     .collect-btn{  
        padding: 10px;
        font-size:1rem; 
    }
    #green-arrow{ 
        left: 00px;
        display:none;
        transform: scaleY(-1);
        bottom: 20px;
        top: unset;
        width: 25%;
    }
}
@media (max-width:  525px){
    .img-flex h1{
        font-size: 1.25rem ;
        text-shadow:
        -1px -1px 0 #FF13ED,  
        1px -1px 0 #FF13ED,
        -1px 1px 0 #FF13ED,
        1px 1px 0 #FF13ED;
    }
    .hero-flex{
        width: 90%
    }
    #green-arrow{ 
        left: 00px; 
        bottom: 30px;
        top: unset;
        width: 25%;
    }
    #explore-popup {
        top: -10px;
    }
     .collect-btn {  
        min-width: 100px; 
    }
    .hero-flex{
        height: unset;
    }
}
@media (max-width:  425px){ 
    #green-arrow{  
        bottom: 70px;  
    }
}
@media (max-width:  375px){ 
    #green-arrow{  
        bottom: 70px;  
    }
}

`
export default Wrapper