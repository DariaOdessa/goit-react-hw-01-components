import styled from "styled-components";

export const TableCell = styled.td`
padding: ${p => p.theme.space[4]}px;
text-align: center;
color: ${p => p.theme.colors.secondaryText};
font-size: ${p => p.theme.fontSizes.m} ;
font-weight: ${p => p.theme.fontWeights.bold};
`

export const TableRow = styled.tr`
background-color: ${p => p.theme.colors.white};
&:nth-child(even) {
    background-color: ${p => p.theme.colors.backgroundGray};
};
`