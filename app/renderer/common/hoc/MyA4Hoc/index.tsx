/**
 * @description A4 Wrapper 简历容器
 */
import React from 'react';
import './index.less';

const MyA4Hoc = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return class extends React.Component {
    getProps = () => ({
      ...(this.props as P),
    });
    render() {
      return (
        <div styleName="a4-box">
          <WrappedComponent {...this.getProps()} />
        </div>
      );
    }
  };
};

export default MyA4Hoc;
