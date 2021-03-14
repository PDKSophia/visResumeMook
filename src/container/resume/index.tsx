import React from 'react';
import './index.less';
import ResumeActions from './components/ResumeActions';
import ResumeSlider from './components/ResumeSlider';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';
import { TemplateOne } from '@common/restore';
function Resume() {
  const [currentTheme] = useGetCurrentThemeAction();

  return (
    <div styleName="container" style={{ backgroundColor: currentTheme?.backgroundColor }}>
      <ResumeActions />
      <ResumeSlider />
      <div styleName="box">
        <TemplateOne />
      </div>
    </div>
  );
}

export default Resume;
