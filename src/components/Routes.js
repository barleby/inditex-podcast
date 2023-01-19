import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { Home } from './Home';
import { Podcast } from './Podcast';
import { Nav } from './Nav';
import { Header } from './Header';

// inject object History as prop
const ConHistoria = withRouter(Nav);

const Routes = () => {

    return (
        <BrowserRouter>

          <ConHistoria>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/podcast/:id" component={Podcast} />
            </Switch>
          </ConHistoria>
        </BrowserRouter>
    );
}
export {Routes}
