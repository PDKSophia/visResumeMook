/**
 * @description 荣誉证书Form
 */
import React from 'react';
import './index.less';
import MyModal from '@common/components/MyModal';
import MyInput from '@common/components/MyInput';
import { useSelector } from 'react-redux';

interface IProps {
  onClose: () => void;
}

function Certificate({ onClose }: IProps) {
  const certificate: string = useSelector((state: any) => state.resumeModel.certificate);
  return (
    <MyModal.Dialog
      title="荣誉证书"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
    >
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>证 书 ：
          </div>
          <div styleName="right">
            <MyInput
              type="textarea"
              onChange={(e) => {}}
              rows={5}
              value={certificate || ''}
              placeholder="互联网+大赛一等奖｜掘金大学骰王｜互联网喝酒大赛进步奖"
              allowClear={true}
            />
            <div styleName="tips"> * 多个证书以 | 分割</div>
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  );
}

export default Certificate;
