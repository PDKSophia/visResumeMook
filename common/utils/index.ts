import fs from 'fs';
import os from 'os';
/**
 * @description 获取操作系统平台
 */
function isWinOS() {
  return os.platform() === 'win32';
}

function isMacOS() {
  return os.platform() === 'darwin';
}

/**
 *@description 得到正确的地址，兼容window上的问题
 */
export function getPathHack(filePath: string) {
  if (isWinOS()) {
    return filePath.slice(1);
  }
  return filePath;
}

/**
 * @description 更新 json 文件内容
 * @param filePath
 * @param updateContent
 */
export function updateJsonFile(filePath: string, updateContent: any) {
  if (filePath && hasFile(filePath)) {
    if (typeof updateContent !== 'string') {
      fs.writeFileSync(filePath, JSON.stringify(updateContent));
    } else {
      fs.writeFileSync(filePath, updateContent);
    }
  }
}

/**
 * @description 读取 文件 内容
 */
export function readFile(filePath: string) {
  const realPath = getPathHack(filePath);
  try {
    return fs.readFileSync(realPath, 'utf-8');
  } catch (error) {
    console.log('读取文件失败', error);
    return false;
  }
}

/**
 * @description 读取 json格式的文件 内容
 * @param filePath
 */
export function readJsonFile(filePath: string) {
  return typeof readFile(filePath) === 'string' ? JSON.parse(readFile(filePath) as string) : readFile(filePath);
}

/**
 * @description 文件是否可读
 * @param filePath 项目路径
 */
export function canReadFile(filePath: string) {
  return new Promise((resolve, reject) => {
    const realPath = getPathHack(filePath);
    fs.access(realPath, fs.constants.F_OK, (err) => {
      if (err) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
}

/**
 * @description 判断 文件是否存在
 * @param {string} projectPath 项目地址
 */
export async function hasFile(projectPath: string) {
  try {
    return await canReadFile(projectPath);
  } catch (err) {
    return false;
  }
}

/**
 * @desc 判断是否属于外部连接
 * @param {string} url - 链接
 */
export function isUrl(url: string): boolean {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}

/**
 * 获取URL中的参数的值
 * @param {string} paras 参数key
 * @returns {string} 返回参数的value
 */
export function getUrlParam(paras?: string) {
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
