/**
 * @description 编辑简历-模块管理
 */
import React, { useEffect, useState } from 'react';
import './index.less';
import MyScrollBox from '@components/MyScrollBox';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';
import ResumeSliderActionList, { ResumeSliderActionMaps } from '@common/constants/resume';
import Messager, { MESSAGE_EVENT_MAPS } from '@src/common/mesasger';

function ResumeSlider() {
  const height = document.body.clientHeight;
  const [currentTheme] = useGetCurrentThemeAction();
  const [addSliderModule, setAddSliderModule] = useState<TSResume.SliderItem[]>([]);
  const [unAddSliderModule, setUnAddSliderModule] = useState<TSResume.SliderItem[]>([]);

  useEffect(() => {
    if (ResumeSliderActionList.length) {
      let _addSlider: TSResume.SliderItem[] = [];
      let _unAddSlider: TSResume.SliderItem[] = [];
      ResumeSliderActionList.forEach((s: TSResume.SliderItem) => {
        if (s.require) _addSlider.push(s);
        if (!s.require) _unAddSlider.push(s);
      });
      setAddSliderModule(_addSlider);
      setUnAddSliderModule(_unAddSlider);
    }
  }, []);

  // 进行编辑
  const onEditSliderAction = (moduleSlider: TSResume.SliderItem) => {
    console.log(moduleSlider);
  };

  // 添加模块
  const onAddSliderAction = (moduleSlider: TSResume.SliderItem) => {
    const addSliderKeys = addSliderModule.map((s: TSResume.SliderItem) => s.key);
    if (!addSliderKeys.includes(moduleSlider.key)) {
      setAddSliderModule((prev: TSResume.SliderItem[]) => {
        let next = [...prev];
        next.push(moduleSlider);
        return next;
      });
      setUnAddSliderModule((prev: TSResume.SliderItem[]) => {
        let next = [...prev];
        const findIndex = prev.findIndex((s: TSResume.SliderItem) => s.key === moduleSlider.key);
        next.splice(findIndex, 1);
        return next;
      });
      // 事件驱动，发布订阅模式告知简历模板组件，当前选择的模块
      Messager.send(MESSAGE_EVENT_MAPS.SLIDER, {
        key: moduleSlider.key,
        name: moduleSlider.name,
        status: 'add',
      });
    }
  };

  // 删除模块
  const onDeleteSliderAction = (moduleSlider: TSResume.SliderItem) => {
    const addSliderKeys = addSliderModule.map((s: TSResume.SliderItem) => s.key);
    if (addSliderKeys.includes(moduleSlider.key)) {
      setAddSliderModule((prev: TSResume.SliderItem[]) => {
        let next = [...prev];
        const findIndex = prev.findIndex((s: TSResume.SliderItem) => s.key === moduleSlider.key);
        next.splice(findIndex, 1);
        return next;
      });
      setUnAddSliderModule((prev: TSResume.SliderItem[]) => {
        let next = [...prev];
        next.unshift(moduleSlider);
        return next;
      });
      Messager.send(MESSAGE_EVENT_MAPS.SLIDER, {
        key: moduleSlider.key,
        name: moduleSlider.name,
        status: 'delete',
      });
    }
  };

  // 个人信息处理
  const onEditPersonalResume = () => {};

  // 点击测试用例
  const onToggleTestResume = () => {};
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
              {addSliderModule.map((addSlider: TSResume.SliderItem) => {
                return (
                  <div
                    styleName="box"
                    key={addSlider.key}
                    onClick={() => {
                      if (addSlider.key === ResumeSliderActionMaps.Personal) {
                        onEditPersonalResume();
                      } else if (addSlider.key === ResumeSliderActionMaps.Test) {
                        onToggleTestResume();
                      }
                    }}
                  >
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{addSlider.name}</div>
                        <div styleName="summary">{addSlider.summary}</div>
                      </div>
                      {addSlider.require && <div styleName="tips">必选项</div>}
                      {!addSlider.require && (
                        <div styleName="action">
                          <i
                            styleName="edit"
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation && e.stopPropagation();
                              onEditSliderAction(addSlider);
                            }}
                          />
                          <i
                            styleName="delete"
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation && e.stopPropagation();
                              onDeleteSliderAction(addSlider);
                            }}
                          />
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
              {unAddSliderModule.map((unAddSlider: TSResume.SliderItem) => {
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
