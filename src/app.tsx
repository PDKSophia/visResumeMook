import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Redirect } from 'react-router-dom';
import ROUTERS from '@common/constants/router';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import Root from './container/root';
import Resume from './container/resume';

function App() {
  return (
    <Router>
      <CacheSwitch>
        <CacheRoute path={ROUTERS.root} component={Root} />
        <CacheRoute path={ROUTERS.resume} component={Resume} />
        <Redirect from={ROUTERS.root} to={ROUTERS.root} />
      </CacheSwitch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
