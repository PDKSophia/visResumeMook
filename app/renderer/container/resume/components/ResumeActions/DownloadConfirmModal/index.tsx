import React from 'react';
import MyModal from '@src/components/MyModal';
import MyMaskHoc from '@common/hoc/MyMaskHoc';
import { toPrintPdf } from '@common/utils/htmlToPdf';

const DownloadConfirmModal = (props: any) => {
  return (
    <MyModal.Confirm
      eleRef={props?.eleRef}
      title="确定要打印简历吗？"
      description="请确保信息的正确，目前仅支持单页打印哦～"
      config={{
        cancelBtn: {
          isShow: true,
          callback: () => props?.callback(false),
        },
        submitBtn: {
          isShow: true,
          callback: () => {
            toPrintPdf('彭道宽+前端工程师');
            props?.callback(false);
          },
        },
      }}
    />
  );
};

export default MyMaskHoc(DownloadConfirmModal)({ position: 'center' });
