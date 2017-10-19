import styled, {ThemedReactEmotionInterface} from 'react-emotion';
import {withTheme} from 'theming';
import {bounce} from './emotion/animations';
import {ComponentClass} from 'react';

interface ITest {
    speed: string;
}

const sdiv = styled as ThemedReactEmotionInterface<ITest>

const Ball = withTheme(sdiv.div`
    display: inline-block;
    width: 30px;
    height: 30px;
    animation: ${bounce} ${props => props.theme.speed} ease infinite;
    background-color: ${props => (props.theme && props.theme.primaryColor) || 'red'};
    border-radius: 15px;
`);

export default Ball as ComponentClass<{ speed: string }>;
