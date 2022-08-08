import styled from "styled-components";

export const StatTitle = styled.h2`
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const StatisticSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-top: ${p => p.theme.space[6]}px;
margin-bottom: ${p => p.theme.space[6]}px;
margin-left: auto;
margin-right: auto;
background-color: ${p => p.theme.colors.background};
width: 500px;
border-radius: ${p => p.theme.radii.md};
box-shadow: ${p => p.theme.shadows.dark};
`

export const StatList = styled.ul`
display: flex;
/* flex-wrap: wrap; */
width: 100%;
border-bottom-left-radius: ${p => p.theme.radii.md};
border-bottom-right-radius: ${p => p.theme.radii.md};
`
export const StatItem = styled.li`
display: flex;
align-items: center;
justify-items: center;
flex-direction: column;
flex-basis: calc(100% / 3);
padding-top: ${p => p.theme.space[5]}px;
padding-bottom: ${p => p.theme.space[5]}px;
background-color: ${getRandomHexColor};
color: ${p => p.theme.colors.white};
`

export const Label = styled.span`
font-size: ${p => p.theme.fontSizes.m} ;
font-weight: ${p => p.theme.fontWeights.bold};
`
export const Value = styled.span`
font-size: ${p => p.theme.fontSizes.l} ;
font-weight: ${p => p.theme.fontWeights.bold};
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}