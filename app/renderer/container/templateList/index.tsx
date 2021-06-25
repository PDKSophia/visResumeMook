/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-06-25 10:36:25
 */
import React from 'react';
import './index.less';
import Header from './Header';
import Navigation from './Navigation';
import StaticResume from './StaticResume';
import MyRectSize from '@common/components/MyRectSize';

function TemplateList() {
  return (
    <div styleName="container">
      <Header />
      <div styleName="content">
        <MyRectSize>
          <MyRectSize.Left>
            <Navigation />
          </MyRectSize.Left>
          <MyRectSize.Right>
            <StaticResume />
          </MyRectSize.Right>
        </MyRectSize>
      </div>
    </div>
  );
}
export default TemplateList;
