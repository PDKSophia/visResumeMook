/**
 * @description 工作经历Form
 */
import React from 'react';
import MyModal from '@common/components/MyModal';
import Form from './Form';
import { useSelector } from 'react-redux';
import Wrapper from '../WrapperExperience';
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

interface IProps {
  onClose: () => void;
}
function WorkExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const workExperience: TSResume.WorkExperience[] = useSelector((state: any) => state.resumeModel.workExperience);
  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResumeHook<AdapterExperienceType[]>('workExperience', newDataList);
  };

  return (
    <MyModal.Dialog
      title="工作经历"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.work(workExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </MyModal.Dialog>
  );
}

export default WorkExperience;
