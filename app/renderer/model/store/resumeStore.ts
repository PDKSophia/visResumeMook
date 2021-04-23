import ResumeType, { ResumeTemplate } from '@common/types/resume';

export interface RModel {
  namespace: string;
  openSeamlessImmutable: boolean;
  state: RStore;
}

export interface RStore {
  userResume: ResumeType; // 用户信息
  resumeTemplateList: ResumeTemplate[]; // 简历模版
  selectResumeTemplate: ResumeTemplate; // 当前选中的简历模版
}

const resumeModel: RModel = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    userResume: {
      baseInfo: {
        avatar: '',
        username: '',
        area: '',
        school: '',
        major: '',
        degree: '',
        hometown: '',
        onSchoolTime: {
          beginTime: 0,
          endTime: 0,
        },
      },
      contactInfo: {
        phone: '',
        email: '',
        github: '',
        juejin: '',
      },
      seekWorkInfo: {
        job: '',
        city: [],
      },
      hobby: '',
      skill: [],
      evaluation: [],
      schoolExperience: [],
      workExperience: [],
      projectExperience: [],
    },
    resumeTemplateList: [],
    selectResumeTemplate: {
      id: '',
      name: '',
      cover: '',
    },
  },
};

export default resumeModel;
