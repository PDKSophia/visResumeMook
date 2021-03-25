/**
 * @desc 项目经历
 * @author pengdaokuan
 * @createTime 2021-03-22
 * @lastModify 2021-03-22
 */
import React from 'react';
import './index.less';

function Project() {
  return (
    <div styleName="content">
      <p styleName="label">项目经历 Project</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2020.08-2020.09</p>
          </div>
          <div styleName="right">
            <p>rc-redux-model 中间件 - 前端工程师</p>
          </div>
          <div styleName="text">
            <ul styleName="item-box">
              <li styleName="item-content">
                <span>阅读 redux 源码，阅读 redux-thunk 源码，参考 dva.js 数据设计</span>
              </li>
              <li styleName="item-content">
                <span> 内部实现 thunk，所有的 dispatch action 都是异步 action，内部实现异步 action 机制</span>
              </li>
            </ul>
          </div>
        </li>
        <li styleName="flex">
          <div styleName="left">
            <p>2021.03-2021.08</p>
          </div>
          <div styleName="right">
            <p>visResumeMook 可视化简历平台 - 前端工程师</p>
          </div>
          <div styleName="text">
            <ul styleName="item-box">
              <li styleName="item-content">
                <span>Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版</span>
              </li>
              <li styleName="item-content">
                <span>通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档</span>
              </li>
              <li styleName="item-content">
                <span>通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Project;
