import * as React from 'react';
import { inject, observer } from 'mobx-react/custom';
import { Col, Row } from 'react-flexbox-grid';
import { IAppStore } from '../../index';
import { IUserListStore } from './ProfilesStore';
import { IUserProfile } from './ProfileModel';
import { H2 } from '../../emotion/typography';

interface OwnProps {
    profiles?: IUserListStore;
}

@inject((stores: IAppStore): Partial<OwnProps> => ({
    profiles: stores.userListStore
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
            <Col md={3}>
                <div className="card">
                    {/*<img className="card-img-top" src="..." alt="Card image cap"/>*/}
                    <div className="card-block">
                        <H2>{profile.name}</H2>
                        <p className="card-text">{profile.jobTitle}</p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </Col>
        );
    };
}

export default Profiles;
