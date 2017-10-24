import * as React from 'react';
import { render } from 'react-dom';
import RedBox from 'redbox-react';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import Main from './Main';

import './emotion/fonts';
import './emotion/globals';

useStrict(true);

import { HomeStore, STORE_HOME } from './views/Home/homeStore';
import { AuthStore, IAuthStore } from './stores/AuthStore';
import { ProfileListStore, IProfileListStore } from './views/Profiles/ProfilesStore';

export interface IAppStore {
    authStore: IAuthStore;
    profileListStore: IProfileListStore;
}

const store: IAppStore = {
    [STORE_HOME]: new HomeStore(),
    profileListStore: ProfileListStore.create(),
    authStore: AuthStore.create({
        logged: {
            id: 1,
            name: 'Aigars'
        }
    })
};

const root = document.getElementById('app');

if (process.env.NODE_ENV === 'development') {
    try {
        render(<MainContainer />, root);
    } catch (e) {
        render(<RedBox error={e} />, root);
    }
} else {
    render(<MainContainer />, root);
}

function MainContainer() {
    return (
        <Provider {...store}>
            <Main />
        </Provider>
    );
}
