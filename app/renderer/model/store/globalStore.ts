export interface GModel {
  namespace: string;
  openSeamlessImmutable: boolean;
  state: GStore;
}

export interface GStore {
  rootPath: string; // 项目路径
  currentTheme: TSTheme.Item; // 当前主题
  themeList: TSTheme.Item[]; // 主题列表
}

const globalModel: GModel = {
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
