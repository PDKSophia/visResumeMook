/*
 * @Description:初始化Hooks
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-30 16:41:52
 * @LastEditTime: 2021-06-30 17:31:30
 */
import { useDispatch } from 'react-redux';
import { getAppPath } from '@common/utils/appPath';
import { ipcRenderer } from 'electron';

export default function () {
  const dispatch = useDispatch();
  return () => {
    // 1. 先获取应用地址
    getAppPath().then((appPath: string) => {
      // 2. 默认应用存储路径
      dispatch({
        type: 'globalModel/setStore',
        payload: {
          key: 'resumeSaveSettingPath',
          values: `${appPath}appCache`,
        },
      });
      // 将默认数据抛出去
      ipcRenderer.send('ELECTRON:default-path_from_mainWindow_to_settingWindow', `${appPath}appCache`);
    });
  };
}
