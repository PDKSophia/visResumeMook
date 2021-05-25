/**
 * @desc 工作经历
 * @author pengdaokuan
 */
import './index.less';
import React from 'react';

function Work() {
  return (
    <div styleName="content">
      <p styleName="label">工作经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2019.07-至今</p>
            <p>前端工程师</p>
          </div>
          <div styleName="right">
            <p>CVTE</p>
            <p>就职于CVTE，部门人送广州彭于晏，其他的没啥介绍了</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Work;
