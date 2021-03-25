/**
 * @desc 头像
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import AvatarDemo from '@assets/demo.jpg';

function Avatar() {
  return (
    <div styleName="box">
      <img src={AvatarDemo} />
    </div>
  );
}

export default Avatar;
