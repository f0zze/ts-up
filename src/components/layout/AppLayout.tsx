import * as React from 'react';
import styled from 'react-emotion';
import logoImg from '../../../public/images/logo.png';
import { Row, Col, Grid } from 'react-flexbox-grid';

const Logo = styled.img`
    height: 200px;
    margin: 0 auto;
    display: block;
`;

class AppLayout extends React.Component {
    render() {
        return (
            <Grid>
                <Row center="xs">
                    <Col>
                        <Logo src={logoImg} />
                    </Col>
                </Row>
                <Row center="xs">
                    <Col>{this.props.children}</Col>
                </Row>
            </Grid>
        );
    }
}

export default AppLayout;
