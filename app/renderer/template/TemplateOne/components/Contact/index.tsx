/**
 * @desc 联系方式
 * @author pengdaokuan
 */
import React from 'react';
import '../../../less/template-one.less';
import { useSelector } from 'react-redux';

function Contact() {
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return (
    <div styleName="container">
      <p styleName="title">联系方式 Contact</p>
      <ul styleName="content">
        {userResume?.contact?.phone && <li>电话：{userResume?.contact?.phone}</li>}
        {userResume?.contact?.email && <li>邮箱：{userResume?.contact?.email}</li>}
      </ul>
    </div>
  );
}

export default Contact;
