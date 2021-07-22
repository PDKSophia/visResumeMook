/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-07-22 14:08:33
 * @LastEditTime: 2021-07-22 14:22:13
 */
/**
 * @description 为目标组件添加一层蒙层
 */
import React from 'react';
import './index.less';
import classnames from 'classnames';
export type Position = 'top' | 'bottom' | 'center';

const MyMaskHoc =
  (WrappedComponent: React.ComponentType) => (hocProps: { position?: Position; backgroundColor?: string }) => {
    return class extends React.Component {
      getProps = () => ({
        ...this.props,
      });
      render() {
        const position = hocProps ? hocProps?.position : 'center';
        const backgroundColor = hocProps ? hocProps?.backgroundColor : 'rgba(0, 0, 0, 0.78)';

        return (
          <div styleName="vis-mask" style={{ backgroundColor: backgroundColor }}>
            <div
              styleName={classnames({
                top: position === 'top',
                center: position === 'center',
                bottom: position === 'bottom',
              })}
            >
              <WrappedComponent {...this.getProps()} />
            </div>
          </div>
        );
      }
    };
  };

export default MyMaskHoc;
