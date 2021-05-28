/**
 * @description 个人信息Form
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
function ProjectExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const projectExperience: TSResume.ProjectExperience[] = useSelector(
    (state: any) => state.resumeModel.projectExperience
  );

  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResumeHook<AdapterExperienceType[]>('projectExperience', newDataList);
  };

  return (
    <MyModal.Dialog
      title="项目经验"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.project(projectExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </MyModal.Dialog>
  );
}

export default ProjectExperience;
