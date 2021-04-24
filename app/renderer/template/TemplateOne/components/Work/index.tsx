/**
 * @desc 在校经历
 * @author pengdaokuan
 */
import './index.less';
import React from 'react';
import { useSelector } from 'react-redux';

function Work() {
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        {!!userResume?.schoolExperience?.length &&
          userResume?.schoolExperience?.map((experience: TSResume.SchoolExperience, index: number) => {
            return (
              <li styleName="flex">
                <div styleName="left">
                  <p>
                    {experience?.beginTime}-{experience?.endTime}
                  </p>
                  <p>{experience?.post}</p>
                </div>
                <div styleName="right">
                  <p>{experience?.department}</p>
                  <p>{experience?.content}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Work;
