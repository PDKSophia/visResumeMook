/**
 * @description 处理
 */
import { useDispatch } from 'react-redux';

export const useChangeResumeSliderKeys = () => {
  const dispatch = useDispatch();
  return (sliderKeys: string[]) => {
    if (sliderKeys.length > 0) {
      dispatch({
        type: 'templateModel/setStore',
        payload: {
          key: 'resumeSliderKeys',
          values: sliderKeys,
        },
      });
    }
  };
};

/**
 * @description 添加工具条模块
 * @param {TSResume.SliderItem[]} prevSliderList 上一轮
 * @param {TSResume.SliderItem} currentSlider 当前目标模块
 * @returns {TSResume.SliderItem[]} nextSliderList 下一轮
 */
export const useAddSlider = (): Function => {
  const changeResumeSliderKeys = useChangeResumeSliderKeys();
  return (prevSliderList: TSResume.SliderItem[], currentSlider: TSResume.SliderItem) => {
    const sliderList = prevSliderList.map((s: TSResume.SliderItem) => s.key);
    if (!sliderList.includes(currentSlider.key)) {
      const nextAddSliderList = [...Array.from(prevSliderList)].concat(currentSlider);
      return nextAddSliderList;
    }
  };
};

/**
 * @description 删除工具条模块
 * @param {TSResume.SliderItem[]} prevSliderList 上一轮
 * @param {TSResume.SliderItem} currentSlider 当前目标模块
 * @returns {TSResume.SliderItem[]} nextSliderList 下一轮
 */
export const useDeleteSlider = (): Function => {
  return (prevSliderList: TSResume.SliderItem[], currentSlider: TSResume.SliderItem) => {
    const nextSliderList = [...Array.from(prevSliderList)];
    const findIndex = nextSliderList.findIndex((s: TSResume.SliderItem) => s.key === currentSlider.key);
    if (findIndex > -1) {
      nextSliderList.splice(findIndex, 1);
    }
    return nextSliderList;
  };
};
