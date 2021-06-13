import React from 'react';
import './index.less';
import Header from './Header';
import Navigation from './Navigation';
import StaticResume from './StaticResume';

function TemplateList() {
  return (
    <div styleName="container">
      <Header />
      <div styleName="content">
        <Navigation />
        <StaticResume />
      </div>
    </div>
  );
}
export default TemplateList;
