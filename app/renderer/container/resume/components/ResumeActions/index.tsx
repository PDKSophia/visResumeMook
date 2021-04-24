/**
 * @description 编辑简历-操作区
 */
import React, { useState } from 'react';
import './index.less';
import { useHistory, useParams } from 'react-router';
import { toPrintPdf } from '@common/utils/htmlToPdf';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';
import MyModal from '@components/MyModal';
import MyButton from '@components/MyButton';
import ROUTER, { ROUTER_KEY } from '@common/constants/router';

function ResumeActions() {
  const routerParams = useParams<{ templateId: string; fromPath: string }>();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [currentTheme] = useGetCurrentThemeAction();

  function goBack() {
    if (routerParams.fromPath === ROUTER_KEY.root) {
      history.push(ROUTER.root);
    } else if (routerParams.fromPath === ROUTER_KEY.template) {
      history.push(ROUTER.template);
    } else {
      console.log('here');
    }
  }

  return (
    <div styleName="actions">
      <div styleName="back" onClick={goBack}>
        返回
      </div>
      <MyButton
        size="middle"
        style={{ backgroundColor: currentTheme?.backgroundColor, color: currentTheme?.fontColor }}
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
