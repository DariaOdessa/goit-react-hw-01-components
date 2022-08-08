import styled from "styled-components";

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