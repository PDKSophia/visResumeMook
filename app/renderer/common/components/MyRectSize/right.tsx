/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 10:27:39
 * @LastEditTime: 2021-06-25 10:31:02
 */
import React from 'react';

interface IProps {
  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
  children?: React.ReactNode;
  key?: string;
}

class RightComponent extends React.PureComponent<IProps> {
  render() {
    const { key = 'componentRight', style = {}, children } = this.props;
    return (
      <div key={key} className="right-box" style={style}>
        {children}
      </div>
    );
  }
}

export default RightComponent;
