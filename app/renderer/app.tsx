import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Title from './Title';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>可视化简历平台</div>
          <div>这是 Electron + React </div>
          <Title text="1" />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
