import { Description, List, SignIn, Task, Info } from 'pages';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalCss';
import ROUTES from 'const/routes';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route exact path={ROUTES.DESCRIPTION} component={Description} />
        <Route exact path={ROUTES.LIST} component={List} />
        <Route exact path={ROUTES.TASK} component={Task} />
        <Route exact path={ROUTES.INFO} component={Info} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};
