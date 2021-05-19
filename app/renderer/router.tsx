import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from './container/root';

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/">
          <Root />
        </Route>
      </Switch>
      {/* 默认重定向到首页 */}
      <Redirect to="/" />
    </HashRouter>
  );
}
export default Router;
