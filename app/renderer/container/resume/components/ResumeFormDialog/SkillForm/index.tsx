/**
 * @description 技能清单Form
 * 基于 MyDialog 二次封装，结合 MyMaskHoc 加一蒙层
 * 由于弹窗更多注重信息的的输入，所以就不需要通过 useClickAway 实现点击蒙层之外的地方关闭
 * 因为用户无心的误操作将弹窗关闭，就会使得交互上体验不佳
 */
import React, { useEffect } from 'react';
import './index.less';
import { Dialog } from '@components/MyModal';
import MyMaskHoc from '@common/hoc/MyMaskHoc';
import MyInput from '@components/MyInput';
import { useSelector } from 'react-redux';
import RecommendSkill, { IRecommendSkill } from '@common/constants/skill';
import useUpdateResumeHook from '../useUpdateResumeHook';

interface IProps {
  onCancel?: () => {};
  onSubmit?: () => {};
}
function SkillForm(props: IProps | any) {
  const updateResumeHook = useUpdateResumeHook();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return (
    <Dialog
      title="技能清单"
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
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            技 能 ：
          </div>
          <div styleName="right">
            <div styleName="action">
              {RecommendSkill.map((skill: IRecommendSkill) => {
                return (
                  <div
                    styleName="label"
                    key={skill.uid}
                    style={{
                      color: skill?.styles?.font,
                      borderColor: skill?.styles?.font,
                      backgroundColor: skill?.styles?.bg,
                    }}
                    onClick={() => {
                      const value = `${userResume?.skill}${userResume?.skill ? '｜' : ''}${skill.label}`;
                      updateResumeHook<string>('skill', value);
                    }}
                  >
                    {skill.label}
                  </div>
                );
              })}
            </div>
            <MyInput
              type="textarea"
              onChange={(e) => {
                updateResumeHook<string>('skill', e.target.value);
              }}
              rows={5}
              value={userResume?.skill}
              placeholder="例如 Vue、React"
              allowClear={true}
            />
            <div styleName="tips"> * 多个技能以 | 分割</div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
export default MyMaskHoc(SkillForm)({ position: 'center' });
