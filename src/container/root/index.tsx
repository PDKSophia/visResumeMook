/**
 * @description 可视化简历平台首页
 * @author pengdaokuan
 * @createTime 2021-03-09 15:31:20
 */
import React, { useEffect } from 'react';
import './index.less';
import Logo from '../../../assets/logo.png';
import useInitStore from '@src/hooks/useInitStore';
import { useSelector } from 'react-redux';

function Root() {
  const initStore = useInitStore();
  const rootPath = useSelector((state: any) => state.globalModel.rootPath);
  useEffect(() => {
    initStore();
  }, []);

  console.log('rootPath: ', rootPath);

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
      </div>
    </div>
  );
}
export default Root;
