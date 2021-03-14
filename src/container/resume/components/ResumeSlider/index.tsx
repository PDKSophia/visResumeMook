/**
 * @description 编辑简历-工具条
 */
import React from 'react';
import './index.less';
import { RESUME_SLIDER_ACTION } from '@common/constants';

function ResumeSlider() {
  const onButtonAction = (actionName: string) => {
    console.log(actionName);
  };
  return (
    <div styleName="cell">
      <p styleName="text">所有工具条</p>
      <ul styleName="actions">
        <li styleName="btn" onClick={() => onButtonAction(RESUME_SLIDER_ACTION.PERSONAL)}>
          个人信息
        </li>
        <li styleName="btn" onClick={() => onButtonAction(RESUME_SLIDER_ACTION.EDUCATION)}>
          教育信息
        </li>
        <li styleName="btn" onClick={() => onButtonAction(RESUME_SLIDER_ACTION.WORK_PREFER)}>
          求职意向
        </li>
        <li styleName="btn" onClick={() => onButtonAction(RESUME_SLIDER_ACTION.CERTIFICATE)}>
          获奖证书
        </li>
        <li styleName="btn" onClick={() => onButtonAction(RESUME_SLIDER_ACTION.EVALUATION)}>
          个人评价
        </li>
        <li styleName="btn" onClick={() => onButtonAction(RESUME_SLIDER_ACTION.SKILL)}>
          技能清单
        </li>
        <li styleName="btn" onClick={() => onButtonAction(RESUME_SLIDER_ACTION.SCHOOL_EXPERIENCE)}>
          在校经历
        </li>
        <li styleName="btn" onClick={() => onButtonAction(RESUME_SLIDER_ACTION.PROJECT_EXPERIENCE)}>
          项目经验
        </li>
        <li styleName="btn" onClick={() => onButtonAction(RESUME_SLIDER_ACTION.WORK_EXPERIENCE)}>
          工作经历
        </li>
        <li styleName="btn" onClick={() => onButtonAction(RESUME_SLIDER_ACTION.TEST_DEMO)}>
          测试用例
        </li>
      </ul>
    </div>
  );
}

export default ResumeSlider;
