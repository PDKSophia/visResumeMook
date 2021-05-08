/**
 * @description 个人信息Form
 * 基于 MyDialog 二次封装，结合 MyMaskHoc 加一蒙层
 * 由于弹窗更多注重信息的的输入，所以就不需要通过 useClickAway 实现点击蒙层之外的地方关闭
 * 因为用户无心的误操作将弹窗关闭，就会使得交互上体验不佳，
 */
import React from 'react';
import { Dialog } from '@src/components/MyModal';
import MyMaskHoc from '@common/hoc/MyMaskHoc';

interface IProps {
  onCancel?: () => {};
  onSubmit?: () => {};
}
function EducationForm(props: IProps | any) {
  return (
    <Dialog
      title="教育信息"
      config={{
        cancelBtn: {
          isShow: true,
          callback: () => {
            console.log(11111);
            props?.onCancel && props.onCancel();
          },
        },
        submitBtn: {
          isShow: true,
          callback: () => {
            console.log(456);
          },
        },
      }}
    >
      <div>呵呵呵</div>
    </Dialog>
  );
}
export default MyMaskHoc(EducationForm)({ position: 'center' });
