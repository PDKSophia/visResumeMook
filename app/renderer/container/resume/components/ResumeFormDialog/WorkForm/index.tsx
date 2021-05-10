/**
 * @description 工作期望Form
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
function WorkForm(props: IProps | any) {
  const updateResumeHook = useUpdateResumeHook();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);
  return (
    <Dialog
      title="工作期望"
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
            <span styleName="require">*</span>职 位 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('work/job', e.target.value);
              }}
              value={userResume?.work?.job || ''}
              placeholder="求职岗位"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>城 市 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('work/city', e.target.value);
              }}
              value={userResume?.work?.city || ''}
              placeholder="请输入意愿城市"
              allowClear={true}
            />
            <div styleName="tips"> * 多个地点以 | 分割</div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
export default MyMaskHoc(WorkForm)({ position: 'center' });
