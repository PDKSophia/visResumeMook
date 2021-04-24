import { match, compile } from 'path-to-regexp/dist/index.js';

// 合并参数
export function compilePath(route: string, params?: { [key: string]: any }) {
  const toPath = compile(route, { encode: encodeURIComponent });
  return toPath(params);
}

// 判断pathname是否符合路由规则
export function judgePath(route: string, pathname: string) {
  const matchFun = match(route, { decode: decodeURIComponent });
  return !!matchFun(pathname);
}

/**
 * @desc 判断是否属于外部连接
 * @param {string} url - 链接
 */
export function isHttpOrHttpsUrl(url: string): boolean {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}

/**
 * 获取URL中的参数的值
 * @param {string} paras 参数key
 * @returns {string} 返回参数的value
 */
export function getUrlParam(paras?: string): string | { [key: string]: string } {
  let url = window.location.search;
  let paramString = url.substring(url.indexOf('?') + 1, url.length).split('&');
  let paraObj: {
    [key: string]: string;
  } = {};
  let j = '';
  for (let i = 0; (j = paramString[i]); i++) {
    const key = j.substring(0, j.indexOf('=')).toLowerCase();
    const value = j.substring(j.indexOf('=') + 1, j.length);
    paraObj[key] = value;
  }
  let returnValue: any;
  if (paras) {
    returnValue = paraObj[paras.toLowerCase()];
  } else {
    returnValue = { ...paraObj };
  }
  return typeof returnValue === 'undefined' ? '' : returnValue;
}
