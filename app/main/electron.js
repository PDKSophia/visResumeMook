/**
 * @desc electron 主入口
 */
 const path = require('path');
 const { app, BrowserWindow } = require('electron');
 
 function createWindow() {
   // 创建浏览器窗口
   const mainWindow = new BrowserWindow({
     width: 1200,
     height: 800,
     webPreferences: {
       nodeIntegration: true, // 注入node模块
     },
   });
 
   mainWindow.loadFile('index.html');
 }
 
 app.whenReady().then(() => {
   createWindow();
   app.on('activate', function () {
     if (BrowserWindow.getAllWindows().length === 0) createWindow();
   });
 });