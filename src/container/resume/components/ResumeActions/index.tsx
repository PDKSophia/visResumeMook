/**
 * @description 编辑简历-操作区
 */
import React, { useState } from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { PDF_A4 } from '@common/constants';
import { toPrintPdf } from '@common/utils/htmlToPdf';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';
import MyModal from '@common/components/MyModal';
import MyButton from '@common/components/MyButton';

function ResumeActions() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [currentTheme] = useGetCurrentThemeAction();

  function goBack() {
    history.push('/');
  }
  return (
    <div styleName="actions" style={{ width: PDF_A4.WIDTH }}>
      <div styleName="back" onClick={goBack}>
        返回
      </div>
      <MyButton
        size="middle"
        styles={{ backgroundColor: currentTheme?.backgroundColor, color: currentTheme?.fontColor }}
        className="export-btn"
        onClick={() => {
          setShowModal(true);
        }}
      >
        导出PDF
      </MyButton>
      {showModal && (
        <MyModal
          title="确定要打印简历吗？"
          description="目前仅支持单页打印哦～"
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => setShowModal(false),
            },
            submitBtn: {
              isShow: true,
              callback: () => {
                toPrintPdf('彭道宽+前端工程师');
                setShowModal(false);
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default ResumeActions;
