/**
 * @description 图片上传组件，基于 Input 二次封装
 * @author {pengdaokuan}
 */
import React from 'react';
import './index.less';
import Upload from '../Upload';

interface IProps extends TSUpload.Input {
  /**
   * @description 图标
   */
  icon?: any;
  /**
   * @description 文本
   */
  text?: any;
  /**
   * @description 是否阻止input点击之后显示文件管理器
   */
  preventInputManager?: boolean;
}

const ImageUpload: React.FC<IProps> = ({
  icon,
  text = '上传头像',
  preventInputManager = false,
  onAfterClick = () => {},
  ...otherProps
}) => {
  return (
    <div className="my_input_image_upload_wrapper" onClick={onAfterClick}>
      {!preventInputManager && (
        <div className="my_input_image_upload_input">
          <Upload {...otherProps} onAfterClick={() => {}} style={{ width: '112px', height: '152px' }} />
        </div>
      )}
      <div className="my_input_image_upload_box">
        <img src={icon} className="my_input_image_upload__icon" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageUpload;
