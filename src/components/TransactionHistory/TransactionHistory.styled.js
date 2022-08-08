import styled from "styled-components";

export const TransactionTable = styled.table`
border: ${p => p.theme.borders.normal};
border-color: ${p => p.theme.colors.secondaryText};
border-radius: ${p => p.theme.radii.md};
box-shadow: ${p => p.theme.shadows.dark};
margin-left: auto;
margin-right: auto;
margin-bottom:  ${p => p.theme.space[6]}px;
width: 700px;
`

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
