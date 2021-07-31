/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 16:58:13
 * @LastEditTime: 2021-07-31 09:52:54
 */
import path from 'path';
import _ from 'lodash';
import fileAction from '@common/utils/file';
import { getUserStoreDataPath } from '@common/utils/appPath';
import { useDispatch, useSelector } from 'react-redux';

/**
 * @description 获取当前主题与修改组件方法
 */
function useGetCurrentTheme() {
  const changeTheme = useChangeCurrentTheme();
  const currentTheme = useSelector((state: any) => state.themeModel.currentTheme);
  return [currentTheme, changeTheme];
}

/**
 * @description 更新当前选中的主题
 * @param {TSTheme.Item} theme 目标主题
 * @param {boolean} isAsyncUpdateJsonFile 是否同步更新jsonfile配置
 */
function useChangeCurrentTheme() {
  const dispatch = useDispatch();
  const updateAppConfigThemeFile = useUpdateAppConfigThemeFile();
  return (theme: TSTheme.Item) => {
    dispatch({
      type: 'themeModel/setStore',
      payload: {
        key: 'currentTheme',
        values: theme,
      },
    });
    updateAppConfigThemeFile('currentTheme', theme);
  };
}

/**
 * @description 初始化读取主题配置文件
 */
function useInitThemeConfig() {
  const selectTheme = useSelectTheme();
  const readAppConfigThemeFile = useReadAppConfigThemeFile();
  return () => {
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      selectTheme(value);
    });
  };
}

/**
 * @description 对比上一轮的选中的主题皮肤
 */
function useSelectTheme() {
  const dispatch = useDispatch();
  return (themeConfigValues: any) => {
    const prevTheme: TSTheme.Item = themeConfigValues?.currentTheme;
    const initTheme = { id: 'dark', fontColor: '#ffffff', backgroundColor: '#27292c' };

    let nextTheme: TSTheme.Item;
    if (themeConfigValues?.themeList.length > 0) {
      if (prevTheme) nextTheme = prevTheme || initTheme;
      else nextTheme = themeConfigValues?.themeList[0];
    } else {
      nextTheme = initTheme;
    }
    dispatch({
      type: 'themeModel/setStoreList',
      payload: [
        {
          key: 'currentTheme',
          values: nextTheme,
        },
        {
          key: 'themeList',
          values: themeConfigValues?.themeList,
        },
      ],
    });
  };
}

/**
 * @description 读取配置文件的内容
 */
function useReadAppConfigThemeFile() {
  return () => {
    return new Promise((resolve: (values: { [key: string]: any }) => void, reject: (value: Error) => void) => {
      getUserStoreDataPath().then((appPath: string) => {
        const jsonPath = path.join(appPath, 'appConfig/theme.config.json');
        fileAction
          .hasFile(jsonPath)
          .then(async () => {
            const themeConfigValues = await fileAction.read(jsonPath, 'utf-8');
            resolve(JSON.parse(themeConfigValues));
          })
          .catch(() => {
            reject(new Error('appConfig does not exist !'));
          });
      });
    });
  };
}

/**
 * @description 更新配置表中的用户设置信息
 * @param {string} updateKey 键
 * @param {any} updateValues 值
 * @param {function} callback 回调函数
 */
function useUpdateAppConfigThemeFile() {
  const readAppConfigThemeFile = useReadAppConfigThemeFile();
  return (updateKey: string, updateValues: any, callback?: () => void) => {
    getUserStoreDataPath().then((appPath: string) => {
      const jsonPath = path.join(appPath, 'appConfig/theme.config.json');
      readAppConfigThemeFile().then((values: { [key: string]: any }) => {
        if (values && !!Object.keys(values).length) {
          const nextConfigContent = {
            ...values,
            [`${updateKey}`]: updateValues,
          };
          fileAction.canWrite(jsonPath).then(() => {
            fileAction.write(jsonPath, nextConfigContent, 'utf-8').then(() => {
              callback && callback();
            });
          });
        }
      });
    });
  };
}

export default {
  useGetCurrentTheme,
  useInitThemeConfig,
};
