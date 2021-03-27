import React from 'react';
import './index.less';
import MyScrollBox from '@common/components/MyScrollBox';
import * as Template from '@src/template';

function StaticResume() {
  const height = document.body.clientHeight;
  if (height > 0) {
    return (
      <div styleName="container">
        <MyScrollBox maxHeight={height - 76}>
          <Template.TemplateOne />
        </MyScrollBox>
      </div>
    );
  } else {
    return null;
  }
}

export default StaticResume;
