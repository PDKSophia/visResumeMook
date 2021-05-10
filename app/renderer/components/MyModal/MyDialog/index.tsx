/**
 * @description 弹窗组件
 */
import React from 'react';
import './index.less';
import MyButton from '@components/MyButton';
import { IModal } from '../types';

function MyDialog({ title, showFooter, renderFooter, config = {}, eleRef, children }: IModal) {
  const { cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config;
  return (
    <div styleName="vis-dialog-box" ref={eleRef}>
      <div styleName="vis-dialog-header">{title || 'VisResumeMook 提示您'}</div>
      <div
        styleName="vis-dialog-close"
        onClick={() => {
          cancelBtn?.callback && cancelBtn.callback();
        }}
      />
      <div styleName="vis-dialog-content">{children}</div>
      {showFooter &&
        (renderFooter || (
          <div styleName="vis-dialog-footer">
            {cancelBtn?.isShow && (
              <MyButton
                size="middle"
                className="vis-dialog-footer-btn vis-dialog-footer-cancel-btn"
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
                className="vis-dialog-footer-btn vis-dialog-footer-submit-btn"
                onClick={() => {
                  submitBtn?.callback && submitBtn.callback();
                }}
              >
                {submitBtn?.text || '确定'}
              </MyButton>
            )}
          </div>
        ))}
    </div>
  );
}

export default MyDialog;
