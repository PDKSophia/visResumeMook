import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
import TemplateList from '@src/container/templateList';
import ROUTER from '@common/constants/router';

function Router() {
  return (
    <HashRouter>
      <Switch>
        {/* 一定要添加 exact */}
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
        <Route path={ROUTER.templateList} exact>
          <TemplateList />
        </Route>
      </Switch>
      {/* 默认重定向到首页 */}
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
}
export default Router;
