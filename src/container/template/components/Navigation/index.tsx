/**
 * @description 模版简历悬浮器
 * @author {pengdaokuan}
 */
import React from 'react';
import './index.less';
import MyButton from '@common/components/MyButton';
import MyScrollBox from '@common/components/MyScrollBox';
import { useSelector } from 'react-redux';
import { ResumeTemplate } from '@common/types/resume';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';

function Navigation() {
  const height = document.body.clientHeight;
  const resumeTemplateList = useSelector((state: any) => state.resumeModel.resumeTemplateList);
  const [currentTheme] = useGetCurrentThemeAction();

  return (
    <div styleName="navigation">
      <MyScrollBox maxHeight={height - 60 - 32}>
        {resumeTemplateList &&
          !!resumeTemplateList.length &&
          resumeTemplateList.map((t: ResumeTemplate) => {
            return (
              <div styleName="template">
                <img src={t.cover} />
                <MyButton
                  size="middle"
                  className="use-btn"
                  styles={{ backgroundColor: currentTheme?.backgroundColor, color: currentTheme?.fontColor }}
                  onClick={() => {
                    console.log(1);
                  }}
                >
                  导出PDF
                </MyButton>
              </div>
            );
          })}
      </MyScrollBox>
    </div>
  );
}

export default Navigation;
