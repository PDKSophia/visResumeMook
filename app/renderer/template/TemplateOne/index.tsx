/**
 * @desc 模板1
 * @author pengdaokuan
 */
import React, { useEffect } from 'react';
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
import MyA4Hoc from '@common/hoc/MyA4Hoc';
import { useSelector } from 'react-redux';
import { RESUME_SLIDER_MAPS } from '@common/constants/resume';

function TemplateOne() {
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);
  const resumeSliderKeys: string[] = useSelector((state: any) => state.templateModel.resumeSliderKeys);
  // 必须带有id，以方便导出时获取DOM元素内容
  return (
    <div styleName="flex container" id="visPdf">
      {/* 左侧 */}
      <div styleName="left">
        <div styleName="avatar">
          <Avatar />
        </div>
        <div styleName="fillColor" />
        <div styleName="baseData">
          <BaseInfo />
          {resumeSliderKeys.includes(RESUME_SLIDER_MAPS.contact) && <Contact />}
          {resumeSliderKeys.includes(RESUME_SLIDER_MAPS.workPrefer) && <Job />}
          {resumeSliderKeys.includes(RESUME_SLIDER_MAPS.certificate) && <Certificate />}
        </div>
      </div>
      {/* 内容 */}
      <div styleName="center">
        {(resumeSliderKeys.includes(RESUME_SLIDER_MAPS.evaluation) || userResume?.base?.username) && <Synopsis />}
        <div styleName="listData">
          {resumeSliderKeys.includes(RESUME_SLIDER_MAPS.skill) && <Skill />}
          {resumeSliderKeys.includes(RESUME_SLIDER_MAPS.schoolExperience) && <Post />}
          {resumeSliderKeys.includes(RESUME_SLIDER_MAPS.projectExperience) && <Project />}
          {resumeSliderKeys.includes(RESUME_SLIDER_MAPS.workExperience) && <Work />}
        </div>
      </div>
    </div>
  );
}

export default MyA4Hoc(TemplateOne);
