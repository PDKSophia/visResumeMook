/**
 * @desc electron 主入口
 */
 import path from 'path';
 import { app, BrowserWindow } from 'electron';
 
 function isDev() {
   // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
   return process.env.NODE_ENV === 'development';
 }
 
 function createWindow() {
   // 创建浏览器窗口
   const mainWindow = new BrowserWindow({
     width: 1200,
     height: 800,
     webPreferences: {
       devTools: true,
       nodeIntegration: true,
     },
   });
 
   if (isDev()) {
     // 👇 看到了吗，在开发环境下，我们加载的是运行在 7001 端口的 React
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
 