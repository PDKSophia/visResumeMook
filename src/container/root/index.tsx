/**
 * @description 可视化简历平台首页
 * @author pengdaokuan
 * @createTime 2021-03-09 15:31:20
 */
import React, { useEffect } from 'react';
import './index.less';
import Logo from '../../../assets/logo.png';
import MyTheme from '@common/components/MyTheme';
import useInitStoreHooks from '@src/hooks/useInitStoreHooks';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';

function Root() {
  const initStoreHooks = useInitStoreHooks();
  const [currentTheme] = useGetCurrentThemeAction();
  useEffect(() => {
    initStoreHooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div styleName="root" style={{ backgroundColor: currentTheme?.backgroundColor }}>
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="theme">
          <MyTheme />
        </div>
      </div>
    </div>
  );
}
export default Root;
