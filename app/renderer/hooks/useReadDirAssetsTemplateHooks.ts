/*
 * @Description: 读取模版静态文件目录
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 09:10:49
 * @LastEditTime: 2021-06-25 10:01:00
 */
import fileAction from '@common/utils/file';
import { useDispatch } from 'react-redux';
import { getAppPath } from '@common/utils/appPath';
import { createUID } from '@common/utils';

export default function () {
  const dispatch = useDispatch();
  return () => {
    // 1. 先获取应用地址
    getAppPath().then((appPath: string) => {
      console.log(appPath);
      // 2. 从assets读取模版图片信息，构造模版列表
      fileAction
        .readDir(`${appPath}assets/template`)
        .then(async (files: string[]) => {
          // 3. 构造模版列表
          if (files.length > 0) {
            let templateList: TSTemplate.Item[] = [];
            for (const fileName of files) {
              const base64URL = await fileAction.read(`${appPath}assets/template/${fileName}`, 'base64');
              templateList.push({
                templateName: fileName,
                templateId: createUID(),
                templateCover: `data:image/png;base64,${base64URL}`,
              });
            }
            // 4. 存入到 redux 中
            dispatch({
              type: 'templateModel/setStoreList',
              payload: [
                {
                  key: 'templateList',
                  values: templateList,
                },
                {
                  key: 'selectTemplate',
                  values: templateList[0],
                },
              ],
            });
          }
        })
        .catch((err: NodeJS.ErrnoException) => {
          throw new Error(err.message);
        });
    });
  };
}
