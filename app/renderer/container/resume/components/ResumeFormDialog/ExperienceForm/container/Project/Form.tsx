/**
 * @description 项目经验Form
 * 基于 MyDialog 二次封装，结合 MyMaskHoc 加一蒙层
 * 由于弹窗更多注重信息的的输入，所以就不需要通过 useClickAway 实现点击蒙层之外的地方关闭
 * 因为用户无心的误操作将弹窗关闭，就会使得交互上体验不佳
 */
import React from 'react';
import './index.less';
import MyInput from '@components/MyInput';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '@src/container/resume/components/ResumeFormDialog/useUpdateResumeHook';
import { AdapterExperienceType } from '../../adapter';

interface IProps {
  /**
   * @description 是否编辑状态
   */
  isEdit: boolean;
  /**
   * @description 当前的条目
   */
  currentExperience: AdapterExperienceType;
  /**
   * @description 修改
   */
}
function Form({ isEdit, currentExperience }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);
  return (
    <div styleName="wrapper">
      <div styleName="flex">
        <div styleName="left">
          <span styleName="require">*</span>项目名 ：
        </div>
        <div styleName="right">
          <MyInput
            onChange={(e) => {
              updateResumeHook<string>('base/username', e.target.value);
            }}
            value={userResume?.base?.username || ''}
            placeholder="请输入项目名"
            allowClear={true}
          />
        </div>
      </div>
      <div styleName="flex">
        <div styleName="left">
          <span styleName="require">*</span>职 位 ：
        </div>
        <div styleName="right">
          <MyInput
            onChange={(e) => {
              updateResumeHook<string>('base/hometown', e.target.value);
            }}
            value={userResume?.base?.hometown || ''}
            placeholder="在项目中担任什么职位"
            allowClear={true}
          />
        </div>
      </div>
      <div styleName="flex">
        <div styleName="left">
          <span styleName="require">*</span>时 间 ：
        </div>
        <div styleName="right">
          <MyInput
            onChange={(e) => {
              const nextTime = {
                ...userResume?.base?.onSchoolTime,
                beginTime: e.target.value,
              };
              updateResumeHook<object>('base/onSchoolTime', nextTime);
            }}
            value={userResume?.base?.onSchoolTime?.beginTime || ''}
            placeholder="2015.09.01"
            allowClear={true}
            style={{ width: 290 }}
          />
          <span styleName="line">-</span>
          <MyInput
            onChange={(e) => {
              const nextTime = {
                ...userResume?.base?.onSchoolTime,
                endTime: e.target.value,
              };
              updateResumeHook<object>('base/onSchoolTime', nextTime);
            }}
            value={userResume?.base?.onSchoolTime?.endTime || ''}
            placeholder="2015.06.30"
            style={{ width: 290 }}
            allowClear={true}
          />
        </div>
      </div>
      <div styleName="flex">
        <div styleName="left">
          <span styleName="require">*</span>内 容 ：
        </div>
        <div styleName="right">
          <MyInput
            type="textarea"
            onChange={(e) => {
              updateResumeHook<string>('hobby', e.target.value);
            }}
            rows={5}
            value={userResume?.hobby || ''}
            placeholder="你在项目中的主要工作是什么呢？"
            allowClear={true}
          />
        </div>
      </div>
    </div>
  );
}
export default Form;
