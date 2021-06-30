/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, BrowserWindow, ipcMain, dialog } from 'electron';

function isDev() {
  // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
  return process.env.NODE_ENV === 'development';
}

let currentSettingWindow: BrowserWindow;

function createWindow() {
  // 创建主应用窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });

  // 创建应用设置窗口
  const settingWindow = new BrowserWindow({
    width: 720,
    height: 240,
    resizable: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });

  currentSettingWindow = settingWindow;

  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001/index.html`);
    settingWindow.loadURL(`http://127.0.0.1:7001/setting.html`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    settingWindow.loadURL(`file://${path.join(__dirname, '../dist/setting.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

const ROOT_PATH = path.join(app.getAppPath(), '../');

ipcMain.on('get-root-path', (event, arg) => {
  event.reply('reply-root-path', ROOT_PATH);
});

// 在主应用窗口获取默认路径之后，同步到应用设置窗口
ipcMain.on('ELECTRON:default-path_from_mainWindow_to_settingWindow', (event, arg) => {
  console.log('从A过来的数据', arg);
  currentSettingWindow.webContents.on('did-finish-load', () => {
    currentSettingWindow.webContents.send('ELECTRON:default-path_from_settingWindow_to_mainWindow', arg);
  });
});

// 应用设置，保存自定义存储路径
ipcMain.on('open-save-resume-path', (event, arg) => {
  dialog
    .showOpenDialog({
      properties: ['openDirectory'],
    })
    .then((result) => {
      event.reply('reply-save-resume-path', result.filePaths);
    })
    .catch((err) => {
      event.reply('reply-save-resume-path', err);
    });
});
