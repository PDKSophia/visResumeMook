/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2022-09-07 10:04:17
 * @LastEditTime: 2022-09-07 10:36:29
 */
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'electron';
console.log(_.ipcRenderer);

function App() {
  return (
    <div style={{ height: '100%' }}>
      <div
        style={{ height: 56, marginTop: '32px', textAlign: 'center', cursor: 'pointer' }}
        onClick={() => {
          _.ipcRenderer.send('xxx-open', 'start-course');
        }}
      >
        开始上课
      </div>
      <div
        style={{ height: 56, marginTop: '32px', textAlign: 'center', cursor: 'pointer' }}
        onClick={() => {
          _.ipcRenderer.send('xxx-open', 'class-people');
        }}
      >
        班级成员
      </div>
      <div
        style={{ height: 56, marginTop: '32px', textAlign: 'center', cursor: 'pointer' }}
        onClick={() => {
          _.ipcRenderer.send('xxx-open', 'manager-people');
        }}
      >
        人员管理
      </div>
      <div
        style={{ height: 56, marginTop: '32px', textAlign: 'center', cursor: 'pointer' }}
        onClick={() => {
          _.ipcRenderer.send('xxx-close');
        }}
      >
        退出
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
