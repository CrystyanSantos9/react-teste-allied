import styled from "styled-components";

const CardPlanRow = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const CardPlan = styled.div`
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
padding: 30px;
margin: 20px;
height: 532px;
width: 400px;
transition: all 0.3s ease-out;
background-color: ${props => props.bg === "black" ? "black" : "white"};
&:hover {
  transform: translateY(-5px);
  cursor: pointer;
}
`;

export {CardPlan, CardPlanRow}