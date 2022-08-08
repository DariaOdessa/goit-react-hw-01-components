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
export const UserCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: ${p => p.theme.space[5]}px;
margin-bottom: ${p => p.theme.space[5]}px;
grid-gap: ${p => p.theme.space[4]}px;
`


export const UserFoto = styled.img`
border-radius: ${p => p.theme.radii.round};
border: ${p => p.theme.borders.normal};
border-color: ${p => p.theme.colors.backgroundGray};
box-shadow: ${p => p.theme.shadows.dark};
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
export const StatsItem = styled.li`
display: flex;
align-items: center;
justify-items: center;
flex-direction: column;
flex-basis: calc(100% / 3);
padding-top: ${p => p.theme.space[5]}px;
padding-bottom: ${p => p.theme.space[5]}px;
&:not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.secondaryText};
}
`
export const StatsName = styled.span`
color: ${p => p.theme.colors.secondaryText};
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[3]}px;
`
export const StatsValue = styled.span`
color: ${p => p.theme.colors.Text};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
`