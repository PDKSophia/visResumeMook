import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import * as Template from '@src/template';
import MyButton from '@components/MyButton';
import MyScrollBox from '@components/MyScrollBox';
import { compilePath } from '@common/utils/router';
import ROUTERS, { ROUTER_KEY } from '@common/constants/router';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';

function StaticResume() {
  const history = useHistory();
  const height = document.body.clientHeight;
  const [currentTheme] = useGetCurrentThemeAction();
  const selectResumeTemplate = useSelector((state: any) => state.resumeModel.selectResumeTemplate);

  if (height > 0) {
    return (
      <div styleName="container">
        <MyScrollBox maxHeight={height - 76}>
          <Template.TemplateOne />
          <div styleName="footer">
            <MyButton
              size="middle"
              className="use-btn"
              style={{ backgroundColor: currentTheme?.backgroundColor, color: currentTheme?.fontColor }}
              onClick={() => {
                history.push(
                  compilePath(ROUTERS.resume, { templateId: selectResumeTemplate?.id, fromPath: ROUTER_KEY.template })
                );
              }}
            >
              以此模版前往制作简历
            </MyButton>
          </div>
        </MyScrollBox>
      </div>
    );
  } else {
    return null;
  }
}

export default StaticResume;
