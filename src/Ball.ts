import styled from 'emotion/react';
import { withTheme } from 'theming';
import { bounce } from './emotion/animations';

const Ball = withTheme(styled.div`
    display: inline-block;
    width: 30px;
    height: 30px;
    animation: ${bounce} ${props => props.speed} ease infinite;
    background-color: ${props => (props.theme && props.theme.primaryColor) || 'red'};
    border-radius: 15px;
`);

export default Ball;
