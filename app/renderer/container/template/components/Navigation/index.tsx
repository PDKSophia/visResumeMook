/**
 * @description 模版简历悬浮器
 * @author {pengdaokuan}
 * @createTime 2021-04-08 19:57:20
 */
import React from 'react';
import './index.less';
import MyButton from '@components/MyButton';
import MyScrollBox from '@components/MyScrollBox';
import UseIcon from '@assets/icon/use.png';
import { useSelector } from 'react-redux';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';

function Navigation() {
  const height = document.body.clientHeight;
  const resumeTemplateList = useSelector((state: any) => state.templateModel.resumeTemplateList);
  const selectResumeTemplate = useSelector((state: any) => state.templateModel.selectResumeTemplate);
  const [currentTheme] = useGetCurrentThemeAction();

  return (
    <div styleName="navigation">
      <MyScrollBox maxHeight={height - 60 - 32}>
        {resumeTemplateList &&
          !!resumeTemplateList.length &&
          resumeTemplateList.map((t: TSResume.TemplateItem) => {
            return (
              <div styleName="template" key={t.id}>
                <img styleName="cover" src={t.cover} />
                <div styleName="mask">
                  {selectResumeTemplate?.id === t.id && <img styleName="use" src={UseIcon} />}
                  {selectResumeTemplate?.id !== t.id && (
                    <MyButton
                      size="middle"
                      className="view-btn"
                      style={{ backgroundColor: currentTheme?.backgroundColor, color: currentTheme?.fontColor }}
                      onClick={() => {
                        console.log(1);
                      }}
                    >
                      预览
                    </MyButton>
                  )}
                </div>
              </div>
            );
          })}
      </MyScrollBox>
    </div>
  );
}

export default Navigation;