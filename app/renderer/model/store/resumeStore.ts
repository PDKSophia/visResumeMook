export interface RModel {
  namespace: string;
  openSeamlessImmutable: boolean;
  state: RStore;
}

export interface RStore {
  userResume: TSResume.IntactResume; // 用户信息
  resumeTemplateList: TSResume.TemplateItem[]; // 简历模版
  selectResumeTemplate: TSResume.TemplateItem; // 当前选中的简历模版
}

const resumeModel: RModel = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    userResume: {
      base: {
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
      contact: {
        phone: '',
        email: '',
        github: '',
        juejin: '',
      },
      work: {
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
