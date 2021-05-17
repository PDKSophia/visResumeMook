import React from 'react';
import './index.less';
import { AdapterExperienceType } from '../../../../adapter';

interface IProps {
  /**
   * @description 当前是否出于编辑状态
   */
  isEdit: boolean;
  /**
   * @description 当前的条目
   */
  currentExperience: AdapterExperienceType;
  /**
   * @description 点击取消
   */
  onCancel: () => void;
  /**
   * @description 点击保存
   */
  onSave: () => void;
  /**
   * @description 点击编辑
   */
  onEdit: () => void;
}
function Menu({ currentExperience, isEdit, onCancel, onSave, onEdit }: IProps) {
  return (
    <div styleName="menu">
      <div styleName="left">
        <div styleName="title">{currentExperience?.title}</div>
      </div>
      <div styleName="right">
        {isEdit && (
          <>
            <div styleName="btn cancel" onClick={onCancel}>
              取消
            </div>
            <div styleName="btn save" onClick={onSave}>
              保存
            </div>
          </>
        )}
        {!isEdit && (
          <div styleName="btn cancel" onClick={onEdit}>
            编辑
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
