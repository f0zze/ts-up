import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RedBox from 'redbox-react';

import Main from './Main';

import './emotion/fonts';
import './emotion/globals';

const root = document.getElementById('app');

if (process.env.NODE_ENV === 'development') {
    try {
        ReactDOM.render(<Main/>, root);
    } catch (e) {
        ReactDOM.render(<RedBox error={e}/>, root);
    }
} else {
    ReactDOM.render(<Main/>, root);
}

