/**
 * @desc 工作经历
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
function Post() {
  return (
    <div styleName="content">
      <p styleName="label">工作经历 Work</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2017.09-2019.06</p>
            <p>前端工程师</p>
          </div>
          <div styleName="right">
            <p>湖南科技大学网络中心</p>
            <p>
              担任
              TickNet工作室前端工程师，与湖南科技大学网络中心合作，围绕微信企业号开发或主导多个应用，任职期间基于微信企业号开发校内闲余市场，采用
              Vue.js主导开发，并于湖南厚德科技有限公司合作，主导开发该公司官网及后台管理
            </p>
          </div>
        </li>
        <li styleName="flex">
          <div styleName="left">
            <p>2018.06-2019.01</p>
            <p>前端工程师</p>
          </div>
          <div styleName="right">
            <p>成都良师益友科技有限公司</p>
            <p>
              担任百词斩旗下闲蛋英语组前端实习生，任职期间负责线上的老系统进行日常维护和修复，配合leader，使用
              React+Taro参与新项目小程序的页面开发，同时使用 React+ AntDesign 对项目后台管理进行版本迭代
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Post;
