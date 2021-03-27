import _ from 'lodash';
import fs from 'fs';
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
            dispatch({
              type: 'resumeModel/setStore',
              payload: {
                key: 'resumeTemplateList',
                values: files.map((fileName: string) => {
                  let fileRead = new FileReader();
                  return {
                    id: createUID(),
                    name: fileName,
                    // cover: fileRead.readAsDataURL(
                    //   new Blob([readFile(`${rootPath}assets/images/template/${fileName}`, 'base64')])
                    // ),
                    cover:
                      'https://dev-private-test.seewo.com/seewo-drive-test/7f93ec3ee4dd4d5ba547ba5a39615ee2?e=1679925488&token=8nJLxlsdAhTqpjhpbx9uA-z75KqwEIPU1vzi9yRE:qOFKp0t-F1sEvCouBC-4kN4YZ2s=',
                  };
                }),
              },
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
