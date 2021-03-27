import { ThemeType } from '@common/types/theme';
export interface GModel {
  namespace: string;
  openSeamlessImmutable: boolean;
  state: GStore;
}

export interface GStore {
  rootPath: string;
  currentTheme: ThemeType;
  themeList: ThemeType[];
}

const globalModel: GModel = {
  namespace: 'globalModel',
  openSeamlessImmutable: true,
  state: {
    rootPath: '', // 项目路径
    currentTheme: {
      id: '',
      fontColor: '',
      backgroundColor: '',
    },
    themeList: [],
  },
};

export default globalModel;
