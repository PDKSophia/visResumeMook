/**
 * @description 适配器模块
 * @summary 将不同数据适配成 List 组件所需的数据格式
 */
export interface AdapterExperienceType {
  /**
   * @description 标题
   */
  title?: string;
  /**
   * @description 职位
   */
  post?: string;
  /**
   * @description 主要工作
   */
  content?: string;
  parseContent?: string[];
  /**
   * @description 开始时间
   */
  beginTime?: number | string | undefined;
  /**
   * @description 结束时间
   */
  endTime?: number | string | undefined;
  /**
   * @description 额外补充内容
   */
  supplement?: string;
  /**
   * @description 最后编辑时间
   */
  date?: number;
}

const AdapterExperience = {
  /**
   * @description 项目经验
   */
  project(list: TSResume.ProjectExperience[]): AdapterExperienceType[] {
    if (!list || list.length === 0) return [];
    const experienceList: AdapterExperienceType[] = list.map((item: TSResume.ProjectExperience) => {
      return {
        ...item,
        title: item.projectName,
      };
    });
    return experienceList;
  },
  /**
   * @description 工作经验
   */
  work(list: TSResume.WorkExperience[]): AdapterExperienceType[] {
    if (!list || list.length === 0) return [];
    const experienceList: AdapterExperienceType[] = list.map((item: TSResume.WorkExperience) => {
      return {
        ...item,
        title: item.department,
      };
    });
    return experienceList;
  },
  /**
   * @description 在校经验
   */
  school(list: TSResume.SchoolExperience[]): AdapterExperienceType[] {
    if (!list || list.length === 0) return [];
    const experienceList: AdapterExperienceType[] = list.map((item: TSResume.SchoolExperience) => {
      return {
        ...item,
        title: item.department,
      };
    });
    return experienceList;
  },
};

export default AdapterExperience;
