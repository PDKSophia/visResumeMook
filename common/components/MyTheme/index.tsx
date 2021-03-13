/**
 * @description 主题组件
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import { ThemeType } from '@common/types/theme';
import { useSelector } from 'react-redux';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';

function MyTheme() {
  const themeList = useSelector((state: any) => state.globalModel.themeList);
  const [currentTheme, setCurrentTheme] = useGetCurrentThemeAction();
  return (
    <div styleName="box">
      {themeList &&
        themeList.length > 0 &&
        [...themeList].map((t: ThemeType, index: number) => {
          return (
            <span
              key={index}
              style={{ backgroundColor: t.backgroundColor }}
              styleName={`${currentTheme.id === t.id ? 'active' : ''}`}
              onClick={() => {
                setCurrentTheme && setCurrentTheme(t, true);
              }}
            />
          );
        })}
    </div>
  );
}

export default MyTheme;
