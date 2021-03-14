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
        <li styleName="item">熟悉HTML、CSS、JavaScript技术编程、熟悉Bootstrap框架，熟悉手写符合W3C标准代码</li>
        <li styleName="item">熟悉Vue.js，了解Node.js以及Git团队协作开发工具</li>
        <li styleName="item">了解React，ES6、 SCSS，使用Taro基于React开发小程序</li>
        <li styleName="item">熟悉PHP，使用ThinkPHP5.x框架</li>
        <li styleName="item">熟悉MYSQL，了解数据库优化常用方法</li>
        <li styleName="item">了解基于微信公众号应用开发，了解微信小程序，具备良好的网络基础知识</li>
      </ul>
    </div>
  );
}

export default Skill;
