import fs, { promises as fsPromiseAPIs } from 'fs';

const fileAction = {
  /**
   * @description 读取文件内容
   * @param path 路径
   * @returns {Promise}
   */
  read: (path: string): Promise<string> => {
    return fsPromiseAPIs.readFile(path, { encoding: 'utf8' });
  },
  /**
   * @description 写入文件内容
   * @param path 路径
   * @returns {Promise}
   */
  write: (path: string, content: string): Promise<void> => {
    return fsPromiseAPIs.writeFile(path, content, { encoding: 'utf8' });
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
   * @description 是否可写入此文件
   * @param path 路径
   * @returns {Promise}
   */
  canWrite: (path: string): Promise<void> => {
    return fsPromiseAPIs.access(path, fs.constants.W_OK);
  },
  /**
   * @description 是否可读此文件
   * @param path 路径
   * @returns {Promise}
   */
  canRead: (path: string): Promise<void> => {
    return fsPromiseAPIs.access(path, fs.constants.R_OK);
  },
};

export default fileAction;
