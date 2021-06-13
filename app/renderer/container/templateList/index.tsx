import React from 'react';
import './index.less';
import Header from './Header';
import Navigation from './Navigation';

function TemplateList() {
  return (
    <div styleName="container">
      <Header />
      <div styleName="content">
        <Navigation />
      </div>
    </div>
  );
}
export default TemplateList;
