/**
 * @description 统一封装公共useModal，并将组件挂载到 document.body 下
 */
import ReactDOM from 'react-dom';
import React, { useMemo, useCallback } from 'react';

export interface IModalProps {
  [key: string]: any;
}

const useModal = <T extends {} = {}>(MyModal: React.ComponentType<T>) => {
  const mountNode = useMemo(() => document.createElement('div'), []);
  const unMount = useCallback(() => {
    const isUnMount = ReactDOM.unmountComponentAtNode(mountNode);
    if (isUnMount && mountNode.parentNode) {
      mountNode.parentNode.removeChild(mountNode);
    }
  }, [mountNode]);
  const render = useCallback(
    (modalProps: IModalProps | T) => {
      document.body.appendChild(mountNode);
      setTimeout(() => {
        ReactDOM.render(<MyModal {...(modalProps as any)} />, mountNode);
      }, 100);
    },
    [mountNode]
  );
  /**
   * @description 销毁
   */
  const destroy = useCallback(() => {
    unMount();
  }, [unMount]);
  /**
   * @description 显示
   */
  const show = useCallback(
    (modalProps: IModalProps) => {
      render({ ...modalProps });
    },
    [render]
  );
  return {
    show,
    destroy,
  };
};

export default useModal;
