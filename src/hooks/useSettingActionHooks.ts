/**
 * @description 用户配置相关hooks
 * @author pengdaokuan
 */
import path from 'path';
import { getAppPath } from '@common/utils/rootPath';
import { hasFile, readJsonFile, updateJsonFile } from '@common/utils';

// 读取配置绝对路径
function useReadSettingConfigPathAction() {
  return () => {
    return new Promise((resolve: (value: string) => void, reject: (value: Error) => void) => {
      getAppPath().then((rootPath: string) => {
        const jsonPath = path.join(rootPath, 'config/setting.json');
        if (hasFile(jsonPath)) {
          resolve(jsonPath);
        } else {
          reject(new Error('path is error!'));
        }
      });
    });
  };
}

/**
 * @description 读取配置表信息
 */
function useReadSettingConfigContentAction() {
  const readSettingConfigPathAction = useReadSettingConfigPathAction();
  return () => {
    return new Promise((resolve: (values: { [key: string]: any }) => void, reject: (value: Error) => void) => {
      readSettingConfigPathAction().then((jsonPath: string) => {
        if (hasFile(jsonPath)) {
          const values = readJsonFile(jsonPath);
          resolve(values);
        } else {
          reject(new Error('get setting config error !'));
        }
      });
    });
  };
}

//
/**
 * @description 更新配置表中的用户设置信息
 * @param {string} updateKey 键
 * @param {any} updateValues 值
 * @param {function} callback 回调函数
 */
function useUpdateSettingConfigAction() {
  const readSettingConfigPathAction = useReadSettingConfigPathAction();
  const readSettingConfigContentAction = useReadSettingConfigContentAction();

  return (updateKey: string, updateValues: any, callback?: () => void) => {
    readSettingConfigPathAction().then((jsonPath: string) => {
      readSettingConfigContentAction().then((values: { [key: string]: any }) => {
        if (values && !!Object.keys(values).length) {
          const nextConfigContent = {
            ...values,
            [`${updateKey}`]: updateValues,
          };
          updateJsonFile(jsonPath, nextConfigContent);
          callback && callback();
        }
      });
    });
  };
}

export { useReadSettingConfigPathAction, useReadSettingConfigContentAction, useUpdateSettingConfigAction };
