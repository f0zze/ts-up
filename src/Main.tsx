import * as React from 'react';
import DevTools from 'mobx-react-devtools';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'theming';

import Home from './views/Home';
import List from './views/List';
import ItemDetails from './views/ItemDetails';
import Recipe from './views/Recipe';
import theme from './theme';

class Main extends React.Component {
    getRouter = () => (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/list/:id" component={ItemDetails} />
            <Route path="/form" component={Recipe} />
        </Switch>
    );

    getMobxDevTools = () => {
        return process.env.NODE_ENV === 'development' ? <DevTools /> : null;
    };

    render() {
        return (
            <div>
                {this.getMobxDevTools()}
                <ThemeProvider theme={theme}>
                    <BrowserRouter>{this.getRouter()}</BrowserRouter>
                </ThemeProvider>
            </div>
        );
    }
}

export default Main;
