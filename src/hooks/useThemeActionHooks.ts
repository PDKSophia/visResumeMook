/**
 * @description 主题换肤 hooks
 * @author pengdaokuan
 * @createTime 2021-03-09 16:12:31
 */

import { ThemeType } from '@common/types/theme';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateSettingConfigAction } from './useSettingActionHooks';

/**
 *  @description 获取当前主题
 */
function useGetCurrentThemeAction() {
  const changeTheme = useDispatchUpdateCurrentThemeAction();
  const theme = useSelector((state: any) => state.globalModel.currentTheme);
  return [theme, changeTheme];
}
/**
 * @description 更新当前选中的主题
 * @param {ThemeType} theme 目标主题
 * @param {boolean} isAsyncUpdateJsonFile 是否同步更新jsonfile配置
 */
function useDispatchUpdateCurrentThemeAction() {
  const dispatch = useDispatch();
  const updateSettingConfigAction = useUpdateSettingConfigAction();
  return (theme: ThemeType, isAsyncUpdateJsonFile?: boolean) => {
    dispatch({
      type: 'globalModel/setStore',
      payload: {
        key: 'currentTheme',
        values: theme,
      },
    });
    if (isAsyncUpdateJsonFile) {
      updateSettingConfigAction('currentTheme', theme.id);
    }
  };
}

/**
 * @description 更新主题列表
 * @param {ThemeType[]} themeList 主题列表
 * @param {boolean} isAsyncUpdateJsonFile 是否同步更新jsonfile配置
 */
function useDispatchUpdateThemeListAction() {
  const dispatch = useDispatch();
  const updateSettingConfigAction = useUpdateSettingConfigAction();
  return (list: ThemeType, isAsyncUpdateJsonFile?: boolean) => {
    dispatch({
      type: 'globalModel/setStore',
      payload: {
        key: 'themeList',
        values: list,
      },
    });
    if (isAsyncUpdateJsonFile) {
      updateSettingConfigAction('themeList', list);
    }
  };
}

export { useGetCurrentThemeAction, useDispatchUpdateCurrentThemeAction, useDispatchUpdateThemeListAction };
