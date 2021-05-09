/**
 * @description 个人信息Form
 * 基于 MyDialog 二次封装，结合 MyMaskHoc 加一蒙层
 * 由于弹窗更多注重信息的的输入，所以就不需要通过 useClickAway 实现点击蒙层之外的地方关闭
 * 因为用户无心的误操作将弹窗关闭，就会使得交互上体验不佳，
 */
import React from 'react';
import { Dialog } from '@components/MyModal';
import MyMaskHoc from '@common/hoc/MyMaskHoc';
import MyInput from '@components/MyInput';

interface IProps {
  onCancel?: () => {};
  onSubmit?: () => {};
}
function PersonalForm(props: IProps | any) {
  return (
    <Dialog
      title="个人信息"
      config={{
        cancelBtn: {
          isShow: true,
          callback: () => {
            props?.onCancel && props.onCancel();
          },
        },
        submitBtn: {
          isShow: true,
          callback: () => {
            props?.onSubmit && props.onSubmit();
          },
        },
      }}
    >
      <div>
        <MyInput
          onChange={(e) => {
            console.log(e.target.value);
          }}
          style={{ width: 456 }}
          placeholder="演示"
          autoFocus
          allowClear={true}
        />
        <MyInput
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="textarea"
          allowCount={300}
          style={{ width: 456 }}
          placeholder="演示"
          autoFocus
          allowClear={true}
        />
      </div>
    </Dialog>
  );
}
export default MyMaskHoc(PersonalForm)({ position: 'center' });
