/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-07-10 17:14:10
 */
import { compile } from 'path-to-regexp/dist/index.js';

export function compilePath(route: string, params?: { [key: string]: any }) {
  const toPath = compile(route, { encode: encodeURIComponent });
  return toPath(params);
}
/**
 * @desc 判断是否属于外部连接
 * @param {string} url - 链接
 */
export function isHttpOrHttpsUrl(url: string): boolean {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}
