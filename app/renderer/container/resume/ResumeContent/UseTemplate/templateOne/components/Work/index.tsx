/**
 * @desc 工作经历
 * @author pengdaokuan
 */
import './index.less';
import React from 'react';
import { useSelector } from 'react-redux';

function Work() {
  const workExperience: TSResume.WorkExperience[] = useSelector((state: any) => state.resumeModel.workExperience);

  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        {!!workExperience?.length &&
          workExperience?.map((experience: TSResume.WorkExperience, index: number) => {
            return (
              <li styleName="flex" key={index}>
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
