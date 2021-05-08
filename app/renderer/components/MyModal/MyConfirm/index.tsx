/**
 * @description 弹窗组件
 */
import React from 'react';
import './index.less';
import MyButton from '@components/MyButton';
import { IModal } from '../types';

function MyConfirm({ title, description, renderFooter, config = {}, eleRef }: IModal) {
  const { deleteBtn = { isShow: false }, cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config;
  return (
    <div styleName="vis-confirm-box" ref={eleRef}>
      <div styleName="vis-confirm-content">
        <p styleName="vis-confirm-content-title">{title || '友情提示'}</p>
        {description && <p styleName="vis-confirm-content-desc">{description}</p>}
      </div>
      {renderFooter || (
        <div styleName="vis-confirm-footer">
          {cancelBtn?.isShow && (
            <MyButton
              size="middle"
              className="vis-confirm-footer-btn vis-confirm-footer-cancel-btn"
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
              className="vis-confirm-footer-btn vis-confirm-footer-submit-btn"
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
              className="vis-confirm-footer-btn vis-confirm-footer-delete-btn"
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
  );
}

export default MyConfirm;
