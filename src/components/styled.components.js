import styled from "styled-components";

const  ContainerPages = styled.div`
box-sizing: border-box;
display:flex;
width: 100%;
flex-direction: column;
align-items: center;
font-size: calc(10px + 2vmin);
`
const CardPlatformRow = styled.div`
box-sizing: border-box;
background-color: #f5f6fa;
display: flex;
width: 100vw;
flex-direction: column;
justify-content: center;
align-items: center;
/* @media (min-width:1900px) {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(20%, 1fr)
    );
    list-style: none;
    grid-gap: 1.5rem;
} */
`;

const CardPlatform = styled.div`
box-sizing: border-box;
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
margin: 20px;
height: 320px;
width: 100vw;
transition: all 0.3s ease-out;
background-color: ${props => props.bg === "black" ? "black" : "white"};
&:hover {
  transform: translateY(-5px);
//   cursor: pointer;
}
align-self: center;

/* @media (min-width: 600px) and (max-width: 800px){
    height: 370px;
    width: 75%;
}

@media (min-width: 801px) and (max-width: 1200px){
    height: 420px;
    width:50%;
}

@media (min-width: 1200px) and (max-width: 1900px){
    height: 520px;
    width:40%;
}

@media (min-width:1900px) {
    height: 520px;
    width: 80%;
} */
`;

const CardPlatformDescriptionTitle = styled.h1`
margin: 10px;
font-size: 1.2rem;
text-align:left;
color: #7f8fa6;
@media (min-width: 600px) and (max-width: 800px){
    font-size: 1.8rem;
}
`;

const SlideButtonPrimary = styled.button`
    margin-top: 1.5rem;
    background-color:#e84118;
	border-radius:28px;
	border:1px solid #e84118;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:20px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
    &:hover{
        background-color:#c23616;
    }
    &:active{
        position: relative;
        top:1px;
    }
`

export {ContainerPages, CardPlatform, CardPlatformRow, CardPlatformDescriptionTitle, SlideButtonPrimary}