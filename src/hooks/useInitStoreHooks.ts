import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { useReadSettingConfigContentAction } from './useSettingActionHooks';
import { getAppPath } from '@common/utils/rootPath';
import { ThemeType } from '@common/types/theme';

export default function () {
  const dispatch = useDispatch();
  const readSettingConfigContentAction = useReadSettingConfigContentAction();
  return () => {
    getAppPath().then((rootPath: string) => {
      dispatch({
        type: 'globalModel/setStore',
        payload: {
          key: 'rootPath',
          values: rootPath,
        },
      });
    });
    readSettingConfigContentAction().then((values: { [key: string]: any }) => {
      const themeList: ThemeType[] = values.themeList || [];
      const prevTheme: string = values.currentTheme || '';
      const initTheme = { id: 'dark', fontColor: '#ffffff', backgroundColor: '#27292c' };
      let nextTheme: ThemeType;

      if (themeList.length > 0) {
        if (prevTheme) {
          nextTheme = _.find(themeList, { id: prevTheme }) || initTheme;
        } else {
          nextTheme = themeList[0];
        }
      } else {
        nextTheme = initTheme;
      }
      dispatch({
        type: 'globalModel/setStore',
        payload: {
          key: 'currentTheme',
          values: nextTheme,
        },
      });
      dispatch({
        type: 'globalModel/setStore',
        payload: {
          key: 'themeList',
          values: themeList,
        },
      });
    });
  };
}
