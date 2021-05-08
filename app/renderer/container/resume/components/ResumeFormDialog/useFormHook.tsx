/**
 * @description 主要监听事件，根据事件的传递值，正确返回Form组件
 */
import _ from './utils';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PersonalForm from './PersonalForm';
import EducationForm from './EducationForm';
import Messager, { MESSAGE_EVENT_MAPS } from '@common/mesasger';
import useModal from '@common/hook/useModal';

function useFormHook() {
  // const PersonFormModal = useModal(PersonalForm);
  const [visible, setVisible] = useState(false);
  const [formName, setFormDialogName] = useState('');

  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      document.removeEventListener(MESSAGE_EVENT_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);
  /**
   * @description 接收订阅事件的传参
   */
  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      setVisible(true);
      setFormDialogName(data?.form_dialog_name || '');
    });
  };

  const onCloseDialog = useCallback(() => {
    console.log('#@@@@@');
    setVisible(false);
    setFormDialogName('');
    // if (_.isPerson(formName)) PersonFormModal.destroy();
  }, [formName]);

  return useMemo(() => {
    const formProps = {
      onCancel: onCloseDialog,
    };
    if (visible && formName) {
      /**
       * 经过 useModal 后的弹窗，挂载到 document.body 上，同时通过 destroy 方法销毁
       * 由于在业务端是不处理关闭流程的，关闭的回调是通过 Form 组件实现
       * 所以这边需要在 return 组件前，定义关闭事件，从而实现弹窗的关闭+销毁
       */
      if (_.isPerson(formName)) {
        const Form = <PersonalForm {...formProps} />;
        return [Form];
      } else if (_.isEducation(formName)) {
        const Form = <EducationForm {...formProps} />;
        return [Form];
      } else {
        return [null];
      }
    }
    return [null];
  }, [formName, visible]);
}

export default useFormHook;
