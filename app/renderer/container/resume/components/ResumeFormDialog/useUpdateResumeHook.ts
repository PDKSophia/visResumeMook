import { useSelector, useDispatch } from 'react-redux';

/**
 * @description 更新简历信息
 * @param {string[]} stateKey 关键key，如路径为 [userResume.base.username]
 * @param {string} stateValue
 * @param {Function} formatter
 */
function useUpdateResumeHook() {
  const updatePersonalHook = useUpdatePersonalHook();
  const updateContactHook = useUpdateContactHook();
  const updateWorkHook = useUpdateWorkHook();
  const updateEvaluationHook = useUpdateEvaluationHook();
  const updateHobbyHook = useUpdateHobbyHook();
  const updateCertificateHook = useUpdateCertificateHook();
  const updateSkillHook = useUpdateSkillHook();

  return <T>(stateKey: string, stateValue: T) => {
    const keys = stateKey.split('/') || [];
    if (keys[0] === 'base') updatePersonalHook(keys[1], stateValue);
    if (keys[0] === 'contact') updateContactHook(keys[1], stateValue);
    if (keys[0] === 'work') updateWorkHook(keys[1], stateValue);
    if (keys[0] === 'evaluation') updateEvaluationHook(keys[0], stateValue);
    if (keys[0] === 'hobby') updateHobbyHook(keys[0], stateValue);
    if (keys[0] === 'certificate') updateCertificateHook(keys[0], stateValue);
    if (keys[0] === 'skill') updateSkillHook(keys[0], stateValue);
  };
}

export default useUpdateResumeHook;

/**
 * @description 修改个人信息
 */
function useUpdatePersonalHook() {
  const dispatch = useDispatch();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return <T>(stateKey: string, stateValue: T) => {
    const nextStore = {
      ...userResume,
      base: {
        ...userResume.base,
        [stateKey]: stateValue,
      },
    };
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'userResume',
        values: nextStore,
      },
    });
  };
}

/**
 * @description 修改联系方式
 */
function useUpdateContactHook() {
  const dispatch = useDispatch();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return <T>(stateKey: string, stateValue: T) => {
    const nextStore = {
      ...userResume,
      contact: {
        ...userResume.contact,
        [stateKey]: stateValue,
      },
    };
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'userResume',
        values: nextStore,
      },
    });
  };
}

/**
 * @description 修改工作期望
 */
function useUpdateWorkHook() {
  const dispatch = useDispatch();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return <T>(stateKey: string, stateValue: T) => {
    let cityList = [];
    if (stateKey === 'city') {
      cityList = (stateValue as any).split('｜');
    }
    const nextStore = {
      ...userResume,
      work: {
        ...userResume.work,
        cityList,
        [stateKey]: stateValue,
      },
    };
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'userResume',
        values: nextStore,
      },
    });
  };
}

/**
 * @description 修改个人评价
 */
function useUpdateEvaluationHook() {
  const dispatch = useDispatch();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return <T>(stateKey: string, stateValue: T) => {
    let evaluationList = [];
    evaluationList = (stateValue as any).split('｜');
    const nextStore = {
      ...userResume,
      evaluationList,
      [stateKey]: stateValue,
    };
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'userResume',
        values: nextStore,
      },
    });
  };
}

/**
 * @description 修改个人特长爱好
 */
function useUpdateHobbyHook() {
  const dispatch = useDispatch();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return <T>(stateKey: string, stateValue: T) => {
    const nextStore = {
      ...userResume,
      [stateKey]: stateValue,
    };
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'userResume',
        values: nextStore,
      },
    });
  };
}

/**
 * @description 修改荣誉证书
 */
function useUpdateCertificateHook() {
  const dispatch = useDispatch();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return <T>(stateKey: string, stateValue: T) => {
    let certificateList = [];
    certificateList = (stateValue as any).split('｜');
    const nextStore = {
      ...userResume,
      certificateList,
      [stateKey]: stateValue,
    };
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'userResume',
        values: nextStore,
      },
    });
  };
}

/**
 * @description 修改技能清淡
 */
function useUpdateSkillHook() {
  const dispatch = useDispatch();
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  return <T>(stateKey: string, stateValue: T) => {
    let skillList = [];
    skillList = (stateValue as any).split('｜');
    const nextStore = {
      ...userResume,
      skillList,
      [stateKey]: stateValue,
    };
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'userResume',
        values: nextStore,
      },
    });
  };
}
