import React, { useEffect } from 'react';
import { HashRouter, Redirect } from 'react-router-dom';
import ROUTERS from '@common/constants/router';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import Root from './container/root';
import Resume from './container/resume';
import Template from './container/template';
import useInitStoreHooks from '@src/hooks/useInitStoreHooks';

function Router() {
  const initStoreHooks = useInitStoreHooks();

  useEffect(() => {
    initStoreHooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HashRouter>
      <CacheSwitch>
        <CacheRoute path={ROUTERS.root} exact component={Root} />
        <CacheRoute path={ROUTERS.resume} exact component={Resume} />
        <CacheRoute path={ROUTERS.template} exact component={Template} />
        <Redirect from={ROUTERS.root} exact to={ROUTERS.root} />
      </CacheSwitch>
    </HashRouter>
  );
}

export default Router;
