import React from 'react';
import './index.less';
import Avatar from '../assets/avatar.jpg';

interface IProps {
  /**
   * @description 标题
   */
  text: string;
  /**
   * @description 样式
   */
  styles?: React.CSSProperties;
}

function Title({ text, styles }: IProps) {
  console.log(window.pdk);
  return (
    <div style={styles} styleName="title">
      {text}
    </div>
  );
}

export default Title;
