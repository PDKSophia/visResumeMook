/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 16:43:13
 * @LastEditTime: 2021-06-25 16:44:27
 */
export interface TStore {
  /**
   * @description 主题列表
   */
  themeList: TSTheme.Item[];
  /**
   * @description 当前选中的主题
   */
  currentTheme: TSTheme.Item;
}

const themeModel: TSRcReduxModel.Props<TStore> = {
  namespace: 'themeModel',
  openSeamlessImmutable: true,
  state: {
    themeList: [],
    currentTheme: {
      id: '',
      fontColor: '',
      backgroundColor: '',
    },
  },
};

export default themeModel;
