/*
 * @Description:主题组件
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 16:26:41
 * @LastEditTime: 2021-07-10 17:46:49
 */
import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';

function MyTheme() {
  const themeList = useSelector((state: any) => state.themeModel.themeList);
  const [currentTheme, setCurrentTheme] = useThemeActionHooks.useGetCurrentTheme();

  return (
    <div styleName="box">
      {themeList &&
        themeList.length > 0 &&
        [...themeList].map((t: TSTheme.Item, index: number) => {
          return (
            <span
              key={index}
              style={{ backgroundColor: t.backgroundColor }}
              styleName={`${currentTheme?.id === t?.id ? 'active' : ''}`}
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
