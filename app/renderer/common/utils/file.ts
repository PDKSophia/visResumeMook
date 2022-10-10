/*
 * @Description: 封装fs模块
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-07-01 11:48:52
 */
import fs, { promises as fsPromiseAPIs } from 'fs';

const fileAction = {
  /**
   * @description 读取文件内容
   * @param path 路径
   * @returns {Promise}
   */
  read: (path: string, encoding: BufferEncoding): Promise<string> => {
    return fsPromiseAPIs.readFile(path, { encoding: encoding || 'utf8' });
  },
  /**
   * @description 是否可读此文件
   * @param path 路径
   * @returns {Promise}
   */
  canRead: (path: string): Promise<void> => {
    return fsPromiseAPIs.access(path, fs.constants.R_OK);
  },
  /**
   * @description 读取目录内容
   * @param path 路径
   * @returns  {Promise}
   */
  readDir: (path: string): Promise<string[]> => {
    return fsPromiseAPIs.readdir(path);
  },
  /**
   * @description 写入文件内容
   * @param path 路径
   * @returns {Promise}
   */
  write: (path: string, content: any, encoding: BufferEncoding): Promise<void> => {
    let updateContent = typeof content === 'string' ? content : JSON.stringify(content);
    return fsPromiseAPIs.writeFile(path, updateContent, { encoding: encoding || 'utf8' });
  },
  /**
   * @description 是否可写入此文件
   * @param path 路径
   * @returns {Promise}
   */
  canWrite: (path: string): Promise<void> => {
    return fsPromiseAPIs.access(path, fs.constants.W_OK);
  },
  /**
   * @description 重命名文件
   * @param {string} oldPath 旧地址
   * @param {string} newPath 新地址
   * @returns {Promise}
   */
  rename: (oldPath: string, newPath: string): Promise<void> => {
    return fsPromiseAPIs.rename(oldPath, newPath);
  },
  /**
   * @description 删除文件
   * @param path 路径
   * @returns {Promise}
   */
  delete: (path: string): Promise<void> => {
    return fsPromiseAPIs.unlink(path);
  },
  /**
   * @description 是否存在文件
   * @param path 路径
   * @returns {Promise}
   */
  hasFile: (path: string): Promise<void> => {
    return fsPromiseAPIs.access(path, fs.constants.F_OK);
  },
  /**
   * @description 创建文件夹
   * @param path 创建 /a/b/c，不管`/a` 和 /a/b 是否存在。
   * @returns {Promise}
   */
  mkdirDir: (path: string): Promise<string | undefined> => {
    return fsPromiseAPIs.mkdir(path, { recursive: true });
  },
  /**
   * @description 同步判断是否存在文件夹
   * @param path 路径
   * @returns {Boolean}
   */
  hasdirDir: (path: string) => {
    return fs.existsSync(path)
  }
};

export default fileAction;
