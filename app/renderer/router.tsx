/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-07-26 09:24:20
 */
import React, { useEffect } from 'react';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { HashRouter, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
import TemplateList from '@src/container/templateList';
import ROUTER from '@common/constants/router';
import useThemeActionHooks from './hooks/useThemeActionHooks';
import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';

function Router() {
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
  const initThemeConfig = useThemeActionHooks.useInitThemeConfig();
  useEffect(() => {
    initThemeConfig();
    readDirAssetsTemplateHooks();
  }, []);

  return (
    <HashRouter>
      <CacheSwitch>
        <CacheRoute path={ROUTER.root} exact component={Root} />
        <CacheRoute path={ROUTER.resume} exact component={Resume} />
        <CacheRoute path={ROUTER.templateList} exact component={TemplateList} />
        <Redirect from={ROUTER.root} exact to={ROUTER.root} />
      </CacheSwitch>
    </HashRouter>
  );
}
export default Router;
