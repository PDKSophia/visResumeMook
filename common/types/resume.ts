/**
 * 简历数据格式
 */
// 基本信息
export interface BaseInfo {
  username: string; // 姓名
  area?: string; // 地区
  school?: string; // 学校
  major?: string; // 专业
  degree?: string; // 学位
  hometown?: string; // 籍贯
  political?: string; // 政治面貌
}

// 联系方式
export interface ContactInfo {
  phone?: string; // 电话号码
  email?: string; // 邮箱
  github?: string; // github
  juejin?: string; // 掘金
}

// 求职信息
export interface SeekWorkInfo {
  job?: string; // 意愿岗位
  city?: string[]; // 意愿城市
}

// 在校经历
export type SchoolExperience = Experience[];
// 工作经历
export type WorkExperience = Experience[];
// 项目经历
export type ProjectExperience = Omit<Experience, 'department'> &
  {
    projectName?: string; // 项目名
  }[];

interface Experience {
  beginTime?: number; // 开始时间
  endTime?: number; // 结束时间
  department?: string; // 部门
  post?: string; // 职位
  content?: string[]; // 主要工作
}

export default interface ResumeType {
  baseInfo: BaseInfo; // 基本信息
  contactInfo: ContactInfo; // 联系方式
  seekWorkInfo: SeekWorkInfo; // 求职意向
  hobby: string; // 爱好特长
  skill: string[]; // 技能
  evaluation: string[]; // 自我评价
  schoolExperience?: SchoolExperience; // 在校经历
  workExperience?: WorkExperience; // 工作经历
  projectExperience?: ProjectExperience; // 项目经历
}

// 简历模版
export interface ResumeTemplate {
  id: string;
  name: string;
  cover: string;
}
