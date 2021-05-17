/**
 * @description 专门服务于经验弹窗右侧
 */
import React from 'react';
import './index.less';
import Menu from './Menu';
import MyScrollBox from '@components/MyScrollBox';
import { AdapterExperienceType } from '../../../adapter';

interface IProps {
  /**
   * @description 是否编辑状态
   */
  isEdit: boolean;
  /**
   * @description 当前的条目
   */
  currentExperience: AdapterExperienceType;
  /**
   * @description 编辑
   */
  onEdit: () => void;
  /**
   * @description 取消
   */
  onCancel: () => void;
  /**
   * @description 保存
   */
  onSave: () => void;
  children: React.ReactNode;
}
function Right({ children, ...OtherProps }: IProps) {
  return (
    <>
      <div styleName="header">
        <Menu {...OtherProps} />
      </div>
      <div styleName="content">
        <MyScrollBox maxHeight={360}>{children}</MyScrollBox>
      </div>
    </>
  );
}
export default Right;
