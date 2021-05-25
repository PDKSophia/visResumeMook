export interface GStore {
  /**
   * @description 项目路径
   */
  rootPath: string;
}

const globalModel: TSRcReduxModel.Props<GStore> = {
  namespace: 'globalModel',
  openSeamlessImmutable: true,
  state: {
    rootPath: '',
  },
};

export default globalModel;
