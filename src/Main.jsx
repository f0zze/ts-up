import React from 'react';
import DevTools from 'mobx-react-devtools';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'theming';

import Home from './views/Home';
import List from './views/List';
import ItemDetails from './views/ItemDetails';

class Main extends React.Component {
    getRouter = () =>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/list/:id" component={ItemDetails} />
        </Switch>;

    getMobxDevTools = () => {
        return process.env.NODE_ENV === 'development' ? <DevTools /> : null;
    };

    render() {
        return (
            <div>
                {this.getMobxDevTools()}
                <ThemeProvider theme={{ primaryColor: 'red' }}>
                    <BrowserRouter>
                        {this.getRouter()}
                    </BrowserRouter>
                </ThemeProvider>
            </div>
        );
    }
}

export default Main;
