import React from 'react';
import './index.less';
import UseIcon from '@assets/icon/use.png';
import TemplateCoverOne from '@assets/template/template1.jpg';
import TemplateCoverTwo from '@assets/template/template2.jpg';
import MyScrollBox from '@common/components/MyScrollBox';
import MyButton from '@common/components/MyButton';

function Navigation() {
  const height = document.body.clientHeight;

  return (
    <div styleName="navigation">
      <MyScrollBox maxHeight={height - 60 - 32}>
        {/*  */}
        <div styleName="template">
          <img styleName="cover" src={TemplateCoverOne} />
          <div styleName="mask">
            <img styleName="use" src={UseIcon} />
          </div>
        </div>
        <div styleName="template">
          <img styleName="cover" src={TemplateCoverTwo} />
          <div styleName="mask">
            <MyButton
              size="middle"
              className="view-btn"
              onClick={() => {
                console.log(1);
              }}
            >
              预览模版
            </MyButton>
          </div>
        </div>
      </MyScrollBox>
    </div>
  );
}

export default Navigation;
