/**
 * @desc 项目经历
 * @author pengdaokuan
 * @createTime 2021-03-22
 * @lastModify 2021-03-22
 */
import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';

function Project() {
  const projectExperience: TSResume.ProjectExperience[] = useSelector(
    (state: any) => state.resumeModel.projectExperience
  );

  return (
    <div styleName="content">
      <p styleName="label">项目经历 Project</p>
      <ul styleName="list">
        {!!projectExperience?.length &&
          projectExperience?.map((experience: TSResume.ProjectExperience, index: number) => {
            return (
              <li styleName="flex" key={index}>
                <div styleName="left">
                  {(experience?.beginTime || experience?.endTime) && (
                    <p>
                      {experience?.beginTime && !experience?.endTime && <span>{experience?.beginTime}</span>}
                      {!experience?.beginTime && experience?.endTime && <span>{experience?.endTime}</span>}
                      {experience?.beginTime && experience?.endTime && (
                        <span>
                          {experience?.endTime} - {experience?.endTime}
                        </span>
                      )}
                    </p>
                  )}
                </div>
                <div styleName="right">
                  <p>
                    {experience?.projectName && !experience?.post && <span>{experience?.projectName}</span>}
                    {!experience?.projectName && experience?.post && <span>{experience?.post}</span>}
                    {experience?.projectName && experience?.post && (
                      <span>
                        {experience?.post} - {experience?.post}
                      </span>
                    )}
                  </p>
                </div>
                <div styleName="text">
                  <ul styleName="item-box">
                    {experience?.content &&
                      experience?.parseContent &&
                      experience?.parseContent.length > 0 &&
                      experience?.parseContent?.map((content: string, idx: number) => {
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
