/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-07-10 17:59:28
 */
// 模块路径
const ROUTER = {
  root: '/',
  resume: '/resume/:fromPath/:templateId/:templateIndex',
  templateList: '/templateList',
};
export default ROUTER;

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume',
  templateList: 'templateList',
};

// 入口模块
export const ROUTER_ENTRY = [
  {
    url: 'https://github.com/PDKSophia/visResumeMook',
    key: 'intro',
    text: '介绍',
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历',
  },
  {
    url: ROUTER.templateList,
    key: ROUTER_KEY.templateList,
    text: '模版',
  },
  {
    url: 'https://github.com/PDKSophia/visResumeMook',
    key: 'code',
    text: '源码',
  },
];
