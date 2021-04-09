/**
 * @description 编辑简历-模块管理
 */
import React, { useEffect, useState } from 'react';
import './index.less';
import MyScrollBox from '@common/components/MyScrollBox';
import ResumeSliderActionList from '@common/constants/resume';
import { ResumeSliderType } from '@common/types/resume';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';

function ResumeSlider() {
  const height = document.body.clientHeight;
  const [currentTheme] = useGetCurrentThemeAction();
  const [addSliderModule, setAddSliderModule] = useState<ResumeSliderType[]>([]);
  const [unAddSliderModule, setUnAddSliderModule] = useState<ResumeSliderType[]>([]);

  useEffect(() => {
    if (ResumeSliderActionList.length) {
      let _addSlider: ResumeSliderType[] = [];
      let _unAddSlider: ResumeSliderType[] = [];
      ResumeSliderActionList.forEach((s: ResumeSliderType) => {
        if (s.require) {
          _addSlider.push(s);
        } else {
          _unAddSlider.push(s);
        }
      });
      setAddSliderModule(_addSlider);
      setUnAddSliderModule(_unAddSlider);
    }
  }, []);

  // 进行编辑
  const onEditSliderAction = (moduleSlider: ResumeSliderType) => {
    console.log(moduleSlider);
  };

  // 添加模块
  const onAddSliderAction = (moduleSlider: ResumeSliderType) => {
    const addSliderKeys = addSliderModule.map((s: ResumeSliderType) => s.key);
    if (!addSliderKeys.includes(moduleSlider.key)) {
      setAddSliderModule((prev: ResumeSliderType[]) => {
        let next = [...prev];
        next.push(moduleSlider);
        return next;
      });
      setUnAddSliderModule((prev: ResumeSliderType[]) => {
        let next = [...prev];
        const findIndex = prev.findIndex((s: ResumeSliderType) => s.key === moduleSlider.key);
        next.splice(findIndex, 1);
        return next;
      });
    }
  };

  // 删除模块
  const onDeleteSliderAction = (moduleSlider: ResumeSliderType) => {
    console.log(moduleSlider);
    const addSliderKeys = addSliderModule.map((s: ResumeSliderType) => s.key);
    if (addSliderKeys.includes(moduleSlider.key)) {
      setAddSliderModule((prev: ResumeSliderType[]) => {
        let next = [...prev];
        const findIndex = prev.findIndex((s: ResumeSliderType) => s.key === moduleSlider.key);
        next.splice(findIndex, 1);
        return next;
      });
      setUnAddSliderModule((prev: ResumeSliderType[]) => {
        let next = [...prev];
        next.unshift(moduleSlider);
        return next;
      });
    }
  };

  return (
    <div styleName="slider">
      <MyScrollBox maxHeight={height - 180}>
        {!!addSliderModule.length && (
          <div styleName="module">
            <div styleName="title">
              <span styleName="line" style={{ backgroundColor: currentTheme?.backgroundColor }} />
              已添加模块
            </div>
            <div styleName="content">
              {addSliderModule.map((addSlider: ResumeSliderType) => {
                return (
                  <div styleName="box" key={addSlider.key}>
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{addSlider.name}</div>
                        <div styleName="summary">{addSlider.summary}</div>
                      </div>
                      {addSlider.require && <div styleName="tips">必选项</div>}
                      {!addSlider.require && (
                        <div styleName="action">
                          <i styleName="edit" onClick={() => onEditSliderAction(addSlider)} />
                          <i styleName="delete" onClick={() => onDeleteSliderAction(addSlider)} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!!unAddSliderModule.length && (
          <div styleName="module">
            <div styleName="title un-first">
              <span styleName="line" style={{ backgroundColor: currentTheme?.backgroundColor }} />
              待添加模块
            </div>
            <div styleName="content">
              {unAddSliderModule.map((unAddSlider: ResumeSliderType) => {
                return (
                  <div styleName="box" key={unAddSlider.key} onClick={() => onAddSliderAction(unAddSlider)}>
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{unAddSlider.name}</div>
                        <div styleName="summary">{unAddSlider.summary}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </MyScrollBox>
    </div>
  );
}

export default ResumeSlider;
