/**
 * @description 编辑简历-模块管理
 */
import React, { useEffect, useState } from 'react';
import './index.less';
import MyScrollBox from '@components/MyScrollBox';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';
import { useChangeResumeSliderKeys, useAddSlider, useDeleteSlider } from './hooks';
import RESUME_SLIDER_LIST from '@common/constants/resume';
import Messager, { MESSAGE_EVENT_MAPS } from '@common/mesasger';
import useFormHook from '../ResumeFormDialog/useFormHook';

function ResumeSlider() {
  const height = document.body.clientHeight;
  const [currentTheme] = useGetCurrentThemeAction();
  const [addSliderList, setAddSliderList] = useState<TSResume.SliderItem[]>([]);
  const [unAddSliderList, setUnAddSliderList] = useState<TSResume.SliderItem[]>([]);

  const addSlider = useAddSlider();
  const deleteSlider = useDeleteSlider();
  const [FormDialog] = useFormHook();
  const changeResumeSliderKeys = useChangeResumeSliderKeys();

  useEffect(() => {
    if (RESUME_SLIDER_LIST.length > 0) {
      let _addSliderList: TSResume.SliderItem[] = [];
      let _unAddSliderList: TSResume.SliderItem[] = [];
      RESUME_SLIDER_LIST.forEach((s: TSResume.SliderItem) => {
        if (s.require) _addSliderList.push(s);
        if (!s.require) _unAddSliderList.push(s);
      });
      setAddSliderList(_addSliderList);
      changeResumeSliderKeys(_addSliderList.map((s) => s.key));
      setUnAddSliderList(_unAddSliderList);
    }
  }, []);

  // 添加模块
  const onAddSliderAction = (moduleSlider: TSResume.SliderItem) => {
    const nextAddSliderList = addSlider(addSliderList, moduleSlider);
    setAddSliderList(nextAddSliderList);
    changeResumeSliderKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
    const nextUnAddSliderList = deleteSlider(unAddSliderList, moduleSlider);
    setUnAddSliderList(nextUnAddSliderList);
  };

  // 删除模块
  const onDeleteSliderAction = (moduleSlider: TSResume.SliderItem) => {
    const nextAddSliderList = deleteSlider(addSliderList, moduleSlider);
    setAddSliderList(nextAddSliderList);
    changeResumeSliderKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
    const nextUnAddSliderList = addSlider(unAddSliderList, moduleSlider);
    setUnAddSliderList(nextUnAddSliderList);
  };

  return (
    <div styleName="slider">
      <MyScrollBox maxHeight={height - 180}>
        {!!addSliderList.length && (
          <div styleName="module">
            <div styleName="title">
              <span styleName="line" style={{ backgroundColor: currentTheme?.backgroundColor }} />
              已添加模块
            </div>
            <div styleName="content">
              {addSliderList.map((addSlider: TSResume.SliderItem) => {
                return (
                  <div
                    styleName="box"
                    key={addSlider.key}
                    onClick={() => {
                      Messager.send(MESSAGE_EVENT_MAPS.OPEN_FORM_MODAL, {
                        form_dialog_name: addSlider.key,
                      });
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
                              Messager.send(MESSAGE_EVENT_MAPS.OPEN_FORM_MODAL, {
                                form_dialog_name: addSlider.key,
                              });
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
        {!!unAddSliderList.length && (
          <div styleName="module">
            <div styleName="title un-first">
              <span styleName="line" style={{ backgroundColor: currentTheme?.backgroundColor }} />
              待添加模块
            </div>
            <div styleName="content">
              {unAddSliderList.map((unAddSlider: TSResume.SliderItem) => {
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
        {FormDialog}
      </MyScrollBox>
    </div>
  );
}

export default ResumeSlider;
