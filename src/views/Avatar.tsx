import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IAuthStore } from '../stores/AuthStore';
import { IAppStore } from '../index';

interface OwnProps {
    authStore?: IAuthStore;
}

@inject((stores: IAppStore): Partial<OwnProps> => ({
    authStore: stores.authStore
}))
@observer
class Avatar extends React.Component<OwnProps> {
    render() {
        return <div>Logged user: {this.props.authStore.loggedName}</div>;
    }
}

export default Avatar;
