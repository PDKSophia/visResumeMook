/**
 * @desc 基本信息
 * @author pengdaokuan
 */
import React from 'react';
import '../../../styles/template-one.less';
import { useSelector } from 'react-redux';
import ResumeType from '@common/types/resume';

function BaseInfo() {
  const userResume: ResumeType = useSelector((state: any) => state.resumeModel.userResume);

  return (
    <div styleName="container">
      {userResume && userResume?.baseInfo && (
        <>
          <p styleName="title">基本信息 Basic</p>
          <ul styleName="content">
            {userResume?.baseInfo?.school && <li>院校：{userResume?.baseInfo?.school}</li>}
            {userResume?.baseInfo?.major && <li>专业：{userResume?.baseInfo?.major}</li>}
            {userResume?.baseInfo?.degree && <li>学历：{userResume?.baseInfo?.degree}</li>}
            {userResume?.baseInfo?.onSchoolTime && (
              <li>
                学年：{userResume?.baseInfo?.onSchoolTime?.beginTime} - {userResume?.baseInfo?.onSchoolTime?.endTime}
              </li>
            )}
            {userResume?.baseInfo?.hometown && <li>籍贯：{userResume?.baseInfo?.hometown}</li>}
          </ul>
        </>
      )}
    </div>
  );
}

export default BaseInfo;
