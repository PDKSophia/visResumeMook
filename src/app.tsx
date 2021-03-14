import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Redirect } from 'react-router-dom';
import ROUTERS from '@common/constants/router';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import Root from './container/root';
import Resume from './container/resume';
import { Provider } from 'react-redux';
import store from '@src/model/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <CacheSwitch>
          <CacheRoute path={ROUTERS.root} exact component={Root} />
          <CacheRoute path={ROUTERS.resume} exact component={Resume} />
          <Redirect from={ROUTERS.root} exact to={ROUTERS.root} />
        </CacheSwitch>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
