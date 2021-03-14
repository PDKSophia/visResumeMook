/**
 * 左侧
 */
import React from 'react';
import Svg from '@common/components/Svg';
import ic_prevSvg from '@common/svgs/eclass/ic_prev.svg';
import { setPollPromise } from '@common/utils';
import classNames from 'classnames';
import { RECT_SIZE } from './const';

/**
 * @extends {React.PureComponent}
 * @property {Object} style - 样式自定义
 * @property {Ref} boxRef
 */
class LeftComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true, // 默认菜单栏是显示状态
      width: 0
    };
    this.isTransition = false; // 只有点击的时候才加上动画
    this.clearState = false; // 避免卸载组件时，再去执行this.setState警告问题
  }
  componentDidMount() {
    const promise = setPollPromise([
      () => {
        if (
          this.boxRef.current &&
          this.boxRef.current.children &&
          this.boxRef.current.children.length > 0 &&
          this.boxRef.current.children[0].clientWidth
        ) {
          return this.boxRef.current.children[0].clientWidth;
        }
      },
      () => {
        return this.clearState;
      }
    ]);
    promise.then(width => {
      if (!this.clearState) {
        this.setState({ width });
      }
    });
  }
  componentWillUnmount() {
    this.clearState = true;
  }
  defaultRef = React.createRef();
  onChangeMenu = () => {
    this.setState(prev => {
      return {
        showMenu: !prev.showMenu
      };
    });
  };
  get boxRef() {
    return this.props.boxRef || this.defaultRef;
  }

  render() {
    const { showMenu, width } = this.state;
    const { style, children, rectSize } = this.props;
    // 处理小屏收起左侧菜单，拉伸屏幕至中屏，菜单消失问题
    const isMiddle = rectSize === RECT_SIZE.MIDDLE;
    return (
      <React.Fragment>
        <div
          ref={this.boxRef}
          className="left-box"
          style={{ width, ...style, left: isMiddle ? style.left : showMenu ? style.left : -width }}
        >
          {children}
        </div>
        <div
          className="rect-menu"
          style={{
            left: showMenu ? width + (style.left || 0) : 0,
            zIndex: width <= 0 ? style.arrowZIndex - 1 : style.arrowZIndex,
            transition: this.isTransition ? 'all 0.5s' : 'none'
          }}
          onClick={() => {
            this.onChangeMenu();
            this.isTransition = true;
          }}
        >
          <Svg svg={ic_prevSvg} className={classNames('rect-svg', { 'rect-svg-hide': !showMenu })} />
        </div>
      </React.Fragment>
    );
  }
}

export default LeftComponent;
