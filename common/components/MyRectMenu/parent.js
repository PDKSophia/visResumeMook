/**
 * 适配容器，适用于资源中心、云空间、作业报告
 */
import React from 'react';
import LeftComponent from './left';
import RightComponent from './right';
import { setPollPromise, getSessionStorage, setSessionStorage } from '@common/utils';
import { RECT_WIDTH, RECT_SIZE, LEFT, DEFAULT_WIDTH, DEFAULT_WAIT_TIME } from './const';
import { debounce } from 'lodash';

/**
 * @extends {React.Component}
 * @property {Object} style - 样式自定义
 * @property {Number} waitTime - 防抖时间，默认300(ms)
 * @property {Function} onSizeChange - 回调函数，回调参数为当前尺寸适配，small/middle/large
 */
class ParentComponent extends React.Component {
  static Left = LeftComponent;
  static Right = RightComponent;

  constructor(props) {
    super(props);
    this.state = {
      rectSize: getSessionStorage('rect_size'), // 当前属于哪种尺寸
      rectLeftWidth: getSessionStorage('rect_left_width'), // 左侧真实宽度
    };
    this.pollTimer = null; // 定时器
    this.calcWidth = debounce(this.calcWidth, this.props.waitTime);
  }

  componentDidMount() {
    // 1. load事件在页面完全载入时触发，解决刷新问题
    window.addEventListener('load', this.initLoad, false);
    // 2. resize事件在拉伸屏幕宽度时触发，解决实时宽度问题
    window.addEventListener('resize', this.calcWidth, false);
    // 3. 解决load事件结束，切换route；解决切换页面在小屏上的背景色问题
    this.initLoad();
  }

  componentWillUnmount() {
    document.removeEventListener('load', this.initLoad, false);
    window.removeEventListener('resize', this.calcWidth, false);
  }

  initLoad = () => {
    // 轮询得到左组件的真实宽度（为了处理适配屏幕适的间距拉伸）
    setPollPromise(() => {
      const leftEle = this.leftBoxRef.current;
      if (leftEle && leftEle.clientWidth) return leftEle.clientWidth;
    }).then((rectLeftWidth) => {
      this.setState(
        {
          rectLeftWidth,
        },
        () => {
          setSessionStorage('rect_left_width', rectLeftWidth);
        }
      );
    });
    this.calcWidth();
    // 这里需要调用一次onSizeChange告知业务组件，因为使用缓存数据
    // 如果此时处于小屏，切换页面state中的rectSize不变，故而不会通知业务组件进行背景色的切换
    const { onSizeChange } = this.props;
    if (onSizeChange && typeof onSizeChange === 'function') onSizeChange(this.state.rectSize);
  };

  // 获取屏幕尺寸
  getClientRectWidth = () => {
    // 不能使用 document.body.clientWidth，因为 clientWidth 不包含滚动条的宽度
    // 会导致出现一些异常情况，这里需要 window.innerWidth 得到浏览器页面宽度
    if (window.innerWidth < RECT_WIDTH[0]) {
      return RECT_SIZE.SMALL;
    } else if (window.innerWidth >= RECT_WIDTH[0] && window.innerWidth <= RECT_WIDTH[1]) {
      return RECT_SIZE.MIDDLE;
    } else {
      return RECT_SIZE.LARGE;
    }
  };

  // 防抖处理，执行回调与动态设置当前屏幕尺寸
  calcWidth = () => {
    const { onSizeChange } = this.props;
    const rectSize = this.getClientRectWidth();
    if (rectSize !== this.state.rectSize) {
      this.setState({ rectSize });
      setSessionStorage('rect_size', rectSize);
      if (onSizeChange && typeof onSizeChange === 'function') onSizeChange(rectSize);
    }
  };

  getParentStyle() {
    const { rectSize, rectLeftWidth } = this.state;
    if (rectSize === RECT_SIZE.LARGE) {
      return { width: DEFAULT_WIDTH };
    }
    if (rectSize === RECT_SIZE.MIDDLE) {
      return {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: rectLeftWidth + LEFT,
      };
    }
    if (rectSize === RECT_SIZE.SMALL) {
      return {
        display: 'flex',
        justifyContent: 'center',
      };
    }
    return {};
  }

  getLeftStyle() {
    const { rectSize } = this.state;
    if (rectSize === RECT_SIZE.LARGE) {
      return { float: 'left' };
    }
    if (rectSize === RECT_SIZE.MIDDLE || rectSize === RECT_SIZE.SMALL) {
      return {
        position: 'absolute',
        left: LEFT,
        arrowZIndex: this.props.arrowZIndex,
      };
    }
    return {};
  }

  getRightStyle() {
    const { rectSize } = this.state;
    if (rectSize === RECT_SIZE.LARGE) {
      return { float: 'right' };
    }
    if (rectSize === RECT_SIZE.MIDDLE) {
      return {};
    }
    return {};
  }

  defaultLeftBoxRef = React.createRef();
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
      }),
      React.cloneElement(rightElement, {
        rectSize: this.state.rectSize,
        style: { ...this.getRightStyle(), ...(rightElement.props.style || {}) },
      }),
    ];
  }

  render() {
    const { style } = this.props;
    let finialStyle = this.getParentStyle();
    return (
      <div className={`parent-box`} style={{ ...finialStyle, ...style }}>
        {this.getChild()}
      </div>
    );
  }
}

ParentComponent.defaultProps = {
  style: {},
  waitTime: DEFAULT_WAIT_TIME,
  hasMargin: true,
  arrowZIndex: 3,
};

export default ParentComponent;
