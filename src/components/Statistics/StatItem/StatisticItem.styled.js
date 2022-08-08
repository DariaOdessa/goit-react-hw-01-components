import styled from "styled-components";

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
