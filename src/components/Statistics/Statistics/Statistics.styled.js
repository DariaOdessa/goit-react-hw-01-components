import styled from "styled-components";

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