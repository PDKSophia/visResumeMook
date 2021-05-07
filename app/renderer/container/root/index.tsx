/**
 * @description 可视化简历平台首页
 * @author pengdaokuan
 * @createTime 2021-04-08 19:57:20
 */
import React from 'react';
import './index.less';
import { shell } from 'electron';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { compilePath, isHttpOrHttpsUrl } from '@common/utils/router';
import Logo from '@assets/logo.png';
import MyTheme from '@components/MyTheme';
import Copyright from '@components/Copyright';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';

function Root() {
  const history = useHistory();
  const [currentTheme] = useGetCurrentThemeAction();
  const selectResumeTemplate = useSelector((state: any) => state.templateModel.selectResumeTemplate);

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      if (router.key !== ROUTER_KEY.resume) {
        history.push(compilePath(router.url));
      } else {
        history.push(compilePath(router.url, { templateId: selectResumeTemplate?.id, fromPath: ROUTER_KEY.root }));
      }
    }
  };

  return (
    <div styleName="root" style={{ backgroundColor: currentTheme?.backgroundColor }}>
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="theme">
          <MyTheme />
        </div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div
                key={router.key}
                styleName="item"
                style={{ color: currentTheme?.fontColor }}
                onClick={() => {
                  onRouterToLink(router);
                }}
              >
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <Copyright />
        </div>
      </div>
    </div>
  );
}
export default Root;
