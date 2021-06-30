/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-30 10:34:17
 * @LastEditTime: 2021-06-30 17:09:52
 */
import React from 'react';
import ReactDOM from 'react-dom';
import store from '@src/store';
import { Provider } from 'react-redux';
import Setting from './index';

function App() {
  return (
    <Provider store={store}>
      <Setting />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
