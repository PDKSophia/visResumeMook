/**
 * @desc 简单介绍
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';

function Synopsis() {
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return (
    <div styleName="content">
      {userResume?.base?.username && <p styleName="name">{userResume?.base?.username}</p>}
      {userResume?.work?.job && <p styleName="job">{userResume?.work?.job}</p>}
      {userResume?.evaluation && <p styleName="summary">{userResume?.evaluationList?.join('，')}</p>}
    </div>
  );
}

export default Synopsis;
