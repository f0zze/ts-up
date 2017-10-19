import { withTheme } from 'theming';
import { bounce } from './emotion/animations';
import styled from 'react-emotion';
import { Theme } from './theme';

interface ITest extends Theme {
    speed: string;
}

const Ball = styled<ITest, 'div'>('div')`
    display: inline-block;
    width: 30px;
    height: 30px;
    animation: ${bounce} ${props => props.speed} ease infinite;
    background-color: ${props => (props.theme && props.theme.primaryColor) || 'red'};
    border-radius: 15px;
`;

export default withTheme<'div', ITest>(Ball);
