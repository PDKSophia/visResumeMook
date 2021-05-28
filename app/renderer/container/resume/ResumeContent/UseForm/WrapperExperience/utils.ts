import { AdapterExperienceType } from './adapter';

export function onAddExperience(prevList: AdapterExperienceType[]) {
  let nextList: AdapterExperienceType[] = prevList ? Array.from(prevList) : [];
  const newAddItem: AdapterExperienceType = {
    title: '未命名条目',
    date: new Date().valueOf(),
    post: '',
    content: '',
    parseContent: [],
    beginTime: '',
    endTime: '',
    supplement: '',
  };
  nextList.unshift(newAddItem);
  return nextList;
}

export function onDeleteExperience(deleteIndex: number, prevList: AdapterExperienceType[]) {
  let nextList: AdapterExperienceType[] = prevList ? Array.from(prevList) : [];
  nextList.splice(deleteIndex, 1);
  return nextList;
}
