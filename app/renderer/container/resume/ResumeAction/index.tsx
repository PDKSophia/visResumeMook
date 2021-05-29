/**
 * @description 制作简历-操作区
 */
import React, { useState } from 'react';
import './index.less';
import { useHistory } from 'react-router';
import ROUTER from '@common/constants/router';
import MyButton from '@common/components/MyButton';
import { toPrintPdf } from '@common/utils/htmlToPdf';
import { useSelector } from 'react-redux';
import MyModal from '@common/components/MyModal';

function ResumeAction() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);

  // 返回首页
  const onBack = () => history.push(ROUTER.root);

  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <MyButton size="middle" className="export-btn" onClick={() => setShowModal(true)}>
        导出PDF
      </MyButton>
      {showModal && (
        <MyModal.Confirm
          title="确定要打印简历吗？"
          description="请确保信息的正确，目前仅支持单页打印哦～"
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => setShowModal(false),
            },
            submitBtn: {
              isShow: true,
              callback: () => {
                toPrintPdf(`${base?.username}+${base?.school}+${work?.job}`);
                setShowModal(false);
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default ResumeAction;
