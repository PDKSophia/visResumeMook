/**
 * @description 适配大小容器
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

interface IState {
  /**
   * @description 尺寸
   */
  rectSize: string;
  /**
   * @description 左侧真实宽度
   */
  rectLeftWidth: number;
}

class ParentComponent extends React.Component<IProps, IState> {
  static Left = LeftComponent;
  static Right = RightComponent;

  defaultLeftBoxRef = React.createRef();

  constructor(props: IProps) {
    super(props);
    this.state = {
      rectSize: 'small',
      rectLeftWidth: 272,
    };
  }

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
        rectSize: this.state.rectSize,
        style: { ...this.getLeftStyle(), ...(leftElement.props.style || {}) },
        boxRef: this.leftBoxRef,
        key: 'left',
      }),
      React.cloneElement(rightElement, {
        rectSize: this.state.rectSize,
        style: { ...this.getRightStyle(), ...(rightElement.props.style || {}) },
        key: 'right',
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
