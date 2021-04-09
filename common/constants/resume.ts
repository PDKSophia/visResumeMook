import { ResumeSliderType } from '@common/types/resume';
const ResumeSliderActionList: ResumeSliderType[] = [
  {
    key: 'personal',
    name: '个人信息',
    require: true,
    summary: '更好介绍自己，机会会更多',
  },
  {
    key: 'education',
    name: '教育信息',
    require: false,
    summary: '介绍你的学校和专业信息',
  },
  {
    key: 'workPrefer',
    name: '工作期望',
    require: false,
    summary: '聊聊你所期望的宜人办公城市',
  },
  {
    key: 'schoolExperience',
    name: '在校经历',
    require: false,
    summary: '展示在校任职成果和人际关系',
  },
  {
    key: 'projectExperience',
    name: '项目经验',
    require: false,
    summary: '展示研究过什么优秀项目和成果',
  },
  {
    key: 'workExperience',
    name: '工作经历',
    require: false,
    summary: '申请岗位的相关经验和能力',
  },
  {
    key: 'certificate',
    name: '获奖证书',
    require: false,
    summary: '得过什么奖项值得炫耀',
  },
  {
    key: 'evaluation',
    name: '个人评价',
    require: false,
    summary: '低调夸一夸自己有什么亮点',
  },
  {
    key: 'skill',
    name: '专业技能',
    require: false,
    summary: '展示具备的技能，突出你的能力',
  },
  {
    key: 'test',
    name: '测试用例',
    require: true,
    summary: '测试用例，一键覆盖',
  },
];
export default ResumeSliderActionList;
