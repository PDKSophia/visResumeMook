/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';

function isDev() {
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    resizable: false,
    focusable: true,
    webPreferences: {
      devTools: true,
      webSecurity: true,
      nodeIntegration: true,
    },
  });

  // 加载应用的 index.html。
  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
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
