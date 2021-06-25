/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-06-25 09:10:36
 */
import React from 'react';
import './index.less';
import * as TemplateList from '@src/container/templates';
import Footer from '../Footer';
import MyScrollBox from '@common/components/MyScrollBox';

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
