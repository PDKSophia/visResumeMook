/**
 * @description 添加工具条模块
 * @param {TSResume.SliderItem[]} prevToolbarList 上一轮
 * @param {TSResume.SliderItem} currentToolbar 当前目标模块
 * @returns {TSResume.SliderItem[]} nextToolbarList 下一轮
 */
export const onAddToolbar = (
  prevToolbarList: TSResume.SliderItem[],
  currentToolbar: TSResume.SliderItem
): TSResume.SliderItem[] => {
  const addKeys = prevToolbarList.map((s: TSResume.SliderItem) => s.key);
  let nextToolbarList = [...Array.from(prevToolbarList)];
  if (!addKeys.includes(currentToolbar.key)) {
    nextToolbarList.push(currentToolbar);
  }
  return nextToolbarList;
};

/**
 * @description 删除工具条模块
 * @param {TSResume.SliderItem[]} prevToolbarList 上一轮
 * @param {TSResume.SliderItem} currentToolbar 当前目标模块
 * @returns {TSResume.SliderItem[]} nextToolbarList 下一轮
 */
export const onDeleteToolbar = (
  prevToolbarList: TSResume.SliderItem[],
  currentToolbar: TSResume.SliderItem
): TSResume.SliderItem[] => {
  const nextToolbarList = [...Array.from(prevToolbarList)];
  const findIndex = nextToolbarList.findIndex((s: TSResume.SliderItem) => s.key === currentToolbar.key);
  if (findIndex > -1) {
    nextToolbarList.splice(findIndex, 1);
  }
  return nextToolbarList;
};
