/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2022-09-07 09:55:15
 * @LastEditTime: 2022-09-07 10:35:46
 */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import _ from 'electron';
console.log(_.ipcRenderer);
function App() {
  const [type, setType] = React.useState('');

  useEffect(() => {
    _.ipcRenderer.on('show-and-render', (event, arg) => {
      setType(arg);
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/">
          {type === 'start-course' && <div>开始上课的 UI 显示</div>}
          {type === 'class-people' && <div>班级成员的 UI 显示</div>}
          {type === 'manager-people' && <div>人员管理的 UI 显示</div>}
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
