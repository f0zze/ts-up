import * as React from 'react';
import { inject, observer } from 'mobx-react/custom';
import { Col, Row } from 'react-flexbox-grid';
import { IAppStore } from '../../index';
import { IProfileListStore } from './ProfilesStore';
import { IUserProfile } from './ProfileModel';
import { H2 } from '../../emotion/typography';

interface OwnProps {
    profiles?: IProfileListStore;
}

@inject((stores: IAppStore): Partial<OwnProps> => ({
    profiles: stores.profileListStore
}))
@observer
class Profiles extends React.Component<OwnProps> {
    componentWillMount() {
        this.props.profiles.loadProfiles();
    }

    render() {
        return (
            <Row>
                {this.props.profiles.users.map(profile => {
                    return this.renderProfile(profile);
                })}
            </Row>
        );
    }

    private renderProfile = (profile: IUserProfile) => {
        return (
            <Col md={3} sm={12}>
                <H2>{profile.name}</H2>
                <p>{profile.jobTitle}</p>
                <a href="#">details</a>
            </Col>
        );
    };
}

export default Profiles;
