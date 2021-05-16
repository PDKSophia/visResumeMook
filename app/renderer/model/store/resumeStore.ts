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
          beginTime: '',
          endTime: '',
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
        city: '',
        cityList: [],
      },
      hobby: '',
      skill: '',
      skillList: [],
      evaluation: '',
      evaluationList: [],
      certificate: '',
      certificateList: [],
      schoolExperience: [],
      workExperience: [],
      projectExperience: [],
    },
  },
};

export default resumeModel;
