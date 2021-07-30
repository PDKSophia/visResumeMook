/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-07-30 11:19:28
 * @LastEditTime: 2021-07-30 17:05:59
 */
import { app, ipcMain } from 'electron';
import path from 'path';
import fileAction from '@common/utils/file';

const appConfigPath = path.resolve(app.getPath('userData'), 'appConfig');

fileAction
  .canRead(appConfigPath)
  .then(() => {
    fileAction.hasFile(`${appConfigPath}/theme.config.json`).catch(() => {
      createThemeConfigJson();
    });
    fileAction.hasFile(`${appConfigPath}/global.config.json`).catch(() => {
      createGlobalConfigJson();
    });
  })
  .catch(() => {
    fileAction.mkdirDir(appConfigPath).then(() => {
      createThemeConfigJson();
      createGlobalConfigJson();
    });
  });

const createThemeConfigJson = () => {
  fileAction?.write(
    `${appConfigPath}/theme.config.json`,
    {
      name: '主题配置表',
      currentTheme: { id: 'green', fontColor: '#ffffff', backgroundColor: '#416f5b' },
      themeList: [
        { id: 'dark', fontColor: '#ffffff', backgroundColor: '#27292c' },
        { id: 'blue', fontColor: '#ffffff', backgroundColor: '#35495e' },
        { id: 'green', fontColor: '#ffffff', backgroundColor: '#416f5b' },
        { id: 'purple', fontColor: '#ffffff', backgroundColor: '#54546c' },
        { id: 'princess', fontColor: '#ffffff', backgroundColor: '#945454' },
      ],
    },
    'utf8'
  );
};

const createGlobalConfigJson = () => {
  fileAction?.write(`${appConfigPath}/global.config.json`, { name: '全局配置表', resumeSavePath: '' }, 'utf8');
};

ipcMain.on('Electron:get-userData-path', (event, arg) => {
  event.reply('Electron:reply-userData-path', app.getPath('userData'));
});
