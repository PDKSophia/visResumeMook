import React from 'react';
import './index.less';
import * as TemplateList from '@src/container/templates';
import MyScrollBox from '@common/components/MyScrollBox';
import Footer from '../Footer';

function StaticResume() {
  const HEADER_HEIGHT = 76; // 距离头部距离
  const height = document.body.clientHeight;

  return (
    <div styleName="container">
      <MyScrollBox maxHeight={height - HEADER_HEIGHT}>
        <TemplateList.TemplateOne />
        <Footer />
      </MyScrollBox>
    </div>
  );
}

export default StaticResume;
