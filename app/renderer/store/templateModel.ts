/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-07-10 17:07:49
 */
export interface TStore {
  /**
   * @description 选中工具条模块的keys
   */
  resumeToolbarKeys: string[];
  /**
   * @description 模块列表
   */
  templateList: TSTemplate.Item[];
  /**
   * @description 当前选中的模版
   */
  selectTemplate: TSTemplate.Item;
}

const templateModel: TSRcReduxModel.Props<TStore> = {
  namespace: 'templateModel',
  openSeamlessImmutable: true,
  state: {
    resumeToolbarKeys: [],
    templateList: [],
    selectTemplate: {
      templateId: '',
      templateName: '',
      templateCover: '',
      templateIndex: -1,
    },
  },
};

export default templateModel;
