export interface TStore {
  /**
   * @description 简历模版
   */
  resumeTemplateList: TSResume.TemplateItem[];
  /**
   * @description 当前选中的简历模版
   */
  selectResumeTemplate: TSResume.TemplateItem;
  /**
   * @description 选中工具条模块，存储key
   */
  resumeSliderKeys: string[];
}

const templateModel: TSRcReduxModel.Props<TStore> = {
  namespace: 'templateModel',
  openSeamlessImmutable: true,
  state: {
    resumeTemplateList: [],
    selectResumeTemplate: {
      id: '',
      name: '',
      cover: '',
    },
    resumeSliderKeys: [],
  },
};

export default templateModel;
