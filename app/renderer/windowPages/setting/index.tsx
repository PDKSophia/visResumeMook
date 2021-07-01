/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-30 10:25:30
 * @LastEditTime: 2021-07-01 11:14:22
 */
import React, { useState, useEffect } from 'react';
import './index.less';
import { ipcRenderer } from 'electron';
import MyButton from '@common/components/MyButton';
import { getAppPath } from '@common/utils/appPath';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';

function Setting() {
  const [resumeSavePath, setResumeSavePath] = useState('');
  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();
  useEffect(() => {
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      if (value?.resumeSavePath) {
        setResumeSavePath(value?.resumeSavePath);
      } else {
        getAppPath().then((appPath: string) => {
          setResumeSavePath(`${appPath}appCache`);
          updateGlobalConfigFile('resumeSavePath', `${appPath}appCache`);
        });
      }
    });
  }, []);

  const onSave = () => {};

  const onChangePath = () => {
    // 1. 向主进程发送消息，因为 dialog 模块只能在主进程中调用
    ipcRenderer.send('open-save-resume-path', '');
    // 2. 监听从主进程发送回来的消息
    ipcRenderer.on('reply-save-resume-path', (event, arg: string[]) => {
      if (arg) {
        if (arg.length > 0) {
          setResumeSavePath(arg[0]);
          updateGlobalConfigFile('resumeSavePath', arg[0]);
        }
      } else {
        console.log('自定义存储路径失败');
      }
    });
  };
  return (
    <div styleName="container">
      <p styleName="label">修改简历数据储存路径</p>
      <div styleName="input">
        <div styleName="value">{resumeSavePath || '当前存储路径为：'}</div>
        <div styleName="update-btn" onClick={onChangePath}>
          更改路径
        </div>
      </div>
      <div styleName="bottom">
        <MyButton size="middle" className="save-btn" onClick={onSave}>
          保存
        </MyButton>
      </div>
    </div>
  );
}

export default Setting;
