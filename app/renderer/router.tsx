/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-07-01 11:10:11
 */
import React, { useEffect } from 'react';
import { ipcRenderer } from 'electron';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
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

    // 监听事件
    ipcRenderer.on('sync-reply-resume-setting-path', (event, arg: string) => {
      if (arg) {
        console.log('哈哈哈哈', arg);
      } else {
        console.log('自定义存储路径失败');
      }
    });
  }, []);

  return (
    <HashRouter>
      <Switch>
        {/* 一定要添加 exact */}
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
        <Route path={ROUTER.templateList} exact>
          <TemplateList />
        </Route>
      </Switch>
      {/* 默认重定向到首页 */}
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
}
export default Router;
