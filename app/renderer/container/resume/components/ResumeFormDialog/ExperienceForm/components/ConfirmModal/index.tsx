import React from 'react';
import './index.less';
import { Confirm } from '@src/components/MyModal';

interface IProps {
  title: string;
  desc: string;
  onOk: () => void;
  onCancel: () => void;
}
const ConfirmModal = ({ title, desc, onOk, onCancel }: IProps) => {
  return (
    <div styleName="mask">
      <div styleName="box">
        <Confirm
          title={title}
          description={desc}
          config={{
            cancelBtn: {
              isShow: true,
              callback: onCancel,
            },
            submitBtn: {
              isShow: true,
              callback: onOk,
            },
          }}
        />
      </div>
    </div>
  );
};

export default ConfirmModal;
