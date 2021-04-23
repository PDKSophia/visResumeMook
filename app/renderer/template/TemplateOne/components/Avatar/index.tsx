/**
 * @desc 头像
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';
import AvatarDemo from '@assets/demo.jpg';
import ResumeType from '@common/types/resume';

function Avatar() {
  const userResume: ResumeType = useSelector((state: any) => state.resumeModel.userResume);

  return (
    <div styleName="box">
      <img src={userResume?.baseInfo?.avatar || AvatarDemo} />
    </div>
  );
}

export default Avatar;
