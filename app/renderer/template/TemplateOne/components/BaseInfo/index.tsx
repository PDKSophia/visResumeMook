/**
 * @desc 基本信息
 * @author pengdaokuan
 */
import React from 'react';
import '../../../styles/template-one.less';
import { useSelector } from 'react-redux';

function BaseInfo() {
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return (
    <div styleName="container">
      {userResume && userResume?.base && (
        <>
          <p styleName="title">基本信息 Basic</p>
          <ul styleName="content">
            {userResume?.base?.school && <li>院校：{userResume?.base?.school}</li>}
            {userResume?.base?.major && <li>专业：{userResume?.base?.major}</li>}
            {userResume?.base?.degree && <li>学历：{userResume?.base?.degree}</li>}
            {userResume?.base?.onSchoolTime && (
              <li>
                学年：{userResume?.base?.onSchoolTime?.beginTime} - {userResume?.base?.onSchoolTime?.endTime}
              </li>
            )}
            {userResume?.base?.hometown && <li>籍贯：{userResume?.base?.hometown}</li>}
          </ul>
        </>
      )}
    </div>
  );
}

export default BaseInfo;
