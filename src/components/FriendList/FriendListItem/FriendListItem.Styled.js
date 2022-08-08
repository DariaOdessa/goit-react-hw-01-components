import styled from "styled-components";

export const Status = styled.span`
width: ${p => p.theme.sizes.m};
height: ${p => p.theme.sizes.m};
border-radius: ${p => p.theme.radii.round};
background-color: ${({ theme, isOnline }) => {
    return isOnline ? theme.colors.green : theme.colors.red
}};
margin-right: ${p => p.theme.space[4]}px;
`

export const Avatar = styled.img`
padding: ${p => p.theme.space[4]}px;
border-radius: ${p => p.theme.radii.md};
box-shadow: ${p => p.theme.shadows.normal};
margin-right: ${p => p.theme.space[5]}px;
`
export const Name = styled.p`
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.primaryText};
`