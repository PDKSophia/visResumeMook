/**
 * 右侧
 */
import React from 'react';

/**
 * @extends {React.PureComponent}
 * @property {Object} style - 样式自定义
 */
class RightComponent extends React.PureComponent {
  render() {
    const { style, children } = this.props;
    return (
      <div className="right-box" style={style}>
        {children}
      </div>
    );
  }
}

RightComponent.defaultProps = {
  style: {}
};

export default RightComponent;
