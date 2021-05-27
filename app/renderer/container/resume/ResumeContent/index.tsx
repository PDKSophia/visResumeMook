import React, { useEffect, useState } from 'react';
import './index.less';
import * as UseTemplateList from './UseTemplate';
import MyScrollBox from '@common/components/MyScrollBox';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';
import { RESUME_TOOLBAR_MAPS } from '@common/constants/resume';
import PersonalForm from './UseForm/Personal';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;
  const [formName, setFormName] = useState('');
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);
  /**
   * @description 接收订阅事件的传参
   */
  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      setShowFormModal(true);
      setFormName(data?.form_name);
    });
  };
  return (
    <MyScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
      {showFormModal && (
        <>
          {formName === RESUME_TOOLBAR_MAPS.personal && <PersonalForm />}
          {/* {formName === RESUME_TOOLBAR_MAPS.education && <EducationForm />} */}
        </>
      )}
    </MyScrollBox>
  );
}
export default ResumeContent;
