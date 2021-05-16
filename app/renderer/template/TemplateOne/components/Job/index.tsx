/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import React from 'react';
import '../../../less/template-one.less';
import './index.less';
import { useSelector } from 'react-redux';

function Job() {
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);
  const cityList = userResume?.work?.cityList || [];
  return (
    <div styleName="container">
      <p styleName="title">求职意向 Work</p>
      <ul styleName="content">
        {userResume?.work?.job && <li>职位：{userResume?.work?.job}</li>}
        {userResume?.work?.city && cityList?.length > 0 && (
          <li>
            城市：
            {userResume?.work?.cityList?.map((city: string, index: number) => {
              return (
                <span key={index}>
                  {city}
                  {cityList.length - 1 !== index && <span styleName="line">|</span>}
                </span>
              );
            })}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Job;
