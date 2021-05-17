import { useSelector } from 'react-redux';
import useUpdateResumeHook from '@src/container/resume/components/ResumeFormDialog/useUpdateResumeHook';

/**
 * @description 添加
 */
function useAdd() {
  const updateResumeHook = useUpdateResumeHook();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return (callback?: (newList: TSResume.ProjectExperience[]) => void) => {
    const newAddItem: TSResume.ProjectExperience = {
      projectName: '未命名条目',
      date: new Date().valueOf(),
      post: '',
      content: '',
      parseContent: [],
      beginTime: '',
      endTime: '',
      supplement: '',
    };
    let nextStore: TSResume.ProjectExperience[] = [];
    if (userResume?.projectExperience && userResume?.projectExperience?.length > 0) {
      nextStore = [...userResume?.projectExperience];
    }
    nextStore.unshift(newAddItem);
    updateResumeHook<TSResume.ProjectExperience[]>('projectExperience', nextStore);
    callback && callback(nextStore);
  };
}

/**
 * @description 删除
 */
function useDelete() {
  const updateResumeHook = useUpdateResumeHook();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return (index: number, callback?: (newList: TSResume.ProjectExperience[]) => void) => {
    let nextStore: TSResume.ProjectExperience[] = [];
    if (userResume?.projectExperience && userResume?.projectExperience?.length > 0) {
      nextStore = [...userResume?.projectExperience];
    }
    nextStore.splice(index, 1);
    updateResumeHook<TSResume.ProjectExperience[]>('projectExperience', nextStore);
    callback && callback(nextStore);
  };
}
export default {
  useAdd,
  useDelete,
};
