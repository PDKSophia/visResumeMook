/**
 * @description 编辑简历-操作区
 */
import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { PDF_A4 } from '@common/constants';
import MyButton from '@common/components/MyButton';
import { useGetCurrentThemeAction } from '@src/hooks/useThemeActionHooks';
function ResumeActions() {
  const history = useHistory();
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
        onClick={() => {}}
      >
        导出PDF
      </MyButton>
    </div>
  );
}

export default ResumeActions;
