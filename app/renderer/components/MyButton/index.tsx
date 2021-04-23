/**
 * @description 按钮组件
 */
import React from 'react';
import classnames from 'classnames';
import './index.less';

export interface Button {
  size: 'middle' | 'big' | 'small';
  styles?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick: Function;
  border?: boolean;
}
function MyButton({ size = 'small', styles, children, disabled, className, onClick, border = true }: Button) {
  return (
    <div
      style={styles}
      className={className}
      styleName={classnames('es-button', {
        [`es-button-${size}`]: true,
        'es-button-disabled': disabled,
        'es-button-border': border,
      })}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </div>
  );
}

export default MyButton;
