import styled from 'styled-components'

const Wrapper = styled.div`
	
.team-grid .member{
	background: #EC12DB;
	cursor: pointer;
}
#team > img.d-block.mx-auto{
	width: 60%;
}
.team-member:hover{
	transform: scale(1.1);
}
.team-member p{
	text-align: center;
	color: #fff;
	font-size: 30px;
}
#team {
	margin: auto;
	margin-top: 100px;
    width: 50%;
    position: relative;
    z-index: 999999;
    overflow: hidden !important;
}
#team > img{
    margin: 80px auto;
    /*width: 40%;*/
}
 
.team-grid{
	width: fit-content;
	margin: auto;
	grid-gap: 20px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
}
@media (max-width: 1780px){ 
	.member img{
		width: 100% !important;
	}
	.man22{
		width: 60%;
	}
}
@media (max-width:  1280px){ 
	.member img{
		width: 100% !important;
	}
	.team-grid{
		grid-template-columns: repeat(5, 1fr); 
		grid-gap: 10px;
		padding: 20px;
	}
}
@media (max-width:  1360px){ 
	.member img{
		width: 100% !important;
	} 
}
@media (max-width:  1124px){ 
	.team-grid{
		grid-template-columns: repeat(3, 1fr); ;
		padding: 10px;
	}
}
@media (max-width:  786px){
	.team-grid{
		grid-template-columns: repeat(3, 1fr); ;
		padding: 10px;
	}
	#team{
		width:90%
	}
	.member img{
		width: 100%;
	}
	#team > img.man22, #team > img.d-block.mx-auto{
		width: 100%;
		margin:auto
	}
	.contact-bg, .gradient-bg{
		height: 340vh;
	}
}
@media (max-width:  525px){
	.team-grid{
		grid-template-columns: repeat(2, 1fr); 
	} 
	.contact-bg, .gradient-bg{
		height: 275vh;
	}
}
`
export default Wrapper