import React from 'react';
import { render } from 'react-dom';
import RedBox from 'redbox-react';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import Main from './Main';

import './emotion/fonts';
import './emotion/globals';

useStrict(true);

import { HomeStore, STORE_HOME } from './views/Home/homeStore';

const store = {
    [STORE_HOME]: new HomeStore()
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
