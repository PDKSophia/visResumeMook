type Position = 'top' | 'bottom' | 'center';

interface BtnConfig {
  /**
   * @description 按钮文本
   */
  text?: string;
  /**
   * @description 是否显示
   */
  isShow?: boolean;
  callback?: () => void;
}
export interface IModal {
  /**
   * @description 标题
   */
  title: string;
  /**
   * @description 描述
   */
  description?: string;
  /**
   * @description 弹窗位置
   */
  position?: Position;
  /**
   * @description 是否需要显示底部
   */
  showFooter?: boolean;
  /**
   * @description 底部按钮自定义
   */
  renderFooter?: React.ReactNode;
  /**
   * @description 配置
   */
  config?: {
    /**
     * @description 取消按钮
     */
    cancelBtn?: BtnConfig;
    /**
     * @description 确定按钮
     */
    submitBtn?: BtnConfig;
    /**
     * @description 删除按钮
     */
    deleteBtn?: BtnConfig;
  };
  eleRef?: React.LegacyRef<HTMLDivElement> | undefined;
  /**
   * @description 子组件
   */
  children?: React.ReactNode;
}
