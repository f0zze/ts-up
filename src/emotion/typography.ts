import { withTheme } from 'theming';
import styled from 'react-emotion';
import { Theme } from '../theme';

export const H1 = withTheme<'h1'>(styled<Theme, 'h1'>('h1')`
    font-size: 26px;
    color: ${props => props.theme && props.theme.primaryColor};
`);

export const H2 = withTheme<'h2'>(styled<Theme, 'h2'>('h2')`
    font-size: 20px;
    color: ${props => props.theme && props.theme.primaryColor};
`);
