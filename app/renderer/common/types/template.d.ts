/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 09:49:01
 * @LastEditTime: 2021-07-08 17:58:08
 */
declare namespace TSTemplate {
  export interface Item {
    /**
     * @description 模版id
     */
    templateId: string;
    /**
     * @description 模版名称
     */
    templateName: string;
    /**
     * @description 模版封面
     */
    templateCover: string;
    /**
     * @description 模版下标
     */
    templateIndex: number;
  }
}
