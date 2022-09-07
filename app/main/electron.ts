/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2022-09-07 09:55:15
 * @LastEditTime: 2022-09-07 10:36:37
 */
/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';

function isDev() {
  // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
  return process.env.NODE_ENV === 'development';
}

let mainWindow: any = null;
let toolbarWindow: any = null;

function createWindow() {
  // 创建主窗口
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: '内容展示',
    show: false,
    frame: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });

  // 侧边栏窗口
  toolbarWindow = new BrowserWindow({
    width: 120,
    height: 600,
    title: '侧边栏',
    frame: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });

  if (isDev()) {
    // 👇 看到了吗，在开发环境下，我们加载的是运行在 7001 端口的 React
    mainWindow.loadURL(`http://127.0.0.1:7001/index.html`);
    toolbarWindow.loadURL(`http://127.0.0.1:7001/toolbar.html`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    toolbarWindow.loadURL(`file://${path.join(__dirname, '../dist/toolbar.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

ipcMain.on('xxx-open', (event, arg) => {
  mainWindow.show();
  mainWindow.webContents.send('show-and-render', arg);
});
ipcMain.on('xxx-close', (event, arg) => {
  mainWindow.hide();
});
