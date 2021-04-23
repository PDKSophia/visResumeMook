import _ from 'lodash';
import fs from 'fs';
import { readFile } from '@common/utils/fsfile';
import { useDispatch } from 'react-redux';
import { getAppPath } from '@common/utils/rootPath';
import { ThemeType } from '@common/types/theme';
import { createUID } from '@common/utils';
import { useReadSettingConfigContentAction } from './useSettingActionHooks';

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
      // 从assets读取模版图片信息，构造模版列表
      fs.readdir(`${rootPath}assets/images/template`, (err: NodeJS.ErrnoException | null, files: string[]) => {
        if (err) {
          throw new Error(err.message);
        } else {
          if (files.length > 0) {
            const list = files.map((fileName: string) => {
              return {
                id: createUID(),
                name: fileName,
                cover: `data:image/png;base64,${readFile(`${rootPath}assets/images/template/${fileName}`, 'base64')}`,
              };
            });
            dispatch({
              type: 'resumeModel/setStoreList',
              payload: [
                {
                  key: 'resumeTemplateList',
                  values: list,
                },
                {
                  key: 'selectResumeTemplate',
                  values: list[2], // 默认选中第二条，因为当前就第二条有模版
                },
              ],
            });
          }
        }
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
        type: 'globalModel/setStoreList',
        payload: [
          {
            key: 'currentTheme',
            values: nextTheme,
          },
          {
            key: 'themeList',
            values: themeList,
          },
        ],
      });
    });
  };
}
