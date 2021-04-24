/**
 * @desc 项目经历
 * @author pengdaokuan
 * @createTime 2021-03-22
 * @lastModify 2021-03-22
 */
import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';

function Project() {
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return (
    <div styleName="content">
      <p styleName="label">项目经历 Project</p>
      <ul styleName="list">
        {!!userResume?.projectExperience?.length &&
          userResume?.projectExperience?.map((experience: TSResume.ProjectExperience, index: number) => {
            return (
              <li styleName="flex" key={index}>
                <div styleName="left">
                  <p>
                    {experience?.beginTime}-{experience?.endTime}
                  </p>
                </div>
                <div styleName="right">
                  <p>
                    {experience?.projectName} - {experience?.post}
                  </p>
                </div>
                <div styleName="text">
                  <ul styleName="item-box">
                    {!!experience?.content?.length &&
                      experience?.content?.map((content: string, idx: number) => {
                        return (
                          <li styleName="item-content" key={idx}>
                            <span>{content}</span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Project;
