export const ResumeSliderActionMaps = {
  Personal: 'personal', // 个人信息
  Education: 'education', // 教育信息
  WorkPrefer: 'workPrefer', // 工作期望
  SchoolExperience: 'schoolExperience', // 在校经历
  ProjectExperience: 'projectExperience', // 项目经验
  WorkExperience: 'workExperience', // 工作经历
  Certificate: 'certificate', // 获奖证书
  Evaluation: 'evaluation', // 个人评价
  Skill: 'skill', // 专业技能
  Test: 'test', // 测试用例
};

const ResumeSliderActionList: TSResume.SliderItem[] = [
  {
    key: ResumeSliderActionMaps.Personal,
    name: '个人信息',
    require: true,
    summary: '更好介绍自己，机会会更多',
  },
  {
    key: ResumeSliderActionMaps.Education,
    name: '教育信息',
    require: false,
    summary: '介绍你的学校和专业信息',
  },
  {
    key: ResumeSliderActionMaps.WorkPrefer,
    name: '工作期望',
    require: false,
    summary: '聊聊你所期望的宜人办公城市',
  },
  {
    key: ResumeSliderActionMaps.SchoolExperience,
    name: '在校经历',
    require: false,
    summary: '展示在校任职成果和人际关系',
  },
  {
    key: ResumeSliderActionMaps.ProjectExperience,
    name: '项目经验',
    require: false,
    summary: '展示研究过什么优秀项目和成果',
  },
  {
    key: ResumeSliderActionMaps.WorkExperience,
    name: '工作经历',
    require: false,
    summary: '申请岗位的相关经验和能力',
  },
  {
    key: ResumeSliderActionMaps.Certificate,
    name: '获奖证书',
    require: false,
    summary: '得过什么奖项值得炫耀',
  },
  {
    key: ResumeSliderActionMaps.Evaluation,
    name: '个人评价',
    require: false,
    summary: '低调夸一夸自己有什么亮点',
  },
  {
    key: ResumeSliderActionMaps.Skill,
    name: '专业技能',
    require: false,
    summary: '展示具备的技能，突出你的能力',
  },
  {
    key: ResumeSliderActionMaps.Test,
    name: '测试用例',
    require: true,
    summary: '测试用例，一键覆盖',
  },
];
export default ResumeSliderActionList;
