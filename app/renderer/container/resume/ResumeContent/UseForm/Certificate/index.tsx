/**
 * @description 荣誉证书Form
 */
import React from 'react';
import './index.less';
import MyModal from '@common/components/MyModal';
import MyInput from '@common/components/MyInput';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

interface IProps {
  onClose: () => void;
}

function Certificate({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
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
              onChange={(e) => {
                updateResumeHook<string>('certificate', e.target.value);
              }}
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
