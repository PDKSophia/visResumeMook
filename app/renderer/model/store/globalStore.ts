export interface GStore {
  /**
   * @description 项目路径
   */
  rootPath: string;
  /**
   * @description 当前主题
   */
  currentTheme: TSTheme.Item;
  /**
   * @description 主题列表
   */
  themeList: TSTheme.Item[];
}

const globalModel: TSRcReduxModel.Props<GStore> = {
  namespace: 'globalModel',
  openSeamlessImmutable: true,
  state: {
    rootPath: '',
    currentTheme: {
      id: '',
      fontColor: '',
      backgroundColor: '',
    },
    themeList: [],
  },
};

export default globalModel;
