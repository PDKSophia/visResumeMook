/**
 * @description 可视化简历平台首页
 * @author pengdaokuan
 * @createTime 2021-03-09 15:31:20
 */
import React, { useEffect } from 'react';
import './index.less';
import { shell } from 'electron';
import { useHistory } from 'react-router';
import { isUrl } from '@common/utils';
import { ROUTE_MAPS } from '@common/constants';
import { RouterType } from '@common/types/router';
import Logo from '../../../assets/logo.png';
import MyTheme from '@common/components/MyTheme';
import Copyright from '@common/components/Copyright';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';

function Root() {
  const history = useHistory();
  const [currentTheme] = useGetCurrentThemeAction();

  const onRouterToLink = (r: RouterType) => {
    if (isUrl(r.url)) {
      shell.openExternal(r.url);
    } else {
      history.push(r.url);
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
          {ROUTE_MAPS.map((r: RouterType) => {
            return (
              <div
                key={r.key}
                styleName="item"
                style={{ color: currentTheme?.fontColor }}
                onClick={() => {
                  onRouterToLink(r);
                }}
              >
                {r.text}
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
