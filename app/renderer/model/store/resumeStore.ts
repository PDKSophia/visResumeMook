export interface RStore {
  /**
   * @description 用户信息
   */
  userResume: TSResume.IntactResume;
  /**
   * @description 简历模版
   */
  resumeTemplateList: TSResume.TemplateItem[];
  /**
   * @description 当前选中的简历模版
   */
  selectResumeTemplate: TSResume.TemplateItem;
}

const resumeModel: TSRcReduxModel.Props<RStore> = {
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
