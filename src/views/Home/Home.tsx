import { inject, observer } from 'mobx-react';
import * as React from 'react';

import Ball from '../../Ball';
import Cat from '../../components/Cat';
import { ellipsis } from '../../emotion/mixins';

import { withState } from 'recompose';

import { H1, H2 } from '../../emotion/typography';
import Select from '../../Select';

import { IHomeStoreProps, STORE_HOME } from './homeStore';
import styled from 'react-emotion';

const Description = styled(H2)`
    composes: ${ellipsis};
    width: 500px;
    display: inline-block;
`;

interface IProps extends IHomeStoreProps {
    color: string;
    setColor: () => void;
}

@inject(STORE_HOME)
@observer
class Home extends React.Component<IProps> {
    private titleInput;

    render() {
        return (
            <div>
                <input
                    ref={titleInput => (this.titleInput = titleInput)}
                    onChange={this.changeTitle}
                    type="text"
                    placeholder="type new title...."
                />
                <Select
                    value={this.props.color}
                    onValueChange={this.props.setColor}
                    options={['red', 'violet', 'black', 'green']}
                />
                <H1>{this.props.homeStore.title}</H1>
                <br />
                <Description>There sits the only king I mean to bend my knee to: the King in the North!</Description>
                <br />
                <Cat />
                <Ball speed="2s" />
                <Ball speed="4s" />
                <Ball speed="3s" />
            </div>
        );
    }

    private changeTitle = event => {
        this.props.homeStore.updateTitle(this.titleInput.value);
    };
}

export default withState('color', 'setColor', 'violet')(Home);
