/**
 * @desc 头像
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';
import AvatarDemo from '@assets/demo.jpg';

function Avatar() {
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return (
    <div styleName="box">
      <img src={userResume?.base?.avatar || AvatarDemo} />
    </div>
  );
}

export default Avatar;
