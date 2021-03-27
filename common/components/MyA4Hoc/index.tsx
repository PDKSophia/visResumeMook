/**
 * @description A4 Wrapper 简历容器
 */
import React from 'react';
import './index.less';

function MyA4Hoc(WrappedComponent: any) {
  return class extends React.Component {
    getProps = () => ({
      ...this.props,
    });
    render() {
      return (
        <div styleName="a4-box">
          <WrappedComponent {...this.getProps()} />
        </div>
      );
    }
  };
}

export default MyA4Hoc;
