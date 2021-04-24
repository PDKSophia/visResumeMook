/**
 * @description 弹窗组件
 */
import React from 'react';
import './index.less';
import classnames from 'classnames';
import MyButton from '../MyButton';

export type Position = 'top' | 'bottom' | 'center';

export interface BtnConfig {
  /**
   * @description 按钮文本
   */
  text?: string;
  /**
   * @description 是否显示
   */
  isShow: boolean;
  callback?: () => void;
}

export interface IProps {
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
}

function MyModal({ title, description, position = 'center', renderFooter, config = {} }: IProps) {
  const { deleteBtn = { isShow: false }, cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config;
  return (
    <div styleName="vis-modal-mask">
      <div
        styleName={classnames('vis-modal', {
          top: position === 'top',
          center: position === 'center',
          bottom: position === 'bottom',
        })}
      >
        <div
          styleName="vis-cancel"
          onClick={() => {
            cancelBtn?.callback && cancelBtn.callback();
          }}
        />
        <div styleName="vis-modal-content">
          <p styleName="vis-title">{title || '友情提示'}</p>
          {description && <p styleName="vis-desc">{description}</p>}
        </div>
        {renderFooter || (
          <div styleName="vis-modal-footer">
            {cancelBtn?.isShow && (
              <MyButton
                size="middle"
                className="vis-modal-btn vis-modal-cancel-btn"
                onClick={() => {
                  cancelBtn?.callback && cancelBtn.callback();
                }}
              >
                {cancelBtn?.text || '取消'}
              </MyButton>
            )}
            {submitBtn?.isShow && (
              <MyButton
                size="middle"
                className="vis-modal-btn vis-modal-submit-btn"
                onClick={() => {
                  submitBtn?.callback && submitBtn.callback();
                }}
              >
                {submitBtn?.text || '确定'}
              </MyButton>
            )}

            {deleteBtn?.isShow && (
              <MyButton
                size="middle"
                className="vis-modal-btn vis-modal-delete-btn"
                onClick={() => {
                  deleteBtn?.callback && deleteBtn.callback();
                }}
              >
                {deleteBtn?.text || '退出'}
              </MyButton>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyModal;
