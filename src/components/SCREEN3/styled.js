import styled from 'styled-components'
const Wrapper = styled.div`
	position:relative;
	#section-2{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 000px; 
		/*background: url(../../assets/images/CAVE BACKGROUND.png) ;
		background-size: 1300px;
		background-repeat: no-repeat;
		background-position:  bottom;*/
	    width: 60%;
	    margin: auto;
	    overflow: hidden !important;
		position: relative;
	} 
	@media (max-width:  1360px){ 
	#section-2{
		background-size: cover;
		background-position: center;
	}
	} 
	#section-2 .row{
		width: 100%;
	} 
	#section-2 > img{
	    margin: 80px auto;
	    /*width: 40%;*/
	}
	.games-flex{
		/*width: 60%;*/
		/*margin: 120px auto;*/
		margin: auto; 
		margin-top: 100px;
		display: grid;
		align-items: center; 
		grid-template-columns: 1fr 1fr 1fr;
	}
.gf-2{
	grid-template-columns: 1fr 1fr;
	margin-bottom: 50px;
}
.games-flex img{
	width: 100%;
}
.gf-2 img{
	width: 70%;
	margin: 50px auto;
}
.miner-dialogue{
	left: -150px;
	top: 50px;
	position: relative;
}
#section-2 p{
    text-align: center;  
    line-height: 100px;  
    font-size:50px; 
    color: #FFF200;
    text-shadow:
   -2px -2px 0 #000,  
    2px -2px 0 #000,
    -2px 2px 0 #000,
     2px 2px 0 #000;
} 
@media (max-width:  768px){
	.social-flex{
		width: 90% !important;
		display: flex !important;
		flex-direction: column-reverse !important;
	}
	#section-3 h1 {
		font-size: 100px !important;
	}
	#section-2{
		width: 80%;
	}
	#section-3{
		width: 100% !important;
	}
	.green-box{
		width: 90% !important;
	}
	#section-2 > img{
		width: 60%;
	}
}
@media (max-width:  1760px){  
	#section-2 p {
		font-size: 40px !important;
	}

} 
@media (max-width:  600px){
	.games-flex{
		grid-template-columns: 1fr;
	}
	.green-box{
		width: 100% !important;
	}
}
`
export default Wrapper