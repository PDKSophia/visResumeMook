import React from 'react';
import './index.less';

interface IProps {
  /**
   * @description 子组件
   */
  children: React.ReactNode | any;
  /**
   * @description 最大高度，默认200
   */
  maxHeight?: number;
  /**
   * @description 根div样式
   */
  style?: React.CSSProperties;
  /**
   * @description 最内部的div样式
   */
  innerStyle?: React.CSSProperties;
  /**
   * @description 开启了滚动事件之后，回调得到滚动的top
   */
  onScrollTop?: (scrollTop: number) => void;
}
function MyScrollBox({ children, maxHeight = 200, style = {}, innerStyle = {}, onScrollTop }: IProps) {
  function onScroll(e: any) {
    const _event = e.target || e.currentTarget;
    onScrollTop && onScrollTop(_event.scrollTop);
  }
  let _style = { ...style };
  if (maxHeight) {
    _style = { ..._style, maxHeight: `${maxHeight}px` };
  }
  return (
    <div className="scroll-box-outer" style={_style} onScroll={onScroll}>
      <div className="scroll-box-hidden" style={{ maxHeight: `${maxHeight}px` }}>
        <div className="scroll-box-inter" style={innerStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MyScrollBox;
