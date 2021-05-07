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
 * @description 读取文件内容
 */
export function readFile(filePath: string, encoding?: BufferEncoding) {
  const realPath = getPathHack(filePath);
  try {
    const encode = encoding || 'utf-8';
    return fs.readFileSync(realPath, encode);
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