/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-30 10:25:30
 * @LastEditTime: 2021-06-30 11:23:53
 */
import React, { useState } from 'react';
import './index.less';
import MyButton from '@common/components/MyButton';

function Setting() {
  const [resumeSavePath, setResumeSavePath] = useState('');

  const onSave = () => {};
  return (
    <div styleName="container">
      <p styleName="label">修改简历数据储存路径</p>
      <div styleName="input">
        <div styleName="value">{resumeSavePath || '当前存储路径为：'}</div>
        <div styleName="update-btn">更改路径</div>
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
