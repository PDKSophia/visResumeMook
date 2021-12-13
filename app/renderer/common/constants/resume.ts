export const RESUME_TOOLBAR_MAPS = {
  personal: 'personal', // 个人信息
  contact: 'contact', // 联系方式
  education: 'education', // 教育信息
  workPrefer: 'workPrefer', // 工作期望
  schoolExperience: 'schoolExperience', // 在校经历
  projectExperience: 'projectExperience', // 项目经验
  workExperience: 'workExperience', // 工作经历
  certificate: 'certificate', // 获奖证书
  evaluation: 'evaluation', // 个人评价
  skill: 'skill', // 技能清单
  test: 'test', // 测试用例
};

const RESUME_TOOLBAR_LIST: TSResume.SliderItem[] = [
  {
    key: RESUME_TOOLBAR_MAPS.personal,
    name: '个人信息',
    summary: '更好介绍自己，机会会更多',
    require:false
  },
  {
    key: RESUME_TOOLBAR_MAPS.education,
    name: '教育信息',
    summary: '介绍你的学校和专业信息',
    require:false
  },
  {
    key: RESUME_TOOLBAR_MAPS.contact,
    name: '联系方式',
    summary: '少侠，请留下你的联系方式',
    require:false
  },
  {
    key: RESUME_TOOLBAR_MAPS.workPrefer,
    name: '工作期望',
    summary: '聊聊你所期望的宜人办公城市',
    require:false
  },
  {
    key: RESUME_TOOLBAR_MAPS.schoolExperience,
    name: '在校经历',
    summary: '展示在校任职成果和人际关系',
    require:false
  },
  {
    key: RESUME_TOOLBAR_MAPS.projectExperience,
    name: '项目经验',
    summary: '展示研究过什么优秀项目和成果',
    require:false
  },
  {
    key: RESUME_TOOLBAR_MAPS.workExperience,
    name: '工作经历',
    summary: '申请岗位的相关经验和能力',
    require:false
  },
  {
    key: RESUME_TOOLBAR_MAPS.certificate,
    name: '获奖证书',
    summary: '得过什么奖项值得炫耀',
    require:false
  },
  {
    key: RESUME_TOOLBAR_MAPS.evaluation,
    name: '个人评价',
    summary: '低调夸一夸自己有什么亮点',
  },
  {
    key: RESUME_TOOLBAR_MAPS.skill,
    name: '技能清单',
    summary: '展示具备的技能，突出你的能力',
  },
  {
    key: RESUME_TOOLBAR_MAPS.test,
    name: '测试用例',
    summary: '测试用例，一键覆盖',
  },
];

export default RESUME_TOOLBAR_LIST;
