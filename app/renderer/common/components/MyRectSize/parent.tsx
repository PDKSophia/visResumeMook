/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 10:27:39
 * @LastEditTime: 2021-06-25 10:39:11
 */
import React from 'react';
import LeftComponent from './left';
import RightComponent from './right';

interface IProps {
  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
  children?: any;
}

class ParentComponent extends React.Component<IProps> {
  static Left = LeftComponent;
  static Right = RightComponent;

  defaultLeftBoxRef = React.createRef();

  getParentStyle() {
    return {
      display: 'flex',
      justifyContent: 'center',
    };
  }

  getLeftStyle() {
    return {
      position: 'absolute',
      left: 16,
    };
  }

  getRightStyle() {
    return {};
  }

  get leftBoxRef() {
    const { children } = this.props;
    const leftElement = children[0];
    return leftElement.props.boxRef || this.defaultLeftBoxRef;
  }

  getChild() {
    const { children } = this.props;
    const leftElement = children[0];
    const rightElement = children[1];

    return [
      React.cloneElement(leftElement, {
        style: { ...this.getLeftStyle(), ...(leftElement.props.style || {}) },
        boxRef: this.leftBoxRef,
        key: 'componentLeft',
      }),
      React.cloneElement(rightElement, {
        style: { ...this.getRightStyle(), ...(rightElement.props.style || {}) },
        key: 'componentRight',
      }),
    ];
  }

  render() {
    const { style } = this.props;
    let finialStyle = this.getParentStyle();
    return (
      <div className="parent-box" style={{ ...finialStyle, ...style }}>
        {this.getChild()}
      </div>
    );
  }
}

export default ParentComponent;
