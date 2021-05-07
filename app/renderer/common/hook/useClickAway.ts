import { useEffect, useRef, useState } from 'react';

/**
 * @description 点击元素之外区域关闭
 */
function useClickAway(initIsVisible: boolean) {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [componentVisible, setComponentVisible] = useState(initIsVisible);

  const onClickOutSide = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutSide, true);
    return () => {
      document.removeEventListener('click', onClickOutSide, true);
    };
  });

  return { ref, componentVisible, setComponentVisible };
}

export default useClickAway;
