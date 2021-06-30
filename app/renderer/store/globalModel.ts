/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-06-30 17:05:02
 */
export interface GStore {
  /**
   * @description 项目路径
   */
  rootPath: string;
  /**
   * @description 应用数据存储路径
   */
  resumeSaveSettingPath: string;
}

const globalModel: TSRcReduxModel.Props<GStore> = {
  namespace: 'globalModel',
  openSeamlessImmutable: true,
  state: {
    rootPath: '',
    resumeSaveSettingPath: '',
  },
};

export default globalModel;
