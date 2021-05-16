import { RESUME_SLIDER_MAPS } from '@common/constants/resume';

export default {
  isPerson: (resumeSliderName: string) => {
    return resumeSliderName === RESUME_SLIDER_MAPS.personal;
  },
  isEducation: (resumeSliderName: string) => {
    return resumeSliderName === RESUME_SLIDER_MAPS.education;
  },
  isContact: (resumeSliderName: string) => {
    return resumeSliderName === RESUME_SLIDER_MAPS.contact;
  },
  isWork: (resumeSliderName: string) => {
    return resumeSliderName === RESUME_SLIDER_MAPS.workPrefer;
  },
  isSchoolExperience: (resumeSliderName: string) => {
    return resumeSliderName === RESUME_SLIDER_MAPS.schoolExperience;
  },
  isProjectExperience: (resumeSliderName: string) => {
    return resumeSliderName === RESUME_SLIDER_MAPS.projectExperience;
  },
  isWorkExperience: (resumeSliderName: string) => {
    return resumeSliderName === RESUME_SLIDER_MAPS.workExperience;
  },
  isCertificate: (resumeSliderName: string) => {
    return resumeSliderName === RESUME_SLIDER_MAPS.certificate;
  },
  isEvaluation: (resumeSliderName: string) => {
    return resumeSliderName === RESUME_SLIDER_MAPS.evaluation;
  },
  isSkill: (resumeSliderName: string) => {
    return resumeSliderName === RESUME_SLIDER_MAPS.skill;
  },
  isTest: (resumeSliderName: string) => {
    return resumeSliderName === RESUME_SLIDER_MAPS.test;
  },
};
