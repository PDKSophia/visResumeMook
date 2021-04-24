export const MESSAGE_EVENT_MAPS = {
  SLIDER: 'slider', // 简历模块选择
};

/**
 * @description 发送事件
 * @summary 简历选择工具-选中模块
 */
class Messager {
  send = (eventName: string, payload: any) => {
    document.dispatchEvent(
      new CustomEvent(eventName, {
        detail: {
          payload: payload,
        },
      })
    );
  };
  receive = (e: any, messageHandler: Function) => {
    if (messageHandler) {
      const payload = e?.detail?.payload;
      messageHandler(payload);
    }
  };
}

export default new Messager();
