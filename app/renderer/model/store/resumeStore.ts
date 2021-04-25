export interface RStore {
  /**
   * @description 用户信息
   */
  userResume: TSResume.IntactResume;
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
          beginTime: null,
          endTime: null,
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
      certificate: [],
      schoolExperience: [],
      workExperience: [],
      projectExperience: [],
    },
  },
};

export default resumeModel;
