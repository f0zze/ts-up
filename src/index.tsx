import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { render } from 'react-dom';
import RedBox from 'redbox-react';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import userProfiles from './json/users.json';

import Main from './Main';

import './emotion/fonts';
import './emotion/globals';

useStrict(true);

import { HomeStore, STORE_HOME } from './views/Home/homeStore';
import { AuthStore, IAuthStore } from './stores/AuthStore';
import { UserListStore, IUserListStore } from './stores/UserListStore';

export interface IAppStore {
    authStore: IAuthStore;
    userListStore: IUserListStore;
}

const store: IAppStore = {
    [STORE_HOME]: new HomeStore(),
    userListStore: UserListStore.create({ users: userProfiles }),
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
