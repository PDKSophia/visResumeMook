import React from 'react';
import './index.less';

interface IScrollBoxProps {
  children: any;
  maxHeight?: number;
  style?: React.CSSProperties;
  onScrollTop?: (scrollTop: number) => void; // 开启了滚动事件之后，回调得到滚动的top
  innerStyle?: any; // 给最内部的div设置样式
}
function MyScrollBox({ children, maxHeight = 200, style = {}, onScrollTop, innerStyle = {} }: IScrollBoxProps) {
  function onScroll(e: any) {
    const _event = e.target || e.currentTarget;
    onScrollTop && onScrollTop(_event.scrollTop);
  }
  let _style = { ...style };
  if (maxHeight) {
    _style = { ..._style, maxHeight: `${maxHeight}px` };
  }
  return (
    <div className="MyScrollBox_outer" style={_style} onScroll={onScroll}>
      <div className="MyScrollBox_hidden_scroll" style={{ maxHeight: `${maxHeight}px` }}>
        <div className="MyScrollBox_inner" style={innerStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MyScrollBox;
