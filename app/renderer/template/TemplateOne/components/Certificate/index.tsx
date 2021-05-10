/**
 * @desc 荣誉奖励
 * @author pengdaokuan
 */
import React from 'react';
import '../../../less/template-one.less';
import { useSelector } from 'react-redux';

function Certificate() {
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);
  return (
    <div styleName="container">
      <p styleName="title">荣誉奖励 Certificate</p>
      <ul styleName="content">
        {userResume?.certificate &&
          userResume?.certificateList.length > 0 &&
          userResume?.certificateList?.map((value: string, index: number) => {
            return <li key={index}>{value}</li>;
          })}
      </ul>
    </div>
  );
}

export default Certificate;
