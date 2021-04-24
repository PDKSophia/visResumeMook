/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import React from 'react';
import '../../../less/template-one.less';
import { useSelector } from 'react-redux';

function Job() {
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return (
    <div styleName="container">
      <p styleName="title">求职意向 Work</p>
      <ul styleName="content">
        {userResume?.work?.job && <li>职位：{userResume?.work?.job}</li>}
        {userResume?.work?.city && !!userResume?.work?.city.length && (
          <li>
            城市：
            {userResume?.work?.city?.map((city: string, index: number) => {
              return <span key={index}>{city}</span>;
            })}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Job;
