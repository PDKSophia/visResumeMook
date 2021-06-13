import React from 'react';
import './index.less';
import MyButton from '@common/components/MyButton';

function Footer() {
  const onMadeResume = () => {
    console.log('跳转前往制作页面');
  };
  return (
    <div styleName="footer">
      <MyButton size="middle" className="use-btn" onClick={onMadeResume}>
        以此模版前往制作简历
      </MyButton>
    </div>
  );
}

export default Footer;
