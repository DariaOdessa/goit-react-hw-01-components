import styled from "styled-components";

export const UserWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: ${p => p.theme.space[6]}px;
margin-left: auto;
margin-right: auto;
background-color: ${p => p.theme.colors.background};
width: 500px;
border-radius: ${p => p.theme.radii.md};
box-shadow: ${p => p.theme.shadows.dark};
`
export const UserFoto = styled.img`
border-radius: ${p => p.theme.radii.round};
`

export const Username = styled.p`
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.primaryText};
`;

export const Userinfo = styled.p`
color: ${p => p.theme.colors.secondaryText};
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
`
export const StatsWrapper = styled.ul`
display: flex;
width: 100%;
height: 100%;
background-color: ${p => p.theme.colors.backgroundGray};
border-bottom-left-radius: ${p => p.theme.radii.md};
border-bottom-right-radius: ${p => p.theme.radii.md};

`