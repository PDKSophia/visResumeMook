/**
 * @description 编辑简历-操作区
 */
import React from 'react';
import './index.less';
import { useHistory, useParams } from 'react-router';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';
import MyButton from '@components/MyButton';
import ROUTER, { ROUTER_KEY } from '@common/constants/router';
import useClickAway from '@common/hook/useClickAway';
import DownloadConfirmModal from './DownloadConfirmModal';

function ResumeActions() {
  const routerParams = useParams<{ templateId: string; fromPath: string }>();
  const history = useHistory();
  const [currentTheme] = useGetCurrentThemeAction();

  function onBack() {
    if (routerParams.fromPath === ROUTER_KEY.root) {
      history.push(ROUTER.root);
    } else if (routerParams.fromPath === ROUTER_KEY.template) {
      history.push(ROUTER.template);
    } else {
      console.log('here');
    }
  }

  const { ref, componentVisible, setComponentVisible } = useClickAway(false);

  const exportModalProps = {
    eleRef: ref,
    callback: setComponentVisible,
  };

  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <MyButton
        size="middle"
        className="export-btn"
        style={{ backgroundColor: currentTheme?.backgroundColor, color: currentTheme?.fontColor }}
        onClick={() => setComponentVisible(true)}
      >
        导出PDF
      </MyButton>
      {componentVisible && <DownloadConfirmModal {...exportModalProps} />}
    </div>
  );
}

export default ResumeActions;
