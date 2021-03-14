/**
 * @desc 项目经历
 * @author pengdaokuan
 * @createTime 2020-04-27
 * @lastModify 2020-04-27
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
            <p>erek-resumes 云简历平台 - 前端工程师</p>
          </div>
          <div styleName="text">
            <ul styleName="utext">
              <li styleName="liname">实现首页主题设置, 接入API，封装请求request, 使用i18n, 实现中英版本切换</li>
              <li styleName="liname">
                sessionStorage缓存用户信息, 解决刷新丢失用户数据, vuex缓存用户信息，实现数据双向响应
              </li>
              <li styleName="liname">实现一份信息，多份简历模板，支持PDF打印下载</li>
            </ul>
          </div>
        </li>
        <li styleName="flex">
          <div styleName="left">
            <p>2020.04-2020.05</p>
          </div>
          <div styleName="right">
            <p>vue-erek-manage 后台管理平台 - 前端工程师</p>
          </div>
          <div styleName="text">
            <ul styleName="utext">
              <li styleName="liname">基于 Vue 2.5 + iView UI 进行开发，快速搭建后台管理平台，自定义页面</li>
              <li styleName="liname">借鉴模仿 pro-ant-design的设计，适用于小型项目后台管理</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Project;
