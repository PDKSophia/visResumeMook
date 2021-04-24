/**
 * @desc 技能
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';

function Skill() {
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return (
    <div styleName="content">
      <p styleName="label">技能证书 Skill</p>
      <ul styleName="skill">
        {!!userResume?.skill?.length &&
          userResume?.skill?.map((skill: string, index: number) => {
            return (
              <li styleName="item" key={index}>
                {skill}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Skill;
