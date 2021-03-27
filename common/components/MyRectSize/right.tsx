/**
 * 右侧
 */
import React from 'react';

interface IProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

class RightComponent extends React.PureComponent<IProps> {
  render() {
    const { style = {}, children } = this.props;
    return (
      <div className="right-box" style={style}>
        {children}
      </div>
    );
  }
}

export default RightComponent;
