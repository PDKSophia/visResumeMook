import React from 'react';
import './index.less';
import ResumeActions from './components/ResumeActions';
import ResumeSlider from './components/ResumeSlider';
import MyScrollBox from '@components/MyScrollBox';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';
import * as Template from '@src/template';

function Resume() {
  const height = document.body.clientHeight;
  const [currentTheme] = useGetCurrentThemeAction();
  return (
    <div styleName="container" style={{ backgroundColor: currentTheme?.backgroundColor }}>
      <div styleName="header">
        <ResumeActions />
      </div>
      <ResumeSlider />
      <div styleName="box">
        <MyScrollBox maxHeight={height - 92}>
          <Template.TemplateOne />
        </MyScrollBox>
      </div>
    </div>
  );
}

export default Resume;
