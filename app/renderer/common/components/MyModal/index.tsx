/**
 * @description 所有弹窗组件集合
 * 方式一：
 * import MyModal from '@components/MyModal';
 * <MyModal.Confirm />
 *
 * 方式二：
 * import { Confirm } from '@components/MyModal';
 * <Confirm />
 */
import MyDialog from './MyDialog';
import MyConfirm from './MyConfirm';

export const Dialog = MyDialog;
export const Confirm = MyConfirm;

export default {
  Dialog: MyDialog,
  Confirm: MyConfirm,
};
