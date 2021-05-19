import React from 'react';
import './index.less';

function Root() {
  return (
    <div styleName="root">
      <div styleName="container">
        {/* <img src={Logo} alt="" /> */}
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {['首页', '简历'].map((text, index) => {
            return (
              <div key={index} styleName="item">
                {text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          {/* 应用版权 */}
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2019-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;
