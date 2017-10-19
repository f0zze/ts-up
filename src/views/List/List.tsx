import * as React from 'react';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import { Row, Col } from 'react-flexbox-grid';
import ListItem from './ListItem';

@observer
class List extends React.Component {
    @observable items = [];

    private input: any;

    @computed
    get itemLen() {
        return this.items.length + 10;
    }

    handleSubmit = e => {
        e.preventDefault();
        this.items.push(this.input.value);
    };

    render() {
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                ref={input => {
                                    this.input = input;
                                }}
                                placeholder="Type something..."
                            />
                        </form>
                    </Col>
                    <Col>{this.itemLen}</Col>
                </Row>
                <Row>
                    {this.items.map(item => (
                        <Col md={3}>
                            <ListItem>{item}</ListItem>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default List;
