/**
 * @desc 模板1
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import Contact from './components/Contact';
import Job from './components/Job';
import Certificate from './components/Certificate';
import Synopsis from './components/Synopsis';
import Skill from './components/Skill';
import Post from './components/Post';
import Project from './components/Project';
import Work from './components/Work';

function TemplateOne() {
  // 必须带有id，以方便导出时获取DOM元素内容
  return (
    <div styleName="a4-box">
      <div styleName="flex container" id="visPdf">
        {/* 左侧 */}
        <div styleName="left">
          <div styleName="avatar">
            <Avatar />
          </div>
          <div styleName="fillColor" />
          <div styleName="baseData">
            <BaseInfo />
            <Contact />
            <Job />
            <Certificate />
          </div>
        </div>
        {/* 内容 */}
        <div styleName="center">
          <Synopsis />
          <div styleName="listData">
            <Skill />
            <Post />
            <Project />
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateOne;
