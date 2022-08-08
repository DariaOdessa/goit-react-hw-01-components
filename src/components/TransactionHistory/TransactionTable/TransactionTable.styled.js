import styled from "styled-components";

export const TableHead = styled.thead`
background-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.white};
font-size: ${p => p.theme.fontSizes.m};
text-transform: uppercase;
`

export const TableBody = styled.tbody`
border: ${p => p.theme.borders.normal};
border-color: ${p => p.theme.colors.grey};
`
