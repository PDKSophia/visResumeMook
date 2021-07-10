/*
 * @Description: 模版列表侧边栏
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-07-08 09:42:17
 */
import React from 'react';
import './index.less';
import UseIcon from '@assets/icon/use.png';
import MyScrollBox from '@common/components/MyScrollBox';
import MyButton from '@common/components/MyButton';
import { useDispatch, useSelector } from 'react-redux';

function Navigation() {
  const dispatch = useDispatch();
  const HEADER_HEIGHT = 92;
  const height = document.body.clientHeight;
  const templateList: TSTemplate.Item[] = useSelector((state: any) => state.templateModel.templateList);
  const selectTemplate: TSTemplate.Item = useSelector((state: any) => state.templateModel.selectTemplate);

  const onSelect = (template: TSTemplate.Item) => {
    dispatch({
      type: 'templateModel/setStore',
      payload: {
        key: 'selectTemplate',
        values: template,
      },
    });
  };
  return (
    <div styleName="navigation">
      <MyScrollBox maxHeight={height - HEADER_HEIGHT}>
        {templateList &&
          templateList.length > 0 &&
          templateList.map((template: TSTemplate.Item) => {
            return (
              <div styleName="template" key={template?.templateId}>
                <img styleName="cover" src={template?.templateCover} />
                <div styleName="mask">
                  {selectTemplate?.templateId === template?.templateId && <img styleName="use" src={UseIcon} />}
                  {selectTemplate?.templateId !== template?.templateId && (
                    <MyButton size="middle" className="view-btn" onClick={() => onSelect(template)}>
                      预览模版
                    </MyButton>
                  )}
                </div>
              </div>
            );
          })}
      </MyScrollBox>
    </div>
  );
}

export default Navigation;
