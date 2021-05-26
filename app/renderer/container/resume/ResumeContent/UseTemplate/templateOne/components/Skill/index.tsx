/**
 * @desc 技能
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';

function Skill() {
  return (
    <div styleName="content">
      <p styleName="label">技能证书 Skill</p>
      <ul styleName="skill">
        <li styleName="item">熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码</li>
        <li styleName="item">熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件</li>
        <li styleName="item">阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库</li>
        <li styleName="item">了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件</li>
        <li styleName="item">了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件</li>
        <li styleName="item">了解 Electron，了解 Node.js 以及 Git 团队协作开发工具</li>
        <li styleName="item">解设计模式，对于特定场景，能采用合适的设计模式进行解决</li>
        <li styleName="item">了解 MYSQL，了解数据库优化常用方法</li>
        <li styleName="item">了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识</li>
      </ul>
    </div>
  );
}

export default Skill;
