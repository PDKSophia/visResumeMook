/**
 * @desc 头像
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import { useDispatch, useSelector } from 'react-redux';
import uploadIcon from '@assets/icon/upload.png';
import MyButton from '@src/components/MyButton';
import ImageUpload from '@src/components/MyUpload/ImageUpload';

function Avatar() {
  const dispatch = useDispatch();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  const onUpdateUserAvatar = (avatarUrl: string) => {
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'userResume',
        values: { ...userResume, base: { ...userResume.base, avatar: avatarUrl } },
      },
    });
  };

  return (
    <div styleName="box">
      {!userResume?.base?.avatar && (
        <ImageUpload
          icon={uploadIcon}
          accept="image/*"
          multiple={false}
          onAfterChange={(files: TSUpload.File[]) => {
            onUpdateUserAvatar(files[0]?.base64URL);
          }}
        />
      )}
      {userResume?.base?.avatar && (
        <div styleName="avatar">
          <img src={userResume?.base?.avatar} />
          <div styleName="mask">
            <MyButton size="small" className="btn-change" onClick={() => onUpdateUserAvatar('')}>
              更换
            </MyButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;
