import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'utils/history';
import { Home } from 'pages/home';
import { Main } from 'components/main';

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <ConnectedRouter history={history}>
      <Main>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect from="*" to="/home" />
        </Switch>
      </Main>
    </ConnectedRouter>
  );
};
