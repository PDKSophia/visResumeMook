import React from 'react';
import './index.less';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';

export default function () {
  const [currentTheme] = useGetCurrentThemeAction();

  return (
    <div
      styleName="footer"
      style={{
        backgroundColor: currentTheme?.backgroundColor,
        color: currentTheme?.fontColor,
      }}
    >
      <p styleName="copyright">
        Copyright © 2019-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
      </p>
    </div>
  );
}
