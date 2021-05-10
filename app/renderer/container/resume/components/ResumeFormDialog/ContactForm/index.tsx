/**
 * @description 联系方式Form
 * 基于 MyDialog 二次封装，结合 MyMaskHoc 加一蒙层
 * 由于弹窗更多注重信息的的输入，所以就不需要通过 useClickAway 实现点击蒙层之外的地方关闭
 * 因为用户无心的误操作将弹窗关闭，就会使得交互上体验不佳
 */
import React from 'react';
import './index.less';
import { Dialog } from '@components/MyModal';
import MyMaskHoc from '@common/hoc/MyMaskHoc';
import MyInput from '@components/MyInput';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '../useUpdateResumeHook';

interface IProps {
  onCancel?: () => {};
  onSubmit?: () => {};
}
function ContactForm(props: IProps | any) {
  const updateResumeHook = useUpdateResumeHook();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);
  return (
    <Dialog
      title="联系方式"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: () => {
            props?.onCancel && props.onCancel();
          },
        },
      }}
    >
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>电 话 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('contact/phone', e.target.value);
              }}
              value={userResume?.contact?.phone || ''}
              placeholder="请输入电话号码"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>邮 箱 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('contact/email', e.target.value);
              }}
              value={userResume?.contact?.email || ''}
              placeholder="请输入邮箱"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            Github ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('contact/github', e.target.value);
              }}
              value={userResume?.contact?.github || ''}
              placeholder="Github 地址"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            Juejin ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('contact/juejin', e.target.value);
              }}
              value={userResume?.contact?.juejin || ''}
              placeholder="掘金地址"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
export default MyMaskHoc(ContactForm)({ position: 'center' });
