import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@src/model/store';
import Router from './router';
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
