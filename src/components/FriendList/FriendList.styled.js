import styled from "styled-components";

export const FriendsList = styled.ul`
display: flex;
flex-direction: column;
grid-gap: ${p => p.theme.space[3]}px;
margin-bottom: ${p => p.theme.space[6]}px;
align-items: center;
`

export const Friend = styled.li`
display: flex;
align-items: center;
background-color: ${p => p.theme.colors.white};
width: 500px;
padding: ${p => p.theme.space[4]}px;
border-radius: ${p => p.theme.radii.md};
box-shadow: ${p => p.theme.shadows.dark};
`