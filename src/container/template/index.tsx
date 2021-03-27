import React from 'react';
import './index.less';
import Navigation from './components/Navigation';
import StaticResume from './components/StaticResume';
import MyRectSize from '@common/components/MyRectSize';
import { useHistory } from 'react-router';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';

function Resume() {
  const history = useHistory();
  const [currentTheme] = useGetCurrentThemeAction();
  function goBack() {
    history.push('/');
  }
  return (
    <div styleName="container">
      <div
        styleName="header"
        style={{ backgroundColor: currentTheme?.backgroundColor, color: currentTheme?.fontColor }}
      >
        <div styleName="back" onClick={goBack}>
          返回
        </div>
        <p styleName="title">简历模版仓库</p>
      </div>
      <div styleName="content">
        <MyRectSize>
          <MyRectSize.Left>
            <Navigation />
          </MyRectSize.Left>
          <MyRectSize.Right>
            <StaticResume />
          </MyRectSize.Right>
        </MyRectSize>
      </div>
    </div>
  );
}

export default Resume;
