/**
 * @description 主要监听事件，根据事件的传递值，正确返回Form组件
 */
import _ from './utils';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PersonalForm from './PersonalForm';
import ContactForm from './ContactForm';
import EducationForm from './EducationForm';
import WorkForm from './WorkForm';
import EvaluationForm from './EvaluationForm';
import CertificateForm from './CertificateForm';
import Messager, { MESSAGE_EVENT_MAPS } from '@common/mesasger';

function useFormHook() {
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

  const onClose = useCallback(() => {
    setVisible(false);
    setFormDialogName('');
  }, [formName]);

  return useMemo(() => {
    const formProps = {
      onCancel: onClose,
      onSubmit: onClose,
    };
    if (visible && formName) {
      /**
       * 由于在业务端是不处理关闭流程的，关闭的回调是通过 Form 组件实现
       * 所以这边需要在 return 组件前，定义关闭事件，从而实现弹窗的关闭+销毁
       */
      let Form = null;
      if (_.isPerson(formName)) Form = <PersonalForm {...formProps} />;
      if (_.isContact(formName)) Form = <ContactForm {...formProps} />;
      if (_.isEducation(formName)) Form = <EducationForm {...formProps} />;
      if (_.isWork(formName)) Form = <WorkForm {...formProps} />;
      if (_.isEvaluation(formName)) Form = <EvaluationForm {...formProps} />;
      if (_.isCertificate(formName)) Form = <CertificateForm {...formProps} />;
      return [Form];
    }
    return [null];
  }, [formName, visible]);
}

export default useFormHook;
