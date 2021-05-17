/**
 * @description 个人信息Form
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
import useUpdateResumeHook from '@src/container/resume/components/ResumeFormDialog/useUpdateResumeHook';

interface IProps {
  onCancel?: () => {};
  onSubmit?: () => {};
}
function PersonalForm(props: IProps | any) {
  const updateResumeHook = useUpdateResumeHook();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);
  return (
    <Dialog
      title="个人信息"
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
            <span styleName="require">*</span>姓 名 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('base/username', e.target.value);
              }}
              value={userResume?.base?.username || ''}
              placeholder="请输入姓名"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>籍 贯 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('base/hometown', e.target.value);
              }}
              value={userResume?.base?.hometown || ''}
              placeholder="请输入籍贯"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            爱 好 ：
          </div>
          <div styleName="right">
            <MyInput
              type="textarea"
              onChange={(e) => {
                updateResumeHook<string>('hobby', e.target.value);
              }}
              rows={5}
              value={userResume?.hobby || ''}
              placeholder="你有什么特长爱好呢"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
export default MyMaskHoc(PersonalForm)({ position: 'center' });
