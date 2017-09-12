import * as React from 'react';
import styled from 'emotion/react';
import { withState } from 'recompose';
import { H1, H2 } from '../../emotion/typography';

import Select from '../../Select';
import Ball from '../../Ball';
import Cat from '../../components/Cat/index';
import { ellipsis } from '../../emotion/mixins';

const Description = styled(H2)`
    composes: ${ellipsis};
    width: 500px;
    display: inline-block;
`;

const Home = props => {
    const Hello = `Home Page`;

    return (
        <div>
            <Select value={props.color} onValueChange={props.setColor} options={['red', 'violet', 'black', 'green']} />
            <H1>
                {Hello}
            </H1>
            <br />
            <Description color="grey">
                There sits the only king I mean to bend my knee to: the King in the North!
            </Description>
            <br />
            <Cat />
            <Ball speed="2s" />
            <Ball speed="4s" />
            <Ball speed="3s" />
        </div>
    );
};

export default withState('color', 'setColor', 'violet')(Home);
