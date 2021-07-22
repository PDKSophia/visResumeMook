/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-07-22 14:23:48
 */
import React from 'react';
import './index.less';
import { shell } from 'electron';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { compilePath, isHttpOrHttpsUrl } from '@common/utils/router';
import Logo from '@assets/logo.png';
import MyTheme from '@common/components/MyTheme';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';
function Root() {
  const history = useHistory();
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();
  const selectTemplate = useSelector((state: any) => state.templateModel.selectTemplate);

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      if (router.key !== ROUTER_KEY.resume) {
        history.push(compilePath(router.url));
      } else {
        history.push(
          compilePath(router.url, {
            fromPath: ROUTER_KEY.root,
            templateId: selectTemplate?.templateId,
            templateIndex: selectTemplate?.templateIndex,
          })
        );
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
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;
