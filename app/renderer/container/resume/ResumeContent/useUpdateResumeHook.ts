import { useSelector, useDispatch } from 'react-redux';
import { AdapterExperienceType } from './UseForm/WrapperExperience/adapter';

/**
 * @description 更新简历信息
 * @param {string[]} stateKey 关键key，如路径为 [base/username] 表示修改 base 对象下的 username
 * @param {string} stateValue
 */
function useUpdateResumeHook() {
  const updatePersonalHook = useUpdatePersonalHook();
  const updateContactHook = useUpdateContactHook();
  const updateWorkHook = useUpdateWorkHook();
  const updateEvaluationHook = useUpdateEvaluationHook();
  const updateHobbyHook = useUpdateHobbyHook();
  const updateCertificateHook = useUpdateCertificateHook();
  const updateSkillHook = useUpdateSkillHook();
  const updateProjectExperience = useUpdateProjectExperience();
  const updateSchoolExperience = useUpdateSchoolExperience();
  const updateWorkExperience = useUpdateWorkExperience();

  return <T>(stateKey: string, stateValue: T) => {
    const keys = stateKey.split('/') || [];
    if (keys[0]) {
      if (keys[0] === 'base') updatePersonalHook(keys[1], stateValue);
      if (keys[0] === 'contact') updateContactHook(keys[1], stateValue);
      if (keys[0] === 'work') updateWorkHook(keys[1], stateValue);
      if (keys[0] === 'evaluation') updateEvaluationHook(keys[0], stateValue);
      if (keys[0] === 'hobby') updateHobbyHook(keys[0], stateValue);
      if (keys[0] === 'certificate') updateCertificateHook(keys[0], stateValue);
      if (keys[0] === 'skill') updateSkillHook(keys[0], stateValue);
      if (keys[0] === 'projectExperience') updateProjectExperience(keys[0], stateValue);
      if (keys[0] === 'schoolExperience') updateSchoolExperience(keys[0], stateValue);
      if (keys[0] === 'workExperience') updateWorkExperience(keys[0], stateValue);
    }
  };
}

/**
 * @description 修改个人信息（base）
 */
function useUpdatePersonalHook() {
  const dispatch = useDispatch();
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);

  return <T>(stateKey: string, stateValue: T) => {
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'base',
        values: {
          ...base,
          [stateKey]: stateValue,
        },
      },
    });
  };
}

/**
 * @description 修改联系方式（contact）
 */
function useUpdateContactHook() {
  const dispatch = useDispatch();
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);

  return <T>(stateKey: string, stateValue: T) => {
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'contact',
        values: {
          ...contact,
          [stateKey]: stateValue,
        },
      },
    });
  };
}

/**
 * @description 修改工作期望（work）
 */
function useUpdateWorkHook() {
  const dispatch = useDispatch();
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);

  return <T>(stateKey: string, stateValue: T) => {
    let cityList = work?.cityList ? [...work.cityList] : [];
    if (stateKey === 'city') {
      cityList = (stateValue as any).split('｜');
    }
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'work',
        values: {
          ...work,
          cityList,
          [stateKey]: stateValue,
        },
      },
    });
  };
}

/**
 * @description 修改个人评价（evaluation）
 */
function useUpdateEvaluationHook() {
  const dispatch = useDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    let evaluationList = stateValue ? (stateValue as any).split('｜') : [];
    dispatch({
      type: 'resumeModel/setStoreList',
      payload: [
        {
          key: stateKey,
          values: stateValue,
        },
        {
          key: 'evaluationList',
          values: evaluationList,
        },
      ],
    });
  };
}

/**
 * @description 修改个人特长爱好（hobby）
 */
function useUpdateHobbyHook() {
  const dispatch = useDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: stateKey,
        values: stateValue,
      },
    });
  };
}

/**
 * @description 修改荣誉证书（certificate）
 */
function useUpdateCertificateHook() {
  const dispatch = useDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    let certificateList = stateValue ? (stateValue as any).split('｜') : [];
    dispatch({
      type: 'resumeModel/setStoreList',
      payload: [
        {
          key: stateKey,
          values: stateValue,
        },
        {
          key: 'certificateList',
          values: certificateList,
        },
      ],
    });
  };
}

/**
 * @description 修改技能清单（skill）
 */
function useUpdateSkillHook() {
  const dispatch = useDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    let skillList = stateValue ? (stateValue as any).split('｜') : [];
    dispatch({
      type: 'resumeModel/setStoreList',
      payload: [
        {
          key: stateKey,
          values: stateValue,
        },
        {
          key: 'skillList',
          values: skillList,
        },
      ],
    });
  };
}

/**
 * @description 修改项目经验（Project）
 */
function useUpdateProjectExperience() {
  const dispatch = useDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    let newList = (stateValue as any)?.map((s: AdapterExperienceType) => {
      let parseContent = s.content ? s.content.split('｜') : [];
      return {
        ...s,
        projectName: s?.title,
        parseContent,
      };
    });
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: stateKey,
        values: newList,
      },
    });
  };
}

/**
 * @description 修改在校经历（School）
 */
function useUpdateSchoolExperience() {
  const dispatch = useDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    let newList = (stateValue as any)?.map((s: AdapterExperienceType) => {
      let parseContent = s.content ? s.content.split('｜') : [];
      return {
        ...s,
        department: s?.title,
        parseContent,
      };
    });
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: stateKey,
        values: newList,
      },
    });
  };
}

/**
 * @description 修改在校经历（School）
 */
function useUpdateWorkExperience() {
  const dispatch = useDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    let newList = (stateValue as any)?.map((s: AdapterExperienceType) => {
      let parseContent = s.content ? s.content.split('｜') : [];
      return {
        ...s,
        department: s?.title,
        parseContent,
      };
    });
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: stateKey,
        values: newList,
      },
    });
  };
}

export default useUpdateResumeHook;
