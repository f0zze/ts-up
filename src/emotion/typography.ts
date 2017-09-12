import  styled from 'emotion/react';
import { withTheme } from 'theming';

export const H1 = withTheme(styled.h1`
    font-size: 26px;
    color: ${props => props.theme && props.theme.primaryColor};
`);

export const H2 = withTheme(styled.h2`
    font-size: 20px;
    color: ${props => props.theme && props.theme.primaryColor};
`);
